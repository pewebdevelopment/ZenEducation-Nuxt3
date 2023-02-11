<script setup>
import { computed } from "vue";
import { useMainStore } from "@/stores/main.js";
import {
  mdiMonitorCellphone,
  mdiTableOff,
  mdiPackageVariant,
  mdiBank,
  mdiCreditCardOutline,
} from "@mdi/js";
import SectionMain from "@/components/Sections/SectionMain.vue";
import NotificationBar from "@/components/NotificationBars/NotificationBar.vue";
import TableSampleClients from "@/components/Tables/TableSampleClients.vue";
import CardBox from "@/components/Cards/CardBox.vue";
import SectionTitleLineWithButton from "@/components/Sections/SectionTitleLineWithButton.vue";
import CardBoxClient from "@/components/Cards/CardBoxClient.vue";
import CardBoxTransaction from "@/components/Cards/CardBoxTransaction.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import CardBoxComponentEmpty from "@/components/Cards/CardBoxComponentEmpty.vue";

import PremCardBoxProduct from "@/components/Cards/CardBoxProduct.vue";

const mainStore = useMainStore();

const clientBarItems = computed(() => mainStore.clients.slice(0, 3));

const transactionBarItems = computed(() => mainStore.history.slice(0, 3));

const productBarItems = computed(() => (mainStore.products || []).slice(0, 4));
</script>

<template>
  <div>
    <NuxtLayout name="zen">
      <SectionMain>
        <SectionTitleLineWithButton :icon="mdiBank" title="Finance" main>
          <BaseButton
            href="https://justboil.me/tailwind-admin-templates/vue-dashboard/"
            label="Buy dashboard"
            :icon="mdiCreditCardOutline"
            color="contrast"
            rounded-full
            small
          />
        </SectionTitleLineWithButton>

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          <div class="flex flex-col justify-between">
            <CardBoxTransaction
              v-for="(transaction, index) in transactionBarItems"
              :key="index"
              :amount="transaction.amount"
              :date="transaction.date"
              :business="transaction.business"
              :type="transaction.type"
              :name="transaction.name"
              :account="transaction.account"
            />
          </div>
          <div class="flex flex-col justify-between">
            <CardBoxClient
              v-for="client in clientBarItems"
              :key="client.id"
              :name="client.name"
              :login="client.login"
              :date="client.created"
              :progress="client.progress"
            />
          </div>
        </div>

        <SectionTitleLineWithButton
          :icon="mdiPackageVariant"
          title="Products"
        />

        <PremCardBoxProduct
          v-for="product in productBarItems"
          :key="product.id"
          :product="product"
        />

        <SectionTitleLineWithButton
          :icon="mdiMonitorCellphone"
          title="Responsive Table"
        />

        <NotificationBar color="info" :icon="mdiMonitorCellphone">
          <b>Responsive table.</b> Collapses on mobile
        </NotificationBar>

        <CardBox class="mb-6" has-table>
          <TableSampleClients checkable />
        </CardBox>

        <SectionTitleLineWithButton
          :icon="mdiTableOff"
          title="Empty variation"
        />

        <NotificationBar color="danger" :icon="mdiTableOff">
          <b>Empty.</b> When there's nothing to show
        </NotificationBar>

        <CardBox>
          <CardBoxComponentEmpty />
        </CardBox>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
