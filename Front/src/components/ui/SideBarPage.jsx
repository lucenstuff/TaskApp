import { ChevronRight } from "lucide-react";
import ProgressBar from "./ProgressBar";

function SideBarPage({ name, progress }) {
  return (
    <div className="flex flex-col gap-2 mb-10 hover:cursor-pointer">
      <div className="flex gap-2 items-center text-md">
        <ChevronRight />
        <span>{name}</span>
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
}

export default SideBarPage;
