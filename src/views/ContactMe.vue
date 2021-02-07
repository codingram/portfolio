<template>
  <div class="hidden md:block">
    <div class="h-screen flex">
      <div class="h-full px-16 w-1/2 flex flex-col justify-around">
        <!-- text-section -->
        <div>
          <div class="text-4xl font-black text-white">
            Get in touch
          </div>
          <div class="text-gray-400">
            Fill up the form and I will get back to you soon
          </div>
        </div>

        <!-- information section -->
        <div>
          <!-- phone no -->
          <div class="info-card flex mb-6">
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
          <div class="info-card flex my-6">
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
          <div class="info-card flex mt-6">
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
        <!-- <div class="flex text-white w-full">
        <div class="mx-auto p-3 bg-blue-500 rounded-full">
          <svg class="w-8 h-8 " fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div> -->
      </div>

      <!-- form section -->
      <div class="h-full w-1/2 flex flex-col justify-around">
        <div class="w-full p-12 max-w-lg mx-auto">
          <div class="rounded-2xl shadow-2xl bg-white h-full p-6">
            <!-- name field -->
            <div class=" form-group mb-4">
              <label class=" font-bold text-coolgray-700 block mb-1" for="name">
                Your Name
              </label>
              <div class="flex border border-coolgray-200 rounded-lg p-3">
                <svg
                  class="w-6 h-6 text-coolgray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class=" bg-transparent border-none flex-grow -my-3 -mr-3 outline-none pl-3"
                />
              </div>
            </div>
            <!-- Contact field -->
            <div class=" form-group mb-4">
              <label
                class=" font-bold text-coolgray-700 block mb-1"
                for="contact"
              >
                Mail/Contact Number
              </label>
              <div class="flex border border-coolgray-200 rounded-lg p-3">
                <svg
                  class="w-6 h-6 text-coolgray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  class=" bg-transparent border-none flex-grow -my-3 -mr-3 outline-none pl-3"
                />
              </div>
            </div>
            <!-- message field -->
            <div class=" form-group mb-4">
              <label
                class=" font-bold text-coolgray-700 block mb-1"
                for="message"
              >
                Your message
              </label>
              <div>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Message"
                  class="w-full outline-none p-3 resize-none bg-coolgray-100 focus:shadow-outline rounded-lg"
                >
                </textarea>
              </div>
            </div>

            <div class="text-right">
              <button class="send-btn focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="block md:hidden">
    <div class="px-4 mt-4 flex flex-col justify-around">
      <!-- text-section -->
      <div class="text-center mb-5">
        <div class="text-3xl font-black text-white">
          Get in touch
        </div>
        <div class="text-gray-400">
          Fill up the form and I will get back to you soon
        </div>
      </div>

      <!-- information section -->
      <div>
        <!-- phone no -->
        <div class="info-card flex mb-5">
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
        <div class="info-card flex mb-5">
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
        <div class="info-card flex mb-5">
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
    </div>

    <!-- form section -->
    <div class="flex flex-col justify-around">
      <div class="w-full p-4 max-w-lg mx-auto">
        <div class="rounded-2xl shadow-2xl bg-white p-6">
          <!-- name field -->
          <div class=" form-group mb-4">
            <label class=" font-bold text-coolgray-700 block mb-1" for="name">
              Your Name
            </label>
            <div class="flex border border-coolgray-200 rounded-lg p-3">
              <svg
                class="w-6 h-6 text-coolgray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <input
                type="text"
                name="name"
                id="name"
                class=" bg-transparent border-none flex-grow -my-3 -mr-3 outline-none pl-3"
              />
            </div>
          </div>
          <!-- Contact field -->
          <div class=" form-group mb-4">
            <label
              class=" font-bold text-coolgray-700 block mb-1"
              for="contact"
            >
              Mail/Contact Number
            </label>
            <div class="flex border border-coolgray-200 rounded-lg p-3">
              <svg
                class="w-6 h-6 text-coolgray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <input
                type="text"
                name="contact"
                id="contact"
                class=" bg-transparent border-none flex-grow -my-3 -mr-3 outline-none pl-3"
              />
            </div>
          </div>
          <!-- message field -->
          <div class=" form-group mb-4">
            <label
              class=" font-bold text-coolgray-700 block mb-1"
              for="message"
            >
              Your message
            </label>
            <div>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Message"
                class="w-full outline-none p-3 resize-none bg-coolgray-100 focus:shadow-outline rounded-lg"
              >
              </textarea>
            </div>
          </div>

          <div class="text-center md:text-right">
            <button class="send-btn focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  computed: {
    darkState() {
      return this.$store.state.darkTheme;
    }
  }
};
</script>

<style></style>
