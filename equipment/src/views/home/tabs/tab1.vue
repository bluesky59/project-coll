<template>
  <div class="main-container">
    <van-circle
        v-model="currentRate"
        :rate="rate"
        :stroke-width="100"
        size="220px"
        text="75%"
        layer-color="#ebedf0"
        class="cirle-container"
    />
    <div class="circle-info">
        <div class="circle-box" v-for="el in circleInfo" :key="el.label">
            <p class="circle-box-label">{{el.label}}</p>
            <p class="circle-box-value">{{el.value}}</p>
        </div>
    </div>
    <div class="content-title page-bg-color">产品年产量对比</div>
    <div class="content-title page-bg-color">产品产量趋势</div>
    <div class="content-title page-bg-color">同行对标分析</div>
    <div class="content-title page-bg-color">报警详情</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  currentRate = 0
  rate = 75
  circleInfo = [
    {
      label: '正常槽',
      value: '654'
    },
    {
      label: '异常槽',
      value: '32'
    },
    {
      label: '停运',
      value: '15'
    }
  ]
}
</script>

<style lang="scss" scoped>
.main-container {
    .cirle-container {
        margin: 20px auto;
        display: block;
    }
    .circle-info {
        margin: 0 15px;
        padding: 10px 0;
        border-top: 1px solid #ddd;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .circle-box {
            width: 30%;
            text-align: center;
            font-size: 12px;
            color: #666;
            .circle-box-value {
                font-weight: bold;
                margin-top: 6px;
            }
        }
    }
    .content-title {
        height: 36px;
        line-height: 36px;
        font-weight: bold;
        color: #333;
        font-size: 14px;
        padding: 0 15px;
    }
}
</style>
