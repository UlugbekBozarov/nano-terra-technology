import { Bar } from "react-chartjs-2";
import { Card, Typography } from "antd";

import { YearFilter } from "components/filter";
import { Box } from "components/common";

const Spending = () => {
  return (
    <Card>
      <Box display="flex" justifyContent="space-between" mb={15}>
        <Typography.Title level={3} style={{ marginTop: "0px" }}>
          Spending Statistics
        </Typography.Title>
        <YearFilter options={[2021, 2022, 2023, 2024]} />
      </Box>
      <Bar
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
      />
    </Card>
  );
};

export default Spending;
