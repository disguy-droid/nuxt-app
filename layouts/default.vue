<script setup lang="ts">
import { useStore } from "~~/store/state";

const store = useStore();
// const nuxtApp = useNuxtApp();

// nuxtApp.hook("page:finish", () => {
//   window.scrollTo(0, 0);
// });
</script>

<template>
  <main>
    <Html>
      <Head>
        <Title>Nuxt App</Title>
        <Link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../assets/favicon-32x32.png"
        />
      </Head>
    </Html>
    <div
      :class="{ 'bg-black': store.isDark, 'bg-white': store.isLight }"
      class="transition-color duration-200 ease-linear"
    >
      <Header />
      <slot />
    </div>
  </main>
</template>

<style scoped></style>
