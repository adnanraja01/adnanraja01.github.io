import React from "react";

import Nature from "../assets/images/nature.jpg";
import Laptop from "../assets/images/laptop.avif";
import WhatsApp from "../assets/svg/whatsapp.svg";
import LinkedIn from "../assets/svg/linkedin.svg";
import GitHub from "../assets/svg/github2.svg";

const About = () => {
  return (
    <section className="bg-black  py-16 md:py-40">
      <div className="container">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
          <div className="col-span-1">
            <div className="flex relative">
              <img
                className="absolute top-[4rem] left-10 w-[48%] aspect-[2/3] object-cover rounded-lg "
                src={Nature}
                alt="nature"
              />
              <img
                className="absolute top-[-4rem] right-[5rem] w-[48%] aspect-[2/3] object-cover rounded-lg"
                src={Laptop}
                alt="developer"
              />
            </div>
          </div>

          <div className="col-span-1">
            <div className="flex">
              <h4 className=" text-s48 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0062ff]  to-[#61efff] ">
                About Me
              </h4>
            </div>

            <p className="text-grey text-s22">
              Hi, I'm Raja Adnaan Altaf. I'm a Front-End software developer with
              1 year of experience in wide range of software disciplines. I
              transform ideas into reality through technology.
            </p>
            <p className="pt-[3rem] text-grey text-s22">
              My skills and expertise in programming languages and tools allow
              me to create software solutions that solve problems and add value.
              I enjoy my work as a software developer and continue to stay
              up-to-date with new technologies and programming languages.
            </p>
            <div className="mt-[4rem]">
              <p className="text-s20 text-grey font-semibold ">
                You can find me here:
              </p>
              <div className="flex justify-start gap-12 mt-[2rem]">
                <div className="flex items-center gap-3 cursor-pointer">
                  <img src={WhatsApp} alt="Whatsapp" />
                  <p className="text-grey text-s18 font-semibold">WhatsApp</p>
                </div>

                <div className=" flex items-center gap-3 cursor-pointer">
                  <img src={LinkedIn} alt="LinkedIn" />
                  <p className="text-grey text-s18 font-semibold">LinkedIn</p>
                </div>
                <div className="flex items-center gap-3 cursor-pointer ">
                  <img src={GitHub} alt="GitHub" />
                  <p className=" text-grey text-s18 font-semibold">GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
