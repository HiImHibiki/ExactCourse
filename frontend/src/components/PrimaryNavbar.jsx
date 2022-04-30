import React from 'react';
// import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const PrimaryNavbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-5 py-4 font-sans">
      <div className="flex gap-5">
        <Link to="/" className="text-2xl font-bold">
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" className="mr-2 w-10" />
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
        <Link to="/register">
          <li className="flex items-center rounded-full border border-black px-6 py-1 hover:border-green-primary hover:bg-green-primary hover:text-white">
            Register
          </li>
        </Link>
        <Link to="/login">
          <li className="flex items-center rounded-full border border-black px-6 py-1 hover:border-green-primary hover:bg-green-primary hover:text-white">
            Login
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default PrimaryNavbar;
