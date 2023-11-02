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

  const textYValue = useTransform(scrollYProgress, [0, 1], ['-60%', '20%']);

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <article
      className="  h-screen w-full relative overflow-hidden "
      style={{
        background:
          'linear-gradient(to left, rgba(250, 250, 250, 0.4), rgba(250, 250, 250, 0.4))',
      }}
    >
      <Image
        src="/images/jonas-zurcher-fvLNFnnLPIk-unsplash.jpg"
        alt="studio erdkugel"
        width="0"
        height="0"
        sizes="100vw"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          opacity: '0.6',
          filter: `blur(${blurEffect}px)`,
        }}
        className="shadow-inner"
      />

      <div className="flex justify-center">
        <motion.h2
          style={{ y: textYValue, letterSpacing: '1px' }}
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -300 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 1,
          }}
          className="absolute text-center text-erdkugel-text w-3/4 sm:text-[2.6rem] sm:leading-tight top-1/3 bg-slate-100 bg-opacity-60 p-10 rounded-2xl leading-10 shadow-xl shadow-black"
        >
          <p className="pb-2">
            <Image
              src="/logos/erdkugel-logo-text.webp"
              alt="erdkugel text logo"
              width="150"
              height="150"
              sizes="16vw"
              className="inline mr-4"
              style={{ width: 'auto', height: 'auto' }}
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

            <Plugins className="absolute " />
          </div>

          <p className="pt-2 pb-2">and</p>
          <div
            className="pb-2 text-stone-700 "
            style={{
              fontFamily: 'JosefinSans-lightItalic',
            }}
          >
            <AnimatedText text="DIALOGUE EDITING wizardry" />
          </div>
        </motion.h2>
      </div>
    </article>
  );
};
export default SectionTwo;
