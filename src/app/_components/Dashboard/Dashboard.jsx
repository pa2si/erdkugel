'use client';

import Image from 'next/image';
import { motion, useTransform, useScroll, useInView } from 'framer-motion';
import styles from './Dashboard.module.css';
import HeadingOne from './_components/HeadingOne';
import HeadingTwo from './_components/HeadingTwo';
import DialogueHeading from './_components/DialogueHeading';
import DialogueText from './_components/DialogueText';
import StudioWebsiteLiink from './_components/StudioWebsiteLiink';
import Plugins from './_components/Plugins';
import { useRef, useEffect } from 'react';
import { useGlobalContext } from '@/utils/context';
import { usePathname } from 'next/navigation';

const Homepage = () => {
  const { scrollYProgress } = useScroll();

  const logoYValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 400, 20 * 2]
  );

  const logoXValue = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [0, -1200, -1800 * 2]
  );
  const logoScale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.4, 0]);

  const logoOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0.4, 0]);

  const logoRef = useRef(null);
  const isInView = useInView(logoRef);
  const { setIsLogoInView } = useGlobalContext();

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      setIsLogoInView(isInView);
    }
  }, [isInView, setIsLogoInView, pathname]);

  return (
    <main>
      {/*       <h1 className="hidden">Welcome to Erdkugel</h1> */}
      <section
        style={
          {
            /*       x: logoXValue, */
            /*      opacity: logoOpacity, */
            /*         scale: logoScale, */
            /*    y: logoYValue, */
          }
        }
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
              /*       x: logoXValue, */
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

      {/*    <HeadingOne /> */}
      <HeadingTwo />
      {/*    <Plugins /> */}
      <DialogueText />
      <StudioWebsiteLiink />
    </main>
  );
};

export default Homepage;
