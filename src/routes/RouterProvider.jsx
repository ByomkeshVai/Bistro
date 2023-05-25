import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../layouts/Home';
import Main from '../pages/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
        {
            path: '/',
            element: <Main></Main>
        }
    ]
  },
]);

export default router;