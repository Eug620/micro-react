/*
 * @Author       : Eug
 * @Date         : 2022-03-31 16:16:43
 * @LastEditTime : 2023-06-26 18:29:28
 * @LastEditors  : eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-react/src/main.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './assets/styles/index.scss'
import { Provider } from 'react-redux'
import store from './store'

// 注册了此事件说明是微前端环境，否则说明是子项目环境
if (window.eventCenterForMicroVue) {
  console.log('微前端环境');
} else {
  console.log('子项目环境');
}

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <BrowserRouter basename='/base/developer'> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </Provider>
  // </React.StrictMode>
  ,
  document.getElementById('app-react')
)
