'use client';

import { useRef, useEffect } from 'react';
import { motion, useTransform, useInView, useScroll } from 'framer-motion';
import CarouselText from './_components/CarouselText';
import AnimatedTextWrap from '@/utils/AnimatedTextWrap';

import Logo from './_components/Logo';
import { MdConstruction } from 'react-icons/md';

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const textScale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.7, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.7, 0]);

  const textYScroll = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section
      className=" h-screen w-screen relative grid grid-rows-6  "
      id="transNav"
    >
      <div className="row-span-2 mt-[4.5rem] sm:mt-[3rem] lg:mt-[6rem]  ">
        <Logo />
      </div>
      <div className="h-full w-full row-span-1"></div>

      <motion.div
        className=" w-3/4 mx-auto row-span-3 "
        style={{
          opacity: textOpacity,
          scale: textScale,
          y: textYScroll,
        }}
      >
        <div className=" text-white text-center w-full sm:w-3/4 mx-auto xxs:text-xl xs:text-2xl sm:text-3xl leading-normal  xxs:pt-7 xs:pt-16 sm:pt-32">
          <AnimatedTextWrap
            text="we are the storytellers behind the scenes, sculpting voices and
          emotions to bring characters to life. We are the unseen architects,
          ensuring every word is heard, every emotion felt."
          />
        </div>
      </motion.div>
      <div className="flex left absolute bottom-0 right-0 items-center">
        <p className="text-2xl sm:text-3xl  ">site under construction...</p>
        <MdConstruction size={40} />
      </div>
    </section>
  );
};
export default Hero;
