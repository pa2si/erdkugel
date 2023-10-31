import {
  motion,
  useTransform,
  useScroll,
  useInView,
  useAnimation,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

export const DashboardSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <section ref={ref} style={{}}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 90 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 2, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </section>
  );
};
