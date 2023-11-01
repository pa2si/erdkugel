import { motion, useTransform, useScroll } from 'framer-motion';

const DialogueText = () => {
  const { scrollYProgress } = useScroll();

  const textYValue = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 500, -800 * 2]
  );
  const scaleBigger = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 1]);
  return (
    <motion.h3
      className="text-center w-3/4 mx-auto text-4xl leading-normal"
      style={{ /* y: textYValue, */ scale: scaleBigger, opacity: textOpacity }}
    >
      We are the <span className="text-white">storytellers</span> behind the
      scenes, <span className="text-yellow-300">sculpting</span> voices and
      emotions to bring characters to <span className="text-white">life</span>.
      We are the unseen <span className="text-orange-900">architects</span>,
      ensuring <span className="text-white">every word is heard </span>,{' '}
      <span className="text-orange-900">every emotion felt </span>.
    </motion.h3>
  );
};
export default DialogueText;
