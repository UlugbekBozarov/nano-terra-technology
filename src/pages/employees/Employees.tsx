import { Fragment } from "react";

import { EmployeeFilter, EmployeeList } from "./components";

const Employees = () => {
  return (
    <Fragment>
      <EmployeeFilter />
      <EmployeeList />
    </Fragment>
  );
};

export default Employees;
