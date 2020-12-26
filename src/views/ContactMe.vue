<template>
  <div class="h-screen flex">
    <div class="h-full w-1/2 flex flex-col justify-around">
      <!-- text-section -->
      <div>
        <div class=" text-4xl font-black text-white">
          Get in touch
        </div>
        <div class=" text-gray-400">
          Fill up the form and I will get back to you soon
        </div>
      </div>

      <!-- information section -->
      <div>
        <!-- phone no -->
        <div class="flex text-white my-8">
          <div class="icon mr-3">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              ></path>
            </svg>
          </div>
          <div class="info">
            +91 9372845833
          </div>
        </div>
        <!-- email -->
        <div class="flex text-white my-8">
          <div class="icon mr-3">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              ></path>
            </svg>
          </div>
          <div class="info">
            ramkc.1997@gmail.com
          </div>
        </div>
        <!-- address -->
        <div class="flex text-white my-8">
          <div class="icon mr-3">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="info">
            Mumbai, India
          </div>
        </div>
      </div>

      <!-- social links -->
      <div class="flex text-white w-full">
        <div class="mx-auto p-3 bg-blue-500 rounded-full">
          <svg class="w-8 h-8 " fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <!-- form section -->
    <div class="h-full w-1/2 flex flex-col justify-around">
      <div class="">

      </div>
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
