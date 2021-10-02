import { useEffect, useState } from 'react';

const useLogo = (logo, mobileLogo) => {
  const [currentLogo, setCurrentLogo] = useState(logo);

  useEffect(() => {
    function resize() {
      if (window.innerWidth <= 576) {
        setCurrentLogo(mobileLogo);
      } else {
        setCurrentLogo(logo);
      }
    }

    window.addEventListener('resize', resize);
    resize();
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return currentLogo;
};

export default useLogo;
