<template>
  <!-- <div
    class="h-screen text-center pt-24 text-2xl uppercase tracking-widest"
    :class="{
      'text-red-400': darkState,
      'text-orange-500': !darkState
    }"
  >
    Contact Me
    <div class="pt-24 text-xl">
      {{ getMessage() }}
    </div>
  </div> -->

  <div class="flex">
    <!-- col-text -->
    <div>
      <div class="text-5xl text-white font-semibold">
        Get in touch
      </div>

      <div class="text-xl text-coolgray-400">
        Fill up the form and I will get back to you soon.
      </div>

      <div class="flex">
        <span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            ></path>
          </svg>
        </span>
        +91 9969060468
      </div>

      <div class="flex">
        <span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            ></path>
            <path
              d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
            ></path>
          </svg>
        </span>
        ramkc.1997@gmail.com
      </div>

      <div class="flex">
        <span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        Mumbai India
      </div>
    </div>
    <!-- col-form -->
    <div></div>
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
