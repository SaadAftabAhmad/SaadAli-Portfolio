import React from "react";

import { motion } from "framer-motion";
import haraz from "../../png/haraz.jpg";
import dentistry99 from "../../png/dentistry99.jpg";
import PortfolioCard from "@/components/card/PortfolioCard";

const Portfolio = () => {
  return (
    <div className="bg-[#011627] px-[350px] max-[1800px]:px-[120px] max-[1150px]:px-[50px] max-[500px]:px-[20px] pb-20 max-[800px]:pb-16 max-[500px]:pb-8 pt-9 max-[800px]:pt-5 max-[400px]:pt-3">
      <p className="text-style opacity-10 text-[80px] max-[1050px]:text-[55px] max-[500px]:text-[44px] text-center leading-[50px] max-[1050px]:leading-[35px] max-[500px]:leading-[30px]">PROJECTS</p>
      <div className="flex items-center gap-2 justify-center">
        <div className="w-10 max-[500px]:w-6 h-1 bg-[#f71735]" />
        <p className="text-[35px] max-[1050px]:text-[25px] max-[500px]:text-[25px] font-[700] text-white">PROJECTS</p>
        <div className="w-10 max-[500px]:w-6 h-1 bg-[#f71735]" />
      </div>
      <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-5 mt-16 max-[1050px]:mt-10 max-[950px]:mt-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <PortfolioCard
            img={haraz}
            title="Haraz"
            href="https://www.harazdentalgroup.com"
            description="I have contributed to Haraz's website as a UI/UX developer and front-end specialist, designing intuitive user interfaces and implementing responsive, visually appealing layouts for better user experience."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <PortfolioCard
            img={dentistry99}
            title="Dentistry99"
            href="https://www.dentistry99.com"
            description="I worked on the Dentistry99 website as a UI/UX developer and front-end specialist, creating responsive designs and enhancing user experience through clean, intuitive, and modern interfaces."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;