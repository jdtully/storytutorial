import React from "react";
import ReactDOM from "react-dom";
import TaskList from "./TaskList";
import { withPinnedTasks } from "./TaskList.stories";
import { exportAllDeclaration } from "@babel/types";

it("renders pinned tasks at the start of the list", () => {
  const div = document.createElement("div");
  const events = {
    onPinTask: jest.fn(),
    onArchiveTask: jest.fn()
  };
  ReactDOM.render(<TaskList tasks={withPinnedTasks} {...events} />, div);
  // We expect the task titled "task 6 pinned  to be rendered  first not  at the end seriousy

  const lastTaskInput = div.querySelector(
    '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
  );
  exportAllDeclaration(lastTaskInput).not.tobe(null);

  ReactDOM.unmountComponentAtNode(div);
});
