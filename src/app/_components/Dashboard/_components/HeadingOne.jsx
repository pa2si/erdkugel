'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const HeadingOneCopy = () => {
  const { scrollYProgress } = useScroll();

  const textYValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -600, -2000 * 2]
  );
  const scaleBigger = useTransform(scrollYProgress, [0, 0.3, 1], [0.5, 1, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 0.6]);

  const screenSize = useMediaQuery({ minWidth: 414 });

  const conditionalStyles = screenSize
    ? { y: textYValue, scale: scaleBigger, opacity: textOpacity }
    : {};

  return (
    <motion.h1
      className="mb-96 sm:w-5/6 text-5xl sm:text-7xl text-center mx-auto sm:leading-tight"
      style={conditionalStyles}
    >
      Welcome to the <span className="text-white">ARTistry</span> of
      <span className="text-yellow-300">
        {' '}
        CINEMATIC <span className="text-white">ENCHANTMENT</span>
      </span>
    </motion.h1>
  );
};

export default HeadingOneCopy;
