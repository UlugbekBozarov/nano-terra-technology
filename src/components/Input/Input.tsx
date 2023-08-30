import { FC } from "react";

import { StyledInput, StyledLabel } from "./Input.style";

interface IInput {
  label?: string;
  name?: string;
  placeholder?: string;
}

const Input: FC<IInput> = ({ name, label, ...props }) => {
  return (
    <div>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput id={name} {...props} />
    </div>
  );
};

export default Input;
