import React, { useState } from "react";
import Logo from "../logo/Logo";

type props = {
  homeClick: () => void;
  aboutClick: () => void;
  servicesClick: () => void;
  portfolioClick: () => void;
  experiencesClick: () => void;
  sidebarOpenClick: () => void;
  testimonialsClick: () => void;
}

const Navbar = ({ sidebarOpenClick, homeClick, aboutClick, servicesClick, experiencesClick, portfolioClick, testimonialsClick }: props) => {
  const [active, setActive] = useState("home");

  const handleClick = (section: string, callback: () => void) => {
    setActive(section);
    callback();
  }

  return (
    <div className="sticky top-0 z-[1000] bg-[#011627]">
      <div className="w-full flex justify-between items-center py-4 max-[800px]:py-4 px-[350px] max-[1800px]:px-[120px] max-[1150px]:px-[50px] max-[500px]:px-[20px] max-[800px]:border-b border-white/10">
        <p style={{ fontFamily: "cursive" }} className="text-white text-[25px] max-[800px]:text-[17px] font-[600]">Saad <span className="text-[#f71735]">Ali</span></p>
        <ul className="flex gap-10 max-[1150px]:gap-4 max-[800px]:hidden">
          <li
            className={`relative text-[15px] max-[1150px]:text-[12px] font-[500] pb-1 cursor-pointer text-[#919aa2] hover:text-white before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-[#f71735] before:transition-transform before:duration-300
          ${active === "home" ? "before:scale-x-100 text-white" : "before:scale-x-0 hover:before:scale-x-100"}`}
            onClick={() => handleClick("home", homeClick)}
          >
            HOME
          </li>
          <li
            className={`relative text-[15px] max-[1150px]:text-[12px] font-[500] pb-1 cursor-pointer text-[#919aa2] hover:text-white before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-[#f71735] before:transition-transform before:duration-300
          ${active === "about" ? "before:scale-x-100 text-white" : "before:scale-x-0 hover:before:scale-x-100"}`}
            onClick={() => handleClick("about", aboutClick)}
          >
            ABOUT US
          </li>
          <li
            className={`relative text-[15px] max-[1150px]:text-[12px] font-[500] pb-1 cursor-pointer text-[#919aa2] hover:text-white before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-[#f71735] before:transition-transform before:duration-300
          ${active === "services" ? "before:scale-x-100 text-white" : "before:scale-x-0 hover:before:scale-x-100"}`}
            onClick={() => handleClick("services", servicesClick)}
          >
            SERVICES
          </li>
          <li
            className={`relative text-[15px] max-[1150px]:text-[12px] font-[500] pb-1 cursor-pointer text-[#919aa2] hover:text-white before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-[#f71735] before:transition-transform before:duration-300
          ${active === "experiences" ? "before:scale-x-100 text-white" : "before:scale-x-0 hover:before:scale-x-100"}`}
            onClick={() => handleClick("experiences", experiencesClick)}
          >
            EXPERIENCES
          </li>
          <li
            className={`relative text-[15px] max-[1150px]:text-[12px] font-[500] pb-1 cursor-pointer text-[#919aa2] hover:text-white before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-[#f71735] before:transition-transform brfore:duration-300
          ${active === "portfolio" ? "before:scale-x-100 text-white" : "before:scale-x-0 hover:before:scale-x-100"}`}
            onClick={() => handleClick("portfolio", portfolioClick)}
          >
            PORTFOLIO
          </li>
          <li
            className={`relative text-[15px] max-[1150px]:text-[12px] font-[500] pb-1 cursor-pointer text-[#919aa2] hover:text-white before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-[#f71735] before:transition-transform before:duration-300
          ${active === "testimonials" ? "before:scale-x-100 text-white" : "before:scale-x-0 hover:before:scale-x-100"}`}
            onClick={() => handleClick("testimonials", testimonialsClick)}
          >
            TESTIMONIALS
          </li>
        </ul>

        <div className="hidden max-[800px]:flex p-1 bg-[#f71735] rounded-[5px] group cursor-pointer" onClick={sidebarOpenClick}>
          <svg
            width="30"
            height="30"
            fill="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="max-[400px]:w-[25px] max-[400px]:h-[25px]"
          >
            <path d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" />
          </svg>
        </div>

      </div>
    </div >
  );
};

export default Navbar;