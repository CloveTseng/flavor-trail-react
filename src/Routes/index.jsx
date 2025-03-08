import Front from '../layouts/Front';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Event from '../pages/Event';
import AllPost from '../pages/AllPosts';
import AboutUsPage from '../pages/AboutUsPage';
import GuideLine from '../pages/GuideLine';
import Post from '../pages/Post';
import PageNotFound from '../pages/PageNotFound';
import AccountNotifications from '../pages/account/AccountNotifications';
import AccountSetting from '../pages/account/AccountSetting';
import AccountPosts from '../pages/account/AccountPosts';

const routes = [
  {
    path: '/',
    element: <Front />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'event',
        element: <Event />,
      },
      {
        path: 'all-posts',
        element: <AllPost />,
      },
      {
        path: 'post/:id',
        element: <Post />,
      },
      {
        path: 'about-us',
        element: <AboutUsPage />,
      },
      {
        path: 'guide-line',
        element: <GuideLine />,
      },
      {
        path: 'account-notifications',
        element: <AccountNotifications />,
      },
      {
        path: 'account-settings',
        element: <AccountSetting />,
      },
      {
        path: 'account-posts',
        element: <AccountPosts />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default routes;
