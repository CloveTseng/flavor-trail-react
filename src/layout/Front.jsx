import { Outlet } from "react-router";
import Footer from "./Footer";
import AboutUsPage from "../pages/AboutUsPage";

const Front = () => {
  return (
    <Outlet />,
    <Footer />
    <AboutUsPage />
  )
};

export default Front;
