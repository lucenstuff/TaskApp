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
}

export default new TaskService();
