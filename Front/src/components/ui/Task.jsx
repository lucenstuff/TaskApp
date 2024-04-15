import React, { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import PrioritySelector from "./PrioritySelector";
import TaskService from "../../services/TaskService";

function Task({ taskId, taskName, isDone }) {
  const [completed, setCompleted] = useState(isDone);

  const toggleCompleted = async (taskId) => {
    try {
      const newCompletedStatus = !completed;
      await TaskService.updateDoneTask(taskId, newCompletedStatus);
      setCompleted((prevCompleted) => !prevCompleted);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center gap-6 text-neutral-200 text-md justify-between">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleCompleted(taskId)}
            className="form-checkbox h-4 w-4 text-neutral-200"
          />
          <div className={completed ? "line-through" : ""}>{taskName}</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <PrioritySelector />
          <EllipsisVertical className="hover:cursor-pointer hover:transform hover:scale-105" />
        </div>
      </div>
      <div className="w-full bg-neutral-200 h-0.5 my-2"></div>
    </>
  );
}

export default Task;
