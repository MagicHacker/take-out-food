<template>
  <div class="home-page-wrap">
    <header-top headerTitle="顶部">
      <template v-slot:left>
        <svg-icon iconName="#icon-search"></svg-icon>
      </template>
      <template v-slot:right>right</template>
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
export default class Home extends Vue {}
</script>
<style lang="less" scoped>
.home-page-wrap {
  width: 100%;
}
</style>
