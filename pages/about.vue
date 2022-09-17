<script setup lang="ts">
import { useStore } from "~~/store/state";

const store = useStore();
const route = useRoute();

const computedUser = computed(() => {
  return store.users.filter((user) => {
    if (user.id === Number(route.query.id)) {
      return user;
    }
  });
});

onMounted(() => {
  store.fetchUser();
});
</script>

<template>
  <div class="min-h-screen max-w-3xl mx-auto pb-8 font-clashGrotesk px-2">
    <div class="flex items-center space-x-2">
      <h1
        :class="{
          'text-neutral-200': store.isDark,
          'text-neutral-900': store.isLight,
        }"
        class="text-2xl font-bold w-7/12 md:w-6/12"
      >
        Users Details Page
      </h1>
      <div
        :class="{
          'bg-neutral-200': store.isDark,
          'bg-neutral-900': store.isLight,
        }"
        class="h-0.5 w-5/12 md:w-full"
      ></div>
    </div>
    <section class="mt-8">
      <div
        class="flex flex-col md:flex-row"
        v-for="user in computedUser"
        :key="user.id"
      >
        <div
          class="md:w-4/6 flex flex-col space-y-2 order-2 md:order-1 mt-8 md:mt-0"
        >
          <div
            :class="{
              'text-neutral-200': store.isDark,
              'text-neutral-900': store.isLight,
            }"
            class="text-3xl font-bold"
          >
            {{ user.name }}
          </div>
          <span
            :class="{
              'text-neutral-300': store.isDark,
              'text-neutral-800': store.isLight,
            }"
            class=""
            >@{{ user.username }}</span
          >

          <div>
            <strong
              :class="{
                'text-neutral-200': store.isDark,
                'text-neutral-900': store.isLight,
              }"
              >Phone:
            </strong>
            <span
              :class="{
                'text-neutral-300': store.isDark,
                'text-neutral-800': store.isLight,
              }"
              class=""
            >
              {{ user.phone }}
            </span>
          </div>
          <div>
            <strong
              :class="{
                'text-neutral-200': store.isDark,
                'text-neutral-900': store.isLight,
              }"
              >Email:
            </strong>
            <span
              :class="{
                'text-neutral-300': store.isDark,
                'text-neutral-800': store.isLight,
              }"
              class=""
            >
              {{ user.email }}
            </span>
          </div>
          <div>
            <strong
              :class="{
                'text-neutral-200': store.isDark,
                'text-neutral-900': store.isLight,
              }"
              >Address:
            </strong>
            <span
              :class="{
                'text-neutral-300': store.isDark,
                'text-neutral-800': store.isLight,
              }"
              class=""
              >{{ user.address.street }}, {{ user.address.city }}</span
            >
          </div>
          <div>
            <strong
              :class="{
                'text-neutral-200': store.isDark,
                'text-neutral-900': store.isLight,
              }"
              >Zip Code:
            </strong>
            <span
              :class="{
                'text-neutral-300': store.isDark,
                'text-neutral-800': store.isLight,
              }"
              class=""
            >
              {{ user.address.zipcode }}
            </span>
          </div>

          <div>
            <strong
              :class="{
                'text-neutral-200': store.isDark,
                'text-neutral-900': store.isLight,
              }"
              >Company:
            </strong>
            <span
              :class="{
                'text-neutral-300': store.isDark,
                'text-neutral-800': store.isLight,
              }"
              class=""
            >
              {{ user.company.name }}
            </span>
          </div>
          <div class="py-2">
            <a
              :class="{
                'bg-neutral-800  hover:bg-neutral-900 text-neutral-200':
                  store.isDark,
                'bg-neutral-200 hover:bg-neutral-300 text-neutral-900':
                  store.isLight,
              }"
              :href="'https://www.' + user.website"
              target="_blank"
              class="block w-fit p-2 rounded-md transition-all duration-200 ease-linear"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          class="md:w-2/6 w-80 mx-auto rounded-md overflow-hidden order-1 md:order-2"
        >
          <img
            class="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XNoZ6bAiqH_xhp7LsXbrE_zuoqSO2maLcg&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div class="mt-8 space-y-2">
        <div
          :class="{
            'text-neutral-200': store.isDark,
            'text-neutral-900': store.isLight,
          }"
          class="text-2xl font-bold"
        >
          About
        </div>
        <p
          :class="{
            'text-neutral-300': store.isDark,
            'text-neutral-800': store.isLight,
          }"
          class="indent-8 leading-relaxed"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, sequi
          fugit quas veritatis possimus corrupti provident et distinctio atque
          eaque deleniti ipsa, omnis aut delectus obcaecati temporibus quibusdam
          numquam! Ipsa. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Veritatis ducimus perspiciatis placeat dignissimos quod enim,
          aspernatur adipisci officia tenetur officiis exercitationem modi
          distinctio odit optio molestias deserunt quis provident asperiores?
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
