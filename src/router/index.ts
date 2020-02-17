import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home/index.vue";
import order from "../views/order/index.vue";
import profile from "../views/profile/index.vue";
import search from "../views/search/index.vue";
Vue.use(VueRouter);
interface Routers {
  path: string;
  component?: any;
  redirect?: string;
}
const routes: Array<Routers> = [
  {
    path: "/home",
    component: home
  },
  {
    path: "/order",
    component: order
  },
  {
    path: "/profile",
    component: profile
  },
  {
    path: "/search",
    component: search
  },
  {
    path: "/",
    redirect: "/home"
  }
];

const router = new VueRouter({
  routes
});

export default router;
