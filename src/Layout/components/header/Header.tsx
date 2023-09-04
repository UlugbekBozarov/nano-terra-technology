import { Space } from "antd";

import { Breadcrumb, Notification, Profile, Search } from "./components";
import { StyledHeaderContent } from "./Header.style";

const Header = () => {
  return (
    <StyledHeaderContent>
      <div>
        <Breadcrumb />
      </div>
      <div style={{ height: "36px" }}>
        <Space style={{ height: "36px" }}>
          <Search />
          <Notification />
          <Profile />
        </Space>
      </div>
    </StyledHeaderContent>
  );
};

export default Header;
