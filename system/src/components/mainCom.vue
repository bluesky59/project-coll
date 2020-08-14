<template>
  <div class="main-container">
    <headerCom class="main-header" v-if="true" />
    <div class="main-content" v-if="true">
      <mapCom class="main-map"
        @infoTriggerHandle="infoTriggerHandle"/>
      <div class="main-echarts" v-show="showEcharts">
        <div class="main-echarts-top">
          <div class="main-echarts-left">
            <section class="echarts-box">
              <div class="echarts-title">
                <p class="echarts-title-txt">临兴区块产能完成情况</p>
                <div class="echarts-title-divider"></div>
              </div>
              <div class="echarts-container circle-container">
                <div class="circle-box circle-box-1">
                  <div class="circle-pic">
                    <p class="circle-num">24</p>
                  </div>
                  <p class="circle-title">计划,亿方</p>
                </div>
                <div class="circle-box circle-box-2">
                  <div class="circle-pic">
                    <p class="circle-num">18.5</p>
                  </div>
                  <p class="circle-title">建成产能,亿方</p>
                </div>
                <div class="circle-box circle-box-3">
                  <div class="circle-pic">
                    <p class="circle-num">77.1</p>
                  </div>
                  <p class="circle-title">完成率,%</p>
                </div>
              </div>
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
import mapCom from './map.vue';
import headerCom from './header.vue';

@Component({
  components: {
    bottomCom,
    infoCom,
    mapCom,
    headerCom,
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
    width: 100vw;
    height: 0.9rem;
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
          .circle-container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            .circle-box {
              width: 30%;
              text-align: center;
              .circle-pic {
                width: 0.72rem;
                height: 0.72rem;
                text-align: center;
                line-height: 0.72rem;
                margin: 0 auto;
                .circle-num {
                  font-size: 20px;
                  font-weight: 600;
                }
              }
              .circle-title {
                font-size: 12px;
                color: #54677c;
                margin-top: 10px;
              }
            }
            .circle-box-1 {
              .circle-pic {
                background: url("../assets/imgs/circular01.png") no-repeat center;
                .circle-num {
                  color: #01aeb3;
                }
              }
            }
            .circle-box-2 {
              .circle-pic {
                background: url("../assets/imgs/circular02.png") no-repeat center;
                .circle-num {
                  color: #ff8100;
                }
              }
            }
            .circle-box-3 {
              .circle-pic {
                background: url("../assets/imgs/circular03.png") no-repeat center;
                .circle-num {
                  color: #2e99fd;
                }
              }
            }
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
