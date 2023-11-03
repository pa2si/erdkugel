'use client';

import {
  motion,
  useTransform,
  useScroll,
  useAnimation,
  useInView,
} from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useScrollBlurEffect } from '@/utils/slowFadeInAnimationScrolling';
import SectionTwo from '@/app/_components/Homepage/_components/SectionTwo/SectionTwo';

const SectionOne = () => {
  const ref = useRef(null);

  const controls = useAnimation();
  const bgRef = useRef(null);
  const isInView = useInView(bgRef);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const variants = {
    hidden: { scale: 0.85 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const textYValue = useTransform(scrollYProgress, [0, 1], ['-100', '-3500%']);
  const imageYValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['0%', '-100%', '-350%']
  );

  const blurEffect = useScrollBlurEffect();

  return (
    <motion.div
      ref={ref}
      style={{
        background:
          'linear-gradient(to left, rgba(93, 65, 87, 0.6), rgba(168, 202, 186, 0.6))',

        y: imageYValue,
        height: '200vh',
      }}
      className="relative"
    >
      <motion.div
        ref={bgRef}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ type: 'spring', stiffness: 100 }}
        className="h-screen"
      >
        {/* Background Image */}
        <Image
          src="/images/troy-t-dX76Mts-LVM-unsplash.webp"
          alt="studio erdkugel"
          width="0"
          height="0"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            opacity: '0.7',
            filter: `blur(${blurEffect}px)`,
          }}
        />
      </motion.div>
      <div className="flex justify-center">
        <motion.h2
          ref={ref}
          className="absolute text-center sm:text-7xl   text-white  shadow-md shadow-white"
          style={{ y: textYValue }}
        >
          <span className="text-white">what does erdkugel do?</span>
        </motion.h2>{' '}
      </div>
      <SectionTwo />
    </motion.div>
  );
};
export default SectionOne;
