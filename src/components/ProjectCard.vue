<template>
  <div
    class="w-full md:w-1/2 xl:w-1/3 mb-6"
    :class="{
      'text-gray-800': darkState,
      'text-white': !darkState,
    }"
  >
    <div class="mx-8 rounded-lg bg-white shadow-lg">
      333333
      <!-- <slot></slot> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  // props: {
  //   darkState: String,
  // },
};
</script>

<style></style>
