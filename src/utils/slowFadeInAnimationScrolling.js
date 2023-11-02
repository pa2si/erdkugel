// Utils/slowFadeInAnimation.js
import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export const useFramerScaleEffect = (windowWidth) => {
  const { scrollYProgress } = useScroll();

  let start, end;

  if (windowWidth === undefined || windowWidth >= 1000) {
    start = [0, 0.25, 1];
    end = [0.8, 1, 1];
  } else {
    start = [1, 1];
    end = [1, 1];
  }

  return useTransform(scrollYProgress, start, end);
};

export const useFramerOpacityEffect = (windowWidth) => {
  const { scrollYProgress } = useScroll();

  let start, end;

  if (windowWidth === undefined || windowWidth >= 1000) {
    start = [0, 0.2, 1];
    end = [0.7, 1, 0];
  } else {
    start = [1, 1];
    end = [1, 1];
  }

  return useTransform(scrollYProgress, start, end);
};

export const useScrollBlurEffect = (
  startPoint = 0.2,
  endPoint = 0.8,
  maxBlur = 5
) => {
  const { scrollY } = useScroll();
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      const windowHeight = window.innerHeight;
      const relativeY = Math.max(0, latest - startPoint * windowHeight);
      const blurValue =
        (relativeY / ((endPoint - startPoint) * windowHeight)) * maxBlur;
      setBlur(Math.min(maxBlur, blurValue));
    });

    return () => unsubscribe();
  }, [scrollY, startPoint, endPoint, maxBlur]);

  return blur;
};
