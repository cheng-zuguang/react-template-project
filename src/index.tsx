
import React from 'react';
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import routes from './routes/index';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <RouterProvider router={routes}/>
);
