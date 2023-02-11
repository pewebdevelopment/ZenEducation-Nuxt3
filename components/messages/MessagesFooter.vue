<template>
  <div class="sticky bottom-0">
    <div
      class="sticky bottom-0 flex items-center justify-between rounded-lg bg-white border-t border-slate-200 dark:bg-gray-900 dark:border-slate-800 px-4 sm:px-6 md:px-5 h-16"
    >
      <!-- Plus button -->
      <button class="shrink-0 text-slate-400 hover:text-slate-500 mr-3">
        <span class="sr-only">Add</span>
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.98 5.38 18.62.02 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z"
          />
        </svg>
      </button>
      <!-- Message input -->
      <form class="grow flex items-center justify-between">
        <div class="flex grow mr-3 justify-between">
          <label for="message-input" class="sr-only">Type a message</label>
          <input
            id="message-input"
            class="form-input relative w-full h-full rounded-md bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 dark:bg-slate-700 focus:dark:bg-slate-800"
            type="text"
            placeholder="Type a message"
          />
        </div>
        <!-- <button
          type="submit"
          class="btn p-1 bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap rounded-md dark:bg-gray-900"
        >
          Send -&gt;
        </button> -->

        <button
          class="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            Send
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessagesFooter",
};
</script>
