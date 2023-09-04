import { Fragment, useState } from "react";
import { Card, Col, Row } from "antd";

import { EmployeeFilter, EmployeeList } from "./components";
import { Box, Button } from "components/common";
import { FilterInput, FilterSelect } from "components/filter";

const Employees = () => {
  const [isFilter, setIsFilter] = useState<boolean>(false);

  return (
    <Fragment>
      <EmployeeFilter />
      <Row>
        {isFilter && (
          <Col span={24} xl={{ span: 8, order: 2 }} xxl={{ span: 6 }}>
            <Box pb={24} pl={{ xl: 24 }}>
              <Card>
                <Row>
                  <Col span={24}>
                    <Box pb={4}>
                      <FilterInput label="Your name" placeholder="John Doe" />
                    </Box>
                  </Col>
                  <Col span={24}>
                    <Box pb={4}>
                      <FilterSelect
                        label="Your name"
                        options={[
                          { value: "jack", label: "Jack" },
                          { value: "lucy", label: "Lucy" },
                          { value: "Yiminghe", label: "yiminghe" },
                          {
                            value: "disabled",
                            label: "Disabled",
                            disabled: true,
                          },
                        ]}
                      />
                    </Box>
                  </Col>
                  <Col span={24}>
                    <Box pb={4}>
                      <FilterSelect
                        label="Your name"
                        options={[
                          { value: "jack", label: "Jack" },
                          { value: "lucy", label: "Lucy" },
                          { value: "Yiminghe", label: "yiminghe" },
                          {
                            value: "disabled",
                            label: "Disabled",
                            disabled: true,
                          },
                        ]}
                      />
                    </Box>
                  </Col>
                  <Col span={12}>
                    <Box pb={4} pr={6}>
                      <FilterSelect
                        label="Your name"
                        options={[
                          { value: "jack", label: "Jack" },
                          { value: "lucy", label: "Lucy" },
                          { value: "Yiminghe", label: "yiminghe" },
                          {
                            value: "disabled",
                            label: "Disabled",
                            disabled: true,
                          },
                        ]}
                      />
                    </Box>
                  </Col>
                  <Col span={12}>
                    <Box pb={4} pl={6}>
                      <FilterSelect
                        label="Your name"
                        options={[
                          { value: "jack", label: "Jack" },
                          { value: "lucy", label: "Lucy" },
                          { value: "Yiminghe", label: "yiminghe" },
                          {
                            value: "disabled",
                            label: "Disabled",
                            disabled: true,
                          },
                        ]}
                      />
                    </Box>
                  </Col>
                  <Col span={12}>
                    <Box pb={4} pr={6}>
                      <Button padding="0">Filter cleaning</Button>
                    </Box>
                  </Col>
                  <Col span={12}>
                    <Box pb={4} pl={6}>
                      <Button>Filtering</Button>
                    </Box>
                  </Col>
                </Row>
              </Card>
            </Box>
          </Col>
        )}
        <Col
          span={24}
          xl={{ span: isFilter ? 16 : 24, order: 1 }}
          xxl={{ span: isFilter ? 18 : 24 }}
        >
          <EmployeeList isFilter={isFilter} setIsFilter={setIsFilter} />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Employees;
