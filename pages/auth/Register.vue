<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { mdiAccount, mdiEmail } from "@mdi/js";
import CardBox from "@/components/Cards/CardBox.vue";
import FormField from "@/components/Forms/FormField.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseLevel from "@/components/Buttons/BaseLevel.vue";
import { useMainStore } from "@/stores/main.js";
import PremSectionFormScreen from "@/components/Sections/SectionFormScreen.vue";

const router = useRouter();
const AuthStore = useAuthStore();

const userSubmitted = ref(false);

const form = reactive({
  userName: "",
  signUpEmail: "",
  password: "",
  otp_code: "",
  // Sample User is as follows:
  // AakashShendage
  // paathshala.connect@gmail.com
  // AakashShendage@99
});

// const mainStore = useMainStore();

const handleSubmit = async () => {
  // call the login method from the Authstore
  if (!form.otp_code) {
    const user_to_register_in_amplify = await AuthStore.register({
      email: form.signUpEmail,
      password: form.password,
    });
    console.log("Sent user", user_to_register_in_amplify);
    if (user_to_register_in_amplify) {
      userSubmitted.value = true;
      return;
      // use return statements to change the UI
    }
  }

  if (form.otp_code) {
    // form.signUpEmail = user_to_register_in_amplify.username;
    //console.log("Username:", user_to_register_in_amplify.username);

    console.log(
      "form.signUpEmail for comfirming registration:",
      form.signUpEmail,
      "form.otp_code:",
      form.otp_code
    );
    const registrationConfirmed = AuthStore.confirmRegistration({
      email: form.signUpEmail,
      code: form.otp_code,
    });

    if (registrationConfirmed) {
      const currentUser = AuthStore.loadAmplifyUser();
      console.log("CurrentUser", currentUser);
      console.log("Confirmed the OTP successfully");
      router.push("/dashboard");
    } else {
      console.log("OTP Confirmation was unsuccessfull");
    }
  }
};

const reattemptSignup = () => {
  userSubmitted.value = false;
  return;
};
</script>

<template>
  <div>
    <NuxtLayout>
      <PremSectionFormScreen v-slot="{ cardClass }" bg="yellowRed" has-promo>
        <CardBox :class="cardClass" is-form @submit.prevent="handleSubmit">
          <FormField
            v-if="!userSubmitted"
            label="Username"
            help="Please enter your new username"
          >
            <FormControl
              v-model="form.userName"
              :icon-right="mdiAccount"
              name="login"
              placeholder="johndoe"
              autocomplete="username"
            />
          </FormField>

          <FormField label="Email" help="Please enter your email">
            <FormControl
              v-model="form.signUpEmail"
              :icon-right="mdiEmail"
              name="login"
              type="email"
              placeholder="user@example.com"
              autocomplete="email"
            />
          </FormField>

          <FormField
            v-if="!userSubmitted"
            label="Password"
            help="Click icon to show/hide"
          >
            <FormControl
              v-model="form.password"
              type="password"
              name="password"
              placeholder="Password"
              autocomplete="new-password"
            />
          </FormField>

          <FormField
            v-if="userSubmitted"
            label="OTP Code"
            help="Submit the OTP Code that has been sent on your Email"
          >
            <FormControl
              v-model="form.otp_code"
              type="otp_code"
              name="OTP_Code"
              placeholder="Submit OTP Code"
              autocomplete="new-OTPCode"
            />
          </FormField>

          <template #footer>
            <BaseLevel mobile class="flex justify-between">
              <div class="flex">
                <BaseButton
                  v-if="!userSubmitted"
                  label="Signup"
                  type="submit"
                  color="info"
                />
                <BaseButton
                  v-if="userSubmitted"
                  label="Enter OTP"
                  type="submit"
                  color="info"
                />
                <BaseButton
                  v-if="userSubmitted"
                  label="Sign Up Again"
                  type="submit"
                  color="info"
                  @click="reattemptSignup"
                />
              </div>

              <NuxtLink
                to="/auth/login"
                class="text-sm bg-gray-800 text-white p-3 rounded-md hover:bg-gray-600"
              >
                Have an account? Sign In
              </NuxtLink>
            </BaseLevel>
          </template>
        </CardBox>
      </PremSectionFormScreen>
    </NuxtLayout>
  </div>
</template>
