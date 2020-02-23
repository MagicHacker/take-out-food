<template>
  <div class="login-page-wrap">
    <div class="login-page-back" @click="goBack">
      <svg-icon iconName="#icon-back"></svg-icon>
    </div>
    <h3>我的外卖</h3>
    <div class="login-page-form">
      <nut-tab>
        <nut-tab-panel tabTitle="短信登录"></nut-tab-panel>
        <nut-tab-panel tabTitle="密码登录">
          <nut-textinput placeholder="手机/用户名"></nut-textinput>
          <nut-textinput placeholder="密码" type="password"></nut-textinput>
          <nut-button :block="true" color="#ffffff">登录</nut-button>
        </nut-tab-panel>
      </nut-tab>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  goBack(): void {
    this.$router.go(-1);
  }
}
</script>
<style lang="less" scoped>
.login-page-wrap {
  width: 100%;
  height: 100%;
  padding-left: 5px;
  box-sizing: border-box;
  background-color: #fff;
  .login-page-back {
    width: 100%;
    height: 30px;
    text-align: left;
    line-height: 30px;
  }
  .login-page-form {
    width: 100%;
    /deep/ .nut-tab {
      padding: 0px;
      border: none;
    }
    /deep/ .nut-button {
      background: #52d773 !important;
      margin-top: 10px;
    }
  }
}
</style>
