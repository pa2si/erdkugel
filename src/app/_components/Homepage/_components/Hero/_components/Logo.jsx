import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Logo = () => {
  const { scrollYProgress } = useScroll();
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0]);
  const logoYScroll = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const logoRef = useRef(null);
  return (
    <motion.div
      ref={logoRef}
      variants={{
        hidden: { opacity: 0, y: 90 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
      className=" grid grid-rows-2 justify-center  "
    >
      {/* Moon Logo */}
      <motion.div
        style={{
          opacity: logoOpacity,
          scale: logoScale,
          y: logoYScroll,
        }}
        className="h-[auto]  w-32 mx-auto mb-3 mt-3"
      >
        <Image
          src="/logos/erdkugel-logo-moon.webp"
          alt="erdkugel logo moon"
          width="0"
          height="0"
          priority={true}
          sizes="100vw"
          className="w-full h-full object-cover "
        />
      </motion.div>

      {/* Text Logo */}
      <motion.div
        style={{
          opacity: logoOpacity,
          scale: logoScale,
          y: logoYScroll,
        }}
      >
        <div className="w-[auto] h-16">
          <Image
            src="/logos/erdkugel-logo-text.webp"
            alt="erdkugel text"
            width="0"
            height="0"
            priority={true}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Logo;
