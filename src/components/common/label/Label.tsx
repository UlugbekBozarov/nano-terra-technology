import React from "react";

import { FormLabel, StyleStar } from "./Label.style";

export type ILabel = {
  htmlFor?: string;
  required?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  warning?: boolean;
};

const Label: React.FC<ILabel> = ({ required, children, ...props }) => {
  return children ? (
    <FormLabel {...props}>
      {children}
      {required ? <StyleStar>*</StyleStar> : ""}
    </FormLabel>
  ) : (
    <></>
  );
};

export default Label;
