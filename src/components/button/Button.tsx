import React from "react";

type props = {
  title?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ title, className, onClick }: props) => {

  return (
    <div onClick={onClick} className={`${className} relative h-[40px] w-[150px] max-[500px]:w-[110px] bg-white rounded-[5px] before:absolute before:left-0 before:origin-left before:h-full before:w-full before:bg-[#f71735] before:scale-x-0 hover:before:scale-x-100 before:rounded-[5px] before:transition-transform before:duration-300 group flex justify-center items-center cursor-pointer`}>
      <button className="relative z-10 font-[500] text-[17px] max-[500px]:text-[15px] text-black group-hover:text-white duration-300">{title}</button>
    </div>
  );
};

export default Button;