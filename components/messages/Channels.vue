<template>
  <div class="mt-4 dark:text-gray-200">
    <div
      class="text-xs font-semibold text-slate-400 uppercase mb-3 dark:text-gray-100"
    >
      Channels
    </div>
    <ul class="mb-6">
      <li class="-mx-2">
        <button
          class="flex items-center justify-between w-full p-2 rounded"
          @click.stop="$emit('close-msgsidebar')"
        >
          <div class="flex items-center">
            <div class="truncate">
              <span
                class="text-sm font-medium text-slate-800 dark:text-gray-200"
                >#New Leads</span
              >
            </div>
          </div>
          <div class="flex items-center ml-2">
            <div class="w-2 h-2 bg-indigo-400 rounded-full"></div>
          </div>
        </button>
      </li>
      <li class="-mx-2">
        <button
          class="flex items-center justify-between w-full p-2 rounded"
          @click.stop="$emit('close-msgsidebar')"
        >
          <div class="flex items-center truncate">
            <div class="truncate">
              <span
                class="text-sm font-medium text-slate-800 dark:text-gray-200"
                >#Development Team</span
              >
            </div>
          </div>
        </button>
      </li>
      <li class="-mx-2">
        <button
          class="flex items-center justify-between w-full p-2 rounded"
          @click.stop="$emit('close-msgsidebar')"
        >
          <div class="flex items-center truncate">
            <div class="truncate">
              <span
                class="text-sm font-medium text-slate-800 dark:text-gray-200"
                >#Product Tips</span
              >
            </div>
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Channels",
  props: ["msgSidebarOpen"],
};
</script>
