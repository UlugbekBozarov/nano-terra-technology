import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Space, theme, Layout as LayoutComponent } from "antd";

import { Spinner } from "components/common";

import { StyledContent, StyledHeader, StyledLayout } from "./Layout.style";
import { Header, Sidebar } from "./components";

const Layout = () => {
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
          style={{ background: colorBgContainer }}
        >
          <Sidebar />
        </LayoutComponent.Sider>
        <StyledLayout>
          <StyledHeader>
            <Header />
          </StyledHeader>
          <StyledContent>
            <Suspense fallback={<Spinner size="large" />}>
              <Outlet />
            </Suspense>
          </StyledContent>
        </StyledLayout>
      </StyledLayout>
    </Space>
  );
};

export default Layout;
