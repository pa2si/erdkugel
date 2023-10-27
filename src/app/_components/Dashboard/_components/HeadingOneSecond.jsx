'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { useWindowWidth } from '@/utils/useWindowWidth';

const HeadingOneSecond = () => {
  const ref = useRef(null); // Move useRef inside the function component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.22 1'],
  });
  const windowWidth = useWindowWidth();

  const scaleRange = windowWidth && windowWidth >= 1000 ? [0.0, 2] : [1, 1];
  const opacityRange = windowWidth && windowWidth >= 1000 ? [0.6, 1] : [1, 1];

  const scaleProgress = useTransform(scrollYProgress, [0, 1], scaleRange);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], opacityRange);

  return (
    <motion.h1
      className="mb-96 w-3/4 max-w-4xl text-center mx-auto"
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      Welcome to the <span className="text-white">artistry</span> of
      <span className="text-slate-500"> cinematic enchantment </span>
    </motion.h1>
  );
};

export default HeadingOneSecond;
