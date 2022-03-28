const mongoose = require('mongoose');

const scheduleDetailSchema = new mongoose.Schema({
  hourStart: {
    type: String,
  },
  hourEnd: {
    type: String,
  },
  room: {
    type: Number,
  },
  course: {
    type: String,
  },
  mentor: {
    type: String,
  },
  studentCount: {
    type: Number,
    default: 0,
  },
  studentsID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  headerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ScheduleHeader',
  },
});

const scheduleHeaderSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  details: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ScheduleDetail',
    },
  ],
});

const ScheduleDetail = mongoose.model('ScheduleDetail', scheduleDetailSchema);
const ScheduleHeader = mongoose.model('ScheduleHeader', scheduleHeaderSchema);

module.exports = {
  ScheduleDetail,
  ScheduleHeader,
};
