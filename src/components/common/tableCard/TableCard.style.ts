import { Card } from "antd";
import { styled } from "styled-components";

export const StyledCard = styled(Card)({
  "& .ant-card-body": {
    padding: 0,
  },
  "@media(min-width: 1200px)": {
    padding: "24px",
  },
});
