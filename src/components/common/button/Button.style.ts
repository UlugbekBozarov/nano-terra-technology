import { Button } from "antd";
import { styled } from "styled-components";

export const StyledButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => !["padding", "width"].includes(prop),
})<{ width?: string; height?: string; padding?: string }>(
  ({ width, height, padding }) => ({
    width,
    height: height || "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 500,
    padding: padding || "10px 24px",
  })
);
