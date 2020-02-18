<template>
  <div class="home-page-wrap">
    <header-top headerTitle="顶部">
      <template v-slot:left>
        <div class="header-search-btn">
          <svg-icon iconName="#icon-search"></svg-icon>
        </div>
      </template>
      <template v-slot:right>
        <div @click="signIn">登录|注册</div>
      </template>
    </header-top>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderTop from "../../components/header-top/index.vue";
@Component({
  components: {
    HeaderTop
  }
})
export default class Home extends Vue {
  signIn(): void {
    alert(1);
  }
}
</script>
<style lang="less" scoped>
.home-page-wrap {
  width: 100%;
  color: #fff;
  .header-search-btn {
    width: 40px;
    display: flex;
    align-items: center;
  }
}
</style>
