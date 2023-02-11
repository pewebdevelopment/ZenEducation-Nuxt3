import { defineStore } from "pinia";
import { API } from "aws-amplify";
// import * as gqlQueries from "~/src/graphql/queries";
// import * as gqlMutations from "~/src/graphql/mutations";

export const state = () => ({
  superadmin: {
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    altEmail: "",
    phoneNumber: "",
    altPhoneNumber: "",
    description: "",
    isActive: "",
    accessControls: [],
  },
});

export const getters = {
  //   authMode: (state, getters, rootState) =>
  //     rootState.auth.isAuthenticated ? "AMAZON_COGNITO_USER_POOLS" : "API_KEY",
};

// export const mutations = {
//   set(state, { key, value }) {
//     state[key] = value;
//   },
// };

//   async mutate({ commit, getters }, { key, mutation, input }) {
//     const { data } = await API.graphql({
//       query: gqlMutations[mutation],
//       variables: { input },
//       authMode: getters.authMode
//     })

export const actions = {
  async createSuperAdmin({ input }) {
    try {
      const superadmin = await API.graphql({
        query: `mutation {
        createSuperAdmin(input:{
        firstName:"Rupesh",
        lastName: "Raj",
        email: "rupeshraj@gmail.com",
        altEmail: "acad.paathshala@gmail.com",
        phoneNumber: "7777095511",
        altPhoneNumber: "777090505"}
        ) {
 
        firstName,
        lastName,
        email,
        altEmail,
        phoneNumber,
        altPhoneNumber
} 

  }`,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      console.log(superadmin);
    } catch (err) {
      console.log("err", err);
    }
  },
};

export const useGraphqlAPIStore = defineStore("useGraphqlAPI", {
  state,
  getters,
  actions,
});

//   async deletePost({ dispatch }, id) {
//     return dispatch("mutate", { mutation: "deletePost", input: { id } });
//   },

// API HELPERS
//   async get({ commit, getters }, { key, query, id }) {
//     const { data } = await API.graphql({
//       query: gqlQueries[query],
//       variables: { id },
//       authMode: getters.authMode,
//     });

//     const value = data[query];
//     if (key) commit("set", { key, value });
//     return value;
//   },

//   async query({ commit, getters }, { key, query, filter }) {
//     const { data } = await API.graphql({
//       query: gqlQueries[query],
//       variables: { filter },
//       authMode: getters.authMode,
//     });

//     const value = data[query].items;
//     if (key) commit("set", { key, value });
//     return value;
//   },

//   async mutate({ commit, getters }, { key, mutation, input }) {
//     const { data } = await API.graphql({
//       query: gqlMutations[mutation],
//       variables: { input },
//       authMode: getters.authMode,
//     });

//     const value = data[mutation];
//     if (key) commit("set", { key, value });
//     return value;
//   },
// };
