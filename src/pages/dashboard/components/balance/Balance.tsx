import { Button, Card, Typography } from "antd";
import { MoneyReceive, MoneySend, More } from "components/Icons";
import { Box } from "components/common";
import { StyledButton } from "./Balance.style";

const Balance = () => {
  return (
    <Card>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography.Title level={4} style={{ margin: 0 }}>
          Your balance
        </Typography.Title>
        <More />
      </Box>
      <Box display="flex" mt={20}>
        <Typography
          style={{
            fontSize: "32px",
            fontWeight: 700,
            margin: 0,
          }}
        >
          $120,435.00
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
      <Box>
        <Typography.Text
          style={{
            color: "#D0D5DD",
          }}
        >
          From Jan 01, 2022 to Jan 31, 2022
        </Typography.Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={40}>
        <StyledButton type="primary" icon={<MoneyReceive />}>
          Top Up
        </StyledButton>
        <StyledButton icon={<MoneySend />}>Transfer</StyledButton>
      </Box>
    </Card>
  );
};

export default Balance;
