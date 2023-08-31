import React from "react";
import { Space, theme, Layout as LayoutComponent } from "antd";

import { StyledContent, StyledLayout } from "./Layout.style";
import { Header, Sidebar } from "./components";

interface ILayout {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Space
      direction="vertical"
      style={{ width: "100%", height: "100vh" }}
      size={[0, 48]}
    >
      <StyledLayout height="100vh">
        <LayoutComponent.Sider
          width={280}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{ background: colorBgContainer }}
        >
          <Sidebar />
        </LayoutComponent.Sider>
        <StyledLayout>
          <LayoutComponent.Header
            style={{
              height: 76,
              lineHeight: "76px",
              background: "transparent",
              padding: "16px 20px 4px 20px",
            }}
          >
            <Header />
          </LayoutComponent.Header>
          <StyledContent>{children}</StyledContent>
        </StyledLayout>
      </StyledLayout>
    </Space>
  );
};

export default Layout;