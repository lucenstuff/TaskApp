import { ChevronRight } from "lucide-react";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";

function SideBarPage({ name, progress }) {
  const [currentProgress, setCurrentProgress] = useState(progress);

  useEffect(() => {
    setCurrentProgress(progress);
  }, [progress]);

  return (
    <div className="flex flex-col gap-2 mb-10 hover:cursor-pointer">
      <div className="flex gap-2 items-center text-md">
        <ChevronRight />
        <span>{name}</span>
      </div>
      <ProgressBar progress={currentProgress} />
    </div>
  );
}

export default SideBarPage;
