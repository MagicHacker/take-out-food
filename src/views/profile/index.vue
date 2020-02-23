<template>
  <div class="profile-page-wrap">
    <header-top headerTitle="我的"></header-top>
    <div class="profile-page-second" @click="signInOrUp">
      <div class="profile-page-avatar">
        <img src="../../assets/images/Jay.jpg" alt />
      </div>
      <div class="profile-page-sign">
        <div>
          <span>登录/</span>
          <span>注册</span>
        </div>
        <div>
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="profile-page-icon">
        <svg-icon iconName="#icon-greater"></svg-icon>
      </div>
    </div>
    <div class="profile-page-third">
      <div>
        <div>
          <span>0.00元</span>
        </div>
        <div>
          <span>我的余额</span>
        </div>
      </div>
      <div>
        <div>
          <span>0个</span>
        </div>
        <div>
          <span>我的优惠</span>
        </div>
      </div>
      <div>
        <div>
          <span>0分</span>
        </div>
        <div>
          <span>我的积分</span>
        </div>
      </div>
    </div>
    <div class="profile-page-fourth">
      <svg-icon iconName="#icon-order"></svg-icon>我的订单
      <svg-icon iconName="#icon-greater-than"></svg-icon>
    </div>
    <div class="profile-page-fifth">
      <svg-icon iconName="#icon-star-store"></svg-icon>积分商城
      <svg-icon iconName="#icon-greater-than"></svg-icon>
    </div>
    <div class="profile-page-sixth">
      <svg-icon iconName="#icon-vip"></svg-icon>外卖会员卡
      <svg-icon iconName="#icon-greater-than"></svg-icon>
    </div>
    <div class="profile-page-seventh">
      <svg-icon iconName="#icon-service-center"></svg-icon>服务中心
      <svg-icon iconName="#icon-greater-than"></svg-icon>
    </div>
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
export default class Profile extends Vue {
  signInOrUp(): void {
    this.$router.push({ path: "/login" });
  }
}
</script>
<style lang="less" scoped>
.profile-page-wrap {
  width: 100%;
  .profile-page-second {
    width: 100%;
    background-color: #11b15d;
    border-top: 0.5px solid #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    .profile-page-avatar {
      width: 50px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
  }
  .profile-page-third,
  .profile-page-fourth,
  .profile-page-fifth,
  .profile-page-sixth,
  .profile-page-seventh {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-bottom: 0.5px solid #ccc;
  }
  .profile-page-fourth {
    height: 40px;
    margin-top: 10px;
  }
  .profile-page-fifth,
  .profile-page-sixth,
  .profile-page-seventh {
    height: 40px;
  }
}
</style>
