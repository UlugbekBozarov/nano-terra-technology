import { Table } from "antd";
import { styled } from "styled-components";

export const StyledTable = styled(Table)(({ theme }) => ({
  "& .ant-table-body": {
    overflowY: "auto",
  },
  "& thead>tr:first-child >.ant-table-cell": {
    borderWidth: 0,
    borderTopWidth: "1px",
    borderBottomWidth: "1px",
    borderStyle: "solid",
    borderColor: theme?.colorBorderSecondary,
  },
  "& thead>tr:first-child >*:first-child": {
    borderEndStartRadius: "10px",
    borderLeftWidth: "1px",
  },
  "& thead>tr:first-child >*:last-child": {
    borderEndEndRadius: "10px",
    borderRightWidth: "1px",
  },
  "& .ant-table-cell.ant-table-selection-column": {
    paddingLeft: "16px",
    paddingRight: "16px",
  },
}));
