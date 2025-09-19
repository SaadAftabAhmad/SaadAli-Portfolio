import React, { useState, useEffect } from "react";

import Link from "next/link";

import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Navbar from "@/components/navbar/Navbar";
import Contact from "@/components/contact/Contact";
import Sidebar from "@/components/sidebar/Sidebar";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import Experiences from "@/components/experiences/Experiences";
import Testimonial from "@/components/testimonial/Testimonial";

const MyPortfolio = () => {

  const scrollToSection = (id: string) => {
    const yOffset = -85;
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar
        homeClick={() => scrollToSection("home")}
        aboutClick={() => scrollToSection("about")}
        sidebarOpenClick={() => setIsSidebarOpen(true)}
        servicesClick={() => scrollToSection("services")}
        portfolioClick={() => scrollToSection("portfolio")}
        experiencesClick={() => scrollToSection("experiences")}
        testimonialsClick={() => scrollToSection("testimonial")}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        homeClick={() => { scrollToSection("home"); setIsSidebarOpen(false); }}
        aboutClick={() => { scrollToSection("about"); setIsSidebarOpen(false); }}
        servicesClick={() => { scrollToSection("services"); setIsSidebarOpen(false); }}
        portfolioClick={() => { scrollToSection("portfolio"); setIsSidebarOpen(false); }}
        experiencesClick={() => { scrollToSection("experiences"); setIsSidebarOpen(false); }}
        testimonialClick={() => { scrollToSection("testimonial"); setIsSidebarOpen(false); }}
      />
      <div className="overflow-hidden">
        <div id="home">
          <Home contactClick={() => scrollToSection("contact")} />
        </div>
        <div id="about">
          <About contactClick={() => scrollToSection("contact")} />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="experiences">
          <Experiences />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="testimonial">
          <Testimonial />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      {showScrollTop && (
        <div onClick={() => scrollToSection("home")} className="fixed bottom-[120px] max-[900px]:bottom-5 max-[500px]:bottom-4 right-14 max-[900px]:right-8 max-[500px]:right-4 z-20 bg-[#102434] p-[6px] rounded-[7px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m6-8l-6-6m-6 6l6-6" /></svg>
        </div>
      )
      }
      <Link href="https://www.linkedin.com/in/saad-ali-47b7a731a/" target="_blank" className="fixed bottom-10 max-[900px]:bottom-5 max-[500px]:bottom-4 right-14 max-[900px]:right-8 max-[500px]:right-4 z-20 animate-bounce bg-[#102434] p-[6px] rounded-[7px]">
        <svg xmlns="http://www.w3.org/2000/svg" className="max-[800px]:w-[32px] max-[500px]:w-[27px] max-[800px]:h-[32px] max-[500px]:h-[27px]" width="40" height="40" viewBox="0 0 128 128">
          <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3" /><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" />
        </svg>
      </Link>
    </div >
  );
};

export default MyPortfolio;