import React from 'react';
// import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const PrimaryNavbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-5 py-4 font-sans">
      <div className="flex gap-5">
        <Link to="/" className="text-3xl font-bold">
          <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="logo" className="w-10" />
            Exact<span className="text-green-primary">Course</span>
          </div>
        </Link>
        <ul className="flex items-center gap-3 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Courses</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
      <ul className="flex items-center gap-5 text-xl">
        <li className="flex items-center rounded-full border border-black px-6 py-1 hover:border-green-primary hover:bg-green-primary hover:text-white">
          <Link to="/register">Register</Link>
        </li>
        <li className="flex items-center rounded-full border border-black px-6 py-1 hover:border-green-primary hover:bg-green-primary hover:text-white">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNavbar;
