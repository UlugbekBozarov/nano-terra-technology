import { styled } from "styled-components";

export const Text = styled("div")(({ theme }) => ({
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "120%",
  color: theme?.colorError,
  marginTop: "8px",
}));
