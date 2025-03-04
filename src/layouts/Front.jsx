import { NavLink, Outlet, useLocation } from 'react-router';
import Footer from './Footer';
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
      {/* Navbar 可以放這裡 */}
      <div className="d-flex">
        <NavLink className="btn btn-sm btn-outline-dark" to="/">
          首頁
        </NavLink>
        <NavLink className="btn btn-sm btn-outline-dark" to="/about-us">
          關於我們
        </NavLink>
        <NavLink className="btn btn-sm btn-outline-dark" to="/all-posts">
          所有貼文
        </NavLink>
        <NavLink className="btn btn-sm btn-outline-dark" to="/guide-line">
          使用指南
        </NavLink>
        <NavLink className="btn btn-sm btn-outline-dark" to="/event">
          活動
        </NavLink>
        <NavLink className="btn btn-sm btn-outline-dark" to="/login">
          登入
        </NavLink>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Front;
