import { Basket } from "components/Icons";
import { Tabs } from "components/common";

const EmployeeFilter = () => {
  return (
    <div id="resizable-content">
      <div style={{ minHeight: "56px", paddingBottom: "20px" }}>
        <Tabs
          items={[
            {
              label: "All",
              value: "all",
              count: 20,
            },
            {
              label: "Lorem ipsum",
              value: "lorem-1",
              count: 12,
            },
            {
              icon: <Basket />,
              label: "Lorem ipsum",
              value: "lorem-2",
              count: 12,
            },
            {
              label: "Lorem ipsum",
              value: "lorem-3",
              count: 12,
            },
          ]}
        />
        {/* <Space size={[0, 8]} wrap>
          <Tag>success</Tag>
          <Tag color="processing">processing</Tag>
          <Tag color="error">error</Tag>
          <Tag color="warning">warning</Tag>
          <Tag color="default">default</Tag>
        </Space> */}
      </div>
    </div>
  );
};

export default EmployeeFilter;
