const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { registerValidation } = require("../utils/validation");

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  // TODO: referralCode nya buat apa?
  const { name, phoneNumber, email, password, dob, gender, referralCode } =
    req.body;

  // Check if user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    phoneNumber,
    email,
    password: hashedPassword,
    gender,
    dob,
    role: "Member",
  });
  if (user) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      phone: user.phoneNumber,
      email: user.email,
      gender: user.gender,
      dob: user.dob,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });
  const checkPassword = await bcrypt.compare(password, user.password);

  if (user && checkPassword) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// @desc    Obtain / add attendance qty
// @route   PUT /api/users/
// @access  Private
const addAttendance = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const updatedUser = await User.findByIdAndUpdate(req.user._id, {
    $inc: { remainingClass: req.body.attendanceQty },
  });

  res
    .status(200)
    .json({ message: `${req.body.attendanceQty} attendance added` });
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  addAttendance,
};
