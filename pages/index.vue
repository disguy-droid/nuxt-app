<script setup lang="ts">
import { useStore } from "~~/store/state";

const store = useStore();

onMounted(() => {
  store.fetchUser();
});
</script>

<template>
  <div class="min-h-screen max-w-3xl mx-auto pb-8 font-clashGrotesk px-2">
    <div class="flex items-center space-x-2">
      <h1
        :class="{
          'text-neutral-900': store.isLight,
          'text-neutral-100': store.isDark,
        }"
        class="text-2xl font-bold"
      >
        Users
      </h1>
      <div
        :class="{
          'bg-neutral-900': store.isLight,
          'bg-neutral-200': store.isDark,
        }"
        class="h-0.5 w-full"
      ></div>
    </div>
    <div class="mt-8 flex flex-col justify-center">
      <div
        :class="{
          'border-neutral-500 text-neutral-200': store.isDark,
          'border-neutral-900 text-neutral-900': store.isLight,
        }"
        class="flex py-2 px-2 border rounded"
      >
        <h2 class="w-1/2 font-bold text-lg">Name</h2>
        <h3 class="w-1/2 font-bold text-lg">Email</h3>
      </div>
      <div
        :class="{
          'border-neutral-500 text-neutral-200 hover:bg-neutral-900':
            store.isDark,
          'border-neutral-900 text-neutral-900 hover:bg-neutral-200':
            store.isLight,
        }"
        class="border rounded py-2 px-2 flex"
        v-for="user in store.users"
        :key="user.id"
      >
        <nuxt-link :href="`/${user.id}`" @click="" class="w-1/2 cursor-pointer">
          {{ user.name }}
        </nuxt-link>
        <h3 class="w-1/2 mr-2">{{ user.email }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
