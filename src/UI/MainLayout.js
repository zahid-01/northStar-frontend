import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
// import FooterPart from "../components/Footer/FooterPart";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <FooterPart /> */}
    </>
  );
};

export default MainLayout;
