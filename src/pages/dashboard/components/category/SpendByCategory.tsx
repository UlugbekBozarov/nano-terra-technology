import { Card, Col, Row, Typography } from "antd";

import { More } from "components/Icons";
import { Box } from "components/common";

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
              Spend by category
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
