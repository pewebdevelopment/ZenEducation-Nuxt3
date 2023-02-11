<script setup>
import { ref, reactive } from "vue";
import { useMainStore } from "@/stores/main.js";
import {
  mdiBallot,
  mdiBallotOutline,
  mdiAccount,
  mdiMail,
  mdiCheck,
  mdiProgressCheck,
  mdiReload,
  mdiCreditCardOutline,
} from "@mdi/js";
import { buttonMenuOptions } from "@/configs/sampleButtonMenuOptions.js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import FormCheckRadioGroup from "@/components/Forms/FormCheckRadioGroup.vue";
import FormFilePicker from "@/components/Forms/FormFilePicker.vue";
import PremFormField from "@/components/Forms/FormField.vue";
import PremFormControl from "@/components/Forms/FormControl.vue";
import PremButtonMenu from "@/components/Buttons/ButtonMenu.vue";
import BaseDivider from "@/components/NavBar/BaseDivider.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import SectionTitle from "@/components/Sections/SectionTitle.vue";
import CardBoxComponentTitle from "@/components/Cards/CardBoxComponentTitle.vue";

const selectFieldOptions = [
  { id: 1, label: "Business development" },
  { id: 2, label: "Marketing" },
  { id: 3, label: "Sales" },
];

const listBoxOptions = [
  { id: 1, label: "Howell Hand", unavailable: false },
  { id: 2, label: "Hope Howe", unavailable: false },
  { id: 3, label: "Nelson Jerde", unavailable: false },
  { id: 4, label: "Kim Weimann (disabled)", unavailable: true },
  { id: 5, label: "Lenna Smitham", unavailable: false },
];

const checkboxOptions = { lorem: "Lorem", ipsum: "Ipsum", dolore: "Dolore" };
const radioOptions = { one: "One", two: "Two" };
const switchOptions = { one: "One", two: "Two" };

const form = reactive({
  name: "John Doe",
  email: "john.doe@example.com",
  pass: "secret",
  phone: "",
  amount: 1024,
  ipv6: "fe80::/10",
  ipv4: "127.0.0.1",
  currency: "USD",
  department: selectFieldOptions[0],
  person: listBoxOptions[0],
  question: "Textarea",
  subject: "",
  checkboxOne: ["lorem"],
  checkboxTwo: ["lorem"],
  radioOne: "one",
  radioTwo: "one",
  switchOne: ["one"],
  switchTwo: ["one"],
  file: null,
});

const formLower = reactive({
  name: "John Doe",
  email: "john.doe@example.com",
  department: selectFieldOptions[0],
  person: listBoxOptions[0],
  question: "Error state",
});

const passShowHideClicked = ref(false);

const mainStore = useMainStore();

const submit = () => {
  mainStore.pushMessage("Done! Demo only...", "contrast");
};

const formErrorHasError = ref(false);

const formErrorSubmit = () => {
  formErrorHasError.value = true;

  setTimeout(() => {
    formErrorHasError.value = false;
  }, 2000);
};
</script>

