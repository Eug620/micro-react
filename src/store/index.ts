/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-07-03 16:31:45
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-14 14:07:57
 * @FilePath     : /micro-react/src/store/index.ts
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
// import { createStoreHook } from "react-redux";
import reducer from "./reducer";
import { createStore } from 'redux'
const store = createStore(reducer)
export default store