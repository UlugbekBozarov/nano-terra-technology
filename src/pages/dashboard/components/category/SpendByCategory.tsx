import { Card, Col, Row } from "antd";

const SpendByCategory = () => {
  return (
    <Card>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 24 }}>
          Top
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 24 }}>
          Bottom
        </Col>
      </Row>
    </Card>
  );
};

export default SpendByCategory;
