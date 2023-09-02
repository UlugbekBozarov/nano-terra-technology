import React from "react";
import { FieldError } from "react-hook-form";

import { Text } from "./Error.style";

const Error: React.FC<{ error?: FieldError }> = ({ error }) => {
  if (error) return <Text>{error?.message || "Required"}</Text>;
  else return null;
};

export default Error;
