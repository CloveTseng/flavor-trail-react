import { Outlet, useLocation } from 'react-router';
import Footer from './Footer';
import Header from './Header';
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
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Front;
