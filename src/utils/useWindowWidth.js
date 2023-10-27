import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  // Initialize state with undefined so server-side rendering works
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    // Only update windowWidth when the component is mounted
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};
