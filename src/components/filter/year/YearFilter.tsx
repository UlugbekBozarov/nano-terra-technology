import React, { useState } from "react";
import { Left, Right } from "components/Icons";
import { FilterContent, StyledButton, Text } from "./YearFilter.style";

interface IYearFilter {
  options?: Array<number>;
  value?: number;
  onChange?: (index: number) => void;
}

const YearFilter: React.FC<IYearFilter> = ({
  options = [],
  value,
  onChange,
}) => {
  const [index, setIndex] = useState(Math.max(value || options?.length - 1, 0));

  const handleClick = (value: number) => () => {
    const newIndex = index + value;
    if (newIndex >= 0 && newIndex < options?.length) {
      setIndex(newIndex);
    }
  };

  return (
    <FilterContent>
      <StyledButton onClick={handleClick(-1)} disabled={index === 0}>
        <Left />
      </StyledButton>
      <Text>
        {options?.length && options?.[index] ? options?.[index] : "-"}
      </Text>
      <StyledButton
        onClick={handleClick(1)}
        disabled={index === options?.length - 1}
      >
        <Right />
      </StyledButton>
    </FilterContent>
  );
};

export default YearFilter;
