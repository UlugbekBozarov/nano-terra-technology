import { Badge, Button } from "antd";
import { styled } from "styled-components";

export const StyledButton = styled(Button)(({ theme }) => ({
  height: "36px",
  display: "flex",
  alignItems: "center",
  backgroundColor: `${theme?.colorWhite} !important`,
}));

export const StyledBadge = styled(Badge)<{ active?: boolean }>(
  ({ active = false, theme }) => ({
    height: "18px",
    marginLeft: "7px",
    "& .ant-badge-multiple-words": {
      color: active ? theme?.colorWhite : "#667085",
      background: active ? theme?.colorPrimary : "#F2F4F7",
    },
  })
);
