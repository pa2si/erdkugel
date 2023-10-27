'use client';

import Image from 'next/image';
import { motion, useTransform, useScroll } from 'framer-motion';
import styles from './Dashboard.module.css';
import HeadingOne from './_components/HeadingOne';
import HeadingTwo from './_components/HeadingTwo';
import DialogueHeading from './_components/DialogueHeading';
import DialogueText from './_components/DialogueText';
import StudioWebsiteLiink from './_components/StudioWebsiteLiink';
import Plugins from './_components/Plugins';

const Homepage = () => {
  const { scrollYProgress } = useScroll();

  const logoYValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 400, 20 * 2]
  );

  const logoXValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -500, -900 * 2]
  );
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.4, 0]);

  const logoOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0, 0]);

  return (
    <main>
      {/* <h1 className="hidden">Welcome to Erdkugel</h1> */}
      <motion.section
        style={{
          y: logoYValue,
          x: logoXValue,
          opacity: logoOpacity,
          scale: logoScale,
        }}
        className={`flex flex-col items-center h-screen relative ${styles.backgroundOpacity} `}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={`z-10 ${styles.logo}`}
        >
          <Image
            src="/logos/erdkugel-logo.webp"
            alt="erdkugel logo"
            fill
            quality={100}
            priority={true}
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw"
          />
        </motion.div>
      </motion.section>

      <HeadingOne />
      <HeadingTwo />
      <DialogueHeading />
      <Plugins />
      <DialogueText />
      <StudioWebsiteLiink />
    </main>
  );
};

export default Homepage;
