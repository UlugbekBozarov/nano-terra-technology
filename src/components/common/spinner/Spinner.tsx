import React from "react";
import { Spin, SpinProps } from "antd";

import { SpinnerContent } from "./Spinner.style";

const Spinner: React.FC<SpinProps & { width?: string; height?: string }> = ({
  width,
  height,
  ...props
}) => {
  return (
    <SpinnerContent width={width} height={height}>
      <Spin {...props} />
    </SpinnerContent>
  );
};

export default Spinner;
