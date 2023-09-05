import React from "react";
import { Card, Col, Row, Typography } from "antd";

import { Box, Table, TableCard } from "components/common";
import { StyledIndex, StyledLi, StyledText, StyledUl } from "./TasksList.style";

interface ITaskList {
  open: boolean;
}

const data = [
  {
    number: "1.1.",
    text: "Патруллик йўналиши хизмат олиб борилган вақтда жиноят содир этилмаган кунлар",
  },
  {
    number: "1.2",
    text: "Йўналишда хизмат вақтида кўча ва жамоат жойда содир этилган жиноятлар сони",
  },
  {
    number: "1.2.1",
    text: "Ушбу жиноятнинг йўналишдаги ходим томонидан “иссиқ издан” очилиши",
  },
  {
    number: "1.3.",
    text: "Ходим томонидан ёки унинг ташаббуси билан олди олинган жиноятлар сони",
  },
  {
    number: "1.4.",
    text: "Ходим томонидан шахсан фош этилган қотиллик, талончилик, босқинчилик, ҚБОШЕ, ўғрилик, безорилик сони (1.2.1-банддагидан ташқари)",
  },
  {
    number: "1.5.",
    text: "Ходим томонидан шахсан фош этилган бошқа жиноятлар / Ходим иштирокида фош этилган жиноятлар (жиноятларнинг барча тури учун) / Ходим томонидан аниқланган қидирувда бўлган ва/ёки бедарак йўқолган шахслар сони",
  },
];

const TasksList: React.FC<ITaskList> = ({ open }) => {
  return (
    <Row>
      <Col
        span={24}
        xl={{ span: open ? 16 : 24 }}
        xxl={{ span: open ? 18 : 24 }}
      >
        <TableCard>
          <Table
            columns={[
              {
                width: 220,
                title: "IFO",
                dataIndex: "ifo",
              },
              {
                width: 220,
                title:
                  "Хизматга чиққан кун / Патруллик йўналишида хизмат олиб борилган кун",
                dataIndex: "date",
              },
              {
                width: 100,
                title: "1.1",
                dataIndex: "1_1",
              },
              {
                width: 100,
                title: "1.2",
                dataIndex: "1_2_1",
              },
              {
                width: 100,
                title: "1.2.2",
                dataIndex: "1_2_2",
              },
              {
                width: 100,
                title: "1.3",
                dataIndex: "1_3",
              },
              {
                width: 100,
                title: "1.4",
                dataIndex: "1_4",
              },
              {
                width: 100,
                title: "1.5",
                dataIndex: "1_5",
              },
            ]}
            dataSource={[
              {
                ifo: "1-гр. ком. Ж.Ахранов",
                date: "31 / 28",
                "1_1": "20,0 / 28",
                "1_2_1": "20,0 / 28",
                "1_2_2": "20,0 / 28",
                "1_3": "20,0 / 28",
                "1_4": "20,0 / 28",
                "1_5": "20,0 / 28",
              },
              {
                ifo: "1-гр. ком. Ж.Ахранов",
                date: "31 / 28",
                "1_1": "20,0 / 28",
                "1_2_1": "20,0 / 28",
                "1_2_2": "20,0 / 28",
                "1_3": "20,0 / 28",
                "1_4": "20,0 / 28",
                "1_5": "20,0 / 28",
              },
              {
                ifo: "1-гр. ком. Ж.Ахранов",
                date: "31 / 28",
                "1_1": "20,0 / 28",
                "1_2_1": "20,0 / 28",
                "1_2_2": "20,0 / 28",
                "1_3": "20,0 / 28",
                "1_4": "20,0 / 28",
                "1_5": "20,0 / 28",
              },
              {
                ifo: "1-гр. ком. Ж.Ахранов",
                date: "31 / 28",
                "1_1": "20,0 / 28",
                "1_2_1": "20,0 / 28",
                "1_2_2": "20,0 / 28",
                "1_3": "20,0 / 28",
                "1_4": "20,0 / 28",
                "1_5": "20,0 / 28",
              },
            ]}
          />
        </TableCard>
      </Col>
      {open && (
        <Col span={24} xl={{ span: 8 }} xxl={{ span: 6 }}>
          <Box pt={{ xs: 24, xl: 0 }} pl={{ xl: 24 }}>
            <Card>
              <Box>
                <Typography.Title level={4}>Active Students</Typography.Title>
              </Box>
              <StyledUl>
                {data?.map((item) => (
                  <StyledLi>
                    <StyledIndex>{item?.number}</StyledIndex>
                    <StyledText>{item?.text}</StyledText>
                  </StyledLi>
                ))}
              </StyledUl>
            </Card>
          </Box>
        </Col>
      )}
    </Row>
  );
};

export default TasksList;
