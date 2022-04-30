import React from "react";
import "./index.scss";
import { Layout, Menu } from "@arco-design/web-react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { BaseRoutesURL, BaseRoutes } from "../routes";

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
      defaultSelectedKeys={[defaultLocation.pathname]}
      {...props}
      onClickMenuItem={handleMenuChange}
    >
      {BaseRoutes.map((route) => {
        return (
          <MenuItem
            key={`${BaseRoutesURL}${route.index ? "" : "/"}${route.path}`}
          >
            {route.icon}
            {route.name}
          </MenuItem>
        );
      })}
    </Menu>
  );
}

class LayoutBase extends React.Component {
  render() {
    return (
      <Layout className="micro-react-layout">
        <Layout>
          <Header className="micro-react-layout-header">
            <BaseMenu mode="horizontal" />
          </Header>
          <Layout>
            <Content className="micro-react-layout-content">
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutBase;
