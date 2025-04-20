import AboutCard from "@/components/AboutCard";

import cn from "clsx";
import { aboutItems } from "./data";
import { useMediaQuery } from "react-responsive";
import { MEDIA_SCREEN_MOBILE } from "@/theme/adaptive";

export default function About() {
  const isMobile = useMediaQuery({ query: MEDIA_SCREEN_MOBILE });
  return (
    <div className={cn("about", "content-wrapper")}>
      <div className={cn("about__content", "content")}>
        {aboutItems.map((item, index) => (
          <div className="about__card-wrapper">
            <AboutCard
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              placement={isMobile || index % 2 === 0 ? "left" : "right"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
