import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black border-b-[.1rem] border-[#9CA3AF] p-[1rem] font-medium flex items-center justify-between">
      <div className="flex items-center gap-[2rem] ">
        <div className="rounded-full bg-gradient-to-r p-[.4rem] from-[#0062ff]  to-[#61efff]">
          <h5 className="bg-black text-white rounded-full text-s26 p-[.6rem]">
            AR
          </h5>
        </div>
        <h3 className="text-s24 text-white font-semibold ">
          Raja Adnaan Altaf
        </h3>
      </div>
      <div className="flex items-center mr-[2.5rem]">
        <ul className="text-[#9CA3AF]  text-s18 flex justify-between gap-[4.2rem] mr-[3rem]">
          <li className="">Home</li>
          <li>About</li>
          <li>My Expertise</li>
          <li>My Porfolio</li>
        </ul>
        <button className="text-s18 bg-gradient-to-r p-[.4rem] from-[#0062ff]  to-[#61efff] px-[1.6rem] py-[.8rem] rounded-full ">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
