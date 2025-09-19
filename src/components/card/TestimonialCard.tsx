import React from "react";

import Image from "next/image";

import developer from "../../png/developer-img-2.jpg";

const TestimonialCard = () => {
  return (
    <div className="bg-[#0d293f] p-10 max-[1050px]:p-5 max-[500px]:px-3 rounded-[10px] flex gap-4 max-[500px]:gap-2">
      <Image src={developer} alt="img" className="h-[70px] max-[1050px]:h-[50px] w-[70px] max-[1050px]:w-[50px] rounded-full object-cover" />
      <div>
        <p className="text-white text-[16px] max-[1050px]:text-[14px] max-[500px]:text-[12px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <div className="mt-4 max-[1050px]:mt-2">
          <p className="text-white font-[500] text-[18px]">Nancy Bayers</p>
          <p className="text-[#8a949b] text-[12px]">Founder & CEO at Pxdraft</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;