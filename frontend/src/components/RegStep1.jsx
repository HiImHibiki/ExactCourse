import React from 'react';

const RegStep1 = () => {
  return (
    <div className="log-reg-container flex flex-col items-center justify-between">
      <div className="mb-10 flex flex-col items-center gap-3">
        <h4 className="font-sen text-ash-gray">Create Your Account</h4>
        <h2 className="font-sen text-ash-gray">STEP 1</h2>
      </div>
      <form class="flex flex-col items-center font-sans">
        <div class="mb-4">
          <input
            class="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="mb-4">
          <input
            class="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div class="mb-4">
          <input
            class="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div class="mb-6">
          <input
            class="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none"
            id="confirmpassword"
            type="password"
            placeholder="Confirm Password"
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
