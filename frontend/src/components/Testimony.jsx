import React from 'react';
import crisdeo from '../assets/crisdeo.png';

const Testimony = () => {
  return (
    <div className="flex flex-col items-center bg-green-primary py-20">
      <h4 className="text-green-secondary">Featured Courses</h4>
      <h1 className="mb-10 font-sen font-extrabold text-white">What our students are saying</h1>
      <div className="mb-8 flex max-w-2xl items-center gap-4 rounded-3xl bg-green-secondary p-5">
        <img src={crisdeo} alt="" className="w-32" />
        <div className="flex flex-col justify-center">
          <p className="font-sans">
            “Donec sed eros augue. Vestibulum convallis faucibus ipsum, tempus cursus velit
            convallis vitae. Maecenas pulvinar maximus turpis a venenatis. Suspendisse tortor arcu,
            sodales id enim.”
          </p>
          <h5 className="font-sen text-sm text-black-greenish-faded opacity-50">
            Crisdewo Siahaan - ExactCourse Alumnus 2019
            <br />
            Fakultas Kedokteran, Universitas Indonesia
          </h5>
        </div>
      </div>
      <div className="mb-8 flex max-w-2xl items-center gap-4 rounded-3xl bg-green-secondary p-5">
        <img src={crisdeo} alt="" className="w-32" />
        <div className="flex flex-col justify-center">
          <p className="font-sans">
            “Donec sed eros augue. Vestibulum convallis faucibus ipsum, tempus cursus velit
            convallis vitae. Maecenas pulvinar maximus turpis a venenatis. Suspendisse tortor arcu,
            sodales id enim.”
          </p>
          <h5 className="font-sen text-sm text-black-greenish-faded opacity-50">
            Crisdewo Siahaan - ExactCourse Alumnus 2019
            <br />
            Fakultas Kedokteran, Universitas Indonesia
          </h5>
        </div>
      </div>
      <div className="mb-8 flex max-w-2xl items-center gap-4 rounded-3xl bg-green-secondary p-5">
        <img src={crisdeo} alt="" className="w-32" />
        <div className="flex flex-col justify-center">
          <p className="font-sans">
            “Donec sed eros augue. Vestibulum convallis faucibus ipsum, tempus cursus velit
            convallis vitae. Maecenas pulvinar maximus turpis a venenatis. Suspendisse tortor arcu,
            sodales id enim.”
          </p>
          <h5 className="font-sen text-sm text-black-greenish-faded opacity-50">
            Crisdewo Siahaan - ExactCourse Alumnus 2019
            <br />
            Fakultas Kedokteran, Universitas Indonesia
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
