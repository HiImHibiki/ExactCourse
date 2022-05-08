import React, { useState, useEffect } from 'react';
import level from '../assets/level.png';
import track from '../assets/track.png';
import stats from '../assets/stats.png';
import upcoming from '../assets/upcoming.png';
import badges from '../assets/exactbadges.png';
import activity from '../assets/activitypoint.png';
import { useSelector } from 'react-redux';
import axios from 'axios';

const DashboardHome = () => {
  const [me, setMe] = useState(null);

  const { user } = useSelector((state) => state.auth);

  const fetchMe = async (token) => {
    const response = await axios.get('/api/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      setMe(response.data);
    }
  };

  useEffect(() => {
    void fetchMe(user.token);
  }, [user]);

  return (
    <div className="mx-10 my-10">
      <h1 className="text-4xl">Dashboard</h1>
      <img src={level} alt="" className="my-5 " />
      <img src={track} alt="" className="my-5 " />
      <div className="flex gap-5">
        <div className="">
          <h2>Study Statistic</h2>
          <img src={stats} alt="" className="" />
        </div>
        <div className="">
          <h2>Upcoming Class</h2>
          <img src={upcoming} alt="" className="" />
        </div>
      </div>
      <div className="my-10 flex gap-3">
        <div className="box-shadow flex h-[200px] w-[324px] items-center justify-center bg-[url('../src/assets/attendancebg.png')] bg-auto text-center">
          <p className="font-sen text-xl text-white">
            You have
            <br />
            <br />
            <span className="text-4xl">{me && me.remainingClass}</span>
            <br />
            <br />
            Attendances Remaining
          </p>
        </div>
        <div className="flex">
          <img src={badges} alt="" />
        </div>
        <div className="flex">
          <img src={activity} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
