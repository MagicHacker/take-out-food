<template>
  <div id="app">
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>
<script lang="ts">
import FooterBar from "./views/footer-bar/index.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    FooterBar
  }
})
export default class App extends Vue {}
</script>
<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f5f3f3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
