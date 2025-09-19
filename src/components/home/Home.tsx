import React from "react";

import Image from "next/image";

import developer from "../../png/saad2.jpg";
import Button from "@/components/button/Button";

type props = {
  contactClick: () => void;
};

const Home = ({ contactClick }: props) => {
  const handleClick = (section: string, callback: () => void) => {
    callback();
  };

  return (
    <div className="relative pb-10 max-[750px]:pb-16 max-[400px]:pb-12 pl-[350px] max-[1800px]:pl-[120px] max-[1150px]:pl-[50px] max-[500px]:pl-[20px] bg-[#011627] w-full overflow-hidden h-[calc(100vh-30px)] h-[100vh] max-[1030px]:h-[90vh] max-[750px]:h-full">

      <div className="absolute left-10 max-[1150px]:left-2 top-1/2 -translate-y-1/2 z-0 opacity-10 max-[500px]:hidden">
        <p className="text-style text-[60px] max-[1100px]:text-[40px] leading-[55px] max-[1100px]:leading-[37px]">S</p>
        <p className="text-style text-[60px] max-[1100px]:text-[40px] leading-[55px] max-[1100px]:leading-[37px]">A</p>
        <p className="text-style text-[60px] max-[1100px]:text-[40px] leading-[55px] max-[1100px]:leading-[37px]">A</p>
        <p className="text-style text-[60px] max-[1100px]:text-[40px] leading-[55px] max-[1100px]:leading-[37px]">D</p>
        <p className="text-style text-[60px] max-[1100px]:text-[40px] leading-[55px] max-[1100px]:leading-[37px]">A</p>
        <p className="text-style text-[60px] max-[1100px]:text-[40px] leading-[55px] max-[1100px]:leading-[37px]">L</p>
        <p className="text-style text-[60px] max-[1100px]:text-[40px] leading-[55px] max-[1100px]:leading-[37px]">I</p>
      </div>

      <div className="z-10 relative flex max-[750px]:flex-col gap-10 max-[1000px]:gap-7 max-[850px]:gap-3 max-[500px]:gap-0 items-center h-full">
        <div className="flex flex-col justify-center h-full max-[750px]:py-3 max-[500px]:py-2 max-[750px]:pr-[50px] max-[500px]:pr-[20px]">
          <p className="text-white text-[45px] max-[1000px]:text-[35px] max-[850px]:text-[30px] max-[400px]:text-[25px] font-[700]"> <span className="text-[25px] max-[1000px]:text-[20px] max-[850px]:text-[18px]" style={{ fontFamily: "cursive" }}>Hi There, I&apos;m</span> <br />Saad Ali</p>
          <h1 className="" aria-label="Hi! I'm a developer">
            <span className="typingTypewriting nocaret text-[#f71735] text-[35px] max-[850px]:text-[27px] max-[500px]:text-[23px] font-[600]"></span>
          </h1>
          <p className="text-white text-[25px] max-[1600px]:text-[20px] max-[1400px]:text-[15px] max-[1000px]:text-[13px]">UI/UX Developer skilled in creating responsive and user-friendly interfaces, with expertise in ShadCN-UI, Material UI, Tailwind CSS, Framer-Motion, and React development.</p>
          <Button title="CONTACT" className="my-5" onClick={() => handleClick("contact", contactClick)} />
        </div>
        <div className="relative w-[100%] h-[33rem] max-[1200px]:h-[27rem] max-[1000px]:h-[23rem] max-[850px]:h-[19rem] max-[750px]:h-[24rem] max-[550px]:h-[20rem] max-[400px]:h-[17rem]">
          {/* <div className="absolute left-[-75px] max-[1200px]:left-[-65px] max-[1050px]:left-[-45px] top-[-25px] h-[36rem] max-[1200px]:h-[30rem] max-[1000px]:h-[23rem] max-[850px]:h-[19rem] max-[750px]:h-[24rem] max-[550px]:h-[20rem] max-[400px]:h-[17rem] w-full animate-spin-slo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="h-full w-full">
              <defs>
                <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
                  <circle cx="6" cy="6" r="2.5" fill="white" />
                </pattern>
                <radialGradient id="fade" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="black" />
                  <stop offset="100%" stop-color="white" />
                </radialGradient>
                <mask id="halftoneMask">
                  <rect width="100%" height="100%" fill="url(#fade)" />
                </mask>
              </defs>
              <circle cx="200" cy="200" r="180" fill="url(#dots)" mask="url(#halftoneMask)" />
            </svg>
          </div> */}
          <div className=" border-[20px] max-[1100px]:border-[15px] max-[500px]:border-[10px] border-[#f71735] rounded-l-full border-r-0 max-[1100px]:border-r-0 max-[500px]:border-r-0 h-full bg-[#011627] p-4 max-[1300px]:p-2 max-[400px]:p-1">
            <div className="border-[15px] max-[1030px]:border-[12px] max-[500px]:border-[10px] border-[#ffffff] rounded-l-full rounded-tr-full w-[80%] max-[1300px]:w-[90%] max-[750px]:w-[70%] max-[500px]:w-[95%] h-full overflow-hidden">
              <Image src={developer} alt="developer" className="h-full object-cover w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-[50px] max-[1300px]:h-[50px] max-[700px]:h-[30px] max-[400px]:h-[27px] w-full" viewBox="0 0 1000 40" preserveAspectRatio="none">
          <path fill="#001e35">
            <animate attributeName="d" begin="0s" dur="10s" repeatCount="indefinite" values="M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z; M0,40 C200,40 400,0 600,0 C800,0 800,40 1000,40 L1000,50 L0,50 L0,40 Z; M0,30 C200,30 200,0 400,0 C600,0 800,40 1000,40 L1000,50 L0,50 L0,30 Z; M0,0 C200,7.11236625e-15 200,40 400,40 C600,40 800,0 1000,0 L1000,50 L0,50 L0,0 Z;"></animate>
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Home;