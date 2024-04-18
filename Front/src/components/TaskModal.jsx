import { useState } from "react";
// import PrioritySelector from "./ui/PrioritySelector";
import Button from "./ui/Button";
import { X } from "lucide-react";
import TaskService from "../services/TaskService";

export default function TaskModal({ onCloseModal, pageId, onToast }) {
  const [task, setTask] = useState("");

  const handleCloseModal = () => {
    onCloseModal();
  };

  const handleAddTask = async () => {
    try {
      const newTask = {
        name: task,
        done: false,
        priority: 1,
        page: {
          id: pageId,
        },
      };
      await TaskService.addTask(newTask);
      onToast("Tarea añadida");
      onCloseModal();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleContainerClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="fixed inset-0 bg-neutral-950 bg-opacity-40 flex justify-center items-center"
      onClick={handleContainerClick}
    >
      <div className="bg-neutral-600 drop-shadow-lg border-neutral-400 rounded-md flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">Añadir Tarea</h2>
          <button onClick={handleCloseModal}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-4 ">
          <input
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            className="border-2 border-neutral-400 rounded-md px-2 py-1 focus:ring-0 text-neutral-950"
            placeholder="Ingrese una nueva tarea"
          />
          <Button onClick={handleAddTask} variant="create">
            Añadir Tarea
          </Button>
        </form>
      </div>
    </div>
  );
}
