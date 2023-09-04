import React, { useState } from "react";
import { Space, TableProps } from "antd";

import { Add, Filter, Search } from "components/Icons";

import Table from "../table/Table";
import Button from "../button/Button";
import {
  InfoLeft,
  InfoRight,
  StyledCard,
  StyledInfo,
  StyledSearchInput,
  StyledTitle,
} from "./CustomTable.style";
import { useResizeWindow } from "hooks";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

type ICustomTable = TableProps<any> & {
  tableTitle?: string;
  selection?: boolean;
  filterHeight?: number;
  isFilter?: boolean;
  setIsFilter?: React.Dispatch<React.SetStateAction<boolean>>;
};

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const CustomTable: React.FC<ICustomTable> = ({
  filterHeight = 0,
  selection,
  tableTitle,
  isFilter = false,
  setIsFilter,
  ...props
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const { windowWidth, clientHeight } = useResizeWindow("custom-table-info");

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <StyledCard>
      <StyledInfo id="custom-table-info">
        <InfoLeft>
          {tableTitle ? (
            <StyledTitle level={2}>
              {tableTitle}
              <span
                style={{ fontWeight: 100, color: "#667085", margin: "0 20px" }}
              >
                |
              </span>
              <small style={{ fontWeight: 400 }}>{data?.length}</small>
            </StyledTitle>
          ) : (
            ""
          )}
          <StyledSearchInput suffix={<Search />} placeholder="Search by name" />
        </InfoLeft>
        <InfoRight>
          <Space wrap style={{ justifyContent: "flex-end" }}>
            {!isFilter && (
              <Button
                type="primary"
                ghost
                icon={<Filter />}
                onClick={() => setIsFilter && setIsFilter(true)}
              >
                Filtering
              </Button>
            )}
            <Button type="primary" icon={<Add />}>
              Button
            </Button>
          </Space>
        </InfoRight>
      </StyledInfo>
      <Table
        {...props}
        scroll={{
          y: `calc(100vh - ${
            filterHeight + clientHeight + 240 + (windowWidth > 1200 ? 24 : 0)
          }px)`,
        }}
        rowSelection={selection ? rowSelection : undefined}
        dataSource={data}
      />
    </StyledCard>
  );
};

export default CustomTable;
