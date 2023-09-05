import { Button, Card } from "antd";
import { styled } from "styled-components";

export const StyledCard = styled(Card)({
  "& .ant-card-body": {
    padding: "12px 20px",
  },
});

export const StyledButton = styled(Button)({
  width: "42px",
  height: "42px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#F2F4F7",
  boxShadow: "none",
  border: "none",
  padding: 0,
});

export const StyledChardBlock = styled("div")({
  "& .recharts-cartesian-grid-vertical": {
    display: "none",
  },
});

export const StyledHr = styled("hr")({
  border: 0,
  borderBottom: "1px solid #D0D5DD",
  "@media(min-width: 768px)": {
    borderBottom: 0,
    borderRight: "1px solid #D0D5DD",
  },
});
