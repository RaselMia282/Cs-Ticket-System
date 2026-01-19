import React from "react";
import LogoOne from '../../assets/vector1.png'
import LogoTwo from '../../assets/vector2.png'

const Header = ({clicked,progress}) => {
  return (
    <div className="container mx-auto flex justify-between gap-6 mt-6">

      {/* In Progress Card */}
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-60 w-1/2 rounded-2xl text-white flex flex-col justify-center items-center shadow-lg relative">
        
        <img src={LogoOne} alt="In Progress" className="  absolute left-0" />
        <img src={LogoOne} alt="In Progress" className="  absolute right-0 rotate-y-180" />
        <h1 className="text-2xl font-bold">In Progress</h1>
        <p className="text-4xl font-bold mt-2">{clicked.length}</p>
      </div>

      {/* Resolved Card */}
      <div className="bg-gradient-to-r from-[#54CF67] to-[#00827A] h-60 w-1/2 rounded-2xl text-white flex flex-col justify-center items-center shadow-lg relative">
        <img src={LogoOne} alt="In Progress" className="  absolute left-0" />
        <img src={LogoOne} alt="In Progress" className="  absolute right-0 rotate-y-180" />
        <h1 className="text-2xl font-bold">Resolved</h1>
        <p className="text-4xl font-bold mt-2">{progress.length}</p>
      </div>

    </div>
  );
};

export default Header;