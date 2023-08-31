import { Typography } from "antd";

import { Dashboard, Logo, Logout, Note, Settings } from "components/Icons";

import {
  StyledLogoBlock,
  StyledMenu,
  StyledMenuBlock,
  StyledSidebarContent,
} from "./Sidebar.style";

const Sidebar = () => {
  return (
    <StyledSidebarContent>
      <StyledLogoBlock className="demo-logo-vertical">
        <Logo size={48} />
        <Typography.Title level={3} style={{ margin: "0", marginLeft: "12px" }}>
          Dashboard
        </Typography.Title>
      </StyledLogoBlock>
      <StyledMenuBlock>
        <StyledMenu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          items={[
            {
              key: "main-menu",
              label: "Main menu",
              type: "group",
              children: [
                {
                  icon: <Dashboard />,
                  key: "invoice-1",
                  label: "Invoice",
                },
                {
                  icon: <Note />,
                  key: "invoice-2",
                  label: "Invoice",
                },
                {
                  icon: <Note />,
                  key: "invoice-3",
                  label: "Invoice",
                },
              ],
            },
          ]}
          style={{ padding: "0 16px", marginTop: 0, marginBottom: "auto" }}
        />
        <StyledMenu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          items={[
            {
              key: "preferences",
              label: "Preferences",
              type: "group",
              children: [
                {
                  icon: <Settings />,
                  key: "setting",
                  label: "Sozlamalar",
                },
                {
                  icon: <Logout />,
                  key: "logout",
                  label: "Chiqish",
                },
              ],
            },
          ]}
          style={{ padding: "0 16px" }}
        />
      </StyledMenuBlock>
    </StyledSidebarContent>
  );
};

export default Sidebar;
