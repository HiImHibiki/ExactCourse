import React from 'react';
import RegStep1 from '../components/RegStep1';
import RegStep2 from '../components/RegStep2';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="height-template flex  flex-col items-center justify-center bg-green-primary text-white">
      <h1 className="mb-10">Register</h1>
      {/* <RegStep1 /> */}
      <RegStep2 />
    </div>
  );
};

export default Register;
