import { Card, Col, Row, Typography } from "antd";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { Box } from "components/common";
import { YearFilter } from "components/filter";
import { ArrowUp, More } from "components/Icons";
import { DisplayImage } from "components/form";
import { useResize } from "hooks";

import {
  ChartBlock,
  StyledButton,
  StyledChardBlock,
  StyledLabelBlock,
  StyledTable,
} from "./UserInfo.style";

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

const data = [
  {
    label: "1",
    backgroundColor: "#A1A9FE",
    borderRadius: Number.MAX_VALUE,
    data: [57, 32, 63, 45],
  },
  {
    label: "2",
    backgroundColor: "#EB7CA6",
    borderRadius: Number.MAX_VALUE,
    data: [38, 42, 55, 11],
  },
  {
    label: "3",
    backgroundColor: "#4623E9",
    borderRadius: Number.MAX_VALUE,
    data: [28, 48, 68, 47],
  },
  {
    label: "5",
    backgroundColor: "#5CAFFC",
    borderRadius: Number.MAX_VALUE,
    data: [38, 53, 28, 46],
  },
];

const data2 = [
  {
    name: "Jan",
    dataKey: 68,
    amt: "$500",
  },
  {
    name: "Feb",
    dataKey: 68,
    amt: "$1000",
  },
  {
    name: "Mar",
    dataKey: 68,
    amt: "$1000",
  },
  {
    name: "Apr",
    dataKey: 68,
    amt: "$1000",
  },
  {
    name: "May",
    dataKey: 68,
    amt: "$1000",
  },
  {
    name: "Jun",
    dataKey: 68,
    amt: "$1000",
  },
  {
    name: "Jul",
    dataKey: 68,
    amt: "$1000",
  },
  {
    name: "Avg",
    dataKey: 68,
    amt: "$1000",
  },
  {
    name: "Sep",
    dataKey: 68,
    amt: "$1000",
  },
  {
    name: "Oct",
    dataKey: 68,
    amt: "$1000",
  },
  {
    name: "Nov",
    dataKey: 68,
    amt: "$1000",
  },
  {
    name: "Dec",
    dataKey: 68,
    amt: "$1000",
  },
];

const pieData = [
  {
    value: 78,
    color: "#7C5CFC",
    text: "1-vazifa ",
  },
  {
    value: 15,
    color: "#FFACC8",
    text: "2-vazifa",
  },
  {
    value: 131,
    color: "#CC6FF8",
    text: "3-vazifa",
  },
  {
    value: 174,
    color: "#A1A9FE",
    text: "4-vazifa",
  },
];

const UserInfo = () => {
  const { clientWidth } = useResize("pie-chart-content");

  const size = clientWidth < 300 ? 220 : 300;

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
                    <CartesianGrid
                      verticalPoints={[0]}
                      strokeDasharray={"1 0"}
                    />
                    <XAxis dataKey="name" axisLine={false} />
                    <YAxis
                      style={{
                        fontSize: "14px",
                        color: "#667085",
                        fontWeight: 600,
                      }}
                      yAxisId="left"
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
                              {payload?.[0]?.value}
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
                      dataKey="data.0"
                      fill="#A1A9FE"
                      barSize={12}
                      radius={[12, 12, 0, 0]}
                    />
                    <Bar
                      yAxisId="left"
                      dataKey="data.1"
                      fill="#EB7CA6"
                      barSize={12}
                      radius={[12, 12, 0, 0]}
                    />
                    <Bar
                      yAxisId="left"
                      dataKey="data.2"
                      fill="#725CFF"
                      barSize={12}
                      radius={[12, 12, 0, 0]}
                    />
                    <Bar
                      yAxisId="left"
                      dataKey="data.3"
                      fill="#5CAFFC"
                      barSize={12}
                      radius={[12, 12, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </StyledChardBlock>
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
            <StyledChardBlock>
              <Box width="100%" height="400px">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={data2}
                    margin={{
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 10,
                    }}
                  >
                    <CartesianGrid
                      verticalPoints={[0]}
                      strokeDasharray={"1 0"}
                    />
                    <XAxis dataKey="name" axisLine={false} />
                    <YAxis
                      style={{
                        fontSize: "14px",
                        color: "#667085",
                        fontWeight: 600,
                      }}
                      yAxisId="left"
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
                              {payload?.[0]?.value}
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
        </Box>
      </Col>
      <Col xs={{ span: 24, order: 1 }} xl={{ span: 8, order: 2 }}>
        <Row>
          <Col span={24}>
            <Box pl={{ xl: 24 }} pb={24}>
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
            <Box pb={{ xs: 24, xl: 0 }} pl={{ xl: 24 }}>
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
                        KPI кўрсаткичи
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
                      justifyContent={{
                        xs: "center",
                        sm: "start",
                        xl: "center",
                      }}
                    >
                      <ChartBlock size={size}>
                        <PieChart width={size} height={size}>
                          <Pie
                            data={pieData}
                            innerRadius={size < 300 ? 60 : 90}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            cornerRadius={8}
                          >
                            {pieData.map((item, index) => (
                              <Cell key={`cell-${index}`} fill={item.color} />
                            ))}
                          </Pie>
                        </PieChart>
                        <StyledLabelBlock
                          style={{
                            width: "80px",
                            position: "absolute",
                            textAlign: "center",
                            top: "calc(50% - 30px)",
                            left: "calc(50% - 40px)",
                          }}
                        >
                          <p>Жами</p>
                          <h4>76,4</h4>
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
                      {pieData?.map((item) => (
                        <Box
                          display="flex"
                          alignItems="center"
                          mb={23}
                          key={item?.text}
                        >
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
                                fontSize: "16px",
                                fontWeight: 600,
                              }}
                            >
                              {item?.value}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Col>
                </Row>
              </Card>
            </Box>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default UserInfo;
