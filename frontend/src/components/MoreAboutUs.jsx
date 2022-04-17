import React from 'react';
import moreabout from '../assets/moreabout.png';
import lamp from '../assets/Lamp.png';
import check from '../assets/Check_ring.png';
import user from '../assets/User.png';
import pin from '../assets/Pin_duotone_line.png';

const MoreAboutUs = () => {
  return (
    <div className="flex flex-row overflow-hidden py-20">
      <div className="mx-10 flex max-w-2xl flex-col ">
        <h4 className="text-green-primary">More About Us</h4>
        <h1 className="mb-5 font-sen font-extrabold ">Want to know more</h1>
        <p className="text-ash-gray">
          Fusce finibus justo leo, vitae finibus velit elementum molestie. Vivamus eleifend sapien
          eu ornare fringilla. Ut volutpat non sem id lobortis. Maecenas laoreet efficitur sapien,
          at aliquam libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <ul className="mt-5">
          <li className="flex items-center gap-2">
            <img src={lamp} alt="" />
            <p>Creative ideas base</p>
          </li>
          <li className="flex items-center gap-2">
            <img src={check} alt="" />
            <p>Verified mentor</p>
          </li>
          <li className="flex items-center gap-2">
            <img src={user} alt="" />
            <p>{'>'} 1000 students</p>
          </li>
          <li className="flex items-center gap-2">
            <img src={pin} alt="" />
            <p>Jakarta, Indonesia</p>
          </li>
        </ul>
        <button className="bg mt-10 w-52 bg-green-primary text-white">
          <h5 className="px-8 py-3 text-white">MORE ABOUT US</h5>
        </button>
      </div>
      <img src={moreabout} alt="" className="max-w-2xl" />
    </div>
  );
};

export default MoreAboutUs;
