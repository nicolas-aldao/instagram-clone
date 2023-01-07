import { useState, useEffect, useRef } from 'react';

export function useNearScreen() {
  const element = useRef(null);
  const [show, setShow] = useState(null);

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer'),
    ).then(() => {
      const observer = new window.IntersectionObserver(
        // receives a function to run actions to entries that are in the viewport
        // and are being observed
        function (entries) {
          const { isIntersecting } = entries[0]; // is visible on the viewport
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        },
      );
      observer.observe(element.current); // the element we want to observe
    });
  }, [element.current]);

  return [show, element];
}
