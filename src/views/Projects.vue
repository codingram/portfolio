<template>
  <div
    class="h-screen text-center pt-24 text-2xl uppercase tracking-widest"
    :class="{
      'text-yellow-400': darkState,
      'text-green-500': !darkState
    }"
  >
    PROJECTS
    <div class="pt-24 text-xl">
      {{ getMessage() }}
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getMessage: () => {
      const arr = ["appearing shortly", "anytime here", "check back soon"];
      return arr[Math.floor(Math.random() * arr.length)];
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
