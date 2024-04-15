import { CirclePlus, Ellipsis } from "lucide-react";
import ProgressBar from "../components/ui/ProgressBar";
import SubTask from "../components/ui/SubTask";
import { useState } from "react";

function MainPanel() {
  const [selectedPage, setSelectedPage] = useState(null);

  const useEffect = () => {};

  return (
    <div className="w-full h-screen text-neutral-200">
      <div className="w-full bg-indigo-400 h-20 flex items-center px-10 justify-between gap-4">
        <span className="text-2xl">🤝 Reunión de equipo</span>
        <Ellipsis />
      </div>

      <div className="w-full h-5/6 flex flex-col  bg-neutral-900 gap-4 pt-4 px-10">
        <div className="flex justify-center flex-col gap-2">
          <span></span>
          <ProgressBar className progress={100} />
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2 items-center">
            <CirclePlus size={20} />
            <span className="hover:cursor-pointer hover:underline">
              Añadir Tarea
            </span>
          </div>
        </div>
        <SubTask taskName="🗣 Hablar con Juan Perez" />
        <SubTask taskName="📙 Corregir el proyecto" />
      </div>
    </div>
  );
}

export default MainPanel;
