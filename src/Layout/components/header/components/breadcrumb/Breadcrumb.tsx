import React from "react";

import { ChevronRight, Home } from "components/Icons";

import { StyledBreadcrumb } from "./Breadcrumb.style";

const Breadcrumb = () => {
  return (
    <StyledBreadcrumb
      separator={<ChevronRight />}
      items={[
        {
          href: "",
          title: <Home />,
        },
        {
          href: "",
          title: <span>Document</span>,
        },
      ]}
    />
  );
};

export default Breadcrumb;
