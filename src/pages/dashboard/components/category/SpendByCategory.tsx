import { Card, Col, Row, Typography } from "antd";
import { PieChart, Pie, Cell, Label } from "recharts";

import { More } from "components/Icons";
import { Box } from "components/common";
import { useResize } from "hooks";
import { ChartBlock, StyledLabelBlock } from "./SpendByCategory.style";

// const data = [
//   { name: "Group A", value: 500 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
//   { name: "Group E", value: 250 },
//   { name: "Group F", value: 200 },
// ];
const data = [
  {
    value: 15,
    color: "#7C5CFC",
    text: "Production Tools ",
    price: "$1.000.00",
  },
  {
    value: 15,
    color: "#FFACC8",
    text: "Material Supplies",
    price: "$2.130.00",
  },
  {
    value: 33,
    color: "#CC6FF8",
    text: "Company tax",
    price: "$1.510.00",
  },
  {
    value: 10,
    color: "#A1A9FE",
    text: "Maintenance system",
    price: "$2.245.00",
  },
  {
    value: 20,
    color: "#5CAFFC",
    text: "Development System",
    price: "$4.385.00",
  },
  {
    value: 12,
    color: "#EB7CA6",
    text: "Employees Salary",
    price: "$8.000.00",
  },
];

const SpendByCategory = () => {
  const { clientWidth } = useResize("pie-chart-content");

  const size = clientWidth < 300 ? 220 : 300;

  return (
    <Card>
      <Row>
        <Col xs={{ span: 24 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={20}
          >
            <Typography.Title level={4} style={{ margin: 0 }}>
              Spend by category
            </Typography.Title>
            <More />
          </Box>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          xl={{ span: 24 }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Box
            id="pie-chart-content"
            width="100%"
            display="flex"
            justifyContent={{ xs: "center", sm: "start", xl: "center" }}
          >
            <ChartBlock size={size}>
              <PieChart width={size} height={size}>
                <Pie
                  data={data}
                  innerRadius={size < 300 ? 60 : 90}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  cornerRadius={8}
                >
                  {data.map((item, index) => (
                    <Cell key={`cell-${index}`} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
              <StyledLabelBlock size={size}>
                <p>Overall Spending</p>
                <h4>$19,760,00</h4>
              </StyledLabelBlock>
            </ChartBlock>
          </Box>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          xl={{ span: 24 }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Box width="100%">
            {data?.map((item) => (
              <Box display="flex" alignItems="center" mb={23} key={item?.text}>
                <Box width="24px">
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      background: item?.color,
                      borderRadius: "8px",
                    }}
                  />
                </Box>
                <Box
                  width="calc(100% - 24px)"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    style={{
                      color: "#98A2B3",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {item?.text}
                  </Typography>
                  <Typography
                    style={{
                      color: "#1C1E23",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    {item?.price}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Col>
      </Row>
    </Card>
  );
};

export default SpendByCategory;
