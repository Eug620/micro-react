import { lazy, Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import * as Icons from "@arco-design/web-react/icon";
const lazyLoad = (moduleName:string):any => {
    const Module = lazy(() => import( `../${moduleName}`))
    console.log(moduleName,Module);
    return <Module/>
}
interface Icons {
    [key:string]: any
}

const lazyLoadIcon = (iconName:string):any => {
    const IconModule = Icons[iconName]
    return <IconModule/>
}

console.log(Icons);

// login页面校验
const AuthWithLogin = ({children}:any) => {
    const token = localStorage.getItem('token')
    return token ?  <Navigate to="/dashboard" /> : children
}
// dashboard页面校验
const AuthWithLayout =  ({children}:any) => {
    const token = localStorage.getItem('token')
    return token ? children : <Navigate to="login" />
}
export const MenuRoutes = [
    {
        icon: lazyLoadIcon('IconHome'),
        name:'dashboard',
        path: '/dashboard',
        element: lazyLoad('views/home')
    },
    {
        icon:lazyLoadIcon('IconClockCircle'),
        name:'about',
        path: '/about',
        element: lazyLoad('views/about')
    },
    {
        icon:lazyLoadIcon('IconCheck'),
        name:'todolist',
        path: '/todolist/:id',
        element: lazyLoad('views/to-do-list')
    }
]
const BaseRouteInstance = [
    {
        index: true,
        path: 'login',
        element: <AuthWithLogin>{lazyLoad('views/login')}</AuthWithLogin> ,
    },
    {
        path: '',
        element:  <AuthWithLayout>{lazyLoad('layout')}</AuthWithLayout>,
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
        element: lazyLoad('views/not-found'),
    }
]

const InitRoute = () => {
    return (
        <Suspense fallback={<h2>load...</h2>}>
            {useRoutes(BaseRouteInstance)}
        </Suspense>
        )
}

export default InitRoute