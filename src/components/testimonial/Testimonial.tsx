"use client"
import React from "react";

import Autoplay from "embla-carousel-autoplay";
import TestimonialCard from "@/components/card/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";

const Testimonial = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="bg-[#001e35] px-[350px] max-[1800px]:px-[120px] max-[1150px]:px-[50px] max-[500px]:px-[20px] pb-20 max-[1150px]:pb-10 max-[600px]:pb-8 pt-9 max-[800px]:pt-5 max-[600px]:pt-3">
      <p className="text-style opacity-10 text-[80px] max-[1050px]:text-[55px] max-[600px]:text-[35px] max-[400px]:text-[32px] text-center leading-[50px] max-[1050px]:leading-[35px] max-[600px]:leading-[30px]">TESTIMONIALS</p>
      <div className="flex items-center gap-2 justify-center">
        <div className="w-10 max-[600px]:w-6 h-1 bg-[#f71735]" />
        <p className="text-[35px] max-[1050px]:text-[25px] max-[600px]:text-[17px] font-[700] text-white">MY TESTIMONIALS</p>
        <div className="w-10 max-[600px]:w-6 h-1 bg-[#f71735]" />
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full mt-10 max-[800px]:mt-5"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full gap-4">
          <CarouselItem className="basis-1/2 max-[800px]:basis-full w-full">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="basis-1/2 max-[800px]:basis-full w-full">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="basis-1/2 max-[800px]:basis-full w-full">
            <TestimonialCard />
          </CarouselItem>
          <CarouselItem className="basis-1/2 max-[800px]:basis-full w-full">
            <TestimonialCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </div>
  );
};

export default Testimonial;