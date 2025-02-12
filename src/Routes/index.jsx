import { createHashRouter } from "react-router";

import Front from "../layout/Front";
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = [
  {
    path: "/",
    element: <Front />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

const router = createHashRouter(routes);
export default router;
