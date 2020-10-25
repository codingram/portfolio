import { createStore } from "vuex";

export default createStore({
  state: {
    darkTheme: true,
    cvJson: {
      author: "Ram Chaudhari",
      username: "@codingram",
      description: "Science Student | Software Developer",
      homepage: "codingram.github.io",
      engines: ["js", "html", "css", "python", "php"],
      dependencies: {
        vue: "^2.0.0",
        angular: "^7.0.0",
        webpack: "^4.19.1",
        bootstrap: "^4.0.0",
        tailwindcss: "1.9",
        scss: "^1.1",
        figma: "^1.0.0",
        flexbox: "^1.0.0",
        flask: "1.9",
        mongodb: "^4.2"
      },
      devDependencies: {
        tea: "1.0.0",
        internet: "~^10mbps",
        editor: "vscode"
      }
    }
  },
  mutations: {
    toggleThemeState: state => {
      state.darkTheme = !state.darkTheme;
    }
  },
  actions: {},
  modules: {}
});
