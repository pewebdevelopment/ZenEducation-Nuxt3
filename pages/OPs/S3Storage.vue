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
import UserCard from "@/components/Avatars/UserCard.vue";
import { Storage } from "@aws-amplify/storage";

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

const submitProfile = async () => {
  console.log("Submit Clicked");
  //   mainStore.setUser(profileForm);
  await Storage.put("testfile.txt", "Hello");
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
            <FormField label="My Avatar" help="Max 500kb">
              <button
                type="submit"
                class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span
                  class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Upload Button
                </span>
              </button>

              <!-- <FormFilePicker label="Upload" /> -->
            </FormField>
          </CardBox>

          <BaseDivider />
        </div>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
