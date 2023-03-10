/*
 * @Author       : eug yyh3531@163.com
 * @Date         : 2022-08-24 15:06:57
 * @LastEditors  : eug yyh3531@163.com
 * @LastEditTime : 2023-03-10 09:56:17
 * @FilePath     : /micro-react/src/views/layout/index.tsx
 * @Description  : filename
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import React from "react";
import "./index.scss";
import { Layout, Menu } from "@arco-design/web-react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { MenuRoutes } from "@/routes/routes";

const MenuItem = Menu.Item;
const Header = Layout.Header;
const Content = Layout.Content;

function BaseMenu(props: any) {
  const navigate = useNavigate();
  const defaultLocation = useLocation();
  const handleMenuChange = (
    key: string,
    event: EventTarget,
    keyPath: string[]
  ) => {
    navigate(key);
  };
  return (
    <Menu
      selectedKeys={[defaultLocation.pathname]}
      {...props}
      onClickMenuItem={handleMenuChange}
    >
      {MenuRoutes.map((route) => {
        return (
          <MenuItem
            key={route.path}
          >
            {route.icon}
            {route.name}
          </MenuItem>
        );
      })}
    </Menu>
  );
}

// class LayoutBase extends React.Component {
//   render() {
//     return (
//       <Layout className="micro-react-layout">
//         <Layout>
//           <Header className="micro-react-layout-header">
//             <BaseMenu mode="horizontal" />
//           </Header>
//           <Layout>
//             <Content className="micro-react-layout-content">
//               <Outlet />
//             </Content>
//           </Layout>
//         </Layout>
//       </Layout>
//     );
//   }
// }

const LayoutBase: React.FC = () => {
  return (
    <Layout className="micro-react-layout">
      <Layout>
        <Header className="micro-react-layout-header">
          <BaseMenu mode="horizontal" />
        </Header>
        <Layout>
          <Content className="micro-react-layout-content animate__animated animate__fadeIn">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default LayoutBase;
