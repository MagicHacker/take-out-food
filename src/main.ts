import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Tabbar } from "@nutui/nutui";
[Tabbar].forEach(item => {
  item.install(Vue);
});
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
