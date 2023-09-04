import React from "react";
import { SelectProps } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { BaseOptionType } from "antd/es/cascader";

import { Label } from "components/common";

import { StyledSelect } from "./FilterSelect.style";

type IFilterSelect = {
  label?: string;
} & SelectProps<unknown, DefaultOptionType | BaseOptionType>;

const FilterSelect: React.FC<IFilterSelect> = ({ label, ...props }) => {
  return (
    <div>
      <Label>{label}</Label>
      <StyledSelect {...props} />
    </div>
  );
};

export default FilterSelect;
