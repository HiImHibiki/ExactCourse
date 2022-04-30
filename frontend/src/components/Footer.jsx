import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="mx-16 my-10 flex justify-between">
      <div className="max-w-xs">
        <div className="center flex items-center text-2xl font-bold">
          <img src={logo} alt="logo" className="mr-2 mb-5 w-10" />
          Exact<span className="text-green-primary">Course</span>
        </div>
        <p className="text-justify text-ash-gray">
          Fusce finibus justo leo, vitae finibus velit elementum molestie. Vivamus eleifend sapien
          eu ornare fringilla. Ut volutpat non sem id lobortis. Maecenas laoreet efficitur sapien,
          at aliquam libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </div>
      <div className="">
        <h3 className="mb-5">Contact Us</h3>
        <p className="text-ash-gray">
          Email: <br />
          info.deertcreative@gmail.com <br />
          <br />
          Phone: <br />
          (+62) 111 222 333 <br />
          <br />
          Address: <br />
          40 Sudirman Street 133/2 <br />
          <br />
          Jakarta, Indonesia
        </p>
      </div>
      <div className="">
        <h3 className="mb-5">Quick Links</h3>
        <div className="flex gap-5 font-roboto text-base text-ash-gray">
          <ul>
            <li className="mb-5">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-5">
              <Link to="/">Courses</Link>
            </li>
            <li className="mb-5">
              <Link to="/">About</Link>
            </li>
            <li className="mb-5">
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <ul>
            <li className="mb-5">
              <Link to="/register">Register</Link>
            </li>
            <li className="mb-5">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <h3 className="mb-5">Follow Us</h3>
        <div className="flex gap-3">
          <div className="h-10 w-10 rounded-full bg-slate-400"></div>
          <div className="h-10 w-10 rounded-full bg-slate-400"></div>
          <div className="h-10 w-10 rounded-full bg-slate-400"></div>
          <div className="h-10 w-10 rounded-full bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
