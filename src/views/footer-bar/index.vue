<template>
  <div class="footer-bar-wrap">
    <nut-tabbar
      :tabbarList="tabbarList"
      :bottom="true"
      @tab-switch="tabSwitch"
    ></nut-tabbar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class FooterBar extends Vue {
  tabbarList = [
    {
      tabTitle: "主页",
      curr: true
    },
    {
      tabTitle: "搜索",
      curr: false
    },
    {
      tabTitle: "订单",
      curr: false
    },
    {
      tabTitle: "我的",
      curr: false
    }
  ];
  tabSwitch(value: any, index: number): void {
    let path = "";
    switch (index) {
      case 0:
        path = "home";
        break;
      case 1:
        path = "search";
        break;
      case 2:
        path = "order";
        break;
      case 3:
        path = "profile";
        break;
    }
    this.$router.replace(path);
  }
}
</script>
<style lang="less" scoped>
.footer-bar-wrap {
  width: 100%;
}
</style>
