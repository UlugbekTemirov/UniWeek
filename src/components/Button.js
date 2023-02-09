import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-[16px] py-3 px-[50px] text-white font-bold bg-[#00BF59] rounded-[24px] shadow duration-100 hover:opacity-90 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
