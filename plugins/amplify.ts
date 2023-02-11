//amplify auth plugin
import { defineNuxtPlugin } from "#app";
import { Auth } from "aws-amplify";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$auth = Auth;
});
