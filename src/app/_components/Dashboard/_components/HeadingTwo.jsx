'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useWindowSize } from '@/utils/useWindowSize';

const HeadingTwo = () => {
  const { scrollYProgress } = useScroll();

  const textYValue = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, -1100, -2000 * 2]
  );
  const imageYValue = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, -300, -800 * 2]
  );
  const scaleBigger = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.6]);
  return (
    <motion.div
      style={{
        background:
          'linear-gradient(to left, rgba(93, 65, 87, 0.7), rgba(168, 202, 186, 0.7))',

        y: imageYValue,
        height: '150vh',
      }}
    >
      <motion.div
        className="h-screen opacity-80"
        style={{
          y: imageYValue,
        }}
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
            height: 'auto',
          }}
          className=""
        />
      </motion.div>
      <motion.h2
        className=" text-center w-full text-7xl max-w-full mx-auto "
        style={{ y: textYValue }}
      >
        <span className="text-white">what does erdkugel do?</span>
      </motion.h2>{' '}
    </motion.div>
  );
};
export default HeadingTwo;
