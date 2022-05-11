import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';
import axios from 'axios';

const data = [
  { count: 12, bgColor: 'bg-[#443634]', label: 'Oreo Topping' },
  { count: 8, bgColor: 'bg-[#BC6F2B]', label: 'Caramel Topping' },
  { count: 6, bgColor: 'bg-[#AA2B3D]', label: 'Raspberry Topping' },
  { count: 3, bgColor: 'bg-[#125F38]', label: 'Mint Topping' },
  { count: 1, bgColor: 'bg-[#D8AD85]', label: 'Flakes Topping' },
];

const AddAttendance = () => {
  const [me, setMe] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const fetchMe = async (token) => {
    setLoading(true);
    const response = await axios.get('/api/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      setMe(response.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    void fetchMe(user.token);
  }, [user]);

  const AddAttendance = async (attendanceQty) => {
    const headers = {
      Authorization: `Bearer ${user.token}`,
    };
    const body = {
      attendanceQty: attendanceQty,
    };
    await axios.put('/api/users/', body, { headers });

    await fetchMe(user.token);
  };

  if (loading) {
    return <Spinner />;
  }

  const [topToppings, bottomToppings] = [data.slice(0, 3), data.slice(3)];
  return (
    <div className="mx-10 my-10">
      <h1 className="text-4xl">Add Attendance</h1>
      <div className="my-6 flex justify-between border-2 border-black bg-[#F8F0F0] py-8 px-6 drop-shadow-lg">
        <p className="text-xl">Attendance Remaining</p>
        <p className="text-xl">{me && me.remainingClass}</p>
      </div>
      <div className="my-5 space-y-5">
        <div className="flex gap-5">
          {topToppings.map(({ count, bgColor, label }) => (
            <button
              key={label}
              className={`box-shadow flex h-[200px] w-[300px] items-center justify-center text-center ${bgColor}`}
              onClick={() => AddAttendance(count)}
            >
              <p className="font-sen text-xl text-white">
                {label}
                <br />
                <br />
                <span className="text-4xl">{count}</span>
                <br />
                <br />
                Attendances
              </p>
            </button>
          ))}
        </div>
        <div className="flex gap-5">
          {bottomToppings.map(({ count, bgColor, label }) => (
            <button
              key={label}
              className={`box-shadow flex h-[200px] w-[300px] items-center justify-center text-center ${bgColor}`}
              onClick={() => AddAttendance(count)}
            >
              <p className="font-sen text-xl text-white">
                {label}
                <br />
                <br />
                <span className="text-4xl">{count}</span>
                <br />
                <br />
                Attendances
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddAttendance;
