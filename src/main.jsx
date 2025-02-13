import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./Routes";
import "../assets/scss/all.scss";
// import App from './App.jsx'
import AboutUsPage from "./pages/AboutUsPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    <AboutUsPage />
  </StrictMode>
);
