import { Outlet, useLocation } from 'react-router';
import Footer from './Footer';
import Header from "./Header";
import { useEffect } from 'react';

const Front = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Front;
