import React from 'react';
import SignOut from '../assets/signout.png';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';

const DashboardTop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <div className="flex h-16 items-center justify-end bg-green-light px-5 text-2xl font-bold text-black">
      <div className=""></div>
      <div className="">
        <button className="flex items-center gap-2 text-white" onClick={onLogout}>
          <h4>Log Out</h4>
          <img src={SignOut} alt="" className="w-6" />
        </button>
      </div>
    </div>
  );
};

export default DashboardTop;
