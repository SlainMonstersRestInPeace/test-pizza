import Typography from "@/primitives/Typography";

interface IProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

export default function OrderCard({ icon, title, description }: IProps) {
  return (
    <div className="order-card">
      {icon}
      <div className="order-card__content">
        <Typography as="h4" variant="Heading-4">
          {title}
        </Typography>
        <p className="order-card__description">{description}</p>
      </div>
    </div>
  );
}