<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <SectionTitleLineWithButton
          :icon="mdiBallotOutline"
          title="Advanced forms example"
          main
        >
          <BaseButton
            href="https://justboil.me/tailwind-admin-templates/vue-dashboard/"
            label="Buy dashboard"
            :icon="mdiCreditCardOutline"
            color="contrast"
            rounded-full
            small
          />
        </SectionTitleLineWithButton>

        <div class="grid grid-cols-1 gap-6 mb-6 xl:grid-cols-4">
          <CardBox
            :icon="mdiBallot"
            class="mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3"
            is-form
            @submit.prevent="submit"
          >
            <CardBoxComponentTitle
              title="Horizontal fields layout and advanced controls"
              class="mb-12"
            />
            <PremFormField label="Fields" horizontal>
              <PremFormControl
                v-model="form.name"
                :icon-left="mdiAccount"
                help="Your full name"
                placeholder="Name"
              />
              <PremFormControl
                v-model="form.email"
                :icon-left="mdiMail"
                :icon-right="mdiCheck"
                type="email"
                help="Your e-mail"
                placeholder="Email"
              />
            </PremFormField>

            <PremFormField
              label="*** Show/hide"
              help="Show/hide by clicking icon on the right"
              horizontal
            >
              <PremFormControl
                v-model="form.pass"
                type="password"
                name="password"
                placeholder="Password"
                :tip-right="passShowHideClicked ? null : 'Click to show/hide'"
                @right-icon-click="passShowHideClicked = true"
              />
            </PremFormField>

            <PremFormField
              label="With addons"
              help="Field with prefix & suffix"
              horizontal
            >
              <PremFormField addons>
                <PremFormControl
                  type="static"
                  model-value="+44 (0)"
                  first-addon
                />
                <PremFormControl
                  v-model="form.phone"
                  type="tel"
                  placeholder="Your phone number"
                  expanded
                  middle-addon
                />
                <PremFormControl type="static" model-value="UK" last-addon />
              </PremFormField>
            </PremFormField>

            <PremFormField
              help="Static prefix with dropdown at the end"
              horizontal
            >
              <PremFormField addons>
                <PremFormControl type="static" model-value="$" first-addon />
                <PremFormControl
                  v-model="form.amount"
                  type="number"
                  placeholder="Amount"
                  expanded
                  middle-addon
                />
                <PremFormControl
                  v-model="form.currency"
                  :options="['USD', 'CAD', 'AUD']"
                  input-w="w-24"
                  last-addon
                />
              </PremFormField>
            </PremFormField>

            <PremFormField
              help="Static prefix with button at the end"
              horizontal
            >
              <PremFormField addons>
                <PremFormControl
                  type="static"
                  model-value="IPv6:"
                  first-addon
                />
                <PremFormControl
                  v-model="form.ipv6"
                  type="text"
                  placeholder="Link-local"
                  expanded
                  middle-addon
                />
                <PremFormControl
                  button-color="info"
                  button-label="Fetch"
                  last-addon
                />
              </PremFormField>
            </PremFormField>

            <PremFormField help="Button and text field" horizontal>
              <PremFormField addons>
                <PremFormControl
                  button-color="success"
                  :button-icon="mdiReload"
                  first-addon
                />
                <PremFormControl
                  v-model="form.ipv4"
                  type="text"
                  placeholder="IPv4"
                  expanded
                  last-addon
                />
              </PremFormField>
            </PremFormField>

            <PremFormField
              label="Custom dropdown"
              help="Customized dropdown component"
              horizontal
            >
              <PremFormControl
                v-model="form.person"
                type="list"
                :options="listBoxOptions"
              />
            </PremFormField>

            <PremFormField label="Dropdown" help="Classic select" horizontal>
              <PremFormControl
                v-model="form.department"
                :options="selectFieldOptions"
              />
            </PremFormField>

            <BaseDivider />

            <PremFormField label="Date" horizontal>
              <PremFormControl type="date" help="Date picker" />
            </PremFormField>

            <BaseDivider />

            <PremFormField
              label="Textarea"
              help="Your question. Max 255 characters"
              horizontal
            >
              <PremFormControl
                v-model="form.question"
                type="textarea"
                placeholder="Explain how we can help you"
              />
            </PremFormField>

            <BaseDivider />

            <PremFormField label="Checkbox" help="Vertical layout" horizontal>
              <FormCheckRadioGroup
                v-model="form.checkboxTwo"
                name="sample-checkbox-two"
                :options="checkboxOptions"
                is-column
              />
            </PremFormField>

            <BaseDivider />

            <PremFormField
              label="Success"
              help="Horizontal layout with color"
              horizontal
            >
              <FormCheckRadioGroup
                v-model="form.checkboxTwo"
                name="sample-checkbox-two"
                :options="checkboxOptions"
                component-class="check-radio-success"
              />
            </PremFormField>

            <BaseDivider />

            <PremFormField label="Radio" help="Vertical layout" horizontal>
              <FormCheckRadioGroup
                v-model="form.radioTwo"
                name="sample-radio-two"
                type="radio"
                :options="radioOptions"
                is-column
              />
            </PremFormField>

            <BaseDivider />

            <PremFormField
              label="Warning"
              help="Horizontal layout with color"
              horizontal
            >
              <FormCheckRadioGroup
                v-model="form.radioTwo"
                name="sample-radio-two-warning"
                type="radio"
                :options="radioOptions"
                component-class="check-radio-warning"
              />
            </PremFormField>

            <BaseDivider />

            <PremFormField label="Switch" help="Vertical layout" horizontal>
              <FormCheckRadioGroup
                v-model="form.switchTwo"
                name="sample-switch-two"
                type="switch"
                :options="switchOptions"
                is-column
              />
            </PremFormField>

            <BaseDivider />

            <PremFormField
              label="Danger"
              help="Horizontal layout with color"
              horizontal
            >
              <FormCheckRadioGroup
                v-model="form.switchTwo"
                name="sample-switch-two"
                type="switch"
                :options="switchOptions"
                component-class="check-radio-danger"
              />
            </PremFormField>

            <BaseDivider />

            <PremFormField label="File" horizontal>
              <FormFilePicker v-model="form.file" label="Upload" />
            </PremFormField>

            <template #footer>
              <PremFormField horizontal grouped>
                <BaseButton label="Submit" type="submit" color="info" />
                <PremButtonMenu
                  :options="buttonMenuOptions"
                  label="Options"
                  color="info"
                  outline
                  left
                />
              </PremFormField>
            </template>
          </CardBox>

          <CardBox class="lg:col-span-2 xl:col-span-1">
            <PremFormField label="Checkbox" multiline>
              <FormCheckRadioGroup
                v-model="form.checkboxOne"
                name="sample-checkbox-one"
                :options="checkboxOptions"
              />
            </PremFormField>

            <BaseDivider />

            <PremFormField label="Radio" multiline>
              <FormCheckRadioGroup
                v-model="form.radioOne"
                name="sample-radio-one"
                type="radio"
                :options="radioOptions"
              />
            </PremFormField>

            <BaseDivider />

            <PremFormField label="Switch" multiline>
              <FormCheckRadioGroup
                v-model="form.switchOne"
                name="sample-switch-one"
                type="switch"
                :options="switchOptions"
              />
            </PremFormField>

            <BaseDivider />

            <PremFormField label="File">
              <FormFilePicker v-model="form.file" label="Upload" />
            </PremFormField>
          </CardBox>
        </div>

        -->
        <SectionTitleLineWithButton
          :icon="mdiProgressCheck"
          title="Layout & state examples"
        />

        <CardBox>
          <PremFormField label="Fields">
            <PremFormControl
              v-model="formLower.name"
              :icon-left="mdiAccount"
              help="Your full name"
              placeholder="Name"
            />
            <PremFormControl
              v-model="formLower.email"
              success
              :icon-left="mdiMail"
              type="email"
              help="Field in success state"
              placeholder="Email"
            />
            <PremFormControl
              v-model="formLower.email"
              error="Field in error state"
              :icon-left="mdiMail"
              type="email"
              help="Your e-mail"
              placeholder="Email"
            />
          </PremFormField>

          <PremFormField label="Fields">
            <PremFormControl
              v-model="formLower.person"
              type="list"
              :options="listBoxOptions"
            />
            <PremFormControl
              v-model="formLower.department"
              :options="selectFieldOptions"
            />
          </PremFormField>

          <PremFormField
            error="Textarea in error state"
            label="Textarea"
            help="Your question. Max 255 characters"
          >
            <PremFormControl
              v-model="formLower.question"
              error
              type="textarea"
              placeholder="Explain how we can help you"
            />
          </PremFormField>
        </CardBox>

        <SectionTitle>Form with error example</SectionTitle>

        <CardBox
          class="md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"
          :class="{ 'animate-shake': formErrorHasError }"
          is-form
          @submit.prevent="formErrorSubmit"
        >
          <PremFormField label="Fields" :error="formErrorHasError">
            <PremFormControl
              v-model="form.name"
              :icon-left="mdiAccount"
              help="Your full name"
              placeholder="Name"
              :error="formErrorHasError ? 'Oops, this is error' : null"
            />
          </PremFormField>

          <template #footer>
            <BaseButton
              label="Trigger"
              type="submit"
              :color="formErrorHasError ? 'danger' : 'info'"
              :tip="formErrorHasError ? null : 'Click to trigger'"
            />
          </template>
        </CardBox>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
