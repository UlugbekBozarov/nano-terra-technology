import { FC } from "react";
import { ColumnsType } from "antd/es/table";

import CustomTable from "components/common/customTable/CustomTable";
import { useResize } from "hooks";

const columns: ColumnsType = [
  {
    width: 220,
    title: "Legends",
    dataIndex: "name",
  },
  {
    width: 220,
    title: "User Legends",
    dataIndex: "age",
  },
  {
    width: 200,
    title: "Type",
    dataIndex: "age",
  },
  {
    width: 300,
    title: "Description",
    dataIndex: "address",
  },
];

const EmployeeList: FC<{
  isFilter?: boolean;
  setIsFilter?: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isFilter, setIsFilter }) => {
  const { clientHeight } = useResize();

  return (
    <CustomTable
      selection
      isFilter={isFilter}
      setIsFilter={setIsFilter}
      filterHeight={clientHeight}
      tableTitle="Employees jfjfj jfjfj ffjjf"
      columns={columns}
    />
  );
};

export default EmployeeList;
