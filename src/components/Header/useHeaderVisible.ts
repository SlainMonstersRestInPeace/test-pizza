import { useEffect, useState } from "react";

export default function useHeaderVisible() {
  const [isVisible, setIsVisible] = useState(true);
  const [headerEl, setHeaderEl] = useState<HTMLElement | null | undefined>();

  useEffect(() => {
    if (!headerEl) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(headerEl);

    return () => observer.disconnect();
  }, [headerEl]);

  return { setHeaderEl, isVisible };
}
