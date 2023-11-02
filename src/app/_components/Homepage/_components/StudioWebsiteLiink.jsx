'use client';

import { motion, useTransform, useScroll } from 'framer-motion';

const StudioWebsiteLiink = () => {
  const { scrollYProgress } = useScroll();
  const textYValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -200, -600 * 2]
  );

  const scaleBigger = useTransform(scrollYProgress, [0, 0.6, 1], [0.2, 1, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 1]);
  return (
    <motion.div
      className=""
      style={{ /* y: textYValue, */ scale: scaleBigger, opacity: textOpacity }}
    >
      <p className="w-1/2 text-center mx-auto text-4x text-5xl mb-5 leading-tight ">
        <span className="text-white">click</span> here to enter our Studio
        Website
      </p>
      <div className="flex justify-center ">
        <button className="text-center text-2xl py-2 px-4 bg-yellow-300 bg-opacity-50  text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75">
          erdkugel studio berlin
        </button>
      </div>
    </motion.div>
  );
};

export default StudioWebsiteLiink;
