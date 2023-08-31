import { Col, Row } from "antd";

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
            <Spending />
          </Col>
          <Col span={24}>
            <TransactionHistory />
          </Col>
          <Col span={24}>
            <Total />
          </Col>
        </Row>
      </Col>
      <Col xs={{ span: 24, order: 1 }} xl={{ span: 8, order: 2 }}>
        <Row>
          <Col span={24}>
            <Balance />
          </Col>
          <Col span={24}>
            <SpendByCategory />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Dashboard;
