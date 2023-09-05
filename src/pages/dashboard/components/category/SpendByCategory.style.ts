import { styled } from "styled-components";

export const ChartBlock = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "size",
})<{ size: number }>(({ size }) => ({
  position: "relative",
  width: `${size}px`,
  height: `${size}px`,
}));

export const StyledLabelBlock = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "size",
})<{ size: number }>(({ size }) => ({
  width: "150px",
  position: "absolute",
  textAlign: "center",
  top: size === 300 ? "calc(50% - 30px)" : "calc(50% - 25px)",
  left: "calc(50% - 75px)",
  "& p": {
    fontSize: size === 300 ? "16px" : "11px",
    fontWeight: 500,
    color: "#596780",
  },
  "& h4": {
    fontSize: size === 300 ? "24px" : "18px",
    fontWeight: 700,
    color: "#1A202C",
  },
}));
