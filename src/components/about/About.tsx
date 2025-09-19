import React from "react";

import { motion } from "framer-motion";
import Button from "../button/Button";

type props = {
  contactClick: () => void;
};

const About = ({ contactClick }: props) => {
  const skills = [
    { name: "React", level: 90, color: "#0a96d4" },
    { name: "Next.js", level: 85, color: "#f05734" },
    { name: "JavaScript", level: 88, color: "#f5a623" },
    { name: "React-Native", level: 80, color: "#3DDC84" },
    { name: "ShadCn-UI", level: 95, color: "#8B5CF6" },
    { name: "Tailwind CSS", level: 95, color: "#38BDF8" },
  ];

  const handleClick = (section: string, callback: () => void) => {
    callback();
  };

  return (
    <div className="bg-[#001e35] px-[350px] max-[1800px]:px-[120px] max-[1150px]:px-[50px] max-[500px]:px-[20px] py-12">
      {/* BACKGROUND WATERMARK */}
      <p className="text-style opacity-10 text-[80px] max-[1050px]:text-[55px] max-[500px]:text-[35px] text-center leading-[50px] max-[1050px]:leading-[35px] max-[500px]:leading-[30px]">
        ABOUT
      </p>

      <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-16 max-[1200px]:gap-10 max-[900px]:gap-5 mt-16 max-[900px]:mt-7">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[18px] font-[600] text-white border-l-[3px] border-[#f71735] rounded-[4px] pl-2"
          >
            ABOUT ME
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[16px] max-[500px]:text-[14px] text-gray-400 leading-7 max-[500px]:leading-6 mt-3 pl-2"
          >
            Hey, I’m <span className="font-[500] text-[17px] max-[500px]:text-[15px] border-b-[2px] border-[#334b5d] pb-[2px]"> Saad Ali</span>, a passionate <span className="font-[500] text-[17px] max-[500px]:text-[15px] border-b-[2px] border-[#334b5d] pb-[2px]"> UI/UX Developer</span> with 5 years of experience building clean, responsive, and user-friendly digital products.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[16px] max-[500px]:text-[14px] text-gray-400 leading-7 max-[500px]:leading-6 mt-3 pl-2"
          >
            I specialize in <span className="font-[500] text-[17px] max-[500px]:text-[15px] border-b-[2px] border-[#334b5d] pb-[2px]"> React</span>,<span className="font-[500] text-[17px] max-[500px]:text-[15px] border-b-[2px] border-[#334b5d] pb-[2px]"> Next.js</span>,<span className="font-[500] text-[17px] max-[500px]:text-[15px] border-b-[2px] border-[#334b5d] pb-[2px]"> JavaScript</span>,<span className="font-[500] text-[17px] max-[500px]:text-[15px] border-b-[2px] border-[#334b5d] pb-[2px]"> React-Native</span>,<span className="font-[500] text-[17px] max-[500px]:text-[15px] border-b-[2px] border-[#334b5d] pb-[2px]"> ShadCn-UI</span>, and<span className="font-[500] text-[17px] max-[500px]:text-[15px] border-b-[2px] border-[#334b5d] pb-[2px]"> Tailwind CSS
            </span>. I enjoy collaborating with designers and teams to turn creative ideas into
            impactful products, while staying updated with the latest front-end trends
            to ensure every project is modern, scalable, and engaging.
          </motion.p>
          <Button title="CONTACT" className="my-5 ml-2" onClick={() => handleClick("contact", contactClick)} />
        </div>

        {/* RIGHT SKILLS SIDE */}
        <div className="grid grid-cols-3 max-[400px]:grid-cols-2 gap-10 max-[1200px]:gap-6 justify-items-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="relative w-28 h-28 md:w-32 md:h-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: i * 0.3, duration: 0.6 },
                },
              }}
            >
              <svg className="w-full h-full transform -rotate-90">
                {/* BACKGROUND CIRCLE */}
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="#1e3a55"
                  strokeWidth="10"
                  fill="transparent"
                />
                {/* ANIMATED PROGRESS CIRCLE */}
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke={skill.color}
                  strokeWidth="10"
                  fill="transparent"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 56}
                  strokeDashoffset={2 * Math.PI * 56}
                  whileInView={{
                    strokeDashoffset:
                      (1 - skill.level / 100) * 2 * Math.PI * 56,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              </svg>
              {/* TEXT INSIDE CIRCLE */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.3 }}
                  className="text-lg md:text-2xl font-bold text-white"
                >
                  {skill.level}%
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.3 }}
                  className="text-xs md:text-sm text-gray-300"
                >
                  {skill.name}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;


