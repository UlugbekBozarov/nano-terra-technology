import React from "react";
import { StyledCard } from "./TableCard.style";

interface ITableCard {
  children?: React.ReactNode;
}

const TableCard: React.FC<ITableCard> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default TableCard;
