'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { StudioOfferItems } from './data';

const StudioOffersList = () => {
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
      className="mt-3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 p-4 "
      transition={{
        duration: 1,
        type: 'spring',
        stiffness: 100,
        damping: 7,
        mass: 1,
      }}
    >
      {StudioOfferItems.map((item, index) => {
        const { id, title, src, alt, description } = item;
        return (
          <div
            key={id}
            className="transition-all duration-300 transform hover:shadow-lg hover:scale-105"
          >
            <motion.li
              className="bg-white rounded-lg shadow-lg overflow-hidden "
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="relative w-full h-56 md:h-64 lg:h-80 xl:h-96">
                <Image
                  src={src}
                  alt={alt}
                  width="0"
                  height="0"
                  sizes="100vw"
                  priority={true}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-3xl font-semibold mb-3">{title}</h3>
                <p className="text-xl">{description}</p>
              </div>
            </motion.li>
          </div>
        );
      })}
    </motion.ul>
  );
};

export default StudioOffersList;
