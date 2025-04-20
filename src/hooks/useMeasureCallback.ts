import { DependencyList, useCallback, useEffect, useState } from "react";

export default function useMeasureCallback(
  callback: (clientRect: DOMRectReadOnly, element: Element) => void,
  deps: DependencyList,
) {
  // eslint-disable-next-line
  const innerCallback = useCallback(callback, [...deps]);

  const [element, setElement] = useState<HTMLElement | null | undefined>();

  useEffect(() => {
    if (!element) return;
    const observer = new ResizeObserver(([entry]) =>
      innerCallback(entry.contentRect, entry.target),
    );
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [element, innerCallback]);

  return [setElement, element] as const;
}
