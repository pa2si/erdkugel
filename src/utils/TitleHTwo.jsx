'use client';

import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const TitleHTwo = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const pathname = usePathname();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -300 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 1,
      }}
      id="logoOpacityTarget"
      className="flex items-center p-1"
    >
      <div
        ref={ref}
        style={{ marginLeft: '0.9rem', height: 'auto', width: '16rem' }}
      >
        {pathname === '/' && (
          <Image
            src="/logos/erdkugel-logo-text.webp"
            alt="erdkugel logo text"
            width="260"
            height="260"
            priority={true}
            sizes="100vw"
            className="w-full h-full object-cover"
            style={{ paddingTop: '0.8rem' }}
          />
        )}
      </div>
      <div ref={ref} style={{ marginLeft: '1rem' }}>
        {pathname === '/' && (
          <Image
            src="/logos/erdkugel-logo-moon.webp"
            alt="erdkugel logo moon"
            width="59"
            height="59"
            priority={true}
            sizes="100vw"
          />
        )}
      </div>
      <h2
        className="text-5xl "
        style={{ width: '20rem', whiteSpace: 'nowrap' }}
      >
        {text}
      </h2>
    </motion.div>
  );
};
export default TitleHTwo;
