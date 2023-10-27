'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';

const HeadingOneCopy = () => {
  const { scrollYProgress } = useScroll();

  const textYValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -600, -2000 * 2]
  );
  const scaleBigger = useTransform(scrollYProgress, [0, 0.3, 1], [0.5, 1, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 0.6]);

  return (
    <motion.div
      className="w-full"
      style={{
        backgroundImage:
          'url(/images/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg)',
        backgroundSize: 'cover',
        height: '30rem',
        backgroundPosition: 'center',
        /*    y: textYValue,
        scale: scaleBigger,
        opacity: textOpacity, */
      }}
    >
      <h1 className=" mb-96 w-5/6 text-7xl max-w-max text-center mx-auto sm:leading-tight">
        Welcome to the <span className="text-white">ARTistry</span> of
        <span className="text-yellow-300">
          {' '}
          CINEMATIC <soan className="text-white">ENCHANTMENT</soan>
        </span>
      </h1>
    </motion.div>
  );
};

export default HeadingOneCopy;
