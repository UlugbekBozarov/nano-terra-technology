import { Select } from "antd";
import { styled } from "styled-components";

export const StyledSelect = styled(Select)({
  width: "100%",
  height: "40px",
  "& .ant-select-selector": {
    height: "40px !important",
  },
});
