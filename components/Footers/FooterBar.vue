<script setup>
import { containerMaxW } from "@/configs/config.js";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import JustboilLogo from "@/components/Display/JustboilLogo.vue";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="py-2 px-6" :class="containerMaxW">
    <BaseLevel>
      <div class="text-center md:text-left">
        <b
          >&copy;{{ year }},
          <a href="" target="_blank"> Photon for the World</a>.</b
        >
        <slot />
      </div>
      <div class="md:py-2">
        <a href="">
          <JustboilLogo class="w-auto h-8 md:h-6" />
        </a>
      </div>
    </BaseLevel>
  </footer>
</template>
