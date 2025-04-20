import Typography from "@/primitives/Typography";
import { socialItems } from "./data";

export default function Social() {
  return (
    <div className="social">
      <div className="social__invitation">
        <Typography variant="Heading-2">Следите за нами в Instagram</Typography>
        {/* TODO */}
        <Typography variant="Heading-4" color="#848A9A" as="a">
          @pizzamenu
        </Typography>
      </div>
      <div className="social__inst-items">
        {socialItems.map(({ imageUrl }) => (
          <img src={imageUrl} className="social__inst-item" />
        ))}
      </div>
    </div>
  );
}
