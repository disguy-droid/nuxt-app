<script setup lang="ts">
import { useStore } from "~~/store/state";

const store = useStore();

const toggleTheme = () => {
  store.isDark = !store.isDark;
  store.isLight = !store.isLight;
};
</script>

<template>
  <nav
    class="max-w-3xl mx-auto h-24 px-2 flex items-center font-clashGrotesk justify-between"
  >
    <h1
      :class="{
        'text-neutral-50': store.isDark,
        'text-neutral-900': store.isLight,
      }"
      class="text-3xl font-black uppercase"
    >
      User Datas
    </h1>
    <div>
      <button
        :class="{
          'bg-neutral-200 hover:bg-neutral-300 text-neutral-900': store.isLight,
          'bg-neutral-800 hover:bg-neutral-900 text-neutral-200': store.isDark,
        }"
        @click="toggleTheme"
        class="px-2 py-2 rounded-md"
      >
        <svg
          v-if="store.isLight"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
        <svg
          v-if="store.isDark"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>

<style scoped></style>
