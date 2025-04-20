import Typography from "@/primitives/Typography";
import CrossIcon from "@/assets/icons/cross.svg";
import LogoIcon from "@/assets/icons/logo.svg";
import cn from "clsx";
import { ISidebarMenuItem } from "./types";
import IconButton from "@/primitives/IconButton";
import { useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { MEDIA_SCREEN_MOBILE } from "@/theme/adaptive";
import { toggleBodyOverflow } from "@/util";

interface IProps {
  open?: boolean;
  onClose: () => void;
}

const sidebarMenuItems: ISidebarMenuItem[] = [
  { title: "МЕНЮ", href: "#menu" },
  { title: "О НАС", href: "#about" },
  { title: "КОНТАКТЫ", href: "#contact" },
];

export default function Sidebar({ open, onClose }: IProps) {
  const isMobile = useMediaQuery({ query: MEDIA_SCREEN_MOBILE });
  useLayoutEffect(() => {
    if (isMobile) toggleBodyOverflow(open);
  }, [open, isMobile]);
  return (
    <>
      {open && <div className="sidebar__overlay" onClick={onClose} />}
      <div className={cn("sidebar", open && "sidebar--open")}>
        <LogoIcon className="sidebar__logo" fill="white" />
        <IconButton onClick={onClose} className="sidebar__close">
          <CrossIcon fill="white" />
        </IconButton>
        <SidebarMenu items={sidebarMenuItems} />
        <div className="sidebar__footer">
          <div className="sidebar__contact">
            <Typography className="sidebar__tel">
              ЗАКАЗАТЬ ПО ТЕЛЕФОНУ
            </Typography>
            <Typography className="sidebar__telno">
              +7 (918) 432-65-87
            </Typography>
            <Typography className="sidebar__time">
              Ежедневно с 9:00 до 23:00
            </Typography>
          </div>
          <Typography as="p" className="sidebar__locale">
            ENGLISH
          </Typography>
        </div>
      </div>
    </>
  );
}

function SidebarMenu({ items }: { items: ISidebarMenuItem[] }) {
  return (
    <div className="sidebar__menu">
      {items.map((item, index) => (
        <>
          <SidebarMenuItem key={item.title} item={item} />
          {index < items.length - 1 && (
            <div className="sidebar__menu-separator" />
          )}
        </>
      ))}
    </div>
  );
}

function SidebarMenuItem({ item }: { item: ISidebarMenuItem }) {
  return (
    <div className="sidebar__menu-item">
      <a href={item.href}>{item.title}</a>
    </div>
  );
}
