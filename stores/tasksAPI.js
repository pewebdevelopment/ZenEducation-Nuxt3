import { defineStore } from "pinia";
import { API } from "aws-amplify";

export const state = () => ({
  studentTasks: {
    id: "",
    title: "",
    description: "",
    status: "",
  },
});

export const getters = {};

export const actions = {
  async listStudentTasks() {
    try {
      const listofStudentTasks = await API.graphql({
        query: `query {
        listStudentTasks {
        items{
        id,
        title,
        description,
        status
        }
        } 
        }`,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      return listofStudentTasks;
      console.log(listofStudentTasks);
    } catch (err) {
      console.log("err", err);
      return null;
    }
  },
};

export const useTasksAPIStore = defineStore("tasksAPIStore", {
  state,
  getters,
  actions,
});
