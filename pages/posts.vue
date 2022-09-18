<script setup lang="ts">
import { useStore } from "~~/store/state";

const store = useStore();
interface Post {
  continent: string;
  description: string;
  height: string;
  image: string;
  title: string;
  countries: [];
}

const {
  data: posts,
  pending,
  error,
  refresh,
} = await useFetch<Post[]>("https://api.nuxtjs.dev/mountains");
</script>

<template>
  <div class="min-h-screen max-w-3xl mx-auto pb-8 font-clashGrotesk px-2">
    <div v-if="pending">Loading...</div>
    <div v-else class="columns-3xs gap-6 mt-6">
      <div
        class="relative mb-6 rounded overflow-hidden"
        v-for="(post, index) in posts"
        :key="index"
      >
        <img
          :src="post.image"
          alt="post_image"
          class="h-full w-full hover:scale-110 transition-all duration-500 ease-out hover:duration-300 hover:ease-in"
        />
        <div
          :class="{
            'bg-black/50 text-neutral-200': store.isDark,
            'bg-white/40 text-neutral-900': store.isLight,
          }"
          class="absolute inset-x-0 bottom-0 backdrop-blur-md px-2 py-2"
        >
          {{ post.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
