import { createStore } from "vuex";

export default createStore({
  state: {
    darkTheme: true
  },
  mutations: {
    toggleThemeState: state => {
      state.darkTheme = !state.darkTheme;
    }
  },
  actions: {},
  modules: {}
});
