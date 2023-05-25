import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../layouts/Home';
import Main from '../pages/Main';
import Menu from '../layouts/Menu';

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
        }
    ]
  },
]);

export default router;