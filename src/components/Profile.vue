<template>
  <div
    class="transition duration-500 ease-in-out"
    :class="{ 'text-gray-100': darkState, 'text-gray-800': !darkState }"
  >
    <div class="flex">
      <div class="w-1/2 px-16 h-screen pt-16">
        <div class="text-6xl">
          Hi,
          <span class="text-3xl">I'm Ram</span>
        </div>
      </div>
      <div class="w-1/2 px-16 h-screen pt-16">
        <div class="text-6xl">
          Hi,
          <span class="text-3xl">I'm Ram</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    darkState() {
      return this.$store.state.darkTheme;
    }
  }
};
</script>

<style></style>
