import { FC } from "react";

import { StyledImg } from "./Logo.style";

const Logo: FC<{ size?: number }> = ({ size }) => {
  return (
    <StyledImg
      src={require("assets/images/png/logo.png")}
      size={size}
      alt="Logo"
    />
  );
};

export default Logo;
