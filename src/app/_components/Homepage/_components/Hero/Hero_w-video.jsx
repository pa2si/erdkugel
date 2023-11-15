'use client';

import { useRef, useEffect } from 'react';
import { motion, useTransform, useInView, useScroll } from 'framer-motion';
import CarouselText from './_components/CarouselText';
import AnimatedTextWrap from '@/utils/AnimatedTextWrap';

import Logo from './_components/Logo';
import { MdConstruction } from 'react-icons/md';
import BackgroundVideo from './_components/BackgroundVideo';
import BackgroundImage from './_components/BackgroundImage';

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const textScale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.7, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.7, 0]);

  const textYScroll = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <div>
      <BackgroundVideo videoSrc="/videos/bgVideo.mp4" />
      <section
        className=" z-50 h-screen w-screen relative grid grid-rows-6 "
        id="transNav"
      >
        <div className=" relative 1/4 mx-auto row-span-3">
          <Logo />
        </div>

        <motion.div
          className=" relative row-span-3 "
          /*        style={{
            opacity: textOpacity,
            scale: textScale,
            y: textYScroll,
          }} */
        >
          <BackgroundImage />
        </motion.div>
        {/* <div className="flex left absolute bottom-0 right-0 items-center">
          <p className="text-2xl sm:text-3xl  ">site under construction...</p>
          <MdConstruction size={40} />
        </div> */}
        <div className=" absolute bottom-20 left-0 right-0 mx-auto mt-16 w-2/4 text-black text-center xxs:text-xl xs:text-2xl sm:text-3xl leading-normal z-50 ">
          <AnimatedTextWrap
            text="we are the storytellers behind the scenes, sculpting voices and
          emotions to bring characters to life. We are the unseen architects,
          ensuring every word is heard, every emotion felt."
          />
        </div>
      </section>
    </div>
  );
};
export default Hero;
