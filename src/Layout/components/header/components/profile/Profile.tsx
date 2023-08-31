import { Avatar } from "antd";

import { ProfileContent, StyledName } from "./Profile.style";

const Profile = () => {
  return (
    <ProfileContent>
      <StyledName level={5} style={{ margin: "0 16px 0 0" }}>
        Kruluz Utsman
      </StyledName>
      <Avatar shape="square">KU</Avatar>
    </ProfileContent>
  );
};

export default Profile;
