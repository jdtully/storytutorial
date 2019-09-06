import React from "react";
import Task from "./Task";

function Tasklist({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = { onPinTask, onArchiveTask };

  if (loading) {
    return <div className="list-items">loading</div>;
  }
  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }
  return (
    <div classname="list-items ">
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}
export default Tasklist;
