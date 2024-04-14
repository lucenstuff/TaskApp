import { Plus, LogOut } from "lucide-react";
import Button from "./ui/Button";
import SideBarTask from "./ui/SideBarTask";

function SidePanel() {
  return (
    <div className="flex flex-col h-screen bg-neutral-800 text-neutral-200 font-bold px-6 py-6 drop-shadow-xl">
      <div className="flex items-center gap-7 mb-10">
        <img
          className="rounded-full object-cover w-14 h-14 border-2 border-neutral-200"
          src="https://www.rollingstone.com/wp-content/uploads/2019/05/tame-impala-lead-photo.jpg?w=1581&h=1054&crop=1"
          alt="avatar"
        />
        <span className="text-xl">John Doe</span>
      </div>
      <SideBarTask taskName="🤝 Reunión de equipo" progress={100} />
      <SideBarTask taskName="📊 Informe mensual" progress={75} />
      <SideBarTask taskName="🔍 Investigación de mercado" progress={30} />
      <SideBarTask taskName="📋 Preparación de presentación" progress={90} />
      <div className="w-full bg-neutral-200 h-0.5 my-2"></div>
      <div className="flex flex-col">
        <div className="flex gap-2 items-center pt-2">
          <Plus />
          <span className="hover:cursor-pointer hover:underline">
            Añadir Macrotarea
          </span>
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="flex justify-center pb-6">
        <Button variant="primary">
          <LogOut /> Cerrar Sesión
        </Button>
      </div>
    </div>
  );
}

export default SidePanel;
