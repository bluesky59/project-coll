<template>
  <div>
    <navCom :navIndex="0" :navArrs="managerNavArrs" />
    <div class="main-content">
      <p class="main-nav">认证 ＞ 项目主体认证</p>
      <div class="main-container">
          <div class="home-company">
              <div class="company-info">
                <div class="item-title">
                  <img class="item-title-icon" src="../../assets/imgs/project/p-img.png" />
                  <div class="item-title-txt">
                    <div class="item-title-text item-title-text-t">
                      大钟稳评有限公司
                      <img class="item-title-locate" src="../../assets/imgs/project/m-icon.png" />
                      <span class="company-edit">修改资料</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="company-action" v-for="item in actionArrs" :key="item.lable">
                  <img class="company-action-img" :src="require(`../../assets/imgs/company/c-${item.img}.png`)" />
                  {{item.label}}
              </div>
          </div>
          <div class="main-statistics">
              <div class="main-statistic" v-for="item in statisticsArrs" :key="item.label">
                  <p class="statistics-label">{{item.label}}</p>
                  <p class="statistics-val">{{item.val}}</p>
              </div>
          </div>
          <div class="main-chart">
              <div class="main-chart-bar" id="mainChartBar"></div>
              <div class="main-chart-line" id="mainChartLine"></div>
          </div>
          <div class="home-project-list">
              <div class="main-tabs">
                <div class="main-tab" :class="{'main-tab-sel': tabsIndex === index}" @click="tabsSwitch(index)" v-for="(item,index) in tabsArrs" :key="item.value">
                    {{item.label}}
                </div>
            </div>
            <div class="main-list">
                <div class="main-item" v-for="item in parjectArrs" :key="item.id">
                    <div class="main-item-title">
                    <el-row>
                        <el-col :span="7">项目编号: {{item.number}}</el-col>
                        <el-col :span="3">承接方: {{item.obj}}</el-col>
                        <el-col :span="5">承接时间: {{item.date}}</el-col>
                    </el-row>
                    </div>
                    <div class="main-item-content">
                    <el-row>
                        <el-col :span="7">{{item.name}}</el-col>
                        <el-col :span="3">{{item.status}}</el-col>
                    </el-row>
                    </div>
                </div>
                </div>
            </div>
          </div>
    </div>
    <footerCom />
  </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import { managerNavArrs } from '@/data/nav.js';
import { lineOption, barOption } from '@/data/chart.js';
const echarts = require('echarts');

export default {
  name: 'Home',
  components: {
    navCom, footerCom
  },
  data() {
    return {
        statisticsArrs: [
            {
                label: '年项目总数',
                val: '1237'
            },
            {
                label: '本月新增',
                val: '212'
            },
            {
                label: '今日新增',
                val: '2'
            },
            {
                label: '本月重大',
                val: '4'
            },
            {
                label: '在评项目',
                val: '123'
            }
        ],
        managerNavArrs,
        lineOption,
        barOption,
        actionArrs: [
            {
                label: '项目审查',
                img: '0'
            },
            {
                label: '报备审查',
                img: '1'
            },
            {
                label: '跟踪报告',
                img: '2'
            },
            {
                label: '跟踪报告',
                img: '2'
            }
        ],
      tabsIndex: 0,
      parjectArrs: [
        {
          number: 'GZ-GY-NM-BMH-JS-170705',
          obj: '中科测评',
          date: '2020-01-11',
          name: '万科运雅典城商品房用地稳评项目',
          status: '调查评估中',
          id: 0
        },
        {
          number: 'GZ-GY-NM-BMH-JS-170705',
          obj: '中科测评',
          date: '2020-01-11',
          name: '万科运雅典城商品房用地稳评项目',
          status: '调查评估中',
          id: 1
        },
        {
          number: 'GZ-GY-NM-BMH-JS-170705',
          obj: '中科测评',
          date: '2020-01-11',
          name: '万科运雅典城商品房用地稳评项目',
          status: '调查评估中',
          id: 2
        }
      ],
        tabsArrs: [
          {
            label: '审查',
            value: '0'
          },
          {
            label: '文件报备',
            value: '1'
          },
          {
            label: '报告报备',
            value: '2'
          },
          {
            label: '跟踪',
            value: '3'
          }
        ]
    }
  },
  methods: {
    tabsSwitch(index) {
      this.tabsIndex = index;
    }
  },
  mounted() {
    const lineChart = echarts.init(document.getElementById('mainChartLine'));
    lineChart.setOption(this.lineOption);
    const barChart = echarts.init(document.getElementById('mainChartBar'));
    barChart.setOption(this.barOption);
  }
}
</script>

