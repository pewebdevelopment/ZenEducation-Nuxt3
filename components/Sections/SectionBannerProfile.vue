<script setup>
import { mdiGithub, mdiAccountChildCircle } from "@mdi/js";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import SectionBanner from "@/components/Sections/SectionBanner.vue";
</script>

<template>
  <SectionBanner
    class="bg-gradient-to-tr from-cyan-400 via-violet-400 to-purple-500"
  >
    <h1 class="text-3xl text-white mb-6">
      Have fun time learning and shining! :-)
    </h1>
    <div>
      <BaseButton
        href=""
        :icon="mdiAccountChildCircle"
        label="We are in this Together"
        target="_blank"
        rounded-full
      />
    </div>
  </SectionBanner>
</template>
