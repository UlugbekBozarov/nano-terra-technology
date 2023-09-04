import { Button } from "antd";
import { styled } from "styled-components";

export const StyledButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => prop !== "padding",
})<{ padding?: string }>(({ padding }) => ({
  height: "40px",
  display: "flex",
  alignItems: "center",
  fontWeight: 500,
  padding: padding || "10px 24px",
}));
