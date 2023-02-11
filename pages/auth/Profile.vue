<script setup>
import { reactive } from "vue";
import { useMainStore } from "@/stores/main";
import {
  mdiAccount,
  mdiMail,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiCreditCardOutline,
} from "@mdi/js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import CardBox from "@/components/Cards/CardBox.vue";

import BaseDivider from "~~/components/NavBar/BaseDivider.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import FormFilePicker from "@/components/Forms/FormFilePicker.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import UserCard from "~~/components/Cards/UserCard.vue";

import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";

const mainStore = useMainStore();

const profileForm = reactive({
  name: mainStore.userName,
  email: mainStore.userEmail,
});

const passwordForm = reactive({
  password_current: "",
  password: "",
  password_confirmation: "",
});

const submitProfile = () => {
  mainStore.setUser(profileForm);
};

const submitPass = () => {
  //
};
</script>

<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <SectionTitleLineWithButton :icon="mdiAccount" title="Profile" main>
          <BaseButton
            href="https://justboil.me/tailwind-admin-templates/vue-dashboard/"
            label="Buy dashboard"
            :icon="mdiCreditCardOutline"
            color="contrast"
            rounded-full
            small
          />
        </SectionTitleLineWithButton>

        <UserCard class="mb-6" />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CardBox is-form @submit.prevent="submitProfile">
            <FormField label="Avatar" help="Max 500kb">
              <FormFilePicker label="Upload" />
            </FormField>

            <FormField label="Name" help="Required. Your name">
              <FormControl
                v-model="profileForm.name"
                :icon="mdiAccount"
                name="username"
                required
                autocomplete="username"
              />
            </FormField>
            <FormField label="E-mail" help="Required. Your e-mail">
              <FormControl
                v-model="profileForm.email"
                :icon="mdiMail"
                type="email"
                name="email"
                required
                autocomplete="email"
              />
            </FormField>

            <template #footer>
              <BaseButtons>
                <BaseButton color="info" type="submit" label="Submit" />
                <BaseButton color="info" label="Options" outline />
              </BaseButtons>
            </template>
          </CardBox>

          <CardBox is-form @submit.prevent="submitPass">
            <FormField
              label="Current password"
              help="Required. Your current password"
            >
              <FormControl
                v-model="passwordForm.password_current"
                :icon="mdiAsterisk"
                name="password_current"
                type="password"
                required
                autocomplete="current-password"
              />
            </FormField>

            <BaseDivider />

            <FormField label="New password" help="Required. New password">
              <FormControl
                v-model="passwordForm.password"
                :icon="mdiFormTextboxPassword"
                name="password"
                type="password"
                required
                autocomplete="new-password"
              />
            </FormField>

            <FormField
              label="Confirm password"
              help="Required. New password one more time"
            >
              <FormControl
                v-model="passwordForm.password_confirmation"
                :icon="mdiFormTextboxPassword"
                name="password_confirmation"
                type="password"
                required
                autocomplete="new-password"
              />
            </FormField>

            <template #footer>
              <BaseButtons>
                <BaseButton type="submit" color="info" label="Submit" />
                <BaseButton color="info" label="Options" outline />
              </BaseButtons>
            </template>
          </CardBox>
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
