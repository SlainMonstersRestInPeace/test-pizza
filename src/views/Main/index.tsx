import Header from "@/components/Header";
import Offer from "@/views/Main/elements/Offer";
import Featured from "@/views/Main/elements/Featured";
import Menu from "@/views/Main/elements/Menu";
import Order from "@/views/Main/elements/Order";
import About from "@/views/Main/elements/About";
import Social from "@/views/Main/elements/Social";
import Footer from "@/components/Footer";
import Sidebar from "./elements/Sidebar";
import Modal from "@/primitives/Modal";
import OrderForm from "@/components/OrderForm";
import { orderItems } from "@/components/OrderForm/data";
import { useState } from "react";
import { MEDIA_SCREEN_DESKTOP } from "@/theme/adaptive";
import { useMediaQuery } from "react-responsive";

const useToggler = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const open = () => setValue(true);
  const close = () => setValue(false);

  return [value, open, close] as const;
};

export default function Main() {
  const [sidebarOpen, openSidebar, closeSidebar] = useToggler();
  const [modalOpen, openModal, closeModal] = useToggler();
  const isDesktop = useMediaQuery({ query: MEDIA_SCREEN_DESKTOP });

  return (
    <>
      <Header onMenuClick={openSidebar} onCartClick={openModal} />
      <Offer />
      <Featured />
      <Menu />
      <Order />
      <About />
      <Social />
      <Footer />
      {!isDesktop && <Sidebar open={sidebarOpen} onClose={closeSidebar} />}
      <Modal open={modalOpen} onClose={closeModal} width={704}>
        <OrderForm onClose={closeModal} items={orderItems} />
      </Modal>
    </>
  );
}
