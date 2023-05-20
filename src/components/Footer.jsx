import React from "react";

import PhoneSvg from "../assets/svg/phone.svg";
import MailSvg from "../assets/svg/mail.svg";
import LinkedInSvg from "../assets/svg/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-black py-16 md:py-28 ">
      <div className="container mx-auto border-b border-grey">
        <h1 className="text-center font-bold text-s48 text-grey">
          Let's Talk!
        </h1>
        <div className="flex justify-center gap-x-[10rem] items-center my-[4rem]">
          <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
            <img className="h-[3rem] w-[3rem]" src={PhoneSvg} alt="Phone" />
            <h4 className="text-grey text-s18 font-semibold">Call me</h4>
            <h4 className="text-grey text-s18 font-semibold ">
              +91-7889506293
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
            <img className="h-[3rem] w-[3rem]" src={MailSvg} alt="Phone" />
            <h4 className="text-grey text-s18 font-semibold">Mail me</h4>
            <h4 className="text-grey text-s18 font-semibold ">
              adnanrajaofficial@gmail.com
            </h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
            <img className="h-[3rem] w-[3rem]" src={LinkedInSvg} alt="Phone" />
            <h4 className="text-grey text-s18 font-semibold">Follow me</h4>
            <h4 className="text-grey text-s18 font-semibold ">
              linkedin.com/in/raja-adnaan-altaf
            </h4>
          </div>
        </div>
      </div>
      <p className="text-grey text-s18 text-center mt-[4rem] font-medium ">
        All Rights Reserved ©
      </p>
    </footer>
  );
};

export default Footer;
