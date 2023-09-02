import { Button } from "antd";
import { styled } from "styled-components";

export const StyledButton = styled(Button)({
  width: "calc(50% - 4px)",
  height: "55px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 600,
  borderRadius: "10px",
  "& .ant-btn-icon": {
    marginInlineEnd: "15px !important",
  },
  "@media(min-width: 768px)": {
    width: "calc(50% - 12px)",
  },
});
