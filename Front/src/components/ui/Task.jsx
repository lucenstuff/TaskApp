import { useState, useEffect } from "react";
import { Trash } from "lucide-react";
import PrioritySelector from "./PrioritySelector";
import TaskService from "../../services/TaskService";

function Task({ id, taskName, isDone, priority, onTaskUpdate }) {
  const [done, setDone] = useState(isDone);
  const [selectedPriority, setSelectedPriority] = useState(priority);

  useEffect(() => {
    setDone(isDone);
  }, [isDone]);

  const toggleCompleted = async () => {
    setDone(!done);

    try {
      await TaskService.updateDoneTask(id, !done);
      onTaskUpdate();
    } catch (error) {
      console.error("Error updating task:", error);
      setDone(done);
    }
  };

  const handlePriorityChange = async (newPriority) => {
    try {
      await TaskService.updatePriority(id, newPriority);
      setSelectedPriority(newPriority);
      onTaskUpdate();
    } catch (error) {
      console.error("Error updating task priority:", error);
      setSelectedPriority(priority);
    }
  };

  return (
    <>
      <div className="flex items-center gap-6 text-neutral-200 text-md justify-between">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={done}
            onChange={toggleCompleted}
            className="form-checkbox h-4 w-4 text-neutral-200"
          />
          <div className={done ? "line-through" : ""}>{taskName}</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <PrioritySelector
            priority={selectedPriority}
            onPriorityChange={handlePriorityChange}
          />
          <button>
            <Trash className="hover:cursor-pointer hover:transform hover:scale-105" />
          </button>
        </div>
      </div>
      <div className="w-full bg-neutral-200 h-0.5 my-2"></div>
    </>
  );
}

export default Task;
