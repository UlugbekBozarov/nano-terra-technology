import { Typography } from "antd";
import { styled } from "styled-components";

export const ProfileContent = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const StyledName = styled(Typography.Title)({
  display: "none",
  paddingLeft: "7px",
  "@media(min-width: 1200px)": {
    display: "block",
  },
});
