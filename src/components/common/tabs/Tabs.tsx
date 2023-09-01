import React, { useState } from "react";
import { Space } from "antd";

import { StyledBadge, StyledButton } from "./Tabs.style";

interface ITabItem {
  icon?: React.ReactNode;
  label?: string;
  value: string;
  count?: number;
}

interface ITabs {
  items?: Array<ITabItem>;
  onChange?: (value: ITabItem) => void;
}

const Tabs: React.FC<ITabs> = ({ items = [] }) => {
  const [active, setActive] = useState<string>(
    items?.length ? items[0]?.value : ""
  );

  const handleChangeActive = (item: ITabItem) => () => {
    setActive(item?.value);
  };

  return (
    <Space wrap>
      {items?.map((item) => (
        <StyledButton
          type={active === item?.value ? "primary" : undefined}
          ghost={active === item?.value}
          {...item}
          onClick={handleChangeActive(item)}
          key={item?.value}
        >
          {item?.label}
          {item?.count && (
            <StyledBadge active={active === item?.value} count={item?.count} />
          )}
        </StyledButton>
      ))}
    </Space>
  );
};

export default Tabs;
