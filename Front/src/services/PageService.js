import axios from "axios";

class PageService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8080/api",
    });
  }

  getPages() {
    try {
      return this.api.get("/pages").then((res) => res.data);
    } catch (error) {
      console.log(error);
    }
  }

  getPagebyId(pageId) {
    try {
      return this.api.get(`/pages/${pageId}`).then((res) => res.data);
    } catch (error) {
      console.log(error);
    }
  }

  updatePage(pageId, updatedName) {
    return this.api
      .put(`/pages/${pageId}`, { name: updatedName })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error updating task:", error);
        throw error;
      });
  }
}

export default new PageService();
