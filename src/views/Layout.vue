<template>
  <div
    class="h-screen w-screen flex transition duration-500 ease-in-out"
    :class="{ 'bg-coolgray-900': darkState }"
  >
    <Navbar :darkLayout="darkState"></Navbar>
    <div class="w-full h-screen">
      <!-- <vue-particles
        color="#ffffff"
        :particleOpacity="0.5"
        :particlesNumber="75"
        shapeType="circle"
        :particleSize="2"
        :lineLinked="false"
        :moveSpeed="2"
        :hoverEffect="false"
        :clickEffect="false"
      ></vue-particles> -->
      <router-view></router-view>
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
