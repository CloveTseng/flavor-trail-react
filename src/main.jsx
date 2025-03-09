import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";
import routes from "./Routes/index.jsx";
import "../assets/scss/all.scss";
// import App from './App.jsx'
const router = createHashRouter(routes)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);

