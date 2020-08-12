<template>
  <section class="echarts-box">
    <div class="echarts-title">
      <p class="echarts-title-txt">临兴区块产能完成情况</p>
      <div class="echarts-title-divider"></div>
    </div>
    <div class="echarts-container" ref="chart1"></div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Charts extends Vue {

}
</script>

<style scoped lang="scss">
.echarts-box {
  width: 100%;
  height: 50%;
  .echarts-title {
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: 1px solid #e4e7ec;
    position: relative;
    .echarts-title-txt {
      font-size: 14px;
      font-weight: bold;
      text-indent: 0.2rem;
    }
    .echarts-title-divider {
      background-color: #01aeb3;
      width: 0.2rem;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 0.2rem;
    }
  }
  .echarts-container {
    width: 100%;
    height: 1.4rem;
  }
}
</style>
