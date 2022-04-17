import React from 'react';
import background from '../assets/featured-hero-bg.png';

const Featured = () => {
  return (
    <div
      className="featured-container font-robotobg-cover flex h-[40rem] items-center bg-center bg-no-repeat bg-blend-darken"
      style={{
        backgroundImage: `linear-gradient(rgba(40, 42, 54, 0.60), rgba(40, 42, 54, 0.5)), url(${background})`,
      }}
    >
      <div className="px-10">
        <h4 className="text-green-primary">Expand Your Educational Horizons</h4>
        <h1 className="mt-5 text-white">
          WELCOME TO
          <br />
          EXACT COURSE
        </h1>
        <p className="text-white">
          Exact Course merupakan tempat Bimbingan Belajar yang sudah berdiri sejak tahun 2010. Exact
          Course telah membantu lebih dari 700 siswa-siswi di seluruh Indonesia. Exact Course
          memiliki guru-guru yang berpengalaman dalam mengajar siswa-siswi diberbagai mata
          pelajaran...
        </p>
        <button className="mt-14 border-2 border-green-primary hover:bg-green-primary">
          <h5 className="px-8 py-3 text-white">READ MORE</h5>
        </button>
      </div>
    </div>
  );
};

export default Featured;
