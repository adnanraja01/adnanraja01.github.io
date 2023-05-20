import React from "react";

const Home = () => {
  return (
    <section className="bg-black min-h-screen pt-[6.8rem]">
      <div className="container mx-auto w-full mt-[1rem] ">
        <div className="text-center text-white  pt-[12vh] md:pt-[22vh]">
          <h1 className="text-s64  leading-tight tracking-wide font-bold ">
            Hey! I'm Raja Adnaan Altaf
          </h1>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062ff]  to-[#61efff] text-s64 leading-tight tracking-tight font-bold">
            Front-End Developer
          </h1>
          <p className="text-s20 text-grey  mx-auto max-w-[70%] mt-6">
            Front-End Software Developer working in IT field for 1 year ,
            specialized in Web Development.
          </p>
          <button className="border-white/20 font-medium inline-block border-[.1rem] text-s18 rounded-full mt-16 px-[2.5rem] py-[.75rem] bg-transparent hover:bg-gradient-to-r from-[#0062ff]  to-[#61efff] hover:text-black transition-all ease-in-out duration-300">
            Say Hello!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
