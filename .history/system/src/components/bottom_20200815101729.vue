<template>
  <div class="bottom-container">
    <div class="echarts-bottom-title">
      <div @click="tabsSwitchHandle(index)" class="tabs-item" v-for="(item, index) in tabsArr" :key="item">
        <p class="tabs-label" :class="{'tabs-label-sel': tabsIndex === index}">{{item}}</p>
        <div v-if="tabsIndex === index" class="echarts-title-divider"></div>
      </div>
    </div>
    <div class="echarts-bottom-content">
      <div class="echarts-box" v-show="tabsIndex === 0">
        <div class="echarts-des">
          <article class="echarts-article">
            <p class="echarts-des-num echarts-des-num-1">107</p>
            <p class="echarts-des-label">计划钻井数,口</p>
          </article>
          <article class="echarts-article">
            <p class="echarts-des-num echarts-des-num-2">22</p>
            <p class="echarts-des-label">累计完钻井数,口</p>
          </article>
          <article class="echarts-article">
            <p class="echarts-des-num echarts-des-num-3">21</p>
            <p class="echarts-des-label">完成率,%</p>
          </article>
        </div>
        <div class="echarts-chart" ref="chart1"></div>
      </div>
      <div class="echarts-box" v-show="tabsIndex === 1">
        <div class="echarts-des">
          <article class="echarts-article">
            <p class="echarts-des-num echarts-des-num-1">107</p>
            <p class="echarts-des-label">计划钻井数,口</p>
          </article>
          <article class="echarts-article">
            <p class="echarts-des-num echarts-des-num-2">22</p>
            <p class="echarts-des-label">累计完钻井数,口</p>
          </article>
          <article class="echarts-article">
            <p class="echarts-des-num echarts-des-num-3">21</p>
            <p class="echarts-des-label">完成率,%</p>
          </article>
        </div>
        <div class="echarts-chart" ref="chart2"></div>
      </div>
      <div class="echarts-box" v-show="tabsIndex === 2">
        <div class="echarts-des">
          <article class="echarts-article">
            <p class="echarts-des-num echarts-des-num-1">107</p>
            <p class="echarts-des-label">计划钻井数,口</p>
          </article>
          <article class="echarts-article">
            <p class="echarts-des-num echarts-des-num-2">22</p>
            <p class="echarts-des-label">累计完钻井数,口</p>
          </article>
          <article class="echarts-article">
            <p class="echarts-des-num echarts-des-num-3">21</p>
            <p class="echarts-des-label">完成率,%</p>
          </article>
        </div>
        <div class="echarts-chart" ref="chart3"></div>
      </div>
      <div class="echarts-box" v-show="tabsIndex === 3">
        <div class="echarts-des">
          <article class="echarts-article">
            <p class="echarts-des-num echarts-des-num-1">107</p>
            <p class="echarts-des-label">计划钻井数,口</p>
          </article>
          <article class="echarts-article">
            <p class="echarts-des-num echarts-des-num-2">22</p>
            <p class="echarts-des-label">累计完钻井数,口</p>
          </article>
          <article class="echarts-article">
            <p class="echarts-des-num echarts-des-num-3">21</p>
            <p class="echarts-des-label">完成率,%</p>
          </article>
        </div>
        <div class="echarts-chart" ref="chart4"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import echarts from 'echarts';
import data from '../assets/data';

@Component
export default class Bottom extends Vue {
  tabsArr = ['产能', '钻井', '压裂', '工程']

  tabsIndex = 0

  mounted() {
    data.bottom.forEach((el) => {
      this.initEcharts(el.dom, el.optionData);
    });
  }

  tabsSwitchHandle(index: number) {
    this.tabsIndex = index;
  }

  initEcharts(dom = 'chart1', option: object = {}) {
    const Chart = echarts.init(this.$refs[dom] as HTMLCanvasElement);
    Chart.setOption(option);
  }
}
</script>

<style scoped lang="scss">
.bottom-container {
  .echarts-bottom-title {
    height: 0.3rem;
    line-height: 0.3rem;
    border-bottom: 1px solid #e4e7ec;
    display: flex;
    .tabs-item {
      position: relative;
      width: 0.62rem;
      height: 100%;
      cursor: pointer;
      .tabs-label {
        font-size: 14px;
        line-height: 0.3rem;
        font-weight: 400;
        text-indent: 0.2rem;
      }
      .tabs-label-sel {
        font-weight: bold;
      }
      .echarts-title-divider {
        background-color: #01aeb3;
        width: 0.24rem;
        height: 4px;
        position: absolute;
        bottom: 0;
        left: 0.2rem;
      }
    }
  }
  .echarts-bottom-content {
    width: 100%;
    height: auto;
    .echarts-box {
      width: 6.65rem;
      height: 1.8rem;
      display: flex;
      justify-content: space-between;
      .echarts-des {
        width: 1rem;
        height: 1.8rem;
        .echarts-article {
          padding: 0.12rem 0 0 0.12rem;
          .echarts-des-num {
            font-size: 18px;
            font-weight: bolder;
          }
          .echarts-des-num-1 {
            color: #01aeb3;
          }
          .echarts-des-num-2 {
            color: #ff8100;
          }
          .echarts-des-num-3 {
            color: #2e99fd;
          }
          .echarts-des-label {
            font-size: 12px;
            line-height: 16px;
            color: #54677c;
          }
        }
      }
      .echarts-chart {
        width: 5.6rem;
        height: 1.8rem;
      }
    }
  }
}
</style>
