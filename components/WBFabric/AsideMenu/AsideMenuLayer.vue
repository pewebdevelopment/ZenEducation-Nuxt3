<script setup>
import { useStyleStore } from "@/stores/style.js";
import PremAsideMenuList from "@/components/WBFabric/AsideMenu/AsideMenuList.vue";

defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
  activeSecondaryMenuKey: {
    type: String,
    default: null,
  },
  zIndex: {
    type: String,
    default: "z-50",
  },
  isCompact: Boolean,
});

const emit = defineEmits(["menu-click"]);

const styleStore = useStyleStore();

const menuClick = (event, item) => {
  emit("menu-click", event, item);
};
</script>

<template>
  <aside
    id="aside"
    :class="zIndex"
    class="flex w-60 fixed top-0 h-screen transition-position overflow-hidden"
  >
    <div
      :class="styleStore.asideStyle"
      class="flex-1 flex flex-col overflow-hidden dark:bg-slate-900"
    >
      <div
        :class="styleStore.asideBrandStyle"
        class="flex flex-row w-full shrink-0 h-14 items-center dark:bg-slate-900"
      >
        <slot />
      </div>
      <!-- The scrollbars. CSS has been written as extened CSS in the tailwind.config.js file -->
      <!-- The following ScrollBar is due to the tailwind-scrollbar plugin -->
      <!-- If we dont want to use the tailwind scrollbar plugin then we can have a hacky workaround by using 'aside-scrollbars-[slate]' when darkMode is true, however, this is not the most optimal solution -->
      <div
        :class="
          styleStore.darkMode
            ? 'scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-800 scrollbar-thumb-rounded'
            : styleStore.asideScrollbarsStyle
        "
        class="flex-1 overflow-y-auto overflow-x-hidden dark:bg-gray-900"
      >
        <PremAsideMenuList
          :menu="menu"
          :is-compact="isCompact"
          :active-secondary-menu-key="activeSecondaryMenuKey"
          @menu-click="menuClick"
        />
      </div>

      <slot name="footer" />
    </div>
  </aside>
</template>

<style scoped>
.dark_scrollbars_compact {
  scrollbar-width: thin;
  scrollbar-color: rgb(2, 7, 14) rgb(30, 41, 59) !important;
}
</style>
