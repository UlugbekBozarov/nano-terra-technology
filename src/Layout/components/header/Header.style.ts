import { styled } from "styled-components";

export const StyledHeaderContent = styled("div")(({ theme }) => ({
  height: "56px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: theme?.borderRadius,
  background: theme?.colorBgContainer,
  padding: "10px 20px",
}));
