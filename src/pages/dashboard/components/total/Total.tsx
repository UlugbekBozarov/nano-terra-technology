import { Card, Col, Row } from "antd";

const Total = () => {
  return (
    <Card>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          Left
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          Right
        </Col>
      </Row>
    </Card>
  );
};

export default Total;
