const express = require('express');
const router = express.Router();
const {
  getAllSchedules,
  getSchedulesByDate,
  getMySchedules,
  attendClass,
  postSchedule,
  updateSchedule,
  deleteSchedule,
} = require('../controllers/scheduleController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getAllSchedules);
router.route('/myclass/').get(protect, getMySchedules);
router.route('/:id').get(protect, getSchedulesByDate).put(protect, attendClass);

router.route('/admin/').post(postSchedule);
router.route('/admin/:id').put(updateSchedule).delete(deleteSchedule);

module.exports = router;
