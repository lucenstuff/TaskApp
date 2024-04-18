import { CirclePlus } from "lucide-react";
import ProgressBar from "../components/ui/ProgressBar";
import PageService from "../services/PageService";
import { useState, useEffect } from "react";
import Task from "../components/ui/Task";
import PageHader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import TaskModal from "../components/TaskModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainPanel() {
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);
  const [tasksUpdated, setTasksUpdated] = useState(false);

  const pageId = 1;

  const fetchSelectedPage = async () => {
    try {
      const fetchedSelectedPage = await PageService.getPagebyId(pageId);
      setSelectedPage(fetchedSelectedPage);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenTaskModal = () => {
    setTaskModalOpen(true);
  };

  const handleCloseModal = () => {
    setTaskModalOpen(false);
  };

  useEffect(() => {
    fetchSelectedPage();
  }, []);

  useEffect(() => {
    if (tasksUpdated) {
      fetchSelectedPage();
      setTasksUpdated(false);
    }
  }, [tasksUpdated]);

  const handleTaskUpdate = () => {
    setTasksUpdated(true);
  };

  return (
    <div className="w-full h-screen text-neutral-200">
      {taskModalOpen ? (
        <div className="fixed inset-0 z-10 bg-neutral-950 bg-opacity-40 flex justify-center items-center">
          <TaskModal
            pageId={pageId}
            onCloseModal={() => {
              handleCloseModal();
              handleTaskUpdate();
            }}
          />
        </div>
      ) : null}
      <PageHader color={selectedPage?.color} name={selectedPage?.name} />
      <div className="w-full h-5/6 flex flex-col  bg-neutral-900 gap-4 pt-4 px-10">
        <div className="flex justify-center flex-col gap-2">
          <span>Progreso:{selectedPage?.progress}%</span>
          <ProgressBar className progress={selectedPage?.progress} />
        </div>
        <div className="w-36">
          <Button onClick={handleOpenTaskModal}>
            <CirclePlus size={20} />
            Añadir Tarea
          </Button>
        </div>
        <div className="flex flex-col gap-4 overflow-auto">
          {selectedPage?.tasks ? (
            selectedPage.tasks.map((task) => (
              <Task
                key={task.id}
                taskName={task.name}
                isDone={task.done}
                id={task.id}
                priority={task.priority}
                onTaskUpdate={handleTaskUpdate}
              />
            ))
          ) : (
            <div>Cargando tareas...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPanel;
