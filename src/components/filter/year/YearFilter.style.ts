import { Button } from "antd";
import { styled } from "styled-components";

export const FilterContent = styled("div")({
  minWidth: "130px",
  display: "flex",
  alignItems: "center",
});

export const StyledButton = styled(Button)({
  width: "24px",
  height: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#F2F4F7",
  boxShadow: "none",
  border: "none",
  padding: 0,
});

export const Text = styled("p")({
  width: "calc(100% - 48px)",
  padding: "0 7px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: 600,
  margin: 0,
});
