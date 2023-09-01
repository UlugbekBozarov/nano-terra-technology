import { TableProps } from "antd";
import { StyledTable } from "./Table.style";

const Table = (props: TableProps<any>) => {
  return <StyledTable {...props} />;
};

export default Table;
