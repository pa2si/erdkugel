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
      className=""
    >
      <div
        ref={ref}
        className="flex items-center text-erdkugel-text "
        style={{ width: '15rem', height: '3.5rem' }}
      >
        {pathname === '/' && (
          <Image
            src="/logos/erdkugel-logo-text.webp"
            alt="erdkugel logo text"
            width="0"
            height="0"
            priority={true}
            sizes="100vw"
            className="inline-block w-full h-full object-cover"
            style={{ marginRight: '1rem' }}
          />
        )}
        <h2
          className="text-5xl "
          style={{ width: '20rem', whiteSpace: 'nowrap' }}
        >
          {text}
        </h2>
      </div>
    </motion.div>
  );
};
export default TitleHTwo;
