import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaUser } from 'react-icons/fa';

const RegStep1 = () => {
  const [startDate, setStartDate] = useState(new Date());

  const datepicker = () => {
    return <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />;
  };

  return (
    <div className="log-reg-container flex flex-col items-center justify-between">
      <div className="mb-10 flex flex-col items-center gap-3">
        <h4 className="font-sen text-ash-gray">Create Your Account</h4>
        <h2 className="font-sen text-ash-gray">STEP 2</h2>
      </div>
      <form class="flex flex-col items-center font-sans">
        <div class="mb-4">
          <input
            class="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            id="phone"
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <div class="mb-4">
          <div class="flex items-center justify-center">
            <div
              class="datepicker form-floating relative w-80 xl:w-96 "
              data-mdb-toggle-button="false"
            >
              <input
                type="text"
                class=" form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-4 px-5 text-gray-700 transition ease-in-out  focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Your Birthday"
              />
              <label for="floatingInput" class="text-gray-400">
                Your Birthday
              </label>
              <button
                class="datepicker-toggle-button"
                data-mdb-toggle="datepicker"
                onClick={datepicker}
              >
                <FaUser className="bg-slate-500" />
              </button>
            </div>
          </div>

          {/* <input
            class="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:outline-none"
            id="email"
            type="text"
            placeholder="Email"
          /> */}
        </div>
        <div class="mb-4">
          <select
            class="form-select m-0
                  w-80 
                  appearance-none rounded
                  border 
                  border-solid
                  border-gray-300 
                  bg-white
                  bg-clip-padding
                  bg-no-repeat
                  py-4
                  px-5
                  font-normal text-gray-400
                  shadow
                  ease-in-out
                  focus:bg-white focus:text-gray-700 focus:outline-none"
            aria-label="Default select example"
            id="gender"
          >
            <option selected>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="mb-6">
          <input
            class="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            id="password"
            type="password"
            placeholder="Referral Code"
          />
        </div>
        <button className="bg mt-6 w-52 bg-green-primary text-white">
          <h5 className="px-8 py-4 text-white">NEXT</h5>
        </button>
      </form>
    </div>
  );
};

export default RegStep1;
