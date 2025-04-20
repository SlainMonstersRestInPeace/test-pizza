import FeaturedCard from "@/components/FeaturedCard";
import { MEDIA_SCREEN_MOBILE } from "@/theme/adaptive";

import cn from "clsx";
import { useMediaQuery } from "react-responsive";
import { featuredItems, IFeaturedItem } from "./data";
import { useState } from "react";
import useMeasureCallback from "@/hooks/useMeasureCallback";

export default function Featured() {
  const isMobile = useMediaQuery({ query: MEDIA_SCREEN_MOBILE });
  const Component = isMobile ? FeaturedMobileSlider : FeaturedDesktop;
  return (
    <div className={cn("featured", "content-wrapper")}>
      <div className={cn("featured__content", "content")}>
        <Component items={featuredItems} />
      </div>
    </div>
  );
}

interface IProps {
  items: IFeaturedItem[];
}

function FeaturedDesktop({ items }: IProps) {
  return (
    <>
      {items.map((item, index) => (
        <FeaturedCard
          key={index}
          imageUrl={item.imageUrl}
          title={item.title}
          description={item.subtitle}
        />
      ))}
    </>
  );
}

// TODO Реакция слайдера на touch события
function FeaturedMobileSlider({ items }: IProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [setContainer] = useMeasureCallback(
    (rect: DOMRectReadOnly) => setContainerWidth(rect.width),
    [],
  );
  return (
    <div className="featured__slider">
      <div ref={setContainer} className="featured__slider-items">
        <div
          className="featured__slider-items-wrapper"
          style={{
            transform: `translateX(-${(containerWidth + 16) * currentIndex}px)`,
          }}
        >
          {items.map((item, index) => (
            <div
              className="featured__slider-item"
              style={{ minWidth: containerWidth }}
              key={index}
            >
              <FeaturedCard
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.subtitle}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="featured__slider-controls">
        {items.map((_, index) => (
          <div
            className={cn(
              "featured__slider-control",
              currentIndex === index && "featured__slider-control--active",
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
