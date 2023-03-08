/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-08-24 15:06:57
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-08 17:57:37
 * @FilePath     : /micro-react/src/routes/routes.tsx
 * @Description  : filename
 * 
 * Copyright (c) 2023 by eug yyh3531@163.com, All Rights Reserved. 
 */

import React, { lazy, Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import * as Icons from "@arco-design/web-react/icon";
const FallbackRender = () => {
    return (
        <></>
    )
}
const lazyLoad = (moduleName: string): any => {
    const Module = lazy(() => {
        /* @vite-ignore */
        return import(`../${moduleName}.tsx`)
    })
    console.log(moduleName, Module);

    return (
        <Suspense fallback={<FallbackRender/>}>
            <Module />
        </Suspense>
    )
}
const lazyLoadIcon = (iconName: string): any => {
    // const IconModule = Icons[iconName]
    // return <IconModule />
    const Module = lazy(() => {
        /* @vite-ignore */
        return import(`../../node_modules/@arco-design/web-react/icon/react-icon/${iconName}/index.js`)
    })
    // console.log(moduleName, Module);

    return (
        // <Suspense fallback={<Loading/>}>
        <Module />
        // </Suspense>
    )
}

console.log(Icons);

// login页面校验
const AuthWithLogin = ({ children }: any) => {
    const token = localStorage.getItem('token')
    return token ? <Navigate to="/dashboard" /> : children
}
// dashboard页面校验
const AuthWithLayout = ({ children }: any) => {
    const token = localStorage.getItem('token')
    return token ? children : <Navigate to="login" />
}
export const MenuRoutes = [
    {
        icon: lazyLoadIcon('IconHome'),
        name: 'dashboard',
        path: '/base/developer/dashboard',
        element: lazyLoad('views/home/index')
    },
    {
        icon: lazyLoadIcon('IconClockCircle'),
        name: 'about',
        path: '/base/developer/about',
        element: lazyLoad('views/about/index')
    },
    {
        icon: lazyLoadIcon('IconCheck'),
        name: 'todolist',
        path: '/base/developer/todolist/:id',
        element: lazyLoad('views/to-do-list/index')
    }
]
const BaseRouteInstance = [
    {
        path: '/',
        element: lazyLoad('layout/index'),
        children: [
            {
                path: '',
                element: <Navigate to="/base/developer/dashboard" />
            },
            ...MenuRoutes
        ]
    },
    {
        path: "*",
        element: lazyLoad('views/not-found/index'),
    }
]


const InitRoute = () => {
    return useRoutes(BaseRouteInstance)
    return (
        <Suspense fallback={<FallbackRender />}>
            {useRoutes(BaseRouteInstance)}
        </Suspense>
    )
}

export default InitRoute