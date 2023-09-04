import { Card, Col, Row, Typography } from "antd";
import { Bar } from "react-chartjs-2";

import { Box } from "components/common";
import { YearFilter } from "components/filter";
import { ArrowUp } from "components/Icons";
import { DisplayImage } from "components/form";

import { StyledButton, StyledTable } from "./UserInfo.style";

const columns = [
  {
    label: "Ҳудуд:",
    value: "Андижон",
  },
  {
    label: "Туман (шаҳар):",
    value: "Андижон ш.",
  },
  {
    label: "Маҳалла:",
    value: "Андижон МФЙ",
  },
  {
    label: "Лавозими:",
    value: "Инспектор",
  },
  {
    label: "Унвони:",
    value: "Капитан",
  },
  {
    label: "Туғилган санаси:",
    value: "12.01.1980",
  },
  {
    label: "Телефон рақами:",
    value: "+99890 123-45-67",
  },
  {
    label: "Паспорт серия ва рақами:",
    value: "АА 1234567",
  },
  {
    label: "Гувоҳнома рақами:",
    value: "123456789",
  },
];

const UserInfo = () => {
  return (
    <Row>
      <Col xs={{ span: 24, order: 2 }} xl={{ order: 1, span: 16 }}>
        <Box mb={24}>
          <Card>
            <Box display={{ sm: "flex" }}>
              <Box width={{ xs: "100%", sm: 160 }} pb={20}>
                <DisplayImage width="160px" height="160px" />
              </Box>
              <Box
                width={{ xs: "100%", sm: "calc(100% - 160px)" }}
                pl={{ sm: 16 }}
              >
                <StyledTable>
                  {columns?.map((column) => (
                    <div className="row" key={column?.value}>
                      <div className="col">{column?.label}</div>
                      <div className="col">{column?.value}</div>
                    </div>
                  ))}
                </StyledTable>
              </Box>
            </Box>
          </Card>
        </Box>
        <Box mb={24}>
          <Card>
            <Box display="flex" justifyContent="space-between" mb={15}>
              <Typography.Title level={3} style={{ marginTop: "0px" }}>
                Иш натижалари самарадорлиги (чорак кесимида)
              </Typography.Title>
              <YearFilter options={[2021, 2022, 2023, 2024]} />
            </Box>
            <Bar
              data={{
                labels: ["I chorak", "II chorak", "III chorak", "IV chorak"],
                datasets: [
                  { data: [] },
                  {
                    label: "1",
                    backgroundColor: "#A1A9FE",
                    borderRadius: Number.MAX_VALUE,
                    data: [57, 38, 28, 38],
                  },
                  { data: [] },
                  {
                    label: "2",
                    backgroundColor: "#EB7CA6",
                    borderRadius: Number.MAX_VALUE,
                    data: [32, 42, 48, 52],
                  },
                  { data: [] },
                  {
                    label: "3",
                    backgroundColor: "#4623E9",
                    borderRadius: Number.MAX_VALUE,
                    data: [63, 52, 68, 45],
                  },
                  { data: [] },
                  {
                    label: "5",
                    backgroundColor: "#5CAFFC",
                    borderRadius: Number.MAX_VALUE,
                    data: [45, 11, 47, 46],
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
        </Box>
        <Box mb={24}>
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
                      1565, 9845, 6500, 5900, 8000, 8100, 5600, 5500, 4000,
                      9561, 2165, 8432,
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
        </Box>
      </Col>
      <Col xs={{ span: 24, order: 1 }} xl={{ span: 8, order: 2 }}>
        <Row>
          <Col span={24}>
            <Box pl={{ lg: 24 }} pb={24}>
              <Card>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="start"
                >
                  <Typography.Title level={5} style={{ margin: "0" }}>
                    KPI кўрсаткичи
                  </Typography.Title>
                  <StyledButton>
                    <ArrowUp />
                  </StyledButton>
                </Box>
                <Box>
                  <Typography
                    style={{
                      fontSize: "32px",
                      lineHeight: "24px",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    73
                    <small
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#D0D5DD",
                        marginLeft: "10px",
                      }}
                    >
                      ball
                    </small>
                  </Typography>
                </Box>
                <Box mt={10}>
                  <Typography.Text
                    style={{
                      color: "#D0D5DD",
                    }}
                  >
                    <span style={{ color: "#14D934", fontWeight: 700 }}>
                      20%
                    </span>{" "}
                    ўтган ойга нисбатан
                  </Typography.Text>
                </Box>
              </Card>
            </Box>
          </Col>
          <Col span={24}>
            <Box pl={{ lg: 24 }}>
              <Card></Card>
            </Box>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default UserInfo;
