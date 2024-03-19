/*
 * @Author: gaofan05
 * @Date: 2024-03-19 15:59:02
 * @LastEditors: gaofan05
 * @Description: 启动页
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
