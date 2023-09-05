import { styled } from "styled-components";

export const StyledUl = styled("ul")({
  listStyle: "none",
  margin: 0,
});

export const StyledLi = styled("li")({
  display: "flex",
  alignItems: "center",
  borderRadius: "8px",
  padding: "8px 12px",
  "&:nth-child(2n+1)": {
    background: "#FCFCFD",
  },
});

export const StyledIndex = styled("div")({
  width: "50px",
  color: "#101828",
  fontSize: "16px",
  fontWeight: 500,
});

export const StyledText = styled("div")({
  width: "calc(100% - 50px)",
  color: "#667085",
  fontSize: "16px",
  fontWeight: 500,
});
