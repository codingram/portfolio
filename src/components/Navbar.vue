<template>
  <div
    class="flex justify-around md:w-16 md:h-screen md:block shadow-lg smooth-bg-transition z-10"
    :class="{ 'text-teal-200': darkState, 'text-gray-800': !darkState }"
  >
    <div
      class="py-5 px-2 md:px-0 md:pb-8 md:pt-8 md:mb-2 cursor-pointer"
      @click="toggleTheme"
      v-if="!darkState"
    >
      <svg
        class="w-6 h-6 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        ></path>
      </svg>
    </div>
    <div
      class="py-5 px-2 md:px-0 md:pb-8 md:pt-8 md:mb-2 cursor-pointer"
      @click="toggleTheme"
      v-if="darkState"
    >
      <svg
        class="w-6 h-6 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      </svg>
    </div>
    <router-link to="/profile" custom v-slot="{ navigate, isActive }">
      <div
        class="py-5 px-2 md:px-0 md:py-3 md:mb-2 border-b-2 border-r-0 md:border-r-2 cursor-pointer"
        :class="{
          'border-red-600': isActive && darkState,
          'border-orange-600': isActive && !darkState,
          'border-transparent': !isActive
        }"
        role="link"
        @click="navigate"
      >
        <svg class="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </router-link>
    <router-link to="/projects" custom v-slot="{ navigate, isActive }">
      <div
        class="py-5 px-2 md:px-0 md:py-3 md:mb-2 border-b-2 border-r-0 md:border-r-2 cursor-pointer"
        :class="{
          'border-red-600': isActive && darkState,
          'border-orange-600': isActive && !darkState,
          'border-transparent': !isActive
        }"
        role="link"
        @click="navigate"
      >
        <svg
          class="w-6 h-6 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
      </div>
    </router-link>
    <router-link to="/contact-me" custom v-slot="{ navigate, isActive }">
      <div
        class="py-5 px-2 md:px-0 md:py-3 md:mb-2 border-b-2 border-r-0 md:border-r-2 cursor-pointer"
        :class="{
          'border-red-600': isActive && darkState,
          'border-orange-600': isActive && !darkState,
          'border-transparent': !isActive
        }"
        role="link"
        @click="navigate"
      >
        <svg
          class="w-6 h-6 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </div>
    </router-link>
    <a href="https://twitter.com/ramkchaudhari" target="_blank">
      <div class="py-5 px-2 md:px-0 md:py-3 md:mb-2 cursor-pointer">
        <svg
          class="w-6 h-6 mx-auto"
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path
            d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"
          ></path>
        </svg>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/ramchaudhari/" target="_blank">
      <div class="py-5 px-2 md:px-0 md:py-3 md:mb-2 cursor-pointer">
        <svg
          class="w-6 h-6 mx-auto"
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path
            d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"
          ></path>
        </svg>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    toggleTheme() {
      this.$store.commit("toggleThemeState");
    }
  },
  computed: {
    darkState() {
      return this.$store.state.darkTheme;
    }
  }
};
</script>

<style></style>
