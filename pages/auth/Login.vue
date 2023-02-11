<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import SectionFullScreen from "@/components/Sections/SectionFullScreen.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormCheckRadio from "@/components/Forms/FormCheckRadio.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseButtons from "@/components/Buttons/BaseButtons.vue";
import { useAuthStore } from "@/stores/authStore";
import { useGraphqlAPIStore } from "@/stores/graphqlAPI";

// const form = reactive({
//   loginEmail: "",
//   password: "",
//   remember: true,
// });

const form = reactive({
  loginEmail: "zenithathang@gmail.com",
  password: "Zenithathang@gmail.com@99",
  remember: true,
});

const router = useRouter();

const AuthStore = useAuthStore();

const GraphqlAPIStore = useGraphqlAPIStore();

const handleSubmit = async () => {
  // call the login method from the Authstore
  const user_from_amplify = await AuthStore.login({
    email: form.loginEmail,
    password: form.password,
  });
  console.log(user_from_amplify);

  // const response = await GraphqlAPIStore.createSuperAdmin({ input: {} });
  // console.log("response", response);

  if (user_from_amplify) {
    return;
    // router.push("/dashboard");
  }
};
</script>

<template>
  <div>
    <NuxtLayout>
      <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
        <CardBox :class="cardClass" is-form @submit.prevent="handleSubmit">
          <FormField label="Login" help="Please enter your login">
            <FormControl
              v-model="form.loginEmail"
              :icon="mdiAccount"
              name="login"
              autocomplete="username"
            />
          </FormField>

          <FormField label="Password" help="Please enter your password">
            <FormControl
              v-model="form.password"
              :icon="mdiAsterisk"
              type="password"
              name="password"
              autocomplete="current-password"
            />
          </FormField>

          <FormCheckRadio
            v-model="form.remember"
            name="remember"
            label="Remember"
            :input-value="true"
          />

          <template #footer>
            <div class="flex justify-between">
              <BaseButtons>
                <BaseButton type="submit" color="info" label="Login" />
                <BaseButton
                  to="/dashboard"
                  color="info"
                  outline
                  label="Dashboard"
                />
              </BaseButtons>
              <NuxtLink
                to="/pe/register"
                class="text-sm bg-gray-800 text-white p-3 rounded-md hover:bg-gray-600"
              >
                Done have an account? Sign Up
              </NuxtLink>
            </div>
          </template>
        </CardBox>
      </SectionFullScreen>
    </NuxtLayout>
  </div>
</template>
