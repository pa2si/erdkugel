'use client';

import Image from 'next/image';
import {
  motion,
  useInView,
  useAnimation,
  useTransform,
  useScroll,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useScrollBlurEffect } from '@/utils/slowFadeInAnimationScrolling';
import Plugins from './Plugins';
import AnimatedText from '@/utils/AnimatedText';

const SectionTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const blurEffect = useScrollBlurEffect(0.5, 0.6, 5);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <article className="relative h-screen inset-0 w-full flex justify-center ">
      {/* Background h-screen */}
      <Image
        src="/images/jonas-zurcher-fvLNFnnLPIk-unsplash.jpg"
        alt="studio erdkugel"
        width="0"
        height="0"
        sizes="100vw"
        className="shadow-inner"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          opacity: '0.6',
          filter: `blur(${blurEffect}px)`,
        }}
      />
      {/* inner Info field in sectionTwo */}

      <motion.div
        className="absolute my-auto grid grid-rows-3 justify-center items-center text-center tracking-[1px] text-erdkugel-text w-11/12 h-3/4 sm:w-3/5 sm:h-5/6  sm:leading-tight top-0 bottom-0 rounded-2xl px-0 sm:px-4 leading-10 shadow-xl shadow-black"
        style={{
          background:
            'linear-gradient(to bottom, rgba(241, 245, 249,0.9), rgba(241, 245, 249,0.9)), url(/images/richard-horvath-WOA3QKFjlo8-unsplash.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: -300, y: -400 },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1,
        }}
      >
        <h2 className="text-base sm:text-4xl w-full">
          <p className="pb-2">
            <Image
              src="/logos/erdkugel-logo-text.webp"
              alt="erdkugel text logo"
              width="150"
              height="150"
              sizes="16vw"
              className="inline mr-4 w-20 sm:w-2/6  h-full"
            />
            {/* <span className="text-white">erdkugel </span> */}
            stands for
          </p>
          <div>
            <div
              className="pb-2 text-stone-700 "
              style={{
                fontFamily: 'JosefinSans-lightItalic',
              }}
            >
              <AnimatedText text="SOUND POST PRODUCTION" />
            </div>
          </div>
        </h2>
        <Plugins className="absolute" />
        <h2 className=" text-base sm:text-4xl ">
          <p className="pt-2 pb-2">and</p>
          <div
            className="pb-2 text-stone-700 "
            style={{
              fontFamily: 'JosefinSans-lightItalic',
            }}
          >
            <AnimatedText text="DIALOGUE EDITING wizardry" startDelay={0} />
          </div>
        </h2>
      </motion.div>
    </article>
  );
};
export default SectionTwo;
