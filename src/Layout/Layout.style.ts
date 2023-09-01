import { Layout } from "antd";
import { styled } from "styled-components";

export const StyledLayout = styled(Layout)<{ height?: string }>(
  ({ height }) => ({
    height: height,
  })
);

export const StyledHeader = styled(Layout.Header)({
  height: 76,
  lineHeight: "76px",
  background: "transparent",
  padding: "16px 10px 4px 10px",
  "@media(min-width: 576px)": {
    padding: "16px 20px 4px 20px",
  },
});

export const StyledContent = styled(Layout.Content)({
  height: "calc(100vh - 76px)",
  overflowY: "auto",
  backgroundColor: "transparent",
  padding: "20px 10px",
  "@media(min-width: 576px)": {
    padding: "20px",
  },
});
