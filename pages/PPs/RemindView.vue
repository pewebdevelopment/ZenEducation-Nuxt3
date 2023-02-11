<script setup>
import { reactive, onMounted } from "vue";
// import { RouterLink } from "vue-router";
import { useMainStore } from "@/stores/main.js";
import { mdiAccount } from "@mdi/js";
import CardBox from "@/components/Cards/CardBox.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import PremSectionFormScreen from "@/components/Sections/SectionFormScreen.vue";

const form = reactive({
  login: "HarryPotter",
});

const mainStore = useMainStore();

onMounted(() => {
  console.log();
});

const submit = () => {
  mainStore.pushMessage("Submitted. Demo only", "contrast");
};
</script>

<template>
  <div>
    <NuxtLayout>
      <PremSectionFormScreen v-slot="{ cardClass }" bg="redYellow">
        <CardBox :class="cardClass" is-form @submit.prevent="submit">
          <FormField label="Username" help="Please enter your username">
            <FormControl
              v-model="form.login"
              :icon-right="mdiAccount"
              name="login"
              placeholder="HarryPotter"
              autocomplete="username"
            />
          </FormField>

          <template #footer>
            <BaseLevel mobile>
              <BaseButton label="Remind" type="submit" color="info" />
              <NuxtLink to="/pe/login" class="text-sm">
                Back to login
              </NuxtLink>
            </BaseLevel>
          </template>
        </CardBox>
      </PremSectionFormScreen>
    </NuxtLayout>
  </div>
</template>
