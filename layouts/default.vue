<script setup lang="ts">
import { useStore } from "~~/store/state";

const store = useStore();
</script>

<template>
  <div
    :class="{ 'bg-black': store.isDark, 'bg-white': store.isLight }"
    class="transition-color duration-200 ease-linear"
  >
    <Header />
    <slot />
  </div>
</template>

<style scoped></style>
