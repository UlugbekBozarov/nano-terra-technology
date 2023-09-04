import { styled } from "styled-components";

export const SpinnerContent = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "width" && prop !== "height",
})<{
  width?: string;
  height?: string;
}>(({ width = "100%", height = "100%" }) => ({
  width,
  height,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
