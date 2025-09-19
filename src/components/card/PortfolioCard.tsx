import React from "react";

import Image from "next/image";
import { StaticImageData } from "next/image";

type props = {
  href?: string;
  title?: string;
  description?: string;
  img: string | StaticImageData;
}

const PortfolioCard = ({ img, href, title, description }: props) => {
  return (
    <div className="flex max-[950px]:flex-col rounded-[10px] bg-[#0e2232] h-[17rem] max-[990px]:h-full">
      <div className="w-[52%] max-[950px]:w-full max-[950px]:h-[230px] max-[400px]:h-[200px] relative shrink-0 group">
        <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full group-hover:rounded-l-[10px] max-[950px]:group-hover:rounded-t-[10px] max-[950px]:rounded-b-[0px] bg-[#1a2d3c]/80 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 flex justify-center items-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <p className="text-[15px] text-white">FULL VIEW</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2048 2048">
              <path fill="#ffffff" d="M640 640V256h128v512H256V640zm-384 768v-128h512v512H640v-384zm1024 384v-512h512v128h-384v384zm128-1152h384v128h-512V256h128z" />
            </svg>
          </a>
        </div>
        <Image src={img} alt="portfolio" className="h-full rounded-l-[10px] max-[950px]:rounded-t-[10px] max-[950px]:rounded-b-[0px]" />
      </div>
      <div className="px-4 py-2 max-[990px]:py-4">
        <p className="text-white text-[25px] max-[990px]:text-[20px] font-[600]">{title}</p>
        <p className="text-[#879188] text-[14px] max-[990px]:text-[13px] font-[500]">{description}</p>
        <div className="border border-[#7c8d9a] rounded-[15px] px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[13px] max-[1050px]:text-[10px] w-max mt-2">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <p className="text-[10px] font-[400] text-white">FULL VIEW</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 2048 2048">
              <path fill="#ffffff" d="M640 640V256h128v512H256V640zm-384 768v-128h512v512H640v-384zm1024 384v-512h512v128h-384v384zm128-1152h384v128h-512V256h128z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;