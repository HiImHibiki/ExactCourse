import React from 'react';
import onsite from '../assets/teacher.png';
import online from '../assets/webinar.png';
import privat from '../assets/meeting.png';
import { Link } from 'react-router-dom';

const CourseCategory = () => {
  return (
    <div className="flex flex-col items-center py-20">
      <h4 className="text-green-primary">Featured Courses</h4>
      <h1 className="mb-10 font-sen font-extrabold">Lets Browse All Category</h1>
      <div className="flex justify-between gap-8">
        <div className="max-w-xs border-2 p-5">
          <img src={onsite} alt="onsite" />
          <h2 className="mt-2 font-sen">Onsite Learning</h2>
          <p className="my-5 text-ash-gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dolore cum blanditiis
            laborum, corporis voluptas ex deleniti quia perferendis enim quod obcaecati beatae,
            exercitationem odio, nobis labore asperiores vel delectus.
          </p>
          <Link to="">
            <p className="text-ash-gray">Read more {'>'}</p>
          </Link>
        </div>
        <div className="max-w-xs border-2 p-5">
          <img src={online} alt="online" />
          <h2 className="mt-2 font-sen">Online Learning</h2>
          <p className="my-5 text-ash-gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dolore cum blanditiis
            laborum, corporis voluptas ex deleniti quia perferendis enim quod obcaecati beatae,
            exercitationem odio, nobis labore asperiores vel delectus.
          </p>
          <Link to="">
            <p className="text-ash-gray">Read more {'>'}</p>
          </Link>
        </div>
        <div className="max-w-xs border-2 p-5">
          <img src={privat} alt="private" />
          <h2 className="mt-2 font-sen">Private Learning</h2>
          <p className="my-5 text-ash-gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dolore cum blanditiis
            laborum, corporis voluptas ex deleniti quia perferendis enim quod obcaecati beatae,
            exercitationem odio, nobis labore asperiores vel delectus.
          </p>
          <Link to="">
            <p className="text-ash-gray">Read more {'>'}</p>
          </Link>
        </div>
      </div>
      <button className="bg mt-14 bg-green-primary text-white">
        <h5 className="px-8 py-3 text-white">LEARN MORE ABOUT COURSE</h5>
      </button>
    </div>
  );
};

export default CourseCategory;
