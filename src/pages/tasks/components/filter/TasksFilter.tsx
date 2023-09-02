import React from "react";
import { Box, Button, Tabs } from "components/common";
import { Typography } from "antd";
import { SidebarRight } from "components/Icons";

const TasksFilter = () => {
  return (
    <div id="resizable-content">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={20}
      >
        <Typography.Title level={3} style={{ fontWeight: 700, margin: 0 }}>
          Tasks
        </Typography.Title>
        <Button type="primary" icon={<SidebarRight />}>
          Vazifalar
        </Button>
      </Box>
      <Box minHeight="56px" pb={20}>
        <Tabs
          items={[
            {
              label: "1-vazifa",
              value: "example-1",
              count: 20,
            },
            {
              label: "2-vazifa",
              value: "example-2",
              count: 12,
            },
            {
              label: "3-vazifa",
              value: "example-3",
              count: 12,
            },
            {
              label: "4-vazifa",
              value: "example-4",
              count: 12,
            },
          ]}
        />
      </Box>
    </div>
  );
};

export default TasksFilter;
