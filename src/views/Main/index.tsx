import Header from "@/components/Header";
import Offer from "@/views/Main/elements/Offer";
import Featured from "@/views/Main/elements/Featured";
import Menu from "@/views/Main/elements/Menu";
import Order from "@/views/Main/elements/Order";
import About from "@/views/Main/elements/About";
import Social from "@/views/Main/elements/Social";
import Footer from "@/components/Footer";

export default function Main() {
  return (
    <>
      <Header />
      <Offer />
      <Featured />
      <Menu />
      <Order />
      <About />
      <Social />
      <Footer />
    </>
  );
}
