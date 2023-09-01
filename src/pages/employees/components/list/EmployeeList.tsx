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
  // {
  //   width: 77,
  //   render: () => {
  //     return (
  //       <Button type="primary" icon={<Edit />}>
  //         Edit
  //       </Button>
  //     );
  //   },
  //   // dataIndex: "address",
  // },
  // {
  //   width: "30",
  //   // dataIndex: "address",
  // },
];

const EmployeeList = () => {
  const { clientHeight } = useResize();

  return (
    <CustomTable
      selection
      filterHeight={clientHeight}
      tableTitle="Employees jfjfj jfjfj ffjjf"
      columns={columns}
    />
  );
};

export default EmployeeList;
