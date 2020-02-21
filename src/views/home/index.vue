<template>
  <div class="home-page-wrap">
    <header-top headerTitle="顶部">
      <template v-slot:left>
        <div class="header-search-btn">
          <svg-icon iconName="#icon-search"></svg-icon>
        </div>
      </template>
      <template v-slot:right>
        <div class="sign-in-out">
          <div @click="signIn">登录</div>
          <div>|</div>
          <div @click="signUp">注册</div>
        </div>
      </template>
    </header-top>
    <div class="home-goods-area">
      <nut-swiper
        direction="horizontal"
        :paginationVisible="true"
        :paginationClickable="true"
        :swiperData="navList"
      >
        <div class="goods-nav-wrap" v-for="(item, index) in navList" :key="index">
          <div class="goods-item-wrap" v-for="val in item.goodsList" :key="val.id">
            <img :src="val.url" alt />
            <div>
              <span>{{ val.name }}</span>
            </div>
          </div>
        </div>
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
  navList = [
    {
      id: 0,
      goodsList: [
        {
          id: getUUid(),
          name: "早餐",
          url: "assets/images/breakfast.jpg"
        },
        {
          id: getUUid(),
          name: "川湘菜",
          url: "../../assets/images/cuisine.jpg"
        },
        {
          id: getUUid(),
          name: "麻辣烫",
          url: "../../assets/images/spicy-hot-pot.jpg"
        },
        {
          id: getUUid(),
          name: "蛋糕",
          url: "../../assets/images/cake.jpg"
        },
        {
          id: getUUid(),
          name: "下午茶",
          url: "../../assets/images/Cha-PM.jpg"
        },
        {
          id: getUUid(),
          name: "果蔬生鲜",
          url: "../../assets/images/fresh-vegetables.jpg"
        },
        {
          id: getUUid(),
          name: "汉堡",
          url: "../../assets/images/hamburger.jpg"
        },
        {
          id: getUUid(),
          name: "火锅",
          url: "../../assets/images/hot-pot.jpg"
        }
      ]
    },
    {
      id: 1,
      goodsList: [
        {
          id: getUUid(),
          name: "医药",
          url: "../../assets/images/medicine.jpg"
        },
        {
          id: getUUid(),
          name: "新店",
          url: "../../assets/images/new-store.jpg"
        },
        {
          id: getUUid(),
          name: "意大利面",
          url: "../../assets/images/Pasta.jpg"
        },
        {
          id: getUUid(),
          name: "海鲜",
          url: "../../assets/images/sea-food.jpg"
        },
        {
          id: getUUid(),
          name: "糖品",
          url: "../../assets/images/sugar.jpg"
        },
        {
          id: getUUid(),
          name: "超市",
          url: "../../assets/images/super-market.jpg"
        }
      ]
    }
  ];
  signIn(): void {
    alert("登录");
  }
  signUp(): void {
    alert("注册");
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
  .sign-in-out {
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .goods-nav-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .goods-item-wrap {
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
