'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { branchesList } from './data';
import { useGlobalContext } from '@/utils/context';

const BranchesList = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (id) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 * id,
      },
    }),
  };

  const { openModal } = useGlobalContext();

  return (
    <motion.ul
      className=" mt-1 w-full grid grid-cols-1 xl:grid-cols-2 gap-7 p-4  "
      transition={{
        duration: 4,
        type: 'spring',
        stiffness: 100,
        damping: 7,
        mass: 1,
      }}
    >
      {branchesList.map((branch) => {
        const {
          id,
          title1,
          title2,
          src,
          alt,
          description1,
          description2,
          buttonText,
          idTarget,
        } = branch;

        return (
          <article
            key={id}
            className="bg-white h-full rounded-tr-xl shadow-lg overflow-hidden flex flex-col"
          >
            <motion.li
              className="bg-white h-full rounded-tr-xl shadow-lg overflow-hidden flex flex-col"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={id}
            >
              <div
                className="relative w-full h-56 md:h-64 lg:h-80 xl:h-96 pt-2 px-2 mb-2 transition-all ease-in-out duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer"
                id={idTarget}
                onClick={() => openModal(id)}
              >
                <Image
                  src={src}
                  alt={alt}
                  width="0"
                  height="0"
                  sizes="100vw"
                  priority={true}
                  className="rounded-tr-xl object-cover w-full h-full transition duration-300 ease-linear group-hover:blur"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <span className="text-white text-xl">
                    click for contact:{' '}
                  </span>
                </div>
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-black text-3xl font-semibold ">{title1}</h3>
                <h4 className="text-2xl font-semibold mb-3 ">{title2}</h4>
                <p className="text-xl">{description1}</p>
                <p className="text-xl mt-4">{description2}</p>
              </div>
              <div className="flex justify-center ">
                <button
                  className=" bg-zinc-700 hover:bg-opacity-70 hover:text-erdkugel-yellow hover:text-xl tracking-widest flex-grow text-white text-lg p-2 border-xl transition-all duration-300 rounded border-transparent  focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-opacity-50"
                  onClick={() => openModal(branch.id)}
                >
                  {buttonText}
                </button>
              </div>
            </motion.li>
          </article>
        );
      })}
    </motion.ul>
  );
};

export default BranchesList;
