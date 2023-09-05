import { Menu } from "antd";
import { styled } from "styled-components";

export const StyledSidebarContent = styled("div")({
  height: "100%",
  overflowY: "auto",
  paddingTop: "17px",
});

export const StyledLogoBlock = styled("div")({
  height: "48px",
  display: "flex",
  padding: "0 16px",
  marginBottom: "12px",
  marginTop: "3px",
});

export const StyledMenuBlock = styled("div")({
  height: "calc(100% - 63px)",
  display: "flex",
  flexDirection: "column",
  paddingBottom: "20px",
});

export const StyledMenu = styled(Menu)({
  border: "none !important",
  "& li": {
    borderRadius: "0 !important",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",

    color: "#475467",
  },
  "& li.ant-menu-item-selected svg path": {
    stroke: "#4623E9",
  },
  "& li .ant-menu-title-content": {
    paddingLeft: "14px",
  },
});
