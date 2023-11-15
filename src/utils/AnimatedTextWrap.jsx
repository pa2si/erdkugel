'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.05,
    },
  },
};

const AnimatedText = ({
  text,
  el: Wrapper = 'p',
  className,
  once,
  repeatDelay,
  startDelay = 0, // Add a default value for startDelay
  animation = defaultAnimations,
}) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    // Only start the timeout if the element is in view
    if (isInView) {
      const timeout = setTimeout(() => {
        controls.start('visible').then(() => {
          // If repeatDelay is set, continue with the repeating logic after the visible animation
          if (repeatDelay) {
            setTimeout(async () => {
              await controls.start('hidden');
              controls.start('visible');
            }, repeatDelay);
          }
        });
      }, startDelay * 1000); // Multiply by 1000 to convert seconds to milliseconds

      // Return a cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timeout);
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls, repeatDelay, startDelay]); // Add startDelay to the dependencies array

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.04 } },
          hidden: {},
        }}
        aria-hidden="true"
      >
        {textArray.map((line, lineIndex) => (
          <span key={`${line}-${lineIndex}`}>
            {line.split(' ').map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block"> </span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
