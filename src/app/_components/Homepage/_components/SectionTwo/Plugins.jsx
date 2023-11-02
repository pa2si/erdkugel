'use client';

import Image from 'next/image';
import { motion, useTransform, useScroll } from 'framer-motion';

const Plugins = () => {
  const { scrollYProgress } = useScroll();

  const textYValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -300, -800 * 2]
  );

  const scaleBigger = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9],
    ['50%', '100%', '80%']
  );
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.6]);

  return (
    <motion.div
      className="sm:flex sm:flex-cols-3 w-3/4 gap-5 sm:justify-center mx-auto "
      style={{ scale: scaleBigger, opacity: textOpacity }}
      transition={{
        duration: 1,
        type: 'spring',
        stiffness: 100,
        damping: 7,
        mass: 1,
      }}
    >
      <div className=" w-full h-5  ">
        <Image
          src="/images/nugen.jpg"
          alt="nugen"
          width="0"
          height="0"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: 'auto',
          }}
          className="rounded-full border-2 border-yellow-300 shadow-md shadow-black"
        />
      </div>
      <div className="w-full">
        <Image
          src="/images/Izotope.jpeg"
          alt="nugen"
          width="0"
          height="0"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          className="rounded-full border-2 border-yellow-300 shadow-md shadow-black"
        />
      </div>
      <div className=" w-full">
        <Image
          src="/images/autoAlign.jpeg"
          alt="nugen"
          width="0"
          height="0"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: 'auto',
          }}
          className="rounded-full border-2 border-yellow-300 shadow-md shadow-black"
        />
      </div>
    </motion.div>
  );
};
export default Plugins;
