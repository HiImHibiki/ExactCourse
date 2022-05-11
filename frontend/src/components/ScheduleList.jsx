import dayjs from '../dayjsSetup';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeftButton from '../assets/LeftButton.png';
import RightButton from '../assets/RightButton.png';
import { getSchedules, reset } from '../features/schedule/scheduleSlice';
import ScheduleItem from './ScheduleItem';
import Spinner from './Spinner';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

const ScheduleList = () => {
  const [value, setValue] = useState(new Date());

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { schedules, isLoading, isError, message } = useSelector((state) => state.schedule);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getSchedules(dayjs(value).format('YYYY-MM-DD'))); // TODO: date today

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch, value]);

  if (isLoading) {
    return <Spinner />;
  }

  const scheduleList = schedules.map(({ _id, date, details }) => ({
    _id,
    date,
    details,
  }));

  const handleNext = () => {
    setValue((prevDate) => dayjs(prevDate).add(1, 'day').toDate());
  };

  const handlePrev = () => {
    setValue((prevDate) => dayjs(prevDate).subtract(1, 'day').toDate());
  };

  // @desc    Attend class
  // @route   PUT /api/schedules/
  // @access  Private
  const handleAttendClass = async (_id) => {
    const headers = {
      Authorization: `Bearer ${user.token}`,
    };

    try {
      await axios.put(`/api/schedules/${_id}`, {}, { headers });
      dispatch(getSchedules(dayjs(value).format('YYYY-MM-DD')));
    } catch (error) {}
  };

  return (
    <div className="mx-10 my-10">
      <h1 className="mb-4 text-4xl">All Schedule</h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 rounded-lg bg-schedule-bg p-4">
          <div className="mb-5 flex items-center justify-between">
            <div className="rounded-md bg-green-secondary py-1 px-4">
              {dayjs(value).isToday() ? 'Today' : dayjs(value).format('YYYY-MM-DD')}
            </div>
            <div className="space-x-4">
              <button className="h-10 w-10 rounded-full bg-green-300" onClick={handlePrev}>
                <img src={LeftButton} alt="left button" />
              </button>
              <button className="h-10 w-10 rounded-full bg-green-300" onClick={handleNext}>
                <img src={RightButton} alt="right button" />
              </button>
            </div>
          </div>

          {scheduleList.map(({ _id, date, details }) => {
            return (
              <div className="mb-5 space-y-5" key={_id}>
                {details.map((item) => (
                  <ScheduleItem
                    mentor={item.mentor}
                    hourEnd={item.hourEnd}
                    hourStart={item.hourStart}
                    room={item.room}
                    studentCount={item.studentCount}
                    course={item.course}
                    date={date}
                    key={item._id}
                    handleClick={() => handleAttendClass(item._id)}
                  />
                ))}
              </div>
            );
          })}
        </div>
        <div>
          <Calendar value={value} onChange={setValue} />
        </div>
      </div>
    </div>
  );
};

export default ScheduleList;
