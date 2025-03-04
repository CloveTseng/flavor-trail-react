import { Route, Routes } from 'react-router';
import AccountNav from '../components/account/AccountNav';

function Account() {
  return (
    <>
      <div className="container">
        <AccountNav />
        <Routes>
          <Route></Route>
        </Routes>
      </div>
    </>
  );
}
export default Account;
