import { styled } from "styled-components";

export const StyledImg = styled("img")<{ size?: number }>(({ size }) => ({
  width: size && `${size}px`,
  height: size && `${size}px`,
}));
