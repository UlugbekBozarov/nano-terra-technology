import { Fragment } from "react";
import { TasksFilter, TasksList } from "./components";

const Tasks = () => {
  return (
    <Fragment>
      <TasksFilter />
      <TasksList />
    </Fragment>
  );
};

export default Tasks;
