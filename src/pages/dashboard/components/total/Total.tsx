import { Card, Col, Row, Typography } from "antd";

import { Box } from "components/common";
import { ArrowDown, ArrowUp } from "components/Icons";

import { StyledButton, StyledHr } from "./Total.style";

const Total = () => {
  return (
    <Card>
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Box display={{ md: "flex" }}>
            <Box width="100%" pb={{ xs: 24, md: 0 }} pr={{ md: 24 }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="start"
              >
                <Typography.Title level={5} style={{ margin: "0" }}>
                  Total Income
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
                  $50,530.00
                  <small
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#D0D5DD",
                      marginLeft: "10px",
                    }}
                  >
                    ( USD )
                  </small>
                </Typography>
              </Box>
              <Box mt={10}>
                <Typography.Text
                  style={{
                    color: "#D0D5DD",
                  }}
                >
                  <span style={{ color: "#14D934", fontWeight: 700 }}>20%</span>{" "}
                  increase compared to last week
                </Typography.Text>
              </Box>
            </Box>
            <StyledHr />
          </Box>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Box pt={{ xs: 24, md: 0 }} pl={{ md: 24 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="start"
            >
              <Typography.Title level={5} style={{ margin: "0" }}>
                Total Expense
              </Typography.Title>
              <StyledButton>
                <ArrowDown />
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
                $19,760.00
                <small
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#D0D5DD",
                    marginLeft: "10px",
                  }}
                >
                  ( USD )
                </small>
              </Typography>
            </Box>
            <Box mt={10}>
              <Typography.Text
                style={{
                  color: "#D0D5DD",
                }}
              >
                <span style={{ color: "#FF4D4F", fontWeight: 700 }}>10%</span>{" "}
                decrease compared to last week
              </Typography.Text>
            </Box>
          </Box>
        </Col>
      </Row>
    </Card>
  );
};

export default Total;
