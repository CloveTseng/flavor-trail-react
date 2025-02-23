import Front from "../layouts/Front";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Event from "../pages/Event";
import AllPost from "../pages/AllPosts";
import AboutUsPage from "../pages/AboutUsPage";
import GuideLine from "../pages/GuideLine";

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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];


export default routes;
