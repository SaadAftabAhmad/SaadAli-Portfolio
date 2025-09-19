import React from "react";

import Image from "next/image";

import logo from "../../png/logo.jpeg";

const Logo = () => {
  return(
    <div className="flex gap-2 items-center cursor-pointer">
      <Image src={logo} alt="logo" className="border-[2px] border-[#f71735] w-[55px] max-[800px]:w-[48px] h-[55px] max-[800px]:h-[48px] rounded-full object-fill" />
      <p style={{ fontFamily: "cursive" }} className="text-white text-[20px] max-[800px]:text-[17px] font-[600]">Ahtesham <span className="text-[#f71735]">Javed</span>.</p>
    </div>
  );
};

export default Logo;