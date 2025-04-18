import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';

function AccountNav() {
  const location = useLocation();
  const [dropdownTitle, setDropdownTitle] = useState('我的發文');

  useEffect(() => {
    switch (location.pathname) {
      case '/account/setting':
        setDropdownTitle('個人設定');
        break;
      case '/account/notifications':
        setDropdownTitle('全部通知');
        break;
      case '/account/my-posts':
        setDropdownTitle('我的發文');
        break;
      case '/account/following':
        setDropdownTitle('我的追蹤');
        break;
      case '/account/history':
        setDropdownTitle('領取紀錄');
        break;
      default:
        setDropdownTitle('我的發文');
        break;
    }
  }, [location.pathname]);

  return (
    <>
      {/* 電腦版 */}
      <nav className="account-nav navbar navbar-expand-lg">
        <div className="container">
          <ul className="navbar-nav d-lg-flex d-none justify-content-between mb-14">
            <li
              className={`nav-item ${
                location.pathname.endsWith('/setting') ? 'active' : ''
              }`}
            >
              <NavLink
                className="d-flex align-items-center px-5 py-6 gap-5 fw-bold"
                to="/account/setting"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="#484848"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                個人設定
              </NavLink>
              <div className="dashed-line"></div>
            </li>
            <li
              className={`nav-item ${
                location.pathname.endsWith('/notifications') ? 'active' : ''
              }`}
            >
              <NavLink
                className="d-flex align-items-center px-5 py-6 gap-5 fw-bold"
                to="/account/notifications"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3 21C10.4674 21.3044 10.7134 21.5583 11.0125 21.7352C11.3115 21.912 11.6526 22.0053 12 22.0053C12.3474 22.0053 12.6885 21.912 12.9875 21.7352C13.2866 21.5583 13.5326 21.3044 13.7 21M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z"
                    stroke="#484848"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                全部通知
              </NavLink>
              <div className="dashed-line"></div>
            </li>
            <li
              className={`nav-item ${
                location.pathname.endsWith('/my-posts') ? 'active' : ''
              }`}
            >
              <NavLink
                className="d-flex align-items-center px-5 py-6 gap-5 fw-bold"
                to="/account/my-posts"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2V6M12 2V6M16 2V6M8 10H14M8 14H16M8 18H13M6 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4Z"
                    stroke="#484848"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                我的發文
              </NavLink>
              <div className="dashed-line"></div>
            </li>
            <li
              className={`nav-item ${
                location.pathname.endsWith('/following') ? 'active' : ''
              }`}
            >
              <NavLink
                className="d-flex align-items-center px-5 py-6 gap-5 fw-bold"
                to="/account/following"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z"
                    stroke="#484848"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
                我的追蹤
              </NavLink>
              <div className="dashed-line"></div>
            </li>
            <li
              className={`nav-item ${
                location.pathname.endsWith('/history') ? 'active' : ''
              }`}
            >
              <NavLink
                className="d-flex align-items-center px-5 py-6 gap-5 fw-bold"
                to="/account/history"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 2V9C3 10.1 3.9 11 5 11H9C9.53043 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53043 11 9V2M7 2V22M21 15V2C19.6739 2 18.4021 2.52678 17.4645 3.46447C16.5268 4.40215 16 5.67392 16 7V13C16 14.1 16.9 15 18 15H21ZM21 15V22"
                    stroke="#484848"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                領取紀錄
              </NavLink>
              <div className="dashed-line"></div>
            </li>
          </ul>
          {/* 結尾 */}
        </div>
      </nav>

      {/* 手機版下拉選單 */}
      <div className="dropdown position-relative mb-13 d-lg-none d-block">
        <h1 className="d-flex align-items-center fs-1 fw-bolder">
          <div className="ms-3">{dropdownTitle}</div>
          <button
            className="dropdown-btn d-flex align-items-center justify-content-between 
            p-2 rounded-3 bg-white rounded-circle border-0 ms-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="dropdown-arrow"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <ul className="dropdown-menu custom-dropdown-menu">
            <li className="d-flex" key="setting">
              <NavLink
                to="/account/setting"
                className={`dropdown-item d-flex align-items-center gap-2 ${
                  location.pathname.endsWith('/setting')
                    ? 'path-white text-white'
                    : ''
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="#121212"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                個人設定
              </NavLink>
            </li>
            <li className="d-flex" key="notifications">
              <NavLink
                to="/account/notifications"
                className={`dropdown-item d-flex align-items-center gap-2 ${
                  location.pathname.endsWith('/notifications')
                    ? 'path-white text-white'
                    : ''
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3 21C10.4674 21.3044 10.7134 21.5583 11.0125 21.7352C11.3115 21.912 11.6526 22.0053 12 22.0053C12.3474 22.0053 12.6885 21.912 12.9875 21.7352C13.2866 21.5583 13.5326 21.3044 13.7 21M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z"
                    stroke="#121212"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                全部通知
              </NavLink>
            </li>
            <li className="d-flex" key="my-posts">
              <NavLink
                to="/account/my-posts"
                className={`dropdown-item d-flex align-items-center gap-2 ${
                  location.pathname.endsWith('/my-posts')
                    ? 'path-white text-white'
                    : ''
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2V6M12 2V6M16 2V6M8 10H14M8 14H16M8 18H13M6 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4Z"
                    stroke="#484848"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                我的發文
              </NavLink>
            </li>
            <li className="d-flex" key="following">
              <NavLink
                to="/account/following"
                className={`dropdown-item d-flex align-items-center gap-2 ${
                  location.pathname.endsWith('/following')
                    ? 'path-white text-white'
                    : ''
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z"
                    stroke="#484848"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
                我的追蹤
              </NavLink>
            </li>
            <li className="d-flex" key="history">
              <NavLink
                to="/account/history"
                className={`dropdown-item d-flex align-items-center gap-2 ${
                  location.pathname.endsWith('/history')
                    ? 'path-white text-white'
                    : ''
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 2V9C3 10.1 3.9 11 5 11H9C9.53043 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53043 11 9V2M7 2V22M21 15V2C19.6739 2 18.4021 2.52678 17.4645 3.46447C16.5268 4.40215 16 5.67392 16 7V13C16 14.1 16.9 15 18 15H21ZM21 15V22"
                    stroke="#484848"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                領取紀錄
              </NavLink>
            </li>
          </ul>
        </h1>
      </div>
    </>
  );
}
export default AccountNav;
