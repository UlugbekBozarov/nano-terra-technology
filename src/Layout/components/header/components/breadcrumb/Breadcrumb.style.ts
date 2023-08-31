import { Breadcrumb } from "antd";
import { styled } from "styled-components";

export const StyledBreadcrumb = styled(Breadcrumb)({
  "& li": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
