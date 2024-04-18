import { createContext, useEffect, useState } from "react";
import TaskService from "../services/TaskService";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const toggleTaskCompleted = async (id, isDone) => {
    try {
      await TaskService.updateDoneTask(id, isDone);
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id === id) {
            return { ...task, isDone: !isDone };
          }
          return task;
        })
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const updateTaskPriority = async (id, priority) => {
    try {
      await TaskService.updatePriority(id, priority);
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id === id) {
            return { ...task, priority };
          }
          return task;
        })
      );
    } catch (error) {
      console.error("Error updating task priority:", error);
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await TaskService.getTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTasks();
  });

  return (
    <TaskContext.Provider
      value={{ tasks, toggleTaskCompleted, updateTaskPriority }}
    >
      {children}
    </TaskContext.Provider>
  );
};
