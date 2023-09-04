import { FC } from "react";
import { ColumnsType } from "antd/es/table";

import CustomTable from "components/common/customTable/CustomTable";
import { useResize } from "hooks";
import { Delete, Edit } from "components/Icons";
import { Box, Button } from "components/common";

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
  {
    width: 150,
    render: () => (
      <Box display="flex">
        <Button height="35px" type="primary" icon={<Edit />} padding="6px 14px">
          Edit
        </Button>
        <Button
          height="35px"
          padding="6px 14px"
          style={{ marginLeft: "10px", border: "none" }}
        >
          <Delete />
        </Button>
      </Box>
    ),
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
