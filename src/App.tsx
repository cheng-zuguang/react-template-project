import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ConfigProvider, DatePicker, Button } from 'antd';

import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

import './App.scss';

// dayjs.locale('zh-cn');

const AppComponent: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div>
        <Link to={`playground`}>TO PlayGround</Link>
        <Link to={`formily`}>TO Formily</Link>

        <Outlet />
      </div>
    </ConfigProvider>

  )
};

export default AppComponent;
