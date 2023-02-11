<script setup>
import { ref } from "vue";
import { mdiMessageBadge } from "@mdi/js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import SectionTitle from "@/components/Sections/SectionTitle.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";

import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
//import NuxtLayout from "@/layouts/NuxtLayout.vue"
import { useSnackBarStore } from "@/stores/snackBar";

const snackBarColor = ref("info");

const snackBarMessage = ref("Hello! This is demo message...");

const snackBarLifetime = ref(3000);

const snackBarPush = () => {
  useSnackBarStore().pushMessage(
    snackBarMessage.value,
    snackBarColor.value,
    snackBarLifetime.value
  );
};
</script>

<template>
  <div>
    <layout name="zen">
      <SectionTitle>SnackBar Toasts</SectionTitle>

      <SectionMain>
        <CardBox
          class="md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto"
          is-form
          @submit.prevent="snackBarPush"
        >
          <PremFormField label="SnackBar text">
            <PremFormControl
              v-model="snackBarMessage"
              placeholder="Message"
              help="Message text"
              required
            />
          </PremFormField>
          <PremFormField label="SnackBar lifetime (ms)">
            <PremFormControl
              v-model="snackBarLifetime"
              placeholder="3000"
              help="Lifetime value in milliseconds. Use `0` for infinite."
              type="number"
              min="0"
              required
            />
          </PremFormField>
          <PremFormField label="SnackBar color">
            <FormCheckRadioGroup
              v-model="snackBarColor"
              name="snack-bar-color"
              type="radio"
              :options="{
                contrast: 'Contrast',
                info: 'Info',
                success: 'Success',
                warning: 'Warning',
                danger: 'Danger',
              }"
              is-column
            />
          </PremFormField>

          <template #footer>
            <BaseButtons>
              <BaseButton
                class="flex-1"
                type="submit"
                label="Push"
                :icon="mdiMessageBadge"
                :color="snackBarColor"
              />
            </BaseButtons>
          </template>
        </CardBox>
      </SectionMain>
    </layout>
  </div>
</template>
