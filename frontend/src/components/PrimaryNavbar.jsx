import React from 'react';
// import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrimaryNavbar = () => {
  return (
    <nav className="bg-blue-200 flex justify-between items-center font-serif px-5 py-4">
      <div className="">
        <h2 className="text-4xl">ExactCourse</h2>
      </div>
      <ul className="flex items-center text-2xl gap-3">
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Courses</button>
        </li>
        <li>
          <button>About Us</button>
        </li>
        <li>
          <button>FAQ</button>
        </li>
        <li>
          <button>Daftar Kelas</button>
        </li>
        <li className="px-6 py-2 border rounded-full border-black flex items-center hover:bg-black hover:text-white">
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      {/* <div className="logo">
        <Link to="/">Exact Course</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser /> Register
          </Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default PrimaryNavbar;
