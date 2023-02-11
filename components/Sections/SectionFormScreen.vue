<script setup>
import { computed, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useStyleStore } from "@/stores/style.js";
import {
  gradientBgPurplePink,
  gradientBgDark,
  gradientBgPinkRed,
} from "@/configs/colors.js";
import {
  gradientBgYellowRed,
  gradientBgRedYellow,
} from "@/configs/colorsPremium.js";
import JustboilLogo from "@/components/Display/JustboilLogo.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";

onMounted(() => {
  console.log("Section Form Screen ");
});

const props = defineProps({
  bg: {
    type: String,
    required: true,
    validator: (value) =>
      ["purplePink", "pinkRed", "yellowRed", "redYellow"].includes(value),
  },
  hasPromo: Boolean,
});

const colorClass = computed(() => {
  if (useStyleStore().darkMode) {
    return gradientBgDark;
  }

  switch (props.bg) {
    case "purplePink":
      return gradientBgPurplePink;
    case "pinkRed":
      return gradientBgPinkRed;
    case "yellowRed":
      return gradientBgYellowRed;
    case "redYellow":
      return gradientBgRedYellow;
  }

  return "";
});

const route = useRoute();

const currentRouteName = route.name;

const routes = {
  login: "Login",
  signup: "Signup",
  remind: "Remind",
  error: "Error",
};
</script>

<template>
  <section
    class="flex flex-col items-center md:flex-row md:justify-around md:px-6 min-h-screen transition-background-image duration-1000"
    :class="colorClass"
  >
    <div v-if="hasPromo" class="space-y-12 px-12">
      <div class="hidden lg:block">
        <Basebuttons type="justify-center" glue>
          <BaseButton
            v-for="(routeLabel, index) in routes"
            :key="index"
            rounded-full
            :to="{ name: index }"
            :active-soft="index === currentRouteName"
            :label="routeLabel"
            color="whiteDark"
          />
        </Basebuttons>
      </div>

      <div class="text-center text-white py-12 md:py-0">
        <h1 class="text-5xl lg:text-6xl font-black">All instances</h1>
        <h2 class="text-2xl">managed from one place</h2>
      </div>
      <div
        class="hidden md:block py-12 md:py-0 text-center text-white text-opacity-50 dark:text-opacity-80"
      >
        <NuxtLink to="/"> Instagram </NuxtLink> |
        <NuxtLink to="/"> Telegram </NuxtLink> |
        <NuxtLink to="/"> Teletype </NuxtLink>
      </div>
      <div class="hidden md:block text-white">
        <NuxtLink to="/"> </NuxtLink>
      </div>
    </div>

    <slot card-class="w-11/12 md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl" />

    <div v-if="hasPromo" class="md:hidden space-y-12 py-12">
      <div class="text-white text-opacity-50">
        <NuxtLink to="/"> Instagram </NuxtLink> |
        <NuxtLink to="/"> Telegram </NuxtLink> |
        <NuxtLink to="/"> Teletype </NuxtLink>
      </div>
      <div class="text-white">
        <NuxtLink to="/"> </NuxtLink>
      </div>
    </div>
  </section>
</template>
