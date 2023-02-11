<script setup>
import { mdiGithub, mdiAbugidaDevanagari } from "@mdi/js";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import SectionBanner from "@/components/Sections/SectionBanner.vue";
import { gradientBgPinkRed } from "@/configs/colors";
</script>

<template>
  <SectionBanner :class="gradientBgPinkRed">
    <h1 class="text-3xl text-white mb-6">
      Lets strive each day to together solve the biggest challenges ;-)
    </h1>
    <div>
      <BaseButton
        href=""
        :icon="mdiAbugidaDevanagari"
        label="Knowledge is Power"
        target="_blank"
        rounded-full
      />
    </div>
  </SectionBanner>
</template>
