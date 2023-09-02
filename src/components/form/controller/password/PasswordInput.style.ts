import { Button, Input } from "antd";
import { styled } from "styled-components";

export const StyledPasswordInput = styled(Input.Password)({
  height: "55px",
  padding: "12px 24px",
  "& .ant-input-prefix": {
    order: 2,
  },
  "& .ant-input-suffix": {
    order: 3,
  },
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
