import React, { Component, ReactNode } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.compact.min.css";

export default class App extends Component<unknown, unknown> {
  render(): ReactNode {
    return (
      <Layout>
        <Layout.Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{ position: "absolute", height: "100vh" }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout style={{ minHeight: "100vh" }}>
          <Layout.Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Layout.Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24 }}
            >
              content
            </div>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Layout.Footer>
        </Layout>
      </Layout>
    );
  }
}
