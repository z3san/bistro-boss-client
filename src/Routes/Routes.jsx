import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import "./index.css";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: '/',
            element: <Home></Home>

        },
      ]
    },
  ]);