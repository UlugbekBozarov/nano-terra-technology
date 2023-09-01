import { Card, Input, Typography } from "antd";
import { styled } from "styled-components";

export const StyledCard = styled(Card)({
  "& .ant-card-body": {
    padding: 0,
  },
  "@media(min-width: 1200px)": {
    padding: "24px 24px 0 24px",
  },
});

export const StyledInfo = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "10px",
  "@media(min-width: 768px)": {
    alignItems: "start",
  },
  "@media(min-width: 1200px)": {
    alignItems: "center",
    padding: "0 0 24px 0",
  },
}));

export const InfoLeft = styled("div")({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  paddingTop: "10px",
  order: 2,
  "@media(min-width: 768px)": {
    width: "50%",
    order: 1,
  },
  "@media(min-width: 1200px)": {
    width: "auto",
    flexWrap: "nowrap",
    order: 1,
  },
});

export const StyledTitle = styled(Typography.Title)({
  width: "100%",
  textAlign: "right",
  whiteSpace: "nowrap",
  fontSize: "16px !important",
  order: 2,
  margin: "12px 10px 0 0",
  "@media(min-width: 768px)": {
    textAlign: "left",
  },
  "@media(min-width: 1200px)": {
    fontSize: "20px !important",
    order: 1,
  },
});

export const InfoRight = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  order: 1,
  "@media(min-width: 768px)": {
    width: "50%",
    order: 2,
  },
  "@media(min-width: 1200px)": {
    width: "auto",
    order: 2,
  },
});

export const StyledSearchInput = styled(Input)({
  height: "47px",
  borderRadius: "32px",
  padding: "12px 28px",
  "@media(min-width: 768px)": {
    width: "auto",
    maxWidth: "300px",
  },
  "@media(min-width: 1200px)": {
    minWidth: "220px",
    order: 2,
  },
});
