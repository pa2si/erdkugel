'use client';

import Image from 'next/image';
import { motion, useTransform, useScroll } from 'framer-motion';
import styles from './Dashboard.module.css';

const Homepage = () => {
  const { scrollYProgress } = useScroll();

  // Define the scrolling logic for the logo, text, and other elements
  const logoYValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 400, 20 * 2]
  );
  const textYValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -600, -200 * 2]
  );
  const logoXValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -500, -900 * 2]
  );
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.4, 0]);

  const scaleBigger = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1.9, 1.7]
  );

  const diaValue = useTransform(scrollYProgress, [0, 0.5, 1], [0, -100, 0 * 2]);

  const logoOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0, 0]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 0]);

  return (
    <main>
      {/* <h1 className="hidden">Welcome to Erdkugel</h1> */}
      <section
        className={`flex flex-col items-center h-screen relative ${styles.backgroundOpacity}`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={`z-10 ${styles.logo}`}
          style={{
            y: logoYValue,
            x: logoXValue,
            opacity: logoOpacity,
            scale: logoScale,
          }}
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
      </section>

      <motion.h1
        className="mb-96 w-3/4 max-w-4xl text-center mx-auto"
        style={{ y: textYValue, scale: scaleBigger, opacity: textOpacity }}
      >
        Welcome to the <span className="text-white">artistry</span> of
        <span className="text-slate-500"> cinematic enchantment </span>
      </motion.h1>
      <motion.h1
        className="mb-96 w-3/4 max-w-4xl text-center mx-auto"
        style={{ y: textYValue, scale: scaleBigger, opacity: textOpacity }}
      >
        Welcome to the <span className="text-white">artistry</span> of
        <span className="text-slate-500"> cinematic enchantment </span>
      </motion.h1>

      {/*   <motion.h2
        className="text-center w-3/4 max-w-4xl mx-auto mb-96"
        style={{ y: textYValue, scale: scaleBigger, opacity: textOpacity }}
      >
        what does<span className="text-white"> erdkugel</span> do?
      </motion.h2> */}

      <motion.section className=" h-screen " style={{}}>
        <article className="h-1/2 w-4/5 mx-auto border drop-shadow-lg flex sm:grid sm:grid-cols-2">
          <div className=" flex justify-end mr-10">
            <Image
              src="/images/dialogue-background.webp"
              alt="dialogue waveform"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                objectFit: 'cover',
                width: '80%',
                height: 'auto',
              }}
            />
          </div>
          <div>
            <div className="  flex flex-col justify-center h-full">
              <h2 className="">
                erdkugel stands for dialogue editing wizardry
              </h2>
              <h3 style={{ width: '70%' }}>
                We are the storytellers behind the scenes, sculpting voices and
                emotions to bring characters to life. We are the unseen
                architects, ensuring every word is heard, every emotion felt.
              </h3>
            </div>
          </div>
        </article>

        <article className="h-1/2"></article>
      </motion.section>
    </main>
  );
};

export default Homepage;
