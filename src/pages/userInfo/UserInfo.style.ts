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
