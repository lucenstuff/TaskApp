import { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import PrioritySelector from "./PrioritySelector";

function SubTask({ taskName }) {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <>
      <div className="flex items-center gap-6 text-neutral-200 text-md justify-between">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={completed}
            onChange={toggleCompleted}
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

export default SubTask;
