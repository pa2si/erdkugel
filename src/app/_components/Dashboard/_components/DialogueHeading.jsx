import Image from 'next/image';
import {
  motion,
  useInView,
  useAnimation,
  useTransform,
  useScroll,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useScrollBlurEffect } from '@/utils/slowFadeInAnimationScrolling';
import Plugins from './Plugins';

const DialogueHeading = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const startFraction = 0.2; // Blur effect starts at 20% scroll
  const endFraction = 0.5; // Blur effect ends at 50% scroll
  const maxBlur = 10; // Maximum blur value

  const blurEffect = useScrollBlurEffect(startFraction, endFraction, maxBlur);

  const { scrollYProgress } = useScroll();

  const textYValue = useTransform(scrollYProgress, [0, 1], ['-80%', '100%']);

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <article
      className="  h-screen w-full relative"
      style={{
        backgroundImage:
          'linear-gradient(to left, rgba(250, 250, 250, 0.4), rgba(250, 250, 250, 0.4))',
      }}
    >
      <Image
        src="/images/richard-horvath-WOA3QKFjlo8-unsplash.jpg"
        alt="studio erdkugel"
        width="0"
        height="0"
        sizes="100vw"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          opacity: '0.9',
          filter: `blur(${blurEffect}px)`,
        }}
        className=""
      />

      <div className="flex justify-center">
        <motion.h2
          style={{ y: textYValue }}
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -300 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1 }}
          className="absolute text-center w-3/4 sm:text-5xl sm:leading-tight top-1/3  bg-white bg-opacity-40 p-10 rounded-2xl "
        >
          <span className="text-white">erdkugel</span> stands for
          <span className="text-yellow-300 "> SOUND POST PRODUCTION </span>
          and
          <span className="text-orange-900"> DIALOGUE EDITING </span>
          <span className="text-white"> wizardry</span>
          <Plugins className="absolute " />
        </motion.h2>
      </div>
    </article>
  );
};
export default DialogueHeading;
