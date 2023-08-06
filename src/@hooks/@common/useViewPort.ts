import { useEffect, useState } from 'react';

function useViewport() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [viewPort, setViewPort] = useState('');

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    if (window.innerWidth > 1000) {
      setViewPort('desktop');
    }
    if (window.innerWidth <= 1000) {
      setViewPort('tablet');
    }

    if (window.innerWidth <= 500) {
      setViewPort('mobile');
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    height,
    viewPort,
  };
}

export default useViewport;
