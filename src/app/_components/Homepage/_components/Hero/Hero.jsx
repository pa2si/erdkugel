'use client';

import Image from 'next/image';
import styles from './Hero.module.css';
import { useRef, useEffect } from 'react';
import { motion, useTransform, useInView, useScroll } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselText from './CarouselText';
import AnimatedText from '@/utils/AnimatedText';
import ParallaxText from '@/utils/ParallaxText';

const Hero = () => {
  const logoRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.4, 0]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.4, 0]);

  return (
    <section
      className={`flex flex-col items-center h-screen relative ${styles.backgroundOpacity} `}
      id="transNav"
    >
      <motion.div
        ref={logoRef}
        variants={{
          hidden: { opacity: 0, y: 90 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
        className={`z-10 w-20 ${styles.logo}`}
      >
        <motion.div
          style={{
            opacity: logoOpacity,
            scale: logoScale,
          }}
        >
          {/* Moon Logo */}

          <Image
            src="/logos/erdkugel-logo-moon.webp"
            alt="erdkugel logo moon"
            width="0"
            height="0"
            priority={true}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              width: '53%',
              height: 'auto',
            }}
            className="mx-auto mb-3"
          />
        </motion.div>

        {/* Text Logo */}

        <motion.div
          style={{
            opacity: logoOpacity,
            scale: logoScale,
          }}
        >
          <Image
            src="/logos/erdkugel-logo-text.webp"
            alt="erdkugel text"
            width="0"
            height="0"
            priority={true}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              width: '90%',
              height: 'auto',
            }}
            className="mx-auto"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute  text-white bottom-0 w-4/6 h-8 "
        ref={logoRef}
        variants={{
          hidden: { opacity: 0, y: 90 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1, duration: 2 }}
        style={{
          opacity: logoOpacity,
          scale: logoScale,
        }}
      >
        {/*     <CarouselText /> */}
        {/*       <ParallaxText
          text="movie sound post production + dialogue editing + cinema sound mixing + cinema mixing studio building + "
          baseVelocity={1}
        /> */}
      </motion.div>
    </section>
  );
};
export default Hero;
