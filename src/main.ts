import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Tabbar, Swiper } from "@nutui/nutui";
import "./utils/svg-icon.ts";
[Tabbar, Swiper].forEach(item => {
  item.install(Vue);
});
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
