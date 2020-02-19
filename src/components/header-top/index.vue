<template>
  <div class="header-top-wrap">
    <slot name="left"></slot>
    <div class="header-top-title">
      {{ headerTitle }}
    </div>

    <slot name="right"></slot>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class HeaderTop extends Vue {
  @Prop() headerTitle!: string;
}
</script>
<style lang="less" scoped>
.header-top-wrap {
  width: 100%;
  height: 40px;
  background-color: #11b15d;
  text-align: center;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  box-sizing: border-box;
  color: #fff;
  .header-top-title {
    font-size: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
