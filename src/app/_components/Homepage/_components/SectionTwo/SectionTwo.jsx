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

const SectionTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const blurEffect = useScrollBlurEffect(0.5, 0.6, 5);
  const { scrollYProgress } = useScroll();

  const textYValue = useTransform(scrollYProgress, [0, 1], ['-80%', '80%']);

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
          style={{ y: textYValue }}
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
          className="absolute text-center w-3/4 sm:text-5xl sm:leading-tight top-1/3  bg-white bg-opacity-30 p-10 rounded-2xl "
        >
          <p>
            <span className="text-white">erdkugel </span>
            stands for
          </p>

          <p>
            <span className="text-yellow-300 "> SOUND POST PRODUCTION </span>
          </p>
          <p>and</p>
          <p>
            <span className="text-orange-900"> DIALOGUE EDITING </span>
            <span className="text-white"> wizardry</span>
          </p>
          <Plugins className="absolute " />
        </motion.h2>
      </div>
    </article>
  );
};
export default SectionTwo;
