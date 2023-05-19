import React from "react";

const InputTag = (props) => {
  return (
    <div className={`${props.className}`}>
      <label className="text-[1.2rem] text-gray_700">{props.label}</label>
      <input
        className="mt-[1rem]  text-[1.6rem] px-[1.6rem] py-[1.6rem]  w-full  appearance-none border-[.1rem]  rounded-[1rem]  text-gray_700 leading-[1.95rem] focus:outline-none "
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        type={props.type || "text"}
        name={props.name}
        onChange={props.onChange}
        required
      />
    </div>
  );
};

export default InputTag;
