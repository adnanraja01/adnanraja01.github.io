import React from "react";
import Card from "../utilities/Card";
import WebSvg from "../assets/svg/web-development.svg";
import SystemSvg from "../assets/svg/system-design.svg";

const Data = [
  {
    title: "Web Development",
    info: " Clean, modern and responsive designs - optimized for performance, search engines and converting users to customers.",
    src: WebSvg,
  },
  {
    title: "System Design",
    info: "Identify &amp; Analyze the high-level components that will make up the system and identify common patterns and potential issues.",
    src: SystemSvg,
  },
];
const Expertise = () => {
  return (
    <section className="bg-black py-16 md:py-20 ">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <h2 className=" text-s48 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0062ff]  to-[#61efff] ">
            My Expertise
          </h2>
        </div>
        <p className="text-s18 text-grey font-medium mt-[2rem] text-center">
          Leveraging the latest technologies to build cutting-edge applications.
        </p>
        <div className="grid grid-cols-2 gap-[4rem] mt-[6rem]">
          {Data.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              info={data.info}
              src={data.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
