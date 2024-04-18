import axios from "axios";

class TaskService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8080/api",
    });
  }

  async addTask(task) {
    try {
      const response = await this.api.post("/tasks", task);
      return response.data;
    } catch (error) {
      console.error("Error adding task:", error);
      throw new Error("Failed to add task. Please try again later.");
    }
  }

  updateDoneTask(taskId, newCompletedStatus) {
    try {
      const payload = { done: newCompletedStatus };

      return this.api
        .patch(`/tasks/${taskId}`, payload)
        .then((res) => res.data);
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  }

  updatePriority(taskId, newPriority) {
    try {
      const payload = { priority: newPriority };
      return this.api
        .patch(`/tasks/${taskId}`, payload)
        .then((res) => res.data);
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  }
}

export default new TaskService();
