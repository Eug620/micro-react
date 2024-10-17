/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-08-24 15:06:57
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-08-11 15:53:35
 * @FilePath     : /micro-react/src/routes/routes.tsx
 * @Description  : filename
 * 
 * Copyright (c) 2023 by eug yyh3531@163.com, All Rights Reserved. 
 */

import React, { lazy, Suspense } from 'react'
import { Navigate, useRoutes, useLocation } from 'react-router-dom'
import { IconSync } from "@arco-design/web-react/icon";
import { resolveComponent, resolveIconComponent } from '@/importRoutercom'

const FallbackRender = () => {
    return (
        <></>
    )
}


const lazyLoad = (moduleName: string): any => {

    const Moudule = resolveComponent(moduleName)
    return (
        <Suspense fallback={<FallbackRender />}>
            <Moudule />
            {/* <Module/> */}
        </Suspense>
    )

    // const Module: React.Component | React.FC = lazy(() => {
    //     /* @vite-ignore */
    //     return resolveComponent(moduleName)
    //     return import(`../${moduleName}.tsx`) 
    // })
    // console.log(moduleName, Module);

    // return (
    //     <Suspense fallback={<FallbackRender/>}>
    //         <Module />
    //     </Suspense>
    // )
}
const lazyLoadIcon = (iconName: string): any => {
    const Module = lazy(() => {
        /* @vite-ignore */
        return import(`../../node_modules/@arco-design/web-react/icon/react-icon/${iconName}/index.js`)
    })

    // const Moudule = resolveIconComponent(iconName)
    return (
        <Suspense fallback={<IconSync spin />}>
            <Module />
            {/* <Moudule/> */}
        </Suspense>
    )
}


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
        icon: lazyLoadIcon('IconCommand'),
        name: '首页',
        path: '/dashboard',
        element: lazyLoad('dashboard/index'),
        meta: {
            keepAlive: true,
            isEle: true
        }
    },
    // {
    //     icon: lazyLoadIcon('IconCommon'),
    //     name: '关于',
    //     path: '/about',
    //     element: lazyLoad('about/index'),
    //     meta: {
    //         keepAlive: true,
    //         isEle: true
    //     }
    // },
    {
        icon: lazyLoadIcon('IconPalette'),
        name: '创意',
        path: '/excalidraw',
        element: lazyLoad('excalidraw/index'),
        meta: {
            keepAlive: true,
            isEle: true
        }
    },
    // {
    //     icon: lazyLoadIcon('IconBug'),
    //     name: '模型',
    //     path: '/three',
    //     element: lazyLoad('three/index'),
    //     meta: {
    //         keepAlive: true,
    //         isEle: true
    //     }
    // },
    // {
    //     icon: lazyLoadIcon('IconBgColors'),
    //     name: '视觉',
    //     path: '/vision',
    //     element: lazyLoad('vision/index'),
    //     meta: {
    //         keepAlive: true,
    //         isEle: true
    //     }
    // },
    {
        icon: lazyLoadIcon('IconCheck'),
        name: '待办',   
        path: '/todolist/:id',
        element: lazyLoad('to-do-list/index'),
        meta: {
            keepAlive: true,
            isEle: false
        }
    }
]
const BaseRouteInstance = [
    {
        path: '/',
        element: lazyLoad('layout/index'),
        children: [
            {
                path: '',
                element: <Navigate to="/dashboard" />
            },
            ...MenuRoutes
        ]
    },
    {
        path: "*",
        element: lazyLoad('not-found/index'),
    }
]


const InitRoute = () => {
    // return useRoutes(BaseRouteInstance)
    const Location = useLocation()
    console.log(Location,'useLocation');
    // window.microApp?.dispatch({type: Location})

    // 子应用向基座应用发送数据，只接受对象作为参数
    window?.eventCenterForMicroReact?.dispatch({type: Location})
    return (
        <Suspense fallback={<FallbackRender />}>
            {useRoutes(BaseRouteInstance)}
        </Suspense>
    )
}

export default InitRoute