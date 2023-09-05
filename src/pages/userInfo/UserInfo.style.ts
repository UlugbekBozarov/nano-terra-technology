import { Button } from "antd";
import { styled } from "styled-components";

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

export const StyledTable = styled("div")({
  width: "100%",
  "& .row": {
    display: "flex",
    marginBottom: "4px",
    padding: "8px 12px",
  },
  "& .row:nth-child(2n+1)": {
    background: "#F9FAFB",
    borderRadius: "8px",
  },
  "& .row .col": {
    width: "50%",
    fontSize: "16px",
    fontWeight: 500,
  },
});

export const StyledChardBlock = styled("div")({
  "& .recharts-cartesian-grid-vertical": {
    display: "none",
  },
});

export const ChartBlock = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "size",
})<{ size: number }>(({ size }) => ({
  position: "relative",
  width: `${size}px`,
  height: `${size}px`,
}));

export const StyledLabelBlock = styled("div")({
  width: "80px",
  position: "absolute",
  textAlign: "center",
  top: "calc(50% - 30px)",
  left: "calc(50% - 40px)",
  "& p": {
    fontSize: "16px",
    fontWeight: 500,
    color: "#596780",
  },
  "& h4": {
    fontSize: "24px",
    fontWeight: 700,
    color: "#1A202C",
  },
});
