import { createStore } from "vuex";
import menuPlan from "@/api/menuplan";

export default createStore({
  state: {
    plan: [],
  },
  getters: {
    getPlan: (state) => state.plan,
  },
  mutations: {
    SET_PLAN(state, plan) {
      state.plan = plan;
    },
  },
  actions: {
    async fetchPlan({ commit }) {
      try {
        console.log("fetchMenuPlan");
        await menuPlan.getPlan().then((res) => {
          console.log(res.data);
          commit("SET_PLAN", res.data);
        });
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async editPlan({ dispatch }, payload) {
      try {
        console.log("editPlan" , payload );
        await menuPlan.editPlan(payload).then((res) => {
          console.log(res.data);
          dispatch("fetchPlan");
        });
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async addMenuPlan({ dispatch }, payload) {
      try {
        console.log("addMenuPlan", Object.entries(payload));
        console.log(payload);
        await menuPlan.addPlan(payload).then((res) => {
          console.log(res.data);
          dispatch("fetchPlan");
        });
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async deletePlan({ dispatch }, payload,) {
      try {
        console.log("fetchMenuPlan", payload);
        await menuPlan.deletePlan(payload).then((res) => {
          console.log(res.data);
          dispatch("fetchPlan");
        });
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  modules: {},
});
