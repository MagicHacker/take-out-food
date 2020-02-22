<template>
  <div class="business-list-wrap">
    <div class="business-list-image">
      <img :src="imgUrl" alt />
    </div>
    <div class="business-list-area">
      <div>{{ shopName }}</div>
      <div>
        <span>{{ shopScore }}分|</span>
        <span>月售{{ shopOrder }}单</span>
      </div>
      <div>
        <span>￥{{ price }}起送/</span>
        <span>配送费约{{ deliveryPrice }}</span>
      </div>
    </div>
    <div class="business-list-delivery">
      <div>
        <span>保准票</span>
      </div>
      <div>
        <span>硅谷专送</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class BusinessList extends Vue {
  @Prop() imgUrl!: string;
  @Prop() shopName!: string;
  @Prop() shopScore!: number;
  @Prop() shopOrder!: number;
  @Prop() price!: number;
  @Prop() deliveryPrice!: number;
}
</script>
<style lang="less" scoped>
.business-list-wrap {
  width: 100%;
  background-color: #fff;
  border-bottom: 0.5px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .business-list-image {
    img {
      width: 80px;
      height: 80px;
    }
  }
}
</style>
