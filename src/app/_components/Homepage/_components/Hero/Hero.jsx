'use client';

import Image from 'next/image';
import styles from './Hero.module.css';
import { useGlobalContext } from '@/utils/context';
import { usePathname } from 'next/navigation';
import { useRef, useEffect } from 'react';
import { motion, useTransform, useInView, useScroll } from 'framer-motion';
import AnimatedText from '@/utils/AnimatedText';

const Hero = () => {
  const logoRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const logoScale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.4, 0]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0.4, 0]);

  const isInView = useInView(logoRef);
  const { setIsLogoInView } = useGlobalContext();

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      setIsLogoInView(isInView);
    }
  }, [isInView, setIsLogoInView, pathname]);

  return (
    <section
      className={`flex flex-col items-center h-screen relative ${styles.backgroundOpacity} `}
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
    </section>
  );
};
export default Hero;
