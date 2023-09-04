import { Basket } from "components/Icons";
import { Box, Tabs } from "components/common";

const EmployeeFilter = () => {
  return (
    <div id="resizable-content">
      <Box minHeight={56} pb={20}>
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
      </Box>
    </div>
  );
};

export default EmployeeFilter;
