import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const Front = () => {
  return (
    <>
      {/* Navbar 可以放這裡 */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Front;
