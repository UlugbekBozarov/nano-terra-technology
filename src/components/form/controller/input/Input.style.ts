import { Button, Input } from "antd";
import { styled } from "styled-components";

export const StyledInput = styled(Input)({
  height: "55px",
  padding: "12px 24px",
});

export const StyledClearButton = styled(Button)<{ display?: string }>(
  ({ display }) => ({
    display: display,
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    boxShadow: "none",
  })
);
