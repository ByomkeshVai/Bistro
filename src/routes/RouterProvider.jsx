import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../layouts/Home';
import Main from '../pages/Main';
import Menu from '../layouts/Menu';
import Login from '../authentication/Login';
import Register from '../authentication/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
        {
            path: '/',
            element: <Main></Main>
      },
      {
            path: '/menu',
            element: <Menu></Menu>
      },
       {
            path: '/login',
            element: <Login></Login>
      },
        {
            path: '/register',
            element: <Register></Register>
        }
    ]
  },
]);

export default router;