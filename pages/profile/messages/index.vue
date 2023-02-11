<template>
  <NuxtLayout name="zen">
    <SectionMain>
      <div class="flex h-screen">
        <!-- Content area -->
        <div
          ref="contentArea"
          class="relative flex flex-col flex-1 rounded-lg overflow-x-hidden overflow-y-hidden"
        >
          <main>
            <div class="relative flex bg-blue-700">
              <!-- Messages sidebar -->
              <MessagesSidebar
                class=""
                :msgSidebarOpen="msgSidebarOpen"
                @close-msgsidebar="msgSidebarOpen = false"
              />

              <!-- Messages Panel -->
              <div
                class="grow relative flex flex-col md:translate-x-0 transition-transform duration-300 ease-in-out h-screen bg-gray-100 dark:bg-gray-800"
                :class="msgSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'"
              >
                <MessagesHeader
                  :msgSidebarOpen="msgSidebarOpen"
                  @toggle-msgsidebar="msgSidebarOpen = !msgSidebarOpen"
                />

                <MessagesBody />

                <MessagesFooter />
              </div>
            </div>
          </main>
        </div></div
    ></SectionMain>
  </NuxtLayout>
</template>

<script>
import SectionMain from "@/components/Sections/SectionMain.vue";
import { ref, onMounted, watch } from "vue";

export default {
  components: {
    SectionMain,
  },
  setup() {
    const sidebarOpen = ref(false);
    const msgSidebarOpen = ref(true);
    const contentArea = ref(null);

    const handleScroll = () => {
      contentArea.value.scrollTop = 99999999;
    };

    onMounted(() => {
      handleScroll();
    });

    watch(msgSidebarOpen, () => {
      handleScroll();
    });

    return {
      sidebarOpen,
      msgSidebarOpen,
      contentArea,
    };
  },
};
</script>