{/* return (
    <div className="bg-[#001e35] px-[350px] max-[1800px]:px-[120px] max-[1150px]:px-[50px] max-[500px]:px-[20px] py-12">
      BACKGROUND WATERMARK
      <p className="text-style opacity-10 text-[80px] max-[1050px]:text-[55px] max-[500px]:text-[35px] text-center leading-[50px] max-[1050px]:leading-[35px] max-[500px]:leading-[30px]">
        ABOUT
      </p>

      UPPER ABOUT ME TEXT
      <div className=" max-w-[700px] mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[18px] max-w font-[600] text-white flex items-center gap-2 justify-center"
        >
          <div className="w-10 max-[500px]:w-6 h-1 bg-[#f71735]" />
          <h2>ABOUT ME</h2>
          <div className="w-10 max-[500px]:w-6 h-1 bg-[#f71735]" />
        </motion.div>
        <div className="">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[16px] text-gray-400 leading-7 mt-3 pl-2 text-center"
        >
          Hey, I’m
          <span className="font-[500] text-[17px] border-b-[2px] border-[#334b5d] pb-[2px]"> Ahtesham</span>,
          a passionate
          <span className="font-[500] text-[17px] border-b-[2px] border-[#334b5d] pb-[2px]"> Front-End Developer</span>
          with 5 years of experience building clean, responsive, and user-friendly digital products.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[16px] text-gray-400 leading-7 mt-3 pl-2 text-center"
        >
          I specialize in
          <span className="font-[500] text-[17px] border-b-[2px] border-[#334b5d] pb-[2px]"> React</span>,
          <span className="font-[500] text-[17px] border-b-[2px] border-[#334b5d] pb-[2px]"> Next.js</span>,
          <span className="font-[500] text-[17px] border-b-[2px] border-[#334b5d] pb-[2px]"> JavaScript</span>, and
          <span className="font-[500] text-[17px] border-b-[2px] border-[#334b5d] pb-[2px]"> Tailwind CSS</span>.
          I enjoy collaborating with designers and teams to turn creative ideas into impactful products,
          while staying updated with the latest front-end trends to ensure every project is modern, scalable, and engaging.
        </motion.p>
        <Button title="CONTACT" className="my-5 ml-2" onClick={() => handleClick("contact", contactClick)} />
        </div>
      </div>

      SKILLS BELOW
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center mt-10">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="relative w-28 h-28 md:w-32 md:h-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delay: i * 0.3, duration: 0.6 },
              },
            }}
          >
            <svg className="w-full h-full transform -rotate-90">
              BACKGROUND CIRCLE
              <circle cx="50%" cy="50%" r="45%" stroke="#1e3a55" strokeWidth="10" fill="transparent" />
              ANIMATED PROGRESS CIRCLE
              <motion.circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke={skill.color}
                strokeWidth="10"
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 56}
                strokeDashoffset={2 * Math.PI * 56}
                whileInView={{
                  strokeDashoffset: (1 - skill.level / 100) * 2 * Math.PI * 56,
                }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: i * 0.3 }}
              />
            </svg>
            TEXT INSIDE CIRCLE
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.3 }}
                className="text-lg md:text-2xl font-bold text-white"
              >
                {skill.level}%
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.3 }}
                className="text-xs md:text-sm text-gray-300"
              >
                {skill.name}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  ); */}


{/* <section className="relative w-full bg-[#001e35] text-white flex items-center justify-center px-6 py-20">

  Radial Gradient Glow Background
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)]" />

  Animated Gradient Circles
  <motion.div
    className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#38bdf8] blur-[200px] opacity-30"
    animate={{ x: [0, 60, 0], y: [0, 60, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#9333ea] blur-[200px] opacity-30"
    animate={{ x: [0, -60, 0], y: [0, -60, 0] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
  />

  Floating Particles
  {Array.from({ length: 18 }).map((_, i) => (
    <motion.span
      key={i}
      className="absolute w-2 h-2 bg-white rounded-full opacity-20"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{ y: [0, -30, 0], opacity: [0.1, 0.7, 0.1] }}
      transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
    />
  ))}

  Content Glass Card
  <motion.div
    className="relative z-10 text-center p-10 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg border border-white/10 w-[80%]"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    Big Watermark
    <p className="text-style opacity-10 text-[80px] max-[1050px]:text-[60px] max-[500px]:text-[50px] leading-[60px] max-[1050px]:leading-[35px] max-[500px]:leading-[30px]">
      ABOUT
    </p>

    Heading
    <motion.div
      className="text-5xl font-extrabold mb-6 flex items-center gap-2 justify-center"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-10 max-[500px]:w-6 h-1 bg-[#f71735]" />
      <p className="text-[35px] max-[1050px]:text-[25px] max-[500px]:text-[17px] font-[700] text-white">About Me</p>
      <div className="w-10 max-[500px]:w-6 h-1 bg-[#f71735]" />
    </motion.div>

    Paragraph
    <motion.p
      className="text-lg md:text-xl leading-relaxed opacity-90"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
      Hey I’m <span className="text-[#38bdf8] font-semibold">Ahtesham</span>,
      a <span className="text-[#9333ea] font-semibold">UI & Front-End Developer</span> with 5 years of experience
      building <span className="text-[#38bdf8]">clean</span>, <span className="text-[#9333ea]">responsive</span>, and
      <span className="text-[#38bdf8]"> user-friendly</span> digital products.
      I craft intuitive interfaces with <span className="font-semibold">React, Next.js, and Tailwind CSS</span>,
      always focusing on solving problems through code and keeping up with the latest trends.
    </motion.p>
  </motion.div>
</section> */}



