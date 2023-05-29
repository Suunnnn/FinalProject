import api from "../api/api";
export default {
  async getPlan() {
    return api.get("manufactures").then((res) => {
      console.log("getPlan");
      return res;
    });
  },
  async addPlan(payload) {
    return api.post("manufactures", payload).then((res) => {
      console.log("addPlan");
      return res;
    });
  },
  async editPlan(payload) {
    console.log("payload", payload);
    
    try {
      const response = await api.patch(`manufactures/${payload._id}`, payload, {
        params: {
          id: payload._id,
        },
      });
      
      console.log("editPlan");
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async deletePlan(payload) {
    return api.delete(`manufactures/${payload}`, payload).then((res) => {
      console.log("deletePlan");

      return res;
    });
  },
};
