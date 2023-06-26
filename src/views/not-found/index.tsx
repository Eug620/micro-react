/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-07-03 16:31:45
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-06-26 18:19:41
 * @FilePath     : /micro-react/src/views/not-found/index.tsx
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const NotFound = () => {
  const naviate = useNavigate()
  const useBackDashboard = () => {
    naviate('/')
  }

  return (
    <div className="not-found-container">
      Not Found
      <div onClick={useBackDashboard} className="back-dashboard">Back Dashboard</div>
    </div>
  );
}
export default NotFound;
