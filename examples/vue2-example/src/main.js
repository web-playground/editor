import Vue from "vue";
import App from "./App.vue";
// import Editor from "../../../dist/es/vue";
// Vue.use(Editor);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
