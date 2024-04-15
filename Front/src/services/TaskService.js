import axios from "axios";

class TaskService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8080/api",
    });
  }

  getTasks() {
    try {
      return this.api.get("/tasks/{id}").then((res) => res.data);
    } catch (error) {
      console.log(error);
    }
  }

  updateDoneTask(taskId, newCompletedStatus) {
    try {
      return this.api
        .put(`/tasks/${taskId}`, { completed: newCompletedStatus })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.error("Error updating task:", error);
          throw error;
        });
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  }
}

export default new TaskService();
