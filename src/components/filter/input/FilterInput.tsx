import React from "react";
import { InputProps } from "antd";

import { Label } from "components/common";

import { StyledInput } from "./FilterInput.style";

type IFilterInput = {
  label?: string;
} & InputProps;

const FilterInput: React.FC<IFilterInput> = ({ label, ...props }) => {
  return (
    <div>
      <Label>{label}</Label>
      <StyledInput {...props} />
    </div>
  );
};

export default FilterInput;
