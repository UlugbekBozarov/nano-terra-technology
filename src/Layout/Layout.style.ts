import { Layout } from "antd";
import { styled } from "styled-components";

export const StyledLayout = styled(Layout)<{ height?: string }>(
  ({ height }) => ({
    height: height,
  })
);

export const StyledContent = styled(Layout.Content)({
  height: "calc(100vh - 76px)",
  overflowY: "auto",
  backgroundColor: "transparent",
  padding: "20px",
});
