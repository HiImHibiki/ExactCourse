const { createClassValidation, removeStudentValidation } = require('../utils/validation');
const asyncHandler = require('express-async-handler');
const { ScheduleHeader, ScheduleDetail } = require('../models/scheduleModel');
const User = require('../models/userModel');
const dayjs = require('dayjs');

// @desc    Get all schedules & by date
// @route   GET /api/schedules
// @access  Private
const getAllSchedules = asyncHandler(async (req, res) => {
  const q = req.query;

  if (q.date) {
    const schedule = await ScheduleHeader.find({ date: q.date }).populate('details');
    if (!schedule) {
      res.status(404);
      throw new Error('Schedule Not Found');
    }

    return res.status(200).json(schedule);
  }

  const schedule = await ScheduleHeader.find().populate('details');
  res.status(200).json(schedule);
});

// @desc    Get my schedules
// @route   GET /api/schedules/myclass
// @access  Private
const getMySchedules = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).populate({
    path: 'scheduleID',
    model: 'ScheduleDetail',
    populate: {
      path: 'headerID',
      model: 'ScheduleHeader',
    },
  });

  const sortedScheduleByDate = [...user.scheduleID].sort((a, b) => {
    const dayA = dayjs(new Date(a.headerID.date)).hour(parseInt(a.hourStart.substr(0, 2)));
    const dayB = dayjs(new Date(b.headerID.date)).hour(parseInt(b.hourStart.substr(0, 2)));

    if (dayA.isSame(dayB)) return 0;
    else if (dayA.isAfter(dayB)) return 1;
    else return -1;
  });

  res.status(200).json(sortedScheduleByDate);
});

// @desc    Attend class
// @route   PUT /api/schedules/
// @access  Private
const attendClass = asyncHandler(async (req, res) => {
  // Check remaining attendance
  const user = await User.findById(req.user._id);
  if (user.remainingClass == 0) {
    res.status(400);
    throw new Error('Cannot attend class because attendance qty is 0. Please add more attendance.');
  }

  const schedule = await ScheduleDetail.findById(req.params.id);
  if (!schedule) {
    res.status(404);
    throw new Error('Schedule Not Found');
  }
  if (schedule.studentCount >= 20) {
    res.status(400);
    throw new Error('Class is full');
  }

  schedule.studentsID.forEach((s) => {
    if (String(s) == String(req.user._id)) {
      res.status(400);
      throw new Error('You already booked');
    }
  });

  await ScheduleDetail.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $push: { studentsID: req.user._id },
      $inc: { studentCount: 1 },
    }
  );
  await User.findByIdAndUpdate(
    { _id: req.user._id },
    {
      $push: { scheduleID: req.params.id },
    }
  );

  const updatedSchedule = await ScheduleDetail.findById(req.params.id);
  const updatedUsers = await User.findById(req.user._id);
  // console.log(schedule, req.user._id);
  res.status(200).json({ updatedSchedule, updatedUsers });
});

// @desc    Post schedule
// @route   POST /api/schedules
// @access  Private (Admin Only)
const postSchedule = asyncHandler(async (req, res) => {
  const { error } = createClassValidation(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const { date, hourStart, hourEnd, room, course, mentor } = req.body;

  // Check if there is a schedule on that date
  let scheduleDate = await ScheduleHeader.findOne({ date });
  if (!scheduleDate) {
    // Create header
    scheduleDate = await ScheduleHeader.create({
      date: date,
      detail: [],
    });
  }

  // Check mentor and room
  const scheduleCheck = await ScheduleDetail.find({ hourStart, headerID: scheduleDate._id });
  console.log(scheduleCheck);

  // Check room
  const roomUsed = scheduleCheck.find((el) => {
    if (el.room == room) {
      return el;
    }
  });
  if (roomUsed) {
    res.status(400);
    throw new Error('Room used');
  }

  // Check mentor
  const mentorUsed = scheduleCheck.find((el) => {
    if (el.mentor == mentor) {
      return el;
    }
  });
  if (mentorUsed) {
    return res.status(400).json({
      msg: 'Mentor used',
    });
  }

  const scheduleDetail = await ScheduleDetail.create({
    hourStart: hourStart,
    hourEnd: hourEnd,
    room: room,
    course: course,
    mentor: mentor,
    headerID: scheduleDate._id,
  });
  // console.log(scheduleDetail);
  scheduleDate.details.push(scheduleDetail._id);
  await scheduleDate.save();

  if (scheduleDetail) {
    res.status(200).json({
      _id: scheduleDetail._id,
      msg: 'Schedule added',
    });
  } else {
    res.status(400);
    throw new Error('Post schedule fail');
  }
});

// @desc    Update schedule
// @route   PUT /api/schedules/:id
// @access  Private (Admin Only)
const updateSchedule = asyncHandler(async (req, res) => {
  const schedule = await ScheduleDetail.findById(req.params.id);

  if (!schedule) {
    res.status(404);
    throw new Error('Schedule Not Found');
  }

  const updatedSchedule = await ScheduleDetail.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedSchedule);
});

// @desc    Delete schedule
// @route   DELETE /api/schedules/:id
// @access  Private (Admin Only)
const deleteSchedule = asyncHandler(async (req, res) => {
  const schedule = await ScheduleDetail.findById(req.params.id);

  if (!schedule) {
    res.status(404);
    throw new Error('Schedule Not Found');
  }

  await ScheduleHeader.findByIdAndUpdate(schedule.headerID, { $pull: { details: schedule._id } });
  await schedule.remove();

  res.status(200).json({ message: `Schedule ${req.params.id} has been deleted` });
});

module.exports = {
  getAllSchedules,
  getMySchedules,
  attendClass,
  postSchedule,
  updateSchedule,
  deleteSchedule,
};
