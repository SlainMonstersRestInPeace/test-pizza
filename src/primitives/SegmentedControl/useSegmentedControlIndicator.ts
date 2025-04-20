import { useLayoutEffect, useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";

const selectedItemCn = ".segmented-control__item--selected";
const itemCn = ".segmented-control__item";

export const useSegmentedControlIndicator = (value: string, delay = 100) => {
  const refContainer = useRef<HTMLDivElement | null>(null);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resizeCallback = (container: HTMLDivElement) => {
    let element = container.querySelector(selectedItemCn);

    if (!element) {
      element = container.querySelector(itemCn);
    }

    if (element) {
      setWidth(element.clientWidth);
      setHeight(element.clientHeight);
      setLeft((element as HTMLDivElement).offsetLeft);
    }
  };

  useEffect(() => {
    const container = refContainer.current;
    if (!container) return;

    const observer = new ResizeObserver(
      debounce(() => resizeCallback(container), delay),
    );
    observer.observe(container);

    return () => observer.disconnect();
  }, [delay]);

  useLayoutEffect(() => {
    if (refContainer.current) {
      resizeCallback(refContainer.current);
    }
  }, [value]);

  return { refContainer, width, left, height };
};
