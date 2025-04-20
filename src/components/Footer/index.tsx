import LogoIcon from "@/assets/icons/logo.svg";
import Typography from "@/primitives/Typography";

import cn from "clsx";

export default function Footer() {
  return (
    <div className={cn("footer", "content-wrapper")}>
      <div className={cn("footer__content", "content")}>
        <div className="footer__left">
          <LogoIcon className="footer__logo" fill="white" />
          <div className="footer__contact">
            <p className="footer__telno">+7 (918) 432-65-87</p>
            <p className="footer__text">Ежедневно с 9:00 до 23:00</p>
          </div>
        </div>
        <Typography as="p" className="footer__text">
          Политика конфиденциальности
        </Typography>
      </div>
    </div>
  );
}
