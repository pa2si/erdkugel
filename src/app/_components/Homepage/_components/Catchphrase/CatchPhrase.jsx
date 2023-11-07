'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import styles from './CatchPhrase.module.css';

import { useState, useEffect } from 'react';

import { useScrollBlurEffect } from '@/utils/slowFadeInAnimationScrolling';
import SectionTwo from '@/app/_components/Homepage/_components/SectionTwo/SectionTwo';

const CatchPhrase = () => {
  const blurEffect = useScrollBlurEffect();

  const { scrollYProgress } = useScroll();
  const parallaxEffect = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const backgroundSize = useTransform(
    scrollYProgress,
    [0, 1],
    ['100%', '140%']
  );

  const desktopBackgroundStyle = {
    backgroundImage: 'url(/images/troy-t-dX76Mts-LVM-unsplash.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    // This will be the dynamic size applied when on desktop
    backgroundSize: backgroundSize,
  };

  const mobileBackgroundStyle = {
    backgroundImage: 'url(/images/troy-t-dX76Mts-LVM-unsplash.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    backgroundSize: 'cover', // We're using 'cover' here as a default for mobile
  };

  return (
    <motion.section
      className="w-full h-1/2 sm:bg-cover"
      style={
        typeof window !== 'undefined' && window.innerWidth >= 1025
          ? desktopBackgroundStyle
          : mobileBackgroundStyle
      }
    >
      <div className="  h-96 flex justify-center items-center   w-full bg-transparent">
        <h2 className="absolute text-center sm:text-7xl text-white  shadow-md shadow-white">
          <span className="text-white">We offer high end studios</span>
        </h2>
      </div>
    </motion.section>
  );
};
export default CatchPhrase;
