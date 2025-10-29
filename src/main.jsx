import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import About from "./components/about/about.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/home/home.jsx";
import Contact from "./components/contact/contact.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import "./index.css";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/home", element: <Navigate to={"/"} /> },
      { index: true , element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={routers} />
  </>
);

