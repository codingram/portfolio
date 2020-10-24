<template>
  <div
    class="smooth-bg-transition"
    :class="{ 'text-gray-100': darkState, 'text-gray-800': !darkState }"
  >
    <div class="sm:block md:flex">
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

      <div
        class="sm:w-full px-6 md:w-1/2 md:px-16 md:h-screen py-8 md:overflow-y-scroll scrollbar-d-none"
      >
        <div class="bracket">{</div>
        <span
          class="smooth-bg-transition"
          :class="{ 'text-teal-200': darkState, 'text-blue-500': !darkState }"
        >
          <div class="ml-4">
            <span class="key">"author"&nbsp;:</span>
            <span
              class="value ml-2 smooth-bg-transition"
              :class="{
                'text-blue-400': darkState,
                'text-purple-500': !darkState
              }"
              >"{{ cvJson.author }}"</span
            >
          </div>
          <div class="ml-4">
            <span class="key">"username"&nbsp;:</span>
            <span
              class="value ml-2 smooth-bg-transition"
              :class="{
                'text-blue-400': darkState,
                'text-purple-500': !darkState
              }"
              >"{{ cvJson.username }}"</span
            >
          </div>
          <div class="ml-4">
            <span class="key">"description"&nbsp;:</span>
            <span
              class="value ml-2 smooth-bg-transition"
              :class="{
                'text-blue-400': darkState,
                'text-purple-500': !darkState
              }"
              >"{{ cvJson.description }}"</span
            >
          </div>
          <div class="ml-4">
            <span class="key">"homepage"&nbsp;:</span>
            <span
              class="value ml-2 smooth-bg-transition"
              :class="{
                'text-blue-400': darkState,
                'text-purple-500': !darkState
              }"
              >"{{ cvJson.homepage }}"</span
            >
          </div>
          <div class="ml-4">
            <span class="key">"engines"&nbsp;:</span>
            <span
              class="smooth-bg-transition"
              :class="{
                'text-blue-400': darkState,
                'text-purple-500': !darkState
              }"
            >
              <span class="square-bracket ml-2">[</span>
              <div class="ml-6" v-for="eng in cvJson.engines" v-bind:key="eng">
                "{{ eng }}",
              </div>
              <span class="square-bracket ml-2">]</span>
            </span>
          </div>

          <div class="ml-4">
            <span>
              <span class="key">"dependencies"&nbsp;:</span>
              <span class="bracket ml-2">{</span>
              <div
                class="ml-6"
                v-for="(value, name) in cvJson.dependencies"
                v-bind:key="name"
              >
                <span class="depkey">"{{ name }}" :</span>
                <span
                  class="depvalue ml-2 smooth-bg-transition"
                  :class="{
                    'text-blue-400': darkState,
                    'text-purple-500': !darkState
                  }"
                  >"{{ value }}",</span
                >
              </div>
              <span class="bracket ml-2">}</span>
            </span>
          </div>

          <div class="ml-4">
            <span>
              <span class="key">"devDependencies"&nbsp;:</span>

              <span class="bracket ml-2">{</span>
              <div
                class="ml-6"
                v-for="(value, name) in cvJson.devDependencies"
                v-bind:key="name"
              >
                <span class="depkey">"{{ name }}" :</span>
                <span
                  class="depvalue ml-2 smooth-bg-transition"
                  :class="{
                    'text-blue-400': darkState,
                    'text-purple-500': !darkState
                  }"
                  >"{{ value }}",</span
                >
              </div>
              <span class="bracket ml-2">}</span>
            </span>
          </div>
        </span>
        <div class="bracket">}</div>
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
    },
    cvJson() {
      return this.$store.state.cvJson;
    }
  }
};
</script>

<style></style>
