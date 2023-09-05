import { Card, DatePicker, Table, Typography } from "antd";
import { Bank, Figma, Paypal } from "components/Icons";
import { Box } from "components/common";

const TransactionHistory = () => {
  return (
    <Card>
      <Box display={{ md: "flex" }} justifyContent="space-between" mb={20}>
        <Typography.Title level={3}>TransactionHistory</Typography.Title>
        <DatePicker.RangePicker />
      </Box>
      <Box>
        <div style={{ overflowX: "auto" }}>
          <Table
            dataSource={[
              {
                icon: <Bank />,
                bgColor: "rgba(51, 185, 56, 0.10)",
                transaction: "Bank Transfer",
                date: "Jan 01,2022",
                amount: "$2,000.00",
                status: "Completed",
              },
              {
                icon: <Paypal />,
                bgColor: "#EBF4FF",
                transaction: "Paypal Account",
                date: "Jan 04,2022",
                amount: "$2,000.00",
                status: "Completed",
              },
              {
                icon: <Figma />,
                bgColor: "#EAECF1",
                transaction: "Bank Transfer",
                date: "Jan 06,2022",
                amount: "$2,000.00",
                status: "Completed",
              },
            ]}
            columns={[
              {
                width: 270,
                title: "Transaction",
                dataIndex: "transaction",
                render: (name, data) => {
                  return (
                    <Box width="270px" display="flex" alignItems="center">
                      <Box mr={10}>
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "20px",
                            background: data?.bgColor,
                          }}
                        >
                          {data?.icon}
                        </div>
                      </Box>
                      <Typography.Title level={5} style={{ margin: 0 }}>
                        {name}
                      </Typography.Title>
                    </Box>
                  );
                },
              },
              {
                width: 200,
                title: "Date",
                dataIndex: "date",
              },
              {
                width: 200,
                title: "Amount",
                dataIndex: "amount",
              },
              {
                width: 200,
                title: "Status",
                dataIndex: "status",
              },
            ]}
          />
        </div>
      </Box>
    </Card>
  );
};

export default TransactionHistory;
