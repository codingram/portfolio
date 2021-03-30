<template>
  <div
    class="h-screen pt-24"
    :class="{
      'text-yellow-400': darkState,
      'text-green-500': !darkState,
    }"
  >
    <div class="text-2xl text-center uppercase tracking-widest">
      MY PROJECTS
    </div>

    <div class="flex flex-wrap justify-center w-full mt-12">
      <div
        class="w-full md:w-1/2 xl:w-1/3 mb-6"
        :class="{
          'text-gray-800': darkState,
          'text-white': !darkState,
        }"
      >
        <div class="mx-8 p-6 rounded-lg bg-white shadow-xl">
          <img
            src="../assets/images/chatbot.jpg"
            class="w-full rounded-xl"
            alt=""
          />
          <div>Engagely Chatbots</div>
        </div>
      </div>
      <div
        class="w-full md:w-1/2 xl:w-1/3 mb-6"
        :class="{
          'text-gray-800': darkState,
          'text-white': !darkState,
        }"
      >
        <div class="mx-8 p-6 rounded-lg bg-white shadow-xl">
          <img
            src="../assets/images/chatbot.jpg"
            class="w-full rounded-xl"
            alt=""
          />
          <div>Engagely Chatbots</div>
        </div>
      </div>
      <div
        class="w-full md:w-1/2 xl:w-1/3 mb-6"
        :class="{
          'text-gray-800': darkState,
          'text-white': !darkState,
        }"
      >
        <div class="mx-8 p-6 rounded-lg bg-white shadow-xl">
          <img
            src="../assets/images/chatbot.jpg"
            class="w-full rounded-xl"
            alt=""
          />
          <div>Engagely Chatbots</div>
        </div>
      </div>
      <div
        class="w-full md:w-1/2 xl:w-1/3 mb-6"
        :class="{
          'text-gray-800': darkState,
          'text-white': !darkState,
        }"
      >
        <div class="mx-8 p-6 rounded-lg bg-white shadow-xl">
          <img
            src="../assets/images/chatbot.jpg"
            class="w-full rounded-xl"
            alt=""
          />
          <div>Engagely Chatbots</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // getMessage: () => {
    //   const arr = ["appearing shortly", "anytime here", "check back soon"];
    //   return arr[Math.floor(Math.random() * arr.length)];
    // }
  },
  computed: {
    darkState() {
      return this.$store.state.darkTheme;
    },
  },
};
</script>

<style></style>
