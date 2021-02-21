import { createApp } from "vue";
import App from "./App.vue";
import VueParticles from "vue-particles";

import router from "./router";
import store from "./store";
import "./assets/main.css";

document.title = "Ram Chaudhari Portfolio"

createApp(App)
  .use(store)
  .use(VueParticles)
  .use(router)
  .mount("#app");
