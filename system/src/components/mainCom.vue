<template>
  <div class="main-container">
    <div class="main-header"></div>
    <div class="main-content">
      <div class="main-map">
        <img @click="infoTriggerHandle" class="map-table" src="../assets/imgs/map-table.png" />
      </div>
      <div class="main-echarts" v-show="showEcharts">
        <div class="main-echarts-top">
          <div class="main-echarts-left">
            <section class="echarts-box">
              <div class="echarts-title">
                <p class="echarts-title-txt">临兴区块产能完成情况</p>
                <div class="echarts-title-divider"></div>
              </div>
              <div class="echarts-container" ref="chart1"></div>
            </section>
            <section class="echarts-box">
              <div class="echarts-title">
                <p class="echarts-title-txt">临兴区块产能构成情况</p>
                <div class="echarts-title-divider"></div>
              </div>
              <div class="echarts-container" ref="chart2"></div>
            </section>
          </div>
          <div class="main-echarts-right">
            <section class="echarts-box">
              <div class="echarts-title">
                <p class="echarts-title-txt">各项目产能完成情况</p>
                <div class="echarts-title-divider"></div>
              </div>
              <div class="echarts-container" ref="chart3"></div>
            </section>
            <section class="echarts-box">
              <div class="echarts-title">
                <p class="echarts-title-txt">各项目产能构成</p>
                <div class="echarts-title-divider"></div>
              </div>
              <div class="echarts-container" ref="chart4"></div>
            </section>
          </div>
        </div>
        <bottomCom class="main-echarts-bottom" />
      </div>
      <infoCom class="main-info" v-show="!showEcharts" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import echarts from 'echarts';
import data from '../assets/data';
import bottomCom from './bottom.vue';
import infoCom from './info.vue';

@Component({
  components: {
    bottomCom,
    infoCom,
  },
})

export default class MainCom extends Vue {
  showEcharts = true

  mounted() {
    data.left.forEach((el) => {
      this.initEcharts(el.dom, el.optionData);
    });
  }

  infoTriggerHandle() {
    this.showEcharts = !this.showEcharts;
  }

  initEcharts(dom = 'chart1', option = {}) {
    const Chart = echarts.init(this.$refs[dom] as HTMLCanvasElement);
    Chart.setOption(option);
  }
}
</script>

<style scoped lang="scss">
.main-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #eff5fd;
  .main-header {
    width: 100%;
    height: 0.9rem;
    background: url("../assets/imgs/header-bg.jpg") no-repeat;
    background-size: cover;
  }
  .main-content {
    padding: 0 0.1rem 0 0.16rem;
    width: 100vw;
    height: 5.6rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .main-map {
      width: 6.65rem;
      height: 100%;
      border-radius: 6px;
      background: url("../assets/imgs/map-bg.jpg") no-repeat;
      background-size: cover;
      position: relative;
      .map-table {
        width: 2.26rem;
        height: 1.34rem;
        position: absolute;
        right: 0.4rem;
        bottom: 2rem;
        cursor: pointer;
      }
    }
    .main-echarts {
      width: 6.65rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .main-echarts-top {
        height: 3.5rem;
        display: flex;
        justify-content: space-between;
        .main-echarts-left, .main-echarts-right {
          width: 3.27rem;
          height: 100%;
          background-color: #fff;
          border-radius: 5px;
        }
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
      }
      .main-echarts-bottom {
        height: 1.9rem;
        background-color: #fff;
        border-radius: 5px;
      }
    }
    .main-info {
      width: 6.65rem;
      height: 100%;
      border-radius: 6px;
      background-color: #fff;
    }
  }
}
</style>
