import { Outlet } from 'react-router';
import AccountNav from '../components/account/AccountNav';

function Account() {
  return (
    <>
      <div className="container">
        <AccountNav />
        <Outlet />
      </div>
    </>
  );
}
export default Account;
