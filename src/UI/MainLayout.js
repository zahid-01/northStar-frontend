import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import FooterPart from "../components/Footer/FooterPart";
import ScrollToTop from "../components/Header/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <FooterPart />
    </>
  );
};

export default MainLayout;
