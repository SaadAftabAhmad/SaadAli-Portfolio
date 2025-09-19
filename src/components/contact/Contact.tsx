import React from "react";

import Link from "next/link";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#011627] px-[350px] max-[1800px]:px-[120px] max-[1150px]:px-[50px] max-[500px]:px-[20px] pb-14 max-[800px]:pb-16 max-[700px]:pb-8 pt-9 max-[800px]:pt-5 max-[400px]:pt-3">
        <p className="text-style opacity-10 text-[80px] max-[1050px]:text-[55px] max-[500px]:text-[44px] text-center leading-[50px] max-[1050px]:leading-[35px] max-[500px]:leading-[30px]">CONTACT</p>
        <div className="flex items-center gap-2 justify-center">
          <div className="w-10 max-[500px]:w-6 h-1 bg-[#f71735]" />
          <p className="text-[35px] max-[1050px]:text-[25px] max-[500px]:text-[20px] font-[700] text-white">CONTACT ME</p>
          <div className="w-10 max-[500px]:w-6 h-1 bg-[#f71735]" />
        </div>
        <div className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-6 max-[900px]:gap-x-0 mt-10 max-[900px]:mt-5">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <div className="bg-[#0d293f] p-6 max-[400px]:p-4 rounded-[10px] flex flex-col gap-6 max-[500px]:gap-4">
              <p className="border-l-[3px] border-[#f71735] pl-3 max-[450px]:pl-2 text-[20px] max-[550px]:text-[16px] text-white">Get In Touch</p>
              <div className="flex max-[550px]:flex-col gap-7 max-[500px]:gap-4">
                <input type="text" placeholder="Name *" className="bg-[#0d293f] focus:outline-none border border-[#3d5465] text-white text-[15px] px-3 py-[7px] rounded-[3px] w-full" />
                <input type="text" placeholder="Email *" className="bg-[#0d293f] focus:outline-none border border-[#3d5465] text-white text-[15px] px-3 py-[7px] rounded-[3px] w-full" />
              </div>
              <input type="text" placeholder="Phone#" className="bg-[#0d293f] focus:outline-none border border-[#3d5465] text-white text-[15px] px-3 py-[7px] rounded-[3px] w-full" />
              <textarea placeholder="Your message *" className="bg-[#0d293f] focus:outline-none border border-[#3d5465] text-white text-[15px] px-3 py-[7px] rounded-[3px] w-full h-[100px]" />
              <Button title="Contact Us" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#0d293f] p-6 max-[400px]:p-4 rounded-[10px] flex flex-col gap-6 max-[500px]:gap-4">
              <div>
                <p className="border-l-[3px] border-[#f71735] pl-3 max-[450px]:pl-2 text-white">Email</p>
                <p className="pl-4 max-[450px]:pl-2 mt-3 text-[15px] text-[#86949f]">saad0306058@gmail.com</p>
              </div>
              <div>
                <p className="border-l-[3px] border-[#f71735] pl-3 max-[450px]:pl-2 text-white">Phone</p>
                <div className="mt-3">
                  <p className="pl-4 max-[450px]:pl-2 text-[15px] text-[#86949f]">+923242275305</p>
                </div>
              </div>
              <Link href="https://www.linkedin.com/in/saad-ali-47b7a731a/" target="_blank" className="w-max rounded-[7px] pl-4 group">
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-[#f71735]" width="27" height="27" viewBox="0 0 128 128" fill="#ffffff">
                  <path d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3" /><path fill="#0d293f" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#001e35] py-4">
        <p className="text-white text-center max-[450px]:text-[14px]">© Portfolio by <span className="text-[#f71735] text-[18px] max-[450px]:text-[16px] font-[500]">Saad Ali</span></p>
      </div>
    </div>
  );
};

export default Contact;