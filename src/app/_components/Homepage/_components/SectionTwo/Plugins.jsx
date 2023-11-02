'use client';

import Image from 'next/image';
import { motion, useTransform, useScroll } from 'framer-motion';
import { pluginImages } from './data';

const Plugins = () => {
  const { scrollYProgress } = useScroll();

  const scaleBigger = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9],
    ['50%', '100%', '80%']
  );

  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.3, 1, 1]);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (id) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * id,
      },
    }),
  };

  return (
    <motion.ul
      className="sm:grid sm:grid-cols-3 w-3/4 gap-5 sm:justify-center mx-auto "
      style={{ scale: scaleBigger, opacity: textOpacity }}
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
            className={` w-full h-auto rounded-log`}
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
              sizes="100vw"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
              className="rounded-full border-2 border-yellow-300 shadow-md shadow-black"
            />
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
export default Plugins;
