import Typography from "@/primitives/Typography";

import cn from "clsx";

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
  placement?: "left" | "right";
}

export default function AboutCard({
  imageUrl,
  title,
  description,
  placement = "left",
}: IProps) {
  return (
    <div
      className={cn("about-card", placement === "right" && "about-card__right")}
    >
      <AboutImage src={imageUrl} />
      <div className="about-card__content">
        <Typography variant="Heading-3" className="about-card__title">
          {title}
        </Typography>
        <Typography variant="Body-3" className="about-card__description">
          {description}
        </Typography>
      </div>
    </div>
  );
}

const AboutImage = ({ src }: { src: string }) => (
  <div className="about-card__image-wrapper">
    <img src={src} className="about-card__image" />
  </div>
);
