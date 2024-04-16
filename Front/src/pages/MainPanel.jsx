import { CirclePlus } from "lucide-react";
import ProgressBar from "../components/ui/ProgressBar";
import PageService from "../services/PageService";
import { useState, useEffect } from "react";
import Task from "../components/ui/Task";
import PageHader from "../components/ui/PageHeader";

function MainPanel() {
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    const fetchSelectedPage = async () => {
      try {
        const fetchedSelectedPage = await PageService.getPagebyId(1);
        setSelectedPage(fetchedSelectedPage);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSelectedPage();
  }, []);

  return (
    <div className="w-full h-screen text-neutral-200">
      <PageHader color={selectedPage?.color} name={selectedPage?.name} />
      <div className="w-full h-5/6 flex flex-col  bg-neutral-900 gap-4 pt-4 px-10">
        <div className="flex justify-center flex-col gap-2">
          <span>Progreso:{selectedPage?.progress}%</span>
          <ProgressBar className progress={selectedPage?.progress} />
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2 items-center">
            <CirclePlus size={20} />
            <span className="hover:cursor-pointer hover:underline">
              Añadir Tarea
            </span>
          </div>
        </div>
        {selectedPage?.tasks ? (
          selectedPage.tasks.map((task) => (
            <Task
              key={task.id}
              taskName={task.name}
              isDone={task.done}
              id={task.id}
            />
          ))
        ) : (
          <div>Cargando tareas...</div>
        )}
      </div>
    </div>
  );
}

export default MainPanel;
