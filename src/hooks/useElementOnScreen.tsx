import { type Ref, useState } from 'react';

import { useIntersectionObserver } from './useIntersectionObserver';

export const useElementOnScreen = <T extends HTMLElement>(
  options?: IntersectionObserverInit,
): [Ref<T>, boolean] => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const callback = ([entry]: IntersectionObserverEntry[]) => {
    setIsVisible(entry.isIntersecting);
  };

  const ref = useIntersectionObserver<T>(callback, options);

  return [ref, isVisible];
};
