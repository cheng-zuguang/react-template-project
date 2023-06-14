import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import './App.scss';

const Home = () => {
  return <div>欢迎来到首页</div>
}

const NotFound404 = () => {
  return <div>页面丢失了</div>
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
];

const AppComponent: React.FC = () => {
  // return <div>大招给忽悠</div>;

  return useRoutes(routes);
};

export default AppComponent;
