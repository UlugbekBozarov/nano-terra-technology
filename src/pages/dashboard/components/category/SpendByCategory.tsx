import { Card, Col, Row, Typography } from "antd";
import { PieChart, Pie, Cell } from "recharts";

import { More } from "components/Icons";
import { Box } from "components/common";

const data = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 250 },
  { name: "Group F", value: 200 },
];
const COLORS = [
  {
    color: "#EB7CA6",
    text: "Employees Salary",
    price: "$8.000.00",
  },
  {
    color: "#FFACC8",
    text: "Material Supplies",
    price: "$2.130.00",
  },
  {
    color: "#CC6FF8",
    text: "Company tax",
    price: "$1.510.00",
  },
  {
    color: "#7C5CFC",
    text: "Maintenance system",
    price: "$2.245.00",
  },
  {
    color: "#5CAFFC",
    text: "Development System",
    price: "$4.385.00",
  },
  {
    color: "#A1A9FE",
    text: "Production Tools ",
    price: "$1.000.00",
  },
];

const SpendByCategory = () => {
  return (
    <Card>
      <Row>
        <Col xs={{ span: 24 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography.Title level={4} style={{ margin: 0 }}>
              <PieChart
                width={300}
                height={300}
                // onMouseEnter={onPieEnter}
              >
                <Pie
                  data={data}
                  innerRadius={90}
                  outerRadius={110}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  radius={12}
                  cornerRadius={5}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length].color}
                    />
                  ))}
                </Pie>
              </PieChart>
            </Typography.Title>
            <More />
          </Box>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 24 }}>
          <Box mt={10}>{/* <Doughnut */}</Box>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 24 }}>
          Bottom
        </Col>
      </Row>
    </Card>
  );
};

export default SpendByCategory;
