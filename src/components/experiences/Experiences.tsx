import React from "react";

import ExperiencesCard from "@/components/card/ExperiencesCard";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="bg-[#001e35] px-[350px] max-[1800px]:px-[120px] max-[1150px]:px-[50px] max-[500px]:px-[20px] pb-20 max-[800px]:pb-16 max-[500px]:pb-8 pt-9 max-[800px]:pt-5 max-[400px]:pt-3">
      <p className="text-style opacity-10 text-[80px] max-[1050px]:text-[55px] max-[500px]:text-[35px] text-center leading-[50px] max-[1050px]:leading-[35px] max-[500px]:leading-[30px]">EXPERIENCE</p>
      <div className="flex items-center gap-2 justify-center">
        <div className="w-10 max-[500px]:w-6 h-1 bg-[#f71735]" />
        <p className="text-[35px] max-[1050px]:text-[25px] max-[500px]:text-[17px] font-[700] text-white">MY EXPERIENCE</p>
        <div className="w-10 max-[500px]:w-6 h-1 bg-[#f71735]" />
      </div>
      <div className="mt-16 grid gap-10 max-[500px]:gap-5 max-[950px]:mt-7">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <ExperiencesCard
            title="The Dev Corporate"
            date="Aug, 2020 – Jul, 2023"
            address="Lahore, Punjab, Pakistan"
            description="I worked here as a UI developer and my core responsibility is to translate creative software design concepts and ideas into reality using front end technology. I designed user interface solution both in its practical intent and creative vision, and convert it into engineered softwares."
            image={
              <svg xmlns="http://www.w3.org/2000/svg" className="max-[950px]:w-[40px] max-[500px]:w-[30px] max-[950px]:h-[40px] max-[500px]:h-[30px]" width="50" height="50" viewBox="0 0 256 229"><path fill="#ebf8f9" d="M128 165.548c5.859 0 11.718-.154 17.506-.461c-5.696 7.669-11.555 14.753-17.506 21.161c-5.953-6.408-11.81-13.492-17.504-21.161c5.786.307 11.644.461 17.504.461m-51.487 53.714c-3.048 0-5.771-.656-8.099-2c-11.183-6.457-13.153-28.73-5.355-58.609c11.184 2.583 23.247 4.465 35.952 5.612c7.343 10.428 15.006 19.934 22.838 28.33c-17.403 17.178-33.736 26.667-45.336 26.667m102.977-.003c-11.599 0-27.935-9.486-45.338-26.664c7.828-8.393 15.492-17.896 22.834-28.322l.014-.008c12.701-1.147 24.762-3.029 35.943-5.612c7.795 29.879 5.827 52.152-5.357 58.609c-2.328 1.343-5.047 1.997-8.096 1.997m-16.047-64.529a330 330 0 0 0 9.152-14.928a329 329 0 0 0 8.35-15.388c3.796 8.765 7.003 17.38 9.575 25.739c-8.523 1.948-17.586 3.48-27.077 4.577m-70.885 0c-9.49-1.097-18.555-2.629-27.078-4.577c2.573-8.359 5.779-16.974 9.575-25.742a331 331 0 0 0 17.503 30.319m-35.651-6.732c-29.775-8.187-48.079-21.029-48.079-33.943c0-12.912 18.304-25.756 48.079-33.942c3.356 10.979 7.757 22.369 13.116 33.942c-5.359 11.575-9.76 22.963-13.116 33.943m142.185 0c-3.354-10.977-7.756-22.368-13.115-33.943c5.359-11.575 9.761-22.964 13.115-33.942c29.776 8.185 48.08 21.028 48.08 33.942s-18.304 25.756-48.08 33.943M75.055 103.697c-3.796-8.764-7.002-17.38-9.575-25.738c8.523-1.95 17.588-3.483 27.078-4.578a328 328 0 0 0-9.153 14.927a329 329 0 0 0-8.35 15.389m105.89 0a331 331 0 0 0-17.502-30.316c9.491 1.095 18.554 2.628 27.077 4.578c-2.572 8.356-5.779 16.971-9.575 25.738m-52.947 53.022a318 318 0 0 1-24.107-.905a318 318 0 0 1-12.842-20.426a318 318 0 0 1-11.267-21.333a318 318 0 0 1 11.267-21.333a317 317 0 0 1 12.842-20.426A318 318 0 0 1 128 71.391c8.106 0 16.213.302 24.112.905a319 319 0 0 1 12.839 20.426a317 317 0 0 1 11.267 21.333a317 317 0 0 1-11.267 21.333a319 319 0 0 1-12.839 20.426c-7.902.603-16.009.905-24.114.905m-17.502-93.696c5.694-7.669 11.553-14.752 17.504-21.159c5.951 6.405 11.81 13.49 17.506 21.159a331 331 0 0 0-35.01 0m-47.437 6.434c-7.798-29.879-5.828-52.152 5.355-58.609c2.327-1.343 5.049-1.998 8.097-1.998c11.598 0 27.934 9.488 45.337 26.666c-7.828 8.393-15.49 17.897-22.832 28.321l-.015.008c-12.701 1.147-24.761 3.03-35.942 5.612m129.884 0c-11.184-2.583-23.248-4.467-35.952-5.612c-7.344-10.429-15.008-19.935-22.839-28.329c17.405-17.18 33.737-26.668 45.336-26.668c3.048 0 5.77.656 8.098 2c11.184 6.457 13.152 28.73 5.357 58.609M179.493 0c-14.175.001-32.128 10.066-51.46 29.15l-.033-.035l-.033.035C108.632 10.063 90.681.002 76.505.002C71.914.002 67.717 1.058 64 3.204c-15.197 8.774-18.598 33.568-9.514 68.368l-.046.012l.013.047C19.771 81.164 0 96.506 0 114.055s19.771 32.891 54.453 42.425l-.013.046l.046.012c-9.084 34.802-5.683 59.595 9.514 68.368c3.717 2.145 7.91 3.199 12.501 3.199c14.174 0 32.13-10.057 51.464-29.142l.035.034l.033-.034c19.338 19.086 37.286 29.147 51.464 29.147c4.589-.003 8.785-1.058 12.503-3.204c15.195-8.773 18.598-33.566 9.514-68.368l.046-.012l-.011-.046C236.227 146.946 256 131.604 256 114.055s-19.773-32.891-54.451-42.424l.011-.047l-.046-.012c9.084-34.801 5.681-59.594-9.514-68.368c-3.719-2.148-7.913-3.205-12.507-3.204" stroke-width="5.5" stroke="#ebf8f9" /><path fill="#31adb8" d="M185.101 112.174a326 326 0 0 0-12.506-23.866a326 326 0 0 0-14.414-22.762l-1.187-1.708l-2.072-.172c-17.597-1.464-36.252-1.464-53.842 0l-2.073.172l-1.187 1.708a326 326 0 0 0-14.415 22.762a325 325 0 0 0-12.503 23.866l-.886 1.881l.886 1.882a325 325 0 0 0 12.503 23.865a326 326 0 0 0 14.415 22.762l1.187 1.709l2.073.173a326 326 0 0 0 26.92 1.103c9.066 0 18.124-.37 26.922-1.103l2.072-.173l1.187-1.709a326 326 0 0 0 14.414-22.762a326 326 0 0 0 12.506-23.865l.885-1.882z" stroke-width="5.5" stroke="#31adb8" /><path fill="#fff" d="M145.091 97.942v-8.898h-34.746v50.282h35.381v-8.899h-24.999v-12.288h22.739v-8.827h-22.739v-11.37z" stroke-width="5.5" stroke="#fff" /></svg>
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <ExperiencesCard
            title="HarazCo.LTD"
            date="Feb, 2024 – Present"
            address="Kasur, Punjab, Pakistan"
            description="As a UI/UX and Frontend Developer at HarazCo, I craft responsive web interfaces enhancing user experience. I designed and implemented UI for Haraz Dental Group with professional layouts and banners, and for Dentistry99, creating streamlined e-commerce style interfaces with fast delivery badges and personalized recommendations."
            image={
              <svg xmlns="http://www.w3.org/2000/svg" className="max-[950px]:w-[40px] max-[500px]:w-[30px] max-[950px]:h-[40px] max-[500px]:h-[30px]" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.818 22v-2.857C6.662 17.592 5.633 16.416 4.682 15m9.772 7v-1.714c4.91 0 4.364-5.714 4.364-5.714s2.182 0 2.182-2.286l-2.182-3.428c0-4.572-3.709-6.816-7.636-6.857c-2.2-.023-3.957.53-5.27 1.499" /><path d="m13 7l2 2.5l-2 2.5M5 7L3 9.5L5 12m5-6l-2 7" /></g></svg>
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Experiences;