import { styled } from "styled-components";

export const SpinnerContent = styled("div")<{
  width?: string;
  height?: string;
}>(({ width = "100%", height = "100%" }) => ({
  width,
  height,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
