import React from 'react';
import Featured from '../components/Featured';
import CourseCategory from '../components/CourseCategory';
import Testimony from '../components/Testimony';
import MoreAboutUs from '../components/MoreAboutUs';

const Home = () => {
  return (
    <>
      <Featured />
      <CourseCategory />
      <Testimony />
      <MoreAboutUs />
    </>
  );
};

export default Home;
