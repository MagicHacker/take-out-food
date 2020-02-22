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
        <div class="goods-nav-wrap nut-swiper-slide" v-for="(item, index) in navList" :key="index">
          <div class="goods-item-wrap" v-for="val in item.goodsList" :key="val.id">
            <img :src="val.url" alt />
            <div>
              <span>{{ val.name }}</span>
            </div>
          </div>
        </div>
      </nut-swiper>
    </div>
    <div class="business-list-area">
      <div class="business-list-text">
        <svg-icon iconName="#icon-near"></svg-icon>
        <span>附近商家</span>
      </div>
      <div v-for="item in businessList" :key="item.id">
        <business-list
          :imgUrl="item.url"
          :shopName="item.shopName"
          :shopScore="item.score"
          :shopOrder="item.orderCount"
          :price="item.price"
          :deliveryPrice="item.deliveryPrice"
        ></business-list>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderTop from "../../components/header-top/index.vue";
import BusinessList from "../business-list/index.vue";
import { getUUid } from "../../utils/index";
@Component({
  components: {
    HeaderTop,
    BusinessList
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
          url: require("../../assets/images/breakfast.jpg")
        },
        {
          id: getUUid(),
          name: "川湘菜",
          url: require("../../assets/images/cuisine.jpg")
        },
        {
          id: getUUid(),
          name: "麻辣烫",
          url: require("../../assets/images/spicy-hot-pot.jpg")
        },
        {
          id: getUUid(),
          name: "蛋糕",
          url: require("../../assets/images/cake.jpg")
        },
        {
          id: getUUid(),
          name: "下午茶",
          url: require("../../assets/images/Cha-PM.jpg")
        },
        {
          id: getUUid(),
          name: "果蔬生鲜",
          url: require("../../assets/images/fresh-vegetables.jpg")
        },
        {
          id: getUUid(),
          name: "汉堡",
          url: require("../../assets/images/hamburger.jpg")
        },
        {
          id: getUUid(),
          name: "火锅",
          url: require("../../assets/images/hot-pot.jpg")
        }
      ]
    },
    {
      id: 1,
      goodsList: [
        {
          id: getUUid(),
          name: "医药",
          url: require("../../assets/images/medicine.jpg")
        },
        {
          id: getUUid(),
          name: "新店",
          url: require("../../assets/images/new-store.jpg")
        },
        {
          id: getUUid(),
          name: "意大利面",
          url: require("../../assets/images/Pasta.jpg")
        },
        {
          id: getUUid(),
          name: "海鲜",
          url: require("../../assets/images/sea-food.jpg")
        },
        {
          id: getUUid(),
          name: "糖品",
          url: require("../../assets/images/sugar.jpg")
        },
        {
          id: getUUid(),
          name: "超市",
          url: require("../../assets/images/super-market.jpg")
        }
      ]
    }
  ];
  // 商家列表
  businessList = [
    {
      id: getUUid(),
      shopName: "嘉和一品",
      score: 4.7,
      orderCount: 106,
      deliveryPrice: 5,
      price: 20,
      url: require("../../assets/images/fish.jpg")
    },
    {
      id: getUUid(),
      shopName: "帕瑞斯蛋糕房",
      score: 4.2,
      orderCount: 700,
      deliveryPrice: 5,
      price: 20,
      url: require("../../assets/images/bread.jpg")
    },
    {
      id: getUUid(),
      shopName: "海底捞",
      score: 4.9,
      orderCount: 1000,
      deliveryPrice: 15,
      price: 40,
      url: require("../../assets/images/meat.jpg")
    },
    {
      id: getUUid(),
      shopName: "黄焖鸡",
      score: 4.0,
      orderCount: 100,
      deliveryPrice: 3,
      price: 20,
      url: require("../../assets/images/rice.jpg")
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
  .home-goods-area {
    background-color: #fff;
    .goods-nav-wrap {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .goods-item-wrap {
        width: 80px;
        height: 60px;
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
  .business-list-area {
    width: 100%;
    margin-top: 10px;
    background-color: #fff;
    padding: 0px 5px;
    box-sizing: border-box;
    .business-list-text {
      text-align: left;
    }
  }
}
</style>
