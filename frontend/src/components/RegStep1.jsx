import React from 'react';

const RegStep1 = ({ name, email, password, confirmPassword, onChange, handleClick }) => {
  return (
    <div className="log-reg-container flex flex-col items-center justify-between">
      <div className="mb-10 flex flex-col items-center gap-3">
        <h4 className="font-sen text-ash-gray">Create Your Account</h4>
        <h2 className="font-sen text-ash-gray">STEP 1</h2>
      </div>
      <div className="flex flex-col items-center font-sans">
        <div className="mb-4">
          <input
            className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            id="email"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="mb-6">
          <input
            className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            id="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
          />
        </div>
        <button className="bg mt-6 w-52 bg-green-primary text-white" onClick={handleClick}>
          <h5 className="px-8 py-4 text-white">NEXT</h5>
        </button>
      </div>
    </div>
  );
};

export default RegStep1;
