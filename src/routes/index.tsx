import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import NotFound404 from '../404Page';
import JSONSchema from '../JSONSchema';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound404 />,
    children: [
      {
        path: 'formily',
        element: <JSONSchema />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
]);

export default router;
