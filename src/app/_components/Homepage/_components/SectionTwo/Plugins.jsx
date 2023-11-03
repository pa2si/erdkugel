'use client';

import Image from 'next/image';
import { motion, useTransform, useScroll } from 'framer-motion';
import { pluginImages } from './data';

const Plugins = () => {
  const { scrollYProgress } = useScroll();

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (id) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * id,
      },
    }),
  };

  return (
    <motion.ul
      className=" grid grid-cols-3 w-full gap-5 sm:justify-center mx-0 sm:mx-auto "
      transition={{
        duration: 1,
        type: 'spring',
        stiffness: 100,
        damping: 7,
        mass: 1,
      }}
    >
      {pluginImages.map((pluginImage) => {
        const { id, src, alt, bgColor } = pluginImage;
        return (
          <motion.li
            key={id}
            className=" max-w-sm h-auto rounded-log"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={id}
          >
            <Image
              src={src}
              alt={alt}
              width="0"
              height="0"
              priority={true}
              sizes="100vw"
              className="rounded-full border-2 border-yellow-300 shadow-md shadow-black w-20 sm:w-full sm:h-full"
              style={{
                objectFit: 'cover',
              }}
            />
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
export default Plugins;
