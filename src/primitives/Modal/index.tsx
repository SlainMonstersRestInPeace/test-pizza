import { PropsWithChildren, useState } from "react";
import cn from "clsx";
import { createPortal } from "react-dom";
import { toggleBodyOverflow } from "@/util";

interface IModalProps {
  open?: boolean;
  onClose?: () => void;
  contentCn?: string;
  width?: string | number;
}

export default function Modal({
  open,
  onClose,
  children,
  contentCn,
  width,
}: PropsWithChildren<IModalProps>) {
  const [internalOpen, setInternalOpen] = useState(false);
  return createPortal(
    <div
      className={cn("modal", open && "modal--open")}
      onTransitionStart={(e) => {
        if (e.target === e.currentTarget && open) {
          setInternalOpen(true);
          toggleBodyOverflow(true);
        }
      }}
      onTransitionEnd={(e) => {
        if (e.target === e.currentTarget && !open) {
          setInternalOpen(false);
          toggleBodyOverflow(false);
        }
      }}
    >
      {internalOpen && (
        <>
          <div className="modal__overlay" onClick={onClose} />
          <div style={{ width }} className={cn("modal__content", contentCn)}>
            <div className="modal__scroller">{children}</div>
          </div>
        </>
      )}
    </div>,
    document.body,
  );
}
