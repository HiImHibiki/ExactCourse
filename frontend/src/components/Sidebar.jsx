import React from 'react';
import logo from '../assets/logo-white.png';
import home from '../assets/Home.png';
import schedule from '../assets/Date_range_light.png';
import mySchedule from '../assets/gradhat.png';
import forum from '../assets/forum.png';
import event from '../assets/event.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import usericon from '../assets/usericon.png';

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: home },
  { to: '/dashboard/schedulelist', label: 'Schedule List', icon: schedule },
  { to: '/dashboard/myschedule', label: 'My Schedule', icon: mySchedule },
  { to: '/dashboard/forum', label: 'Forum', icon: forum },
  { to: '/dashboard/events', label: 'Events', icon: event },
];

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-green-dark">
      <div className="flex h-16 items-center justify-center bg-green-primary text-2xl font-bold text-black">
        <img src={logo} alt="logo" className="mr-2 w-10" />
        Exact<span className="text-white">Course</span>
      </div>
      <div className="flex gap-3 px-5 py-5">
        <div className="h-14 w-14 rounded-full ">
          <img src={usericon} alt="" />
        </div>
        <div className="text-white">
          <h4>{user && user.name}</h4>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-green-secondary" />
            <p className="font-sen text-sm">Online</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5">
        <p className="font-sen text-sm text-green-primary">Main Navigation</p>
        <ul className="text-white">
          {links.map((link, i) => (
            <NavLink key={i} to={link.to}>
              {({ isActive }) => (
                <li className={`flex items-center gap-2 py-1 ${isActive ? 'font-bold' : ''}`}>
                  <img src={link.icon} alt="" />
                  <p className="font-sans">{link.label}</p>
                </li>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
