import { Input } from "antd";
import { styled } from "styled-components";

export const SearchContent = styled("div")({
  height: "36px",
  paddingRight: "10px",
});

export const StyledSearchInput = styled(Input)({
  width: "36px",
  height: "36px",
  padding: "8px 10px",
  borderRadius: "12px",
  lineHeight: "inherit",
  "&.ant-input-affix-wrapper-focused": {
    width: "150px",
  },
  "& .ant-input-prefix": {
    marginRight: "8px",
  },
  "@media(min-width: 1200px)": {
    width: "200px",
    padding: "8px 16px",
  },
});
