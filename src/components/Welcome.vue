<template>
  <div class="w-full px-6 md:w-1/2 md:px-16 md:pt-16 md:h-screen">
    <div class="text-6xl">
      Hi,
      <span class="text-3xl">I'm Ram</span>
    </div>
    <div class="mt-6 tracking-widest font-extrabold text-lg">
      Software Developer
    </div>
    <div class="mt-12 text-md tracking-wide">
      Passionate techy and Systems Design enthuiast
    </div>
    <div class="mt-12 text-md tracking-wide">
      <button
        class="contact-btn hover:border-transparent"
        :class="{
          'text-gray-100 border-gray-100 hover:bg-gray-100 hover:text-gray-800': darkState,
          'text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-gray-100': !darkState
        }"
      >
        Contact Me
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  computed: {
    darkState() {
      return this.$store.state.darkTheme;
    },
    cvJson() {
      return this.$store.state.cvJson;
    }
  }
};
</script>

<style></style>
