'use client';

import AnimatedText from '@/utils/AnimatedText';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const UnderConstruction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);
  return (
    <motion.div
      className=" text-center w-full  mx-auto xxs:text-xl xs:text-2xl sm:text-3xl leading-normal pt-7 bg-gradient-to-b from-transparent to-slate-50"
      ref={ref}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 1,
      }}
    >
      <AnimatedText text="more exciting content to come..." />
    </motion.div>
  );
};
export default UnderConstruction;
