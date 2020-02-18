<template>
  <div class="header-top-wrap">
    <slot name="left"></slot>
    {{ headerTitle }}
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
  background-color: rgb(172, 240, 178);
  text-align: center;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
