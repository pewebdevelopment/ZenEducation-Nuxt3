<template>
  <NuxtLayout name="zennofooter">
    <div class="flex h-screen w-full">
      <!-- Content area -->
      <div class="relative flex flex-col w-full">
        <main
          class="overflow-y-auto overflow-x-scroll scrollbar-thin dark:scrollbar-thumb-gray-900 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-700 scrollbar-track-gray-400 scrollbar-thumb-rounded"
        >
          <div class="px-4 sm:px-6 lg:px-8 py-8 w-full mx-auto">
            <!-- Page header -->
            <div class="sm:flex sm:justify-between sm:items-center mb-8">
              <!-- Left: Title -->
              <div class="mb-4 sm:mb-0">
                <h1
                  class="text-2xl md:text-3xl text-slate-800 dark:text-slate-200 font-bold"
                >
                  Acme Inc. Tasks ✨
                </h1>
              </div>

              <!-- Right: Actions  -->
              <div
                class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
              >
                <!-- Add board button -->
                <button
                  class="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                >
                  <svg
                    class="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
                    />
                  </svg>
                  <span class="hidden xs:block ml-2">Add Board</span>
                </button>
              </div>
            </div>

            <!-- Filters -->
            <div class="mb-4 border-b border-slate-200">
              <ul
                class="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll overflow-y-auto scrollbar-thin dark:scrollbar-thumb-gray-900 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-700 scrollbar-track-gray-400 scrollbar-thumb-rounded"
              >
                <li
                  class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8"
                >
                  <NuxtLink class="text-indigo-500 whitespace-nowrap" to="#0"
                    >View All</NuxtLink
                  >
                </li>
                <li
                  class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8"
                >
                  <NuxtLink
                    class="text-slate-500 hover:text-slate-600 whitespace-nowrap"
                    to="#0"
                    >Web Sprint</NuxtLink
                  >
                </li>
                <li
                  class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8"
                >
                  <NuxtLink
                    class="text-slate-500 hover:text-slate-600 whitespace-nowrap"
                    to="#0"
                    >Marketing</NuxtLink
                  >
                </li>
                <li
                  class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8"
                >
                  <NuxtLink
                    class="text-slate-500 hover:text-slate-600 whitespace-nowrap"
                    to="#0"
                    >Development</NuxtLink
                  >
                </li>
              </ul>
            </div>

            <!-- Cards -->

            <div
              class="h-full w-auto cards-container overflow-x-auto overflow-y-scroll scrollbar-thin dark:scrollbar-thumb-gray-900 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-700 scrollbar-track-gray-400 scrollbar-thumb-rounded"
            >
              <div class="flex gap-4">
                <!-- Tasks column -->
                <TasksGroups title="To Do’s 🖋️">
                  <Task01 />
                  <Task02 />
                  <Task03 />
                  <Task04 />
                  <Task05 />
                  <Task04 />
                  <Task05 />
                </TasksGroups>
                <!-- Tasks column -->
                <TasksGroups title="In Progress ✌️">
                  <Task04 />
                  <Task05 />
                  <Task04 />
                  <Task05 />
                  <Task04 />
                  <Task05 />
                </TasksGroups>
                <!-- Tasks column -->
                <TasksGroups title="Completed 🎉">
                  <Task06 />
                  <Task07 />
                </TasksGroups>
                <!-- Tasks column -->
                <TasksGroups title="Notes 📒">
                  <Task08 />
                  <Task09 />
                </TasksGroups>
                <!-- Tasks column -->
                <TasksGroups title="Notes 📒">
                  <Task08 />
                  <Task09 />
                </TasksGroups>
                <!-- Tasks column -->
                <TasksGroups title="Notes 📒">
                  <Task08 />
                  <Task09 />
                </TasksGroups>
                <!-- Tasks column -->
                <TasksGroups title="Notes 📒">
                  <Task08 />
                  <Task09 />
                </TasksGroups>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
import { ref } from "vue";
import SectionMain from "@/components/Sections/SectionMain.vue";
import TasksGroups from "@/components/Tasks/TasksGroups.vue";
import Task01 from "@/components/Tasks/Task01.vue";
import Task02 from "@/components/Tasks/Task02.vue";
import Task03 from "@/components/Tasks/Task03.vue";
import Task04 from "@/components/Tasks/Task04.vue";
import Task05 from "@/components/Tasks/Task05.vue";
import Task06 from "@/components/Tasks/Task06.vue";
import Task07 from "@/components/Tasks/Task07.vue";
import Task08 from "@/components/Tasks/Task08.vue";
import Task09 from "@/components/Tasks/Task09.vue";
import { useStyleStore } from "@/stores/style";

const styleStore = useStyleStore();

export default {
  name: "TasksKanban",
  components: {
    SectionMain,
    TasksGroups,
    Task01,
    Task02,
    Task03,
    Task04,
    Task05,
    Task06,
    Task07,
    Task08,
    Task09,
  },
  setup() {
    const sidebarOpen = ref(false);

    return {
      sidebarOpen,
    };
  },
};
</script>
