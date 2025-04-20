import Typography from "@/primitives/Typography";

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
}

export default function FeaturedCard({ imageUrl, title, description }: IProps) {
  return (
    <div className="featured-card">
      <img src={imageUrl} className="featured-card__image" />
      <div className="featured-card__content">
        <Typography as="p" className="featured-card__title">
          {title}
        </Typography>
        <Typography as="p" className="featured-card__description">
          {description}
        </Typography>
      </div>
    </div>
  );
}
