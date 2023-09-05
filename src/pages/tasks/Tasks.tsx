import { Fragment, useState } from "react";
import { TasksFilter, TasksList } from "./components";

const Tasks = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Fragment>
      <TasksFilter setOpen={setOpen} />
      <TasksList open={open} />
    </Fragment>
  );
};

export default Tasks;
