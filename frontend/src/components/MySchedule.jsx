import React, { useEffect, useMemo } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMySchedules, reset } from '../features/schedule/scheduleSlice';
import ScheduleItem from './ScheduleItem';
import Spinner from './Spinner';
import dayjs from '../dayjsSetup';

const MySchedule = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { mySchedules, isLoading, isError, message } = useSelector((state) => state.schedule);
  const schedulesFiltered = useMemo(() => {
    return mySchedules.filter((schedule) => {
      return dayjs(schedule.headerID.date).isSameOrAfter(dayjs(), 'day');
    });
  }, [mySchedules]);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    dispatch(getMySchedules());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mx-10 my-10">
      <h1 className="mb-4 text-4xl">My Schedule</h1>
      <div className="rounded-lg bg-schedule-bg p-4">
        <div className="space-y-5">
          {schedulesFiltered.map((schedule) => (
            <ScheduleItem
              mentor={schedule.mentor}
              hourEnd={schedule.hourEnd}
              hourStart={schedule.hourStart}
              room={schedule.room}
              studentCount={schedule.studentCount}
              course={schedule.course}
              date={schedule.headerID.date}
              key={schedule._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySchedule;
