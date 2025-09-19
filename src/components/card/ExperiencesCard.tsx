import React from "react";

type props = {
  date?: string;
  title?: string;
  address?: string;
  description?: string;
  image?: React.ReactNode;
}

const ExperiencesCard = ({ date, title, description, address, image }: props) => {
  return (
    <div className="relative bg-[#0d293f] rounded-[10px] px-9 max-[1250px]:px-7 max-[950px]:px-4 max-[500px]:px-3 py-6 max-[950px]:py-4 before:absolute before:inset-0 before:border-[3px] before:rounded-[10px] hover:before:border-[#f71735] before:border-transparent before:transition-all before:duration-300 w-[85%] max-[800px]:w-full flex flex-col gap-3">
      <div className="w-2 max-[500px]:w-[5px] h-20 max-[950px]:h-16 max-[500px]:h-12 bg-[#f71735] absolute left-[-7px] max-[500px]:left-[-4px] top-5 max-[950px]:top-4 rounded-l-[8px]" />
      <div className="flex items-center gap-5 max-[950px]:gap-3 max-[500px]:gap-2 relative">
        <div className="bg-[#263f53] rounded-full h-20 max-[950px]:h-16 max-[500px]:h-12 w-20 max-[950px]:w-16 max-[500px]:w-12 flex justify-center items-center">
          {image}
        </div>
        <div>
          <p className="text-[25px] max-[950px]:text-[18px] max-[500px]:text-[16px] font-[500] text-white">{title}</p>
          <p className="text-[#878f96] font-[500] text-[12px] max-[950px]:text-[11px]">{date}</p>
        </div>
      </div>
      <p className="relative text-[#878f96] font-[500] text-[15px] max-[950px]:text-[13px] max-[400px]:text-[12px]">{description}</p>
      <p className="relative text-[#878f96] font-[500] text-[15px] max-[950px]:text-[13px] max-[400px]:text-[12px]">{address}</p>
    </div>
  );
};

export default ExperiencesCard;