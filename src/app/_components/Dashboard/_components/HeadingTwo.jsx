'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';

const HeadingTwo = () => {
  const { scrollYProgress } = useScroll();

  const textYValue = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, -300, -800 * 2]
  );
  const scaleBigger = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.6]);
  return (
    <motion.h2
      className=" text-center w-3/4 text-7xl max-w-full mx-auto "
      style={{ y: textYValue, scale: scaleBigger, opacity: textOpacity }}
    >
      what does<span className="text-white"> erdkugel</span> do?
    </motion.h2>
  );
};
export default HeadingTwo;
