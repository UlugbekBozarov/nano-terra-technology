import React from "react";
import { ButtonProps } from "antd";

import { StyledButton } from "./Button.style";

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props}>Button</StyledButton>;
};

export default Button;
