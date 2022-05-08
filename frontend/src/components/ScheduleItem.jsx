import React from 'react';

const ScheduleItem = ({ date, mentor, hourStart, hourEnd, course, room, studentCount }) => {
  return (
    <div className="space-y-2 rounded-md border bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-red-500"></div>
          <p className="font-sen text-xl">{mentor}</p>
        </div>

        <button className="rounded-md bg-green-300 px-2 py-1">Attend</button>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h2>{course}</h2>
          <p>Onsite - Room {room}</p>
          <p>{date}</p>
          <p>
            {hourStart} - {hourEnd} WIB
          </p>
        </div>
        <h2 className="self-end">{studentCount}/16</h2>
      </div>
    </div>
  );
};

export default ScheduleItem;
