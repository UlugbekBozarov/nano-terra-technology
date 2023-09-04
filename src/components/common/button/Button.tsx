import React from "react";
import { ButtonProps } from "antd";

import { StyledButton } from "./Button.style";

const Button: React.FC<
  ButtonProps & { width?: string; height?: string; padding?: string }
> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
