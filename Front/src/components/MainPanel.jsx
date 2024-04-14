import { Sun, Plus } from "lucide-react";
import SearchBar from "./ui/SearchBar";
import ProgressBar from "./ui/ProgressBar";
import SubTask from "./ui/SubTask";

function MainPanel() {
  return (
    <div className="w-full h-screen text-neutral-200">
      <div className="w-full bg-neutral-500 h-1/6 py-10 px-10 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-4xl">🤝 Reunión de equipo</span>
        </div>
        <span className="text-xl">Domingo 21 de Octubre</span>
      </div>
      <div className="w-full h-5/6 flex flex-col gap-4 pt-4 px-4">
        <div className="flex justify-center">
          <SearchBar />
        </div>
        <div className="flex justify-center flex-col gap-2">
          <span>Progreso: 100%</span>
          <ProgressBar className progress={100} />
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2 items-center">
            <Plus />
            <span className="hover:cursor-pointer hover:underline">
              Añadir Tarea
            </span>
          </div>
        </div>
        <div className="flex justify-between px-10">
          <span>Nombre de la tarea</span>
          <span className="pr-20">Prioridad</span>
        </div>
        <SubTask taskName="🗣 Hablar con Juan Perez" />
        <SubTask taskName="📙 Corregir el proyecto" />
      </div>
    </div>
  );
}

export default MainPanel;
