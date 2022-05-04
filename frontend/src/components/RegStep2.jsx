import React from "react";

const RegStep2 = ({
  handleClick,
  onChange,
  phoneNumber,
  dob,
  gender,
  referralCode,
}) => {
  return (
    <div className="log-reg-container flex flex-col items-center justify-between">
      <div className="mb-10 flex flex-col items-center gap-3">
        <h4 className="font-sen text-ash-gray">Create Your Account</h4>
        <h2 className="font-sen text-ash-gray">STEP 2</h2>
      </div>
      <div className="flex flex-col items-center font-sans">
        <div className="mb-4">
          <input
            value={phoneNumber}
            onChange={(e) => onChange("phoneNumber")(e.target.value)}
            className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            type="text"
            placeholder="Phone Number"
          />
        </div>

        <div className="mb-4">
          <h5 className="font-sen text-gray-400">DOB</h5>
          <input
            value={dob}
            onChange={(e) => onChange("dob")(e.target.value)}
            className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            type="date"
          />
        </div>

        <div className="mb-4">
          <select
            className="focus:shadow-outline w-80 appearance-none rounded border bg-white py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            value={gender}
            onChange={(e) => onChange("gender")(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <input
            value={referralCode}
            onChange={(e) => onChange("referralCode")(e.target.value)}
            className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            type="text"
            placeholder="Referral Code"
          />
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            className="bg mt-6 bg-green-primary text-white"
            onClick={handleClick}
          >
            <h5 className="px-8 py-4 text-white">BACK</h5>
          </button>
          <button type="submit" className="bg mt-6 bg-green-primary text-white">
            <h5 className="px-8 py-4 text-white">CREATE ACCOUNT</h5>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegStep2;
