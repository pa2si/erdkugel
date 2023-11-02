'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useScrollBlurEffect } from '@/utils/slowFadeInAnimationScrolling';
import SectionTwo from '@/app/_components/Homepage/_components/SectionTwo/SectionTwo';

const SectionOne = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const textYValue = useTransform(scrollYProgress, [0, 1], ['-100', '-3500%']);
  const imageYValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['0%', '-100%', '-350%']
  );

  const blurEffect = useScrollBlurEffect();

  return (
    <motion.div
      ref={ref}
      style={{
        background:
          'linear-gradient(to left, rgba(93, 65, 87, 0.8), rgba(168, 202, 186, 0.8))',

        y: imageYValue,
        height: '200vh',
      }}
      className="relative w-full "
    >
      <Image
        src="/images/troy-t-dX76Mts-LVM-unsplash.webp"
        alt="studio erdkugel"
        width="0"
        height="0"
        sizes="100vw"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '50%',
          opacity: '0.6',
          filter: `blur(${blurEffect}px)`,
        }}
        className=""
      />
      <div className="flex justify-center">
        <motion.h2
          ref={ref}
          className="absolute text-center sm:text-7xl   text-white  shadow-md shadow-white"
          style={{ y: textYValue }}
        >
          <span className="text-white">what does erdkugel do?</span>
        </motion.h2>{' '}
      </div>
      <SectionTwo />
    </motion.div>
  );
};
export default SectionOne;
