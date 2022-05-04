const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please add a phone number"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    dob: {
      type: Date,
      required: [true, "Please add a date of birth"],
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    role: {
      type: String,
      required: true,
    },
    remainingClass: {
      type: Number,
      default: 0,
    },
    attendanceUsed: {
      type: Number,
      default: 0,
    },
    scheduleID: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ScheduleDetail",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