<style lang="scss" scoped>
  .main-content {
    width: 14.4rem;
    height: auto;
    background-color: #F7F7F7;
    margin: 0 auto;
    .main-nav {
      font-size: 0.14rem;
      line-height: 0.6rem;
      color: #666;
    }
    .main-container {
      width: 100%;
      height: auto;
      margin: 0.1rem 0 1rem;
      .main-tabs {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 0.4rem;
        .main-tab {
          font-size: 0.18rem;
          color:#999;
          margin-right: 0.8rem;
          width: auto;
          height: 0.3rem;
          cursor: pointer;
        }
        .main-tab-sel {
          color: #333;
          border-bottom: 0.04rem solid #5CA9FF;
          font-weight: 600;
        }
      }
      .main-list {
        margin-top: 0.3rem;
        .main-item {
          width: 100%;
          height: 1.2rem;
          box-shadow:0px 2px 10px 0px rgba(0,0,0,0.06);
          border:1px solid rgba(216,216,216,1);
          font-size: 0.16rem;
          margin-bottom: 0.36rem;
          text-indent: 0.22rem;
          .main-item-title {
            height: 0.4rem;
            line-height: 0.4rem;
            background-color: #eee;
            font-weight: 400;
            color: #666;
          }
          .main-item-content {
            height: 0.8rem;
            line-height: 0.8rem;
            background-color: #fff;
            font-weight: 500;
            color: #333;
          }
        }
      }
      .home-company {
          height: 1.4rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .company-info {
              width: 8rem;
              height: 0.6rem;
              background-color: #fff;
              padding: 0.4rem 0.5rem;
              .item-title {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                .item-title-icon {
                  width: 0.6rem;
                  height: 0.6rem;
                  margin-right: 0.18rem;
                }
                .item-title-txt {
                  .item-title-text {
                    height: 0.3rem;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    font-size: 0.18rem;
                    color: #666;
                    .item-title-locate {
                      width: 0.2rem;
                      height: 0.2rem;
                      margin-left: 0.3rem;
                    }
                    .item-title-m {
                      width: 0.16rem;
                      height: 0.2rem;
                    }
                    .company-edit {
                      color: #5CA9FF;
                      text-decoration: underline;
                      margin-left: 10px;
                      cursor: pointer;
                    }
                    .company-l {
                      margin: 0 0.3rem 0 0.1rem;
                    }
                  }
                  .item-title-text-t {
                    color: #333;
                  }
                }
            }
          }
          .company-action {
              width: 1.4rem;
              height: 1.4rem;
              background-color: #fff;
              box-shadow:0px 2px 20px 0px rgba(0,0,0,0.06);
              margin-left: 0.2rem;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              font-size: 0.16rem;
              color: #333;
              .company-action-img {
                  width: 0.4rem;
                  height: 0.4rem;
                  margin-bottom: 6px;
              }
          }
      }
      .home-project-list {
          background-color: #fff;
          padding: 0.3rem;
      }
    }
    .main-statistics {
        height: 1.2rem;
        margin-top: 0.3rem;
        display: flex;
        justify-content: space-between;
        .main-statistic {
            width: 2.72rem;
            height: 1.2rem;
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 20px 0px rgba(0,0,0,0.06);
            border-radius: 0.1rem;
            border:1px solid rgba(92,169,255,1);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            .statistics-label {
                font-size: 0.16rem;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height: 0.22rem;
                text-shadow:0px 2px 20px rgba(0,0,0,0.06);
            }
            .statistics-val {
                font-size: 0.48rem;
                font-family:BebasNeue;
                color:rgba(92,169,255,1);
                line-height: 0.58rem;
                letter-spacing:2px;
                text-shadow:0px 2px 20px rgba(0,0,0,0.06);
            }
        }
    }
    .main-chart {
        display: flex;
        justify-content: space-between;
        height: 4.32rem;
        margin: 0.3rem 0;
        .main-chart-bar {
            width: 5.6rem;
            background-color: #fff;
        }
        .main-chart-line {
            width: 8.6rem;
            background-color: #fff;
        }
    }
  }
</style>

<style>
  .el-input__inner {
    border-color: transparent;
  }
</style>
