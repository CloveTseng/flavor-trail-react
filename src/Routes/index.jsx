import { createHashRouter } from "react-router";

import Front from "../layouts/Front";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Event from "../pages/Event";
import AllPost from "../pages/AllPosts";
import AboutUsPage from "../pages/AboutUsPage";
import GuideLine from "../pages/GuideLine";
// import AccountFollowing from "../pages/account/AccountFollowing";
// import AccountHistory from "../pages/account/AccountHistory";
import AccountNotifications from "../pages/account/AccountNotifications";
import AccountSetting from "../pages/account/AccountSetting";
import AccountPosts from "../pages/account/AccountPosts";

const routes = [
  {
    path: "/",
    element: <Front />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "event",
        element: <Event />,
      },
      {
        path: "all-posts",
        element: <AllPost />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "guide-line",
        element: <GuideLine />,
      },
      // {
      //   path: "account-following",
      //   element: <AccountFollowing />,
      // },
      // {
      //   path: "account-history",
      //   element: <AccountHistory />,
      // },
      {
        path: "account-notifications",
        element: <AccountNotifications />,
      },
      {
        path: "account-settings",
        element: <AccountSetting />,
      },
      {
        path: "account-posts",
        element: <AccountPosts />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

const router = createHashRouter(routes);
export default router;
