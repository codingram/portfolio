<template>
  <div
    class="md:flex smooth-bg-transition md:h-screen"
    :class="{ 'bg-coolgray-900': darkState }"
  >
    <Navbar :darkLayout="darkState"></Navbar>
    <div class="w-full relative" :class="{ 'bg-coolgray-900': darkState }">
      <vue-particles
        class="absolute h-screen w-full hidden md:block"
        color="#ffffff"
        :particleOpacity="0.5"
        :particlesNumber="35"
        shapeType="circle"
        :particleSize="2"
        :lineLinked="false"
        :moveSpeed="2"
        :hoverEffect="false"
        :clickEffect="false"
      ></vue-particles>
      <div
        class="absolute top-0 left-0 w-full"
        :class="{ 'bg-coolgray-900 md:bg-transparent': darkState }"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Layout",
  components: {
    Navbar
  },
  computed: {
    darkState() {
      return this.$store.state.darkTheme;
    }
  },
  methods: {
    changeDarkTheme(theme) {
      theme === "dark" ? (this.darkLayout = true) : (this.darkLayout = false);
    }
  },
  data() {
    return {
      darkLayout: true
    };
  }
};
</script>
