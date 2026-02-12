import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Post from "../pages/Post";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "post",
        element: <Post />,
      },
      {
        path: "login",
        element: <Login />,
      },

    ],
  },
]);

export default router;
