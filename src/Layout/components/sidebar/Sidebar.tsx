import { Typography } from "antd";

import {
  Dashboard,
  Employees,
  Logo,
  Logout,
  Note,
  Settings,
  Tasks,
  User,
} from "components/Icons";

import {
  StyledLogoBlock,
  StyledMenu,
  StyledMenuBlock,
  StyledSidebarContent,
} from "./Sidebar.style";
import Kpi from "components/Icons/kpi/Kpi";

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
                  icon: <Employees />,
                  key: "employees",
                  label: "Employees",
                },
                {
                  icon: <Tasks />,
                  key: "tasks",
                  label: "Tasks",
                },
                {
                  icon: <User />,
                  key: "user-info",
                  label: "User info",
                },
                {
                  icon: <Kpi />,
                  key: "user-kpi",
                  label: "User KPI",
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
