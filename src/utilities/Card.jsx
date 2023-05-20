import React from "react";

import svg from "../assets/svg/github.svg";

const Card = (props) => {
  return (
    <div className=" z-30 border rounded-2xl border-white/10 px-10 py-[3rem] h-full bg-[#0F0F11]">
      <img src={props.src} alt="icon" />

      <h2 className="text-white text-s20 font-bold mt-8">{props.title}</h2>
      <p className="text-grey text-s18 mt-[1rem]">{props.info}</p>
    </div>
  );
};

export default Card;
// Clean, modern and responsive designs - optimized for performance, search
// engines, and converting users to customers.
