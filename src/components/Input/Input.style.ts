import { Input } from "antd";
import { styled } from "styled-components";

export const StyledLabel = styled("label")(() => ({
  display: "inline-block",
  marginTop: "8px",
  marginBottom: "8px",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "14px",
  color: "#1C1E23",
}));

export const StyledInput = styled(Input)(() => ({
  width: "100%",
  padding: "16px 24px",
}));

export const StyledInputPassword = styled(Input.Password)(() => ({}));
