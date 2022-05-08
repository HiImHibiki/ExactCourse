import React from 'react';
import Featured from '../components/Featured';
import CourseCategory from '../components/CourseCategory';
import Testimony from '../components/Testimony';
import MoreAboutUs from '../components/MoreAboutUs';
import PrimaryNavbar from '../components/PrimaryNavbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <PrimaryNavbar />
      <Featured />
      <CourseCategory />
      <Testimony />
      <MoreAboutUs />
      <Footer />
    </>
  );
};

export default Home;
