// import { Bar } from "react-chartjs-2";
import { Card, Typography } from "antd";

import { YearFilter } from "components/filter";
import { Box } from "components/common";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    dataKey: 2400,
    amt: "$500",
  },
  {
    name: "Feb",
    uv: 3000,
    dataKey: 1398,
    amt: "$1000",
  },
  {
    name: "Mar",
    dataKey: 9800,
    amt: "$1000",
  },
  {
    name: "Apr",
    dataKey: 3908,
    amt: "$1000",
  },
  {
    name: "May",
    dataKey: 4800,
    amt: "$1000",
  },
  {
    name: "Jun",
    dataKey: 3800,
    amt: "$1000",
  },
  {
    name: "Jul",
    dataKey: 4300,
    amt: "$1000",
  },
  {
    name: "Avg",
    dataKey: 4300,
    amt: "$1000",
  },
  {
    name: "Sep",
    dataKey: 4300,
    amt: "$1000",
  },
  {
    name: "Oct",
    dataKey: 4300,
    amt: "$1000",
  },
  {
    name: "Nov",
    dataKey: 4300,
    amt: "$1000",
  },
  {
    name: "Dec",
    dataKey: 4300,
    amt: "$1000",
  },
];

const Spending = () => {
  return (
    <Card>
      <Box display="flex" justifyContent="space-between" mb={15}>
        <Typography.Title level={3} style={{ marginTop: "0px" }}>
          Spending Statistics
        </Typography.Title>
        <YearFilter options={[2021, 2022, 2023, 2024]} />
      </Box>
      {/* <Bar
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mei",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Des",
          ],
          datasets: [
            { data: [] },
            {
              label: "My First dataset",
              backgroundColor: "#4623E9",
              borderRadius: 50,
              data: [
                1565, 9845, 6500, 5900, 8000, 8100, 5600, 5500, 4000, 9561,
                2165, 8432,
              ],
            },
            { data: [] },
          ],
        }}
        options={{
          scales: {
            x: {
              grid: {
                color: "transparent",
                offset: true,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      /> */}
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              yAxisId="left"
              axisLine={false}
              orientation="left"
              stroke="#4623E9"
            />
            {/* <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" /> */}
            <Tooltip />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="dataKey"
              fill="#4623E9"
              barSize={12}
              radius={[12, 12, 0, 0]}
            />
            {/* <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};

export default Spending;
