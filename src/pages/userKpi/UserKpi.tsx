import { Card, Col, Row, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
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
import { ArrowUp, User } from "components/Icons";
import { useResize } from "hooks";
import { YearFilter } from "components/filter";
import CustomTable from "components/common/customTable/CustomTable";

import {
  StyledButton,
  StyledCard,
  StyledChardBlock,
  StyledHr,
} from "./UserKpi.style";

const cardData = [
  {
    label: "Ходимлар сони штат бўйича:",
    value: 8,
  },
  {
    label: "Вакант:",
    value: 0,
  },
  {
    label: "Рўйхат бўйича:",
    value: 8,
  },
  {
    label: "Меҳнат таътилида:",
    value: 1,
  },
  {
    label: "Сабабли:",
    value: 0,
  },
  {
    label: "Сабабли:",
    value: 0,
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

const pieData = [
  {
    value: 78,
    color: "#16EF39",
    text: '"яшил" маҳаллалар сони',
  },
  {
    value: 131,
    color: "#FF4D4F",
    text: '"қизил" маҳаллалар сони',
  },
];

const columns: ColumnsType = [
  {
    width: 220,
    title: "Legends",
    dataIndex: "name",
  },
  {
    width: 220,
    title: "User Legends",
    dataIndex: "age",
  },
  {
    width: 200,
    title: "Type",
    dataIndex: "age",
  },
  {
    width: 300,
    title: "Description",
    dataIndex: "address",
  },
];

const UserKpi = () => {
  const { clientWidth } = useResize("pie-chart-content");

  const size = clientWidth < 300 ? 220 : 300;

  return (
    <Row>
      <Col span={24}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {cardData?.map((item, index) => (
            <Box key={index} mr={24} mb={24}>
              <StyledCard>
                <Box display="flex">
                  <Box width="48px" display="flex" alignItems="center">
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "20px",
                        background: "#F7F5FD",
                      }}
                    >
                      <User />
                    </div>
                  </Box>
                  <Box>
                    <Typography.Title level={5} style={{ margin: 0 }}>
                      {item?.value}
                    </Typography.Title>
                    <Typography.Text style={{ color: "#98A2B3" }}>
                      {item?.label}
                    </Typography.Text>
                  </Box>
                </Box>
              </StyledCard>
            </Box>
          ))}
        </div>
      </Col>
      <Col span={24}>
        <Box mb={24}>
          <Row>
            <Col xs={{ span: 24, order: 2 }} xl={{ order: 1, span: 16 }}>
              <Card>
                <Row>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <Box display={{ md: "flex" }}>
                      <Box width="100%" pb={{ xs: 24, md: 0 }} pr={{ md: 24 }}>
                        {cardData?.map((item, index) => (
                          <Box display="flex" key={index}>
                            <Box width="calc(100% - 40px)">
                              <Typography.Title level={5}>
                                {item?.label}
                              </Typography.Title>
                            </Box>
                            <Box width="40px">
                              <Typography.Title
                                level={5}
                                style={{ color: "#667085" }}
                              >
                                {item?.value}
                              </Typography.Title>
                            </Box>
                          </Box>
                        ))}
                      </Box>
                      <StyledHr />
                    </Box>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <Box pt={{ xs: 24, md: 0 }} pl={{ md: 24 }}>
                      {[
                        {
                          label: "Кунлик хизматга чиқиш меъёри:",
                          value: 8,
                        },
                        {
                          label: "Кунлик хизматга чиққан ходимлар:",
                          value: 8,
                        },
                        {
                          label:
                            "Патруллик йўналишида хизмат олиб борган ходимлар:",
                          value: 8,
                        },
                      ].map((item, index) => (
                        <Box display="flex" key={index}>
                          <Box width="calc(100% - 40px)">
                            <Typography.Title level={5}>
                              {item?.label}
                            </Typography.Title>
                          </Box>
                          <Box width="40px">
                            <Typography.Title
                              level={5}
                              style={{ color: "#667085" }}
                            >
                              {item?.value}
                            </Typography.Title>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={{ span: 24, order: 1 }} xl={{ span: 8, order: 2 }}>
              <Box pl={{ xl: 24 }} pb={{ xs: 24, xl: 0 }}>
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
          </Row>
        </Box>
      </Col>
      <Col span={24}>
        <Box mb={24}>
          <Row>
            <Col xs={{ span: 24, order: 2 }} xl={{ order: 1, span: 16 }}>
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
                                <p
                                  style={{ fontSize: "14px", fontWeight: 400 }}
                                >
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
            </Col>
            <Col xs={{ span: 24, order: 1 }} xl={{ span: 8, order: 2 }}>
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
                        <Typography.Title level={5} style={{ margin: 0 }}>
                          Отряд хизмат олиб борадиган ҳудудда (туман, шаҳар,
                          сектор)даги маҳаллалар сони
                        </Typography.Title>
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
        </Box>
      </Col>
      <Col span={24}>
        <CustomTable tableTitle="Xodimlar" columns={columns} />
      </Col>
    </Row>
  );
};

export default UserKpi;
