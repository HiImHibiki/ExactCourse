import React from "react";

const RegStep1 = ({
  handleClick,
  onChange,
  name,
  email,
  password,
  confirmPassword,
}) => {
  return (
    <div className="log-reg-container flex flex-col items-center justify-between">
      <div className="mb-10 flex flex-col items-center gap-3">
        <h4 className="font-sen text-ash-gray">Create Your Account</h4>
        <h2 className="font-sen text-ash-gray">STEP 1</h2>
      </div>
      <div className="flex flex-col items-center font-sans">
        <div className="mb-4">
          <input
            value={name}
            onChange={(e) => onChange("name")(e.target.value)}
            className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            type="text"
            placeholder="Name"
          />
        </div>

        <div className="mb-4">
          <input
            value={email}
            onChange={(e) => onChange("email")(e.target.value)}
            className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <input
            value={password}
            onChange={(e) => onChange("password")(e.target.value)}
            className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="mb-4">
          <input
            value={confirmPassword}
            onChange={(e) => onChange("confirmPassword")(e.target.value)}
            className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            type="password"
            placeholder="Confirm Password"
          />
        </div>

        <button
          className="bg mt-6 w-52 bg-green-primary text-white"
          onClick={handleClick}
        >
          <h5 className="px-8 py-4 text-white">NEXT</h5>
        </button>
      </div>
    </div>
  );
};

export default RegStep1;
