import LogoIcon from "@/assets/icons/logo.svg";

import MenuListItem from "./MenuListItem";
import Telephone from "@/assets/icons/telephone.svg";
import Cart from "@/assets/icons/cart.svg";
import IconButton from "@/primitives/IconButton";
import MenuIcon from "@/assets/icons/menu.svg";

import cn from "clsx";
import useHeaderVisible from "./useHeaderVisible";

interface IProps {
  onMenuClick?: () => void;
  onCartClick?: () => void;
  fixedLayout?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

export default function HeaderWrapper(
  props: Omit<IProps, "ref" | "fixedLayout">,
) {
  const { setHeaderEl, isVisible } = useHeaderVisible();
  return (
    <>
      <Header {...props} ref={setHeaderEl} />
      {!isVisible && <Header {...props} fixedLayout />}
    </>
  );
}

// TODO Сайдбар по нажатию на кнопку меню
function Header({ onMenuClick, onCartClick, fixedLayout, ref }: IProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "header",
        "content-wrapper",
        fixedLayout && "header__sticky",
      )}
    >
      <header className={cn("header__content", "content")}>
        <div className="header__left">
          <LogoIcon className="header__logo" />
          <nav className="header__nav">
            <a href="#" className="header__menu-item">
              МЕНЮ
            </a>
            <a href="#" className="header__menu-item">
              О НАС
            </a>
            <a href="#" className="header__menu-item">
              КОНТАКТЫ
            </a>
          </nav>
        </div>
        <div className="header__right">
          <div className="header__menu-items">
            <MenuListItem
              compact={fixedLayout}
              Icon={Telephone}
              primary={
                <span className="header__telno">+7 (918) 432-65-87</span>
              }
              secondary="Ежедневно с 9:00 до 23:00"
            />
            <MenuListItem
              compact={fixedLayout}
              Icon={Cart}
              primary="ВАШ ЗАКАЗ"
              secondary="Итальянская и ещё 2 пиццы"
              counter={3}
              onClick={onCartClick}
            />
          </div>
          <div className="header__right-buttons">
            <div className="header__locale-switcher">
              <span>EN</span>
            </div>
            <IconButton className="header__menu-button" onClick={onMenuClick}>
              <MenuIcon fill="black" width={40} height={40} />
            </IconButton>
          </div>
        </div>
      </header>
    </div>
  );
}
