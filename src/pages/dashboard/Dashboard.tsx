import { Col, Row } from "antd";

import { Box } from "components/common";

import {
  Balance,
  SpendByCategory,
  Spending,
  Total,
  TransactionHistory,
} from "./components";

const Dashboard = () => {
  return (
    <Row>
      <Col xs={{ span: 24, order: 2 }} xl={{ order: 1, span: 16 }}>
        <Row>
          <Col span={24}>
            <Box pb={20}>
              <Spending />
            </Box>
          </Col>
          <Col span={24}>
            <Box pb={20}>
              <TransactionHistory />
            </Box>
          </Col>
          <Col span={24}>
            <Box pb={20}>
              <Total />
            </Box>
          </Col>
        </Row>
      </Col>
      <Col xs={{ span: 24, order: 1 }} xl={{ span: 8, order: 2 }}>
        <Box pl={{ xl: 20 }}>
          <Row>
            <Col span={24}>
              <Box pb={20}>
                <Balance />
              </Box>
            </Col>
            <Col span={24}>
              <Box pb={20}>
                <SpendByCategory />
              </Box>
            </Col>
          </Row>
        </Box>
      </Col>
    </Row>
  );
};

export default Dashboard;
