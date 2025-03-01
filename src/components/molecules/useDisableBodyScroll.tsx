import { useEffect } from 'react';

const useDisableBodyScroll = (isActive) => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isActive]);
};

export default useDisableBodyScroll;