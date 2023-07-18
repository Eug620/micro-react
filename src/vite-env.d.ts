/*
 * @Author       : Eug
 * @Date         : 2022-04-01 16:48:02
 * @LastEditTime : 2023-07-18 13:44:26
 * @LastEditors  : eug yyh3531@163.com
 * @Descripttion : Descripttion
 * @FilePath     : /micro-react/src/vite-env.d.ts
 */
/// <reference types="vite/client" />

interface Window {
  eventCenterForMicroVue?: any;
  eventCenterForMicroReact?:any;
  microApp?:any;
  d3?: any
}

declare var d3: any