import React from "react";
import bg_home from "../../Utility/images/bg_home.png";

const Home = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <img
        src={bg_home}
        alt="Home Background"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl font-bold py-3">
        GYM Title Demo
      </h1>
      <div className="py-2 text-center">
      <p className="text-white">Zero Excuses. All Results</p>
      <p className="text-white">Discipline. Dedication. Domination.</p>
      </div>
      </div>
    </div>
  );
};

export default Home;
