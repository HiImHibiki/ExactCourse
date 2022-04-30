import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RegStep2 = ({ phoneNumber, birthday, gender, referralCode, onChange }) => {
  return (
    <div className="log-reg-container flex flex-col items-center justify-between">
      <div className="mb-10 flex flex-col items-center gap-3">
        <h4 className="font-sen text-ash-gray">Create Your Account</h4>
        <h2 className="font-sen text-ash-gray">STEP 2</h2>
      </div>
      <div className="flex flex-col items-center font-sans">
        <div className="mb-4">
          <input
            className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            id="phone"
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={onChange}
          />
        </div>

        <div className="mb-4">
          <h5 className="font-sen text-gray-400">Your Birthday</h5>
          <DatePicker
            selected={birthday}
            onChange={(date) => {
              onChange({
                target: {
                  name: 'birthday',
                  value: date,
                },
              });
            }}
            className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <select
            className="focus:shadow-outline w-80 appearance-none rounded border bg-white py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
            id="gender"
            name="gender"
            value={gender}
            onChange={onChange}
          >
            <option value="" disabled hidden defaultValue="Gender">
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-6">
          <input
            className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            id="refcode"
            type="text"
            placeholder="Referral Code"
            name="referralCode"
            value={referralCode}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="bg mt-6 w-52 bg-green-primary text-white">
          <h5 className="px-8 py-4 text-white">CREATE ACCOUNT</h5>
        </button>
      </div>
    </div>
  );
};

export default RegStep2;
