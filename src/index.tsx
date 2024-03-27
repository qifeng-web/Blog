/*
 * @Author: gaofan05
 * @Date: 2024-03-19 15:59:02
 * @LastEditors: gaofan05
 * @Description: 启动页
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { HashRouter } from 'react-router-dom';

import App from './entry/App';
import { history } from './entry/router';

import 'antd/dist/reset.css';
import './index.css';


dayjs.locale('zh-cn');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider locale={zhCN} autoInsertSpaceInButton>
    <HashRouter>
      <App />
    </HashRouter>
  </ConfigProvider>
);
