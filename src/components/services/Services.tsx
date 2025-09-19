import React from "react";

import ServicesCard from "@/components/card/ServicesCard";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="bg-[#011627] pb-20 max-[800px]:pb-12 pt-9 max-[800px]:pt-5 px-[350px] max-[1800px]:px-[120px] max-[1150px]:px-[50px] max-[500px]:px-[20px]">
      <p className="text-style opacity-10 text-[80px] max-[1050px]:text-[60px] max-[500px]:text-[44px] text-center leading-[50px] max-[1050px]:leading-[35px] max-[500px]:leading-[30px]">SERVICES</p>
      <div className="flex items-center gap-2 justify-center">
        <div className="w-10 max-[500px]:w-6 h-1 bg-[#f71735]" />
        <p className="text-[35px] max-[1050px]:text-[25px] max-[500px]:text-[20px] font-[700] text-white">MY SERVICES</p>
        <div className="w-10 max-[500px]:w-6 h-1 bg-[#f71735]" />
      </div>
      <div className="grid grid-cols-3 max-[700px]:grid-cols-2 max-[500px]:grid-cols-1 gap-x-6 max-[800px]:gap-x-3 gap-y-16 max-[800px]:gap-y-12 mt-20 max-[1050px]:mt-14">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ServicesCard
            image={
              <svg xmlns="http://www.w3.org/2000/svg" className="max-[950px]:w-[35px] max-[950px]:h-[35px]" width="50" height="50" viewBox="0 0 16 16"><path fill="white" d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" /></svg>
            }
            title="Unique design"
            description="Designing unique interfaces that balance creativity and functionality, improving user engagement and digital experiences."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <ServicesCard
            image={
              <svg xmlns="http://www.w3.org/2000/svg" className="max-[950px]:w-[35px] max-[950px]:h-[35px]" width="50" height="50" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="white" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2h-9v14h9zM8 5H5v14h3zm8 10a1 1 0 0 1 .117 1.993L16 17h-3a1 1 0 0 1-.117-1.993L13 15zm0-4a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zm0-4a1 1 0 0 1 .117 1.993L16 9h-3a1 1 0 0 1-.117-1.993L13 7z" /></g></svg>
            }
            title="Different Layout"
            description="Creating different layouts tailored to client needs, ensuring responsive design, modern style, and smooth user experience across all devices."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <ServicesCard
            image={
              <svg xmlns="http://www.w3.org/2000/svg" className="max-[950px]:w-[35px] max-[950px]:h-[35px]" width="50" height="50" viewBox="0 0 256 256"><path fill="white" d="m13 109.21l112 64a6 6 0 0 0 6 0l112-64a6 6 0 0 0 0-10.42l-112-64a6 6 0 0 0-6 0l-112 64a6 6 0 0 0 0 10.42m115-62.3L227.91 104L128 161.09L28.09 104ZM245.21 141a6 6 0 0 1-2.23 8.19l-112 64a6 6 0 0 1-6 0l-112-64a6 6 0 0 1 6-10.42l109 62.3l109-62.3a6 6 0 0 1 8.23 2.23" /></svg>
            }
            title="Make it Simple"
            description="Focusing on the principle of ‘Make it Simple,’ I design clean, user-friendly interfaces that ensure clarity, usability, and seamless experiences."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ServicesCard
            image={
              <svg xmlns="http://www.w3.org/2000/svg" className="max-[950px]:w-[35px] max-[950px]:h-[35px]" width="50" height="50" viewBox="0 0 32 32"><path fill="white" d="M11 4C9.355 4 8 5.355 8 7v18c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V7c0-1.645-1.355-3-3-3zm0 2h10c.555 0 1 .445 1 1v18c0 .555-.445 1-1 1H11c-.555 0-1-.445-1-1V7c0-.555.445-1 1-1m5 17c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1" /></svg>
            }
            title="Responsiveness"
            description="Ensuring responsiveness by creating adaptable layouts that work seamlessly across all devices, delivering consistent performance and excellent user experiences everywhere."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <ServicesCard
            image={
              <svg xmlns="http://www.w3.org/2000/svg" className="max-[950px]:w-[35px] max-[950px]:h-[35px]" width="50" height="50" viewBox="0 0 16 16"><path fill="white" d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A5 5 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A5 5 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623M4 7v4a4 4 0 0 0 3.5 3.97V7zm4.5 0v7.97A4 4 0 0 0 12 11V7zM12 6a4 4 0 0 0-1.334-2.982A3.98 3.98 0 0 0 8 2a3.98 3.98 0 0 0-2.667 1.018A4 4 0 0 0 4 6z" /></svg>
            }
            title="Testing for Perfection"
            description="Practicing ‘Testing for Perfection,’ I thoroughly test every feature to ensure flawless functionality, smooth performance, and the highest quality user experience."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <ServicesCard
            image={
              <svg xmlns="http://www.w3.org/2000/svg" className="max-[950px]:w-[35px] max-[950px]:h-[35px]" width="50" height="50" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 9v6H9V9zm0 6h3a3 3 0 1 1-3 3zm-6 .002H6a3 3 0 1 0 3 3zM15 9V6a3 3 0 1 1 3 3zM9 9V6a3 3 0 1 0-3 3z" color="currentColor" /></svg>
            }
            title="Advanced Options"
            description="Providing advanced options that empower users with flexibility, customization, and enhanced features, ensuring modern solutions and an improved overall experience."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;