{/* <div className="grid grid-cols-2 max-[675px]:grid-cols-1 gap-8 max-[800px]:gap-4 mt-12 max-[675px]:mt-2 max-[450px]:mt-1">
        <div className="space-y-5 max-[1050px]:space-y-3 max-[450px]:space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="border-l-[3px] border-[#f71735] pl-3 max-[450px]:pl-2 text-white text-[20px] max-[1050px]:text-[16px] font-[500]">About Me</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="pl-3 max-[450px]:pl-2 text-[#ccd2d7] text-[15px] max-[1050px]:text-[14px] max-[450px]:text-[13px] font-[500]">Hello, my <span className="border-b-[2px] border-[#334b5d] pb-[2px]">Ahtesham Javed</span> and i am <span className="border-b-[2px] border-[#334b5d] pb-[2px]">UI/UX developer</span> and <span className="border-b-[2px] border-[#334b5d] pb-[2px]">front-end developer</span></p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#7c8d9a] pl-3 text-[14px] max-[1050px]:text-[12px] max-[450px]:text-[11px] font-[500]">I am a highly motivated and visionary Front-End developer who is passionate about coding and exploring new opportunities. Developing top-notch interfaces is one of my most valuable contributions to my organization. I strive to eliminate difficulties from people's lives.</p>
          </motion.div>
        </div>
        <div className="space-y-5 max-[1050px]:space-y-3 max-[450px]:space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <p className="border-l-[3px] border-[#f71735] pl-3 max-[450px]:pl-2 text-white text-[20px] max-[1050px]:text-[16px] font-[500]">Design Tolls</p>
            <div className="flex gap-2 pl-3 max-[450px]:pl-2 pt-3">
              <p className="border border-[#7c8d9a] rounded-full px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[14px] max-[1050px]:text-[10px]">VS Code</p>
              <p className="border border-[#7c8d9a] rounded-full px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[14px] max-[1050px]:text-[10px]">Git & GitHub</p>
              <p className="border border-[#7c8d9a] rounded-full px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[14px] max-[1050px]:text-[10px]">Figma</p>
              <p className="border border-[#7c8d9a] rounded-full px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[14px] max-[1050px]:text-[10px]">Postman</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <p className="border-l-[3px] border-[#f71735] pl-3 max-[450px]:pl-2 text-white text-[20px] max-[1050px]:text-[16px] font-[500]">Technologies and Skills</p>
            <div className="flex gap-2 flex-wrap pl-3 max-[450px]:pl-2 pt-3">
              <p className="border border-[#7c8d9a] rounded-full px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[14px] max-[1050px]:text-[10px]">Front-End Developer</p>
              <p className="border border-[#7c8d9a] rounded-full px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[14px] max-[1050px]:text-[10px]">Expert in Responsive UI</p>
              <p className="border border-[#7c8d9a] rounded-full px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[14px] max-[1050px]:text-[10px]">ShadCn-UI</p>
              <p className="border border-[#7c8d9a] rounded-full px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[14px] max-[1050px]:text-[10px]">Material UI</p>
              <p className="border border-[#7c8d9a] rounded-full px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[14px] max-[1050px]:text-[10px]">Framer-Motion</p>
              <p className="border border-[#7c8d9a] rounded-full px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[14px] max-[1050px]:text-[10px]">Tailwind CSS</p>
              <p className="border border-[#7c8d9a] rounded-full px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[14px] max-[1050px]:text-[10px]">Javascript</p>
              <p className="border border-[#7c8d9a] rounded-full px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[14px] max-[1050px]:text-[10px]">React</p>
              <p className="border border-[#7c8d9a] rounded-full px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[14px] max-[1050px]:text-[10px]">Next.js</p>
              <p className="border border-[#7c8d9a] rounded-full px-3 max-[1050px]:px-2 py-1 text-[#7c8d9a] font-[500] text-[14px] max-[1050px]:text-[10px]">React-Native</p>
            </div>
          </motion.div>
        </div>
      </div> */}