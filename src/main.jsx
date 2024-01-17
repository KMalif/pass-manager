import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Add from './pages/Add.jsx';
import Detail from './pages/Detail.jsx';
import Category from './pages/Category.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/category/:id",
    element: <Category />,
  },
  {
    path: "/:id",
    element: <Detail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);