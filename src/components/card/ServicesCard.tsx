import React from "react";

type props = {
  title?: string;
  description?: string;
  image?: React.ReactNode;
}

const ServicesCard = ({ image, title, description }: props) => {
  return (
    <div className="relative bg-[#0e2232] rounded-[10px] px-14 max-[1250px]:px-7 max-[950px]:px-2 pt-[5rem] max-[950px]:pt-[3rem] pb-10 max-[950px]:pb-7 before:absolute before:inset-0 before:border-[3px] before:rounded-[10px] hover:before:border-[#f71735] before:border-transparent before:transition-all before:duration-300 group">
      <div className="absolute top-[-30px] group-hover:top-[-25px] hover:transation-all duration-300 left-1/2 -translate-x-1/2 h-[90px] max-[950px]:h-[65px] w-[105px] max-[950px]:w-[80px] bg-[#f71735] flex justify-center items-center" style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}>
        {image}
      </div>
      <div className="relative flex flex-col items-center">
        <p className="text-[25px] max-[950px]:text-[18px] font-[500] text-white whitespace-nowrap">{title}</p>
        <p className="text-[#878f96] font-[500] text-center max-[950px]:text-[13px]">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;