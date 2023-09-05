import { Card, Typography } from "antd";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { YearFilter } from "components/filter";
import { Box } from "components/common";

import { StyledChardBlock } from "./Spending.style";

const data = [
  {
    name: "Jan",
    dataKey: 11000,
    amt: "$500",
  },
  {
    name: "Feb",
    dataKey: 3000,
    amt: "$1000",
  },
  {
    name: "Mar",
    dataKey: 14000,
    amt: "$1000",
  },
  {
    name: "Apr",
    dataKey: 7000,
    amt: "$1000",
  },
  {
    name: "May",
    dataKey: 4500,
    amt: "$1000",
  },
  {
    name: "Jun",
    dataKey: 15100,
    amt: "$1000",
  },
  {
    name: "Jul",
    dataKey: 6800,
    amt: "$1000",
  },
  {
    name: "Avg",
    dataKey: 8000,
    amt: "$1000",
  },
  {
    name: "Sep",
    dataKey: 15100,
    amt: "$1000",
  },
  {
    name: "Oct",
    dataKey: 12000,
    amt: "$1000",
  },
  {
    name: "Nov",
    dataKey: 7000,
    amt: "$1000",
  },
  {
    name: "Dec",
    dataKey: 14000,
    amt: "$1000",
  },
];

const Spending = () => {
  return (
    <Card>
      <Box display={{ md: "flex" }} justifyContent="space-between" mb={15}>
        <Typography.Title level={3} style={{ marginTop: "0px" }}>
          Spending Statistics
        </Typography.Title>
        <YearFilter options={[2021, 2022, 2023, 2024]} />
      </Box>
      <StyledChardBlock>
        <Box width="100%" height="400px">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 10,
              }}
            >
              <CartesianGrid verticalPoints={[0]} strokeDasharray={"1 0"} />
              <XAxis dataKey="name" axisLine={false} />
              <YAxis
                style={{
                  fontSize: "14px",
                  color: "#667085",
                  fontWeight: 600,
                }}
                yAxisId="left"
                tickFormatter={(value) =>
                  `$ ${
                    value / 1000 > 1 ? `${Math.floor(value / 1000)}k` : value
                  }`
                }
                axisLine={false}
                stroke="#4623E9"
              />
              <Tooltip
                itemStyle={{
                  display: "none",
                }}
                labelFormatter={(_, payload) => {
                  return (
                    <div>
                      <p>Expense</p>
                      <p style={{ fontSize: "14px", fontWeight: 400 }}>
                        $ {payload?.[0]?.value || "0"}
                      </p>
                    </div>
                  );
                }}
                labelStyle={{
                  color: "#fff",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: 600,
                }}
                contentStyle={{
                  background: "#1C1E23",
                  border: "none",
                  borderRadius: "8px",
                  padding: "6px 20px",
                }}
              />
              <Bar
                yAxisId="left"
                dataKey="dataKey"
                fill="#4623E9"
                barSize={12}
                radius={[12, 12, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </StyledChardBlock>
    </Card>
  );
};

export default Spending;
