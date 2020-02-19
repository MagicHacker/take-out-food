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
    <div class="home-goods-area">
      <nut-swiper
        direction="horizontal"
        :paginationVisible="true"
        :paginationClickable="true"
        :swiperData="goodsList"
      >
        <div v-for="(item, index) in goodsList" :key="index">{{ item.id }}</div>
      </nut-swiper>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderTop from "../../components/header-top/index.vue";
import { getUUid } from "../../utils/index";
@Component({
  components: {
    HeaderTop
  }
})
export default class Home extends Vue {
  // 商品列表
  goodsList = [
    {
      id: getUUid()
    },
    {
      id: getUUid()
    }
  ];
  signIn(): void {
    alert(1);
  }
}
</script>
<style lang="less" scoped>
.home-page-wrap {
  width: 100%;
  .header-search-btn {
    width: 40px;
    display: flex;
    align-items: center;
  }
}
</style>
