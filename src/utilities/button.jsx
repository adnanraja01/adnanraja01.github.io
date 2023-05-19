export const Button = (props) => {
  return (
    <button
      type={props.type || "submit"}
      onClick={props.onClick}
      className={`mt-[2rem] px-[3.2rem] py-[1.2rem] text-[1.6rem] font-medium bg-[#CFFAFE] text-black rounded-2xl mx-auto ${props.className}`}
    >
      {props.children || "Submit"}
    </button>
  );
};
