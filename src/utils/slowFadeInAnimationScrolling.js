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

export const useScrollBlurEffect = () => {
  const { scrollY } = useScroll(); // use scrollY instead of scrollYProgress for more control

  const [blur, setBlur] = useState(0);
  const startPoint = 0.2; // The point in the scroll where blur starts (20% of the page height)
  const endPoint = 0.8; // The point where blur reaches its maximum (50% of the page height)
  const maxBlur = 5; // Maximum blur value

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const scrollY = latest;
      const windowHeight = window.innerHeight;
      // Calculate the scroll position relative to the start and end points
      const relativeY = Math.max(0, scrollY - startPoint * windowHeight);
      const blurValue =
        (relativeY / ((endPoint - startPoint) * windowHeight)) * maxBlur;
      setBlur(Math.min(maxBlur, blurValue));
    });
  }, [scrollY, startPoint, endPoint, maxBlur]);

  return blur;
};
