import { NavLink, Outlet, useLocation } from 'react-router';
import Footer from './Footer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Front = () => {
  const { uid, isLogin } = useSelector((state) => state.loginSlice.loginStatus);
  const { identity } = useSelector((state) => state.loginSlice);
  const getUserId = (uid) => {
    let LoginPerson = identity.filter((person) => person.uid === uid);
    // console.log(LoginPerson);
    return LoginPerson[0].userId;
  };

  useEffect(() => {
    console.log(uid);
    if (isLogin) {
      console.log(getUserId(uid));
    }
  }, [isLogin]);

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
          {isLogin ? '已登入' : '登入'}
        </NavLink>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Front;
