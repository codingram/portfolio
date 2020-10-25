<template>
  <div
    class="sm:w-full px-6 md:w-1/2 md:px-16 md:h-screen py-16 md:py-8 md:overflow-y-scroll scrollbar-d-none"
  >
    <div class="bracket">{</div>
    <span
      class="smooth-bg-transition"
      :class="{ 'text-teal-200': darkState, 'text-blue-600': !darkState }"
    >
      <div class="ml-4">
        <span class="key">"author"&nbsp;:</span>
        <span
          class="value ml-2 smooth-bg-transition"
          :class="{
            'text-blue-400': darkState,
            'text-purple-600': !darkState
          }"
          >"{{ cvJson.author }}"
        </span>
        <span class="comma ml-1">,</span>
      </div>
      <div class="ml-4">
        <span class="key">"username"&nbsp;:</span>
        <span
          class="value ml-2 smooth-bg-transition"
          :class="{
            'text-blue-400': darkState,
            'text-purple-600': !darkState
          }"
          >"{{ cvJson.username }}"
        </span>
        <span class="comma ml-1">,</span>
      </div>
      <div class="ml-4">
        <span class="key">"description"&nbsp;:</span>
        <span
          class="value ml-2 smooth-bg-transition"
          :class="{
            'text-blue-400': darkState,
            'text-purple-600': !darkState
          }"
          >"{{ cvJson.description }}"
        </span>
        <span class="comma ml-1">,</span>
      </div>
      <div class="ml-4">
        <span class="key">"homepage"&nbsp;:</span>
        <span
          class="value ml-2 smooth-bg-transition"
          :class="{
            'text-blue-400': darkState,
            'text-purple-600': !darkState
          }"
          >"{{ cvJson.homepage }}"
        </span>
        <span class="comma ml-1">,</span>
      </div>
      <div class="ml-4">
        <span class="key">"engines"&nbsp;:</span>
        <span
          class="smooth-bg-transition"
          :class="{
            'text-blue-400': darkState,
            'text-purple-600': !darkState
          }"
        >
          <span class="square-bracket ml-2">[</span>
          <div class="ml-6" v-for="eng in cvJson.engines" v-bind:key="eng">
            "{{ eng }}",
          </div>
          <span class="square-bracket ml-2">]</span>
        </span>
        <span class="comma ml-1">,</span>
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
                'text-purple-600': !darkState
              }"
              >"{{ value }}",</span
            >
          </div>
          <span class="bracket ml-2">}</span>
          <span class="comma ml-1">,</span>
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
                'text-purple-600': !darkState
              }"
              >"{{ value }}",</span
            >
          </div>
          <span class="bracket ml-2">}</span>
          <span class="comma ml-1">,</span>
        </span>
      </div>
    </span>
    <div class="bracket">}</div>
  </div>
</template>

<script>
export default {
  name: "CvJson",
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
