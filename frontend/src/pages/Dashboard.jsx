import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardTop from '../components/DashboardTop';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-[14rem_1fr]">
        <Sidebar />
        <div>
          <DashboardTop />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
