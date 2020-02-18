import Vue from "vue";
import SvgIcon from "../components/svg-icon/index.vue";
// 全局注册图标组件
Vue.component("svg-icon", SvgIcon);
// 自动引入svg
const svgs = require.context("../icon", false, /\.svg$/);
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext);
requireAll(svgs);
