import { defineStore } from "pinia";

const state = () => ({
  currentRectCount: 0,
});

const actions = {
  incrCurrentRectCount() {
    this.currentRectCount++;
  },
};

const getters = {};

export const useWBFabric = defineStore("WBFabric", {
  state,
  getters,
  actions,
});
