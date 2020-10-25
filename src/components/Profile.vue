<template>
  <div
    class="smooth-bg-transition"
    :class="{ 'text-gray-100': darkState, 'text-gray-800': !darkState }"
  >
    <div class="sm:block md:flex">
      <Welcome />
      <CvJson />
    </div>
  </div>
</template>

<script>
import CvJson from "@/components/CvJson.vue";
import Welcome from "@/components/Welcome.vue";
export default {
  name: "Profile",
  components: {
    CvJson,
    Welcome
  },
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
