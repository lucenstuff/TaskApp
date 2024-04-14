import { Sun } from "lucide-react";
import ProgressBar from "./ProgressBar";

function SideBarTask({ taskName, progress, icon }) {
  return (
    <div className="flex flex-col gap-2 mb-10">
      <div className="flex gap-2 items-center">
        <span>{taskName}</span>
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
}

export default SideBarTask;
