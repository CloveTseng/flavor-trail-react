import { Outlet } from "react-router";
import AboutUsPage from "../pages/AboutUsPage";

const Front = () => {
  return (
    <Outlet />,
    <AboutUsPage />
  )
};

export default Front;
