import axios from 'axios';

const API_URL = '/api/schedules/';

// TODO: get all schedules
// @desc    Get all schedules & by date
// @route   GET /api/schedules
// @access  Private

const getAllSchedules = async (token, date) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + '?date=' + date, config);
  return response.data;
};

const scheduleService = {
  getAllSchedules,
};

export default scheduleService;
