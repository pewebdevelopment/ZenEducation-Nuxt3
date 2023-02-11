<script setup>
import { reactive, ref, computed } from "vue";

const form = reactive({
  login: "johndoe",
  pass: "secret",
  remember: ["remember"],
});

const hasTip = ref(false);

setTimeout(() => {
  hasTip.value = true;
}, 750);

const hasError = ref(false);

const cardClassAddon = computed(() => (hasError.value ? "animate-shake" : ""));

const submit = () => {
  hasError.value = true;
  hasTip.value = false;

  setTimeout(() => {
    hasError.value = false;
    passShowHideClicked.value = false;
  }, 2000);
};

const passShowHideClicked = ref(true);
</script>

<template>
  <div>
    <NuxtLayout>
      <PremSectionFormScreen v-slot="{ cardClass }" bg="purplePink" has-promo>
        <CardBox
          :class="[cardClass, cardClassAddon]"
          is-form
          @submit.prevent="submit"
        >
          <FormField
            label="Login"
            :error="hasError"
            help="Please enter your login"
          >
            <FormControl
              v-model="form.login"
              :error="hasError"
              :icon-right="mdiAccount"
              name="login"
              placeholder="user@example.com"
              autocomplete="username"
            />
          </FormField>

          <FormField
            label="Password"
            :error="hasError"
            help="Click icon to show/hide"
          >
            <FormControl
              v-model="form.pass"
              :error="hasError"
              :tip-right="passShowHideClicked ? null : 'Click to show/hide'"
              type="password"
              name="password"
              placeholder="Password"
              autocomplete="current-password"
              @right-icon-click="passShowHideClicked = true"
            />
          </FormField>

          <BaseLevel mobile>
            <FormCheckRadioPicker
              v-model="form.remember"
              name="remember"
              :options="{ remember: 'Remember' }"
              spaced
            />
            <NuxtLink to="/remind" class="text-sm"> Forgot password? </NuxtLink>
          </BaseLevel>

          <template #footer>
            <BaseLevel mobile>
              <BaseButtons>
                <BaseButton
                  label="Login"
                  type="submit"
                  color="info"
                  :tip="hasTip ? 'Click to see error state' : null"
                />
                <BaseButton label="Sign up" to="/signup" color="info" outline />
              </BaseButtons>
              <PremButtonTextLink to="/" :icon="mdiHome" label="Home" small />
            </BaseLevel>
          </template>
        </CardBox>
      </PremSectionFormScreen>
    </NuxtLayout>
  </div>
</template>
