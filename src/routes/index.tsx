/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-07-03 16:31:45
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-08 19:02:52
 * @FilePath     : /micro-react/src/routes/index.tsx
 * @Description  : filename
 * 
 * Copyright (c) 2023 by eug yyh3531@163.com, All Rights Reserved. 
 */
import React from "react";
import { Routes, Route, Link, Outlet, useRoutes } from "react-router-dom";
import {
  IconHome,
  IconClockCircle,
  IconCheck,
} from "@arco-design/web-react/icon";

import type { RouteObject } from "react-router-dom";
import Layout from "@/views/layout";
import About from "@/views/about";
import Home from "@/views/home";
import NotFound from "@/views/not-found";
import Todolist from "@/views/to-do-list";

// export const BaseRoutesURL = "/base/developer";
export const BaseRoutesURL = "/";

export const BaseRoutes: any[] = [
  {
    index: true,
    element: <Home />,
    name: "Home",
    icon: <IconHome />,
    path: "",
  },
  {
    path: "about",
    element: <About />,
    icon: <IconClockCircle />,
    name: "About",
  },
  {
    path: "todolist/:id",
    element: <Todolist />,
    icon: <IconCheck />,
    name: "Todolist",
  },
];

const reloadRoutes = (): RouteObject[] => {
  return BaseRoutes.map((item) =>
    item.index
      ? { index: item.index, element: item.element }
      : { path: item.path, element: item.element }
  );
};

const reactRoutes = () => {
  const children: RouteObject[] = reloadRoutes();
  return useRoutes([
    {
      path: BaseRoutesURL,
      element: <Layout />,
      children,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default reactRoutes;
