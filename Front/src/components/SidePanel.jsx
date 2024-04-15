import { Search, LogOut, EllipsisVertical, CirclePlus } from "lucide-react";
import Button from "./ui/Button";
import SideBarTask from "./ui/SideBarTask";

function SidePanel() {
  return (
    <div className="flex flex-col h-screen bg-neutral-800 text-neutral-200 px-6 py-6 drop-shadow-xl">
      <div className="flex justify-between items-start">
        <div className="flex items-end gap-4 mb-6">
          <img
            className="rounded-xl object-cover w-9 h-9 "
            src="https://www.rollingstone.com/wp-content/uploads/2019/05/tame-impala-lead-photo.jpg?w=1581&h=1054&crop=1"
            alt="avatar"
          />
          <span className="text-lg font-bold">John Doe</span>
        </div>
        <button>
          <EllipsisVertical />
        </button>
      </div>
      <div className="flex gap-4 flex-col">
        <div className="flex gap-2 items-center">
          <Search size={20} />
          <span>Buscar</span>
        </div>
        <div className="flex gap-2 items-center">
          <CirclePlus size={20} />
          <span>Nueva Página</span>
        </div>
      </div>
      <div className="w-full bg-neutral-600 h-0.5 my-6"></div>
      <SideBarTask taskName="🤝 Reunión de equipo" progress={100} />
      <SideBarTask taskName="📊 Informe mensual" progress={75} />
      <SideBarTask taskName="🔍 Investigación de mercado" progress={30} />
      <SideBarTask taskName="📋 Preparación de presentación" progress={90} />
      <div className="w-full bg-neutral-600 h-0.5 my-2"></div>
      <div className="flex-grow"></div>
      <div className="flex justify-center pb-6"></div>
    </div>
  );
}

export default SidePanel;
