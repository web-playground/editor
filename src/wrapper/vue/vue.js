// import Vue from 'vue'
import Editor from "./Editor.vue";
export default {
  install: (Vue) => {
    console.log({ Vue, Editor });
    Vue.component("Editor", Vue.extend(Editor));
    // Vue.component("Editor", Editor);
  },
};
