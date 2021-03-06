import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Tabbar, Swiper, Tab, TabPanel, TextInput, Button } from "@nutui/nutui";
import "./utils/svg-icon.ts";
[Tabbar, Swiper, Tab, TabPanel, TextInput, Button].forEach(item => {
  item.install(Vue);
});
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
