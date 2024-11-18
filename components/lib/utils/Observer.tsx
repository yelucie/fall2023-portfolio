// utils/IntersectionObserverUtil.ts
import { useEffect, useState, RefObject } from 'react';

const IntersectionObserverUtil = (
  targetRef: RefObject<HTMLElement>,
  rootRef: RefObject<HTMLElement>
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const targetElement = targetRef.current;
    const rootElement = rootRef.current;

    if (!targetElement || !rootElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.intersectionRatio === 1.0);
      },
      {
        root: rootElement,
        threshold: 1.0,
      }
    );

    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, rootRef]);

  return isIntersecting;
};

export default IntersectionObserverUtil;
