import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

import {
  Dashboard,
  Employees,
  Kpi,
  Logo,
  Logout,
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
import { setItemCookie } from "services/storage";
import { STORAGE_NAMES } from "constants/Storage.constants";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleChangeMenu = (value: any) => {
    const key = value?.key;
    switch (key) {
      case "logout": {
        setItemCookie(STORAGE_NAMES.authorization, "");
        setItemCookie(STORAGE_NAMES.user, "");
        window.location.href = "/";
        break;
      }
      default: {
        navigate(`/${key}`);
      }
    }
  };

  return (
    <StyledSidebarContent>
      <StyledLogoBlock className="demo-logo-vertical">
        <Logo size={48} />
        <Typography.Title
          level={3}
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0",
            marginLeft: "12px",
          }}
        >
          Dashboard
        </Typography.Title>
      </StyledLogoBlock>
      <StyledMenuBlock>
        <StyledMenu
          mode="inline"
          defaultSelectedKeys={[""]}
          // defaultOpenKeys={["sub1"]}
          onClick={handleChangeMenu}
          items={[
            {
              key: "main-menu",
              label: "Main menu",
              type: "group",
              children: [
                {
                  icon: <Dashboard />,
                  key: "",
                  label: "Document",
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
          onClick={handleChangeMenu}
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
