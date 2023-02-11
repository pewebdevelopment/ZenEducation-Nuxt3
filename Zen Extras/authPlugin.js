// import Vue from "vue";
import { defineNuxtPlugin } from "#app";
// import { Amplify, Auth } from "aws-amplify";

import { useAuthStore } from "@/stores/authStore.js";

// class AuthService {
//   constructor(store) {
//     this.$store = store;
//   }

//   get isAuthenticated() {
//     return this.$store.state.auth.isAuthenticated;
//   }

//   get user() {
//     return this.$store.state.auth.user;
//   }

//   get email() {
//     if (!this.user) return;
//     return this.user.attributes.email;
//   }
// }

export default defineNuxtPlugin((nuxtApp) => {
  const store = useAuthStore();
  // nuxtApp.provide("authStore", store);

  return {
    provide: {
      authStore: store,
    },
  };

  // return {
  //   async authServiceFunction({}) {
  //     // const authService = new AuthService(store);

  //     // nuxtApp.provide("authStore", authService);
  //     // nuxtApp.provide("authStore", store);
  //     // Access the authStore by using nuxtApp.$authStore;

  //     // Vue.prototype.$auth = authService; // This was old Nuxt 2 syntax
  //     // Vue.$auth = authService; // This was old Nuxt 2 syntax

  //     await store.load();
  //   },
  // };
});

// export default async ({ store }) => {
//   const authService = new AuthService(store);
//   Vue.prototype.$auth = authService;
//   Vue.$auth = authService;
//   await store.dispatch("auth/load");
// };
