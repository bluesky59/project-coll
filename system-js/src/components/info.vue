<template>
  <div class="info-container">
    <div class="info-title">
      <div class="info-label" :class="{'info-label-sel': tabsIndex === index}" @click="tabsSwitchHandle(index)" v-for="(item, index) in tabsArr" :key="item">{{item}}</div>
    </div>
    <div class="info-content">
      <div class="info-situation" v-show="tabsIndex === 0">
        <div class="info-table-row">
          <div class="info-table-row-d"></div>
          <div class="info-table-row-title info-table-row-label">井号</div>
          <div class="info-table-row-des">
            <div class="info-table-row-box">LX-151</div>
            <div class="info-table-row-box info-table-row-label">井别</div>
            <div class="info-table-row-box">评价井</div>
            <div class="info-table-row-box info-table-row-label">井型</div>
            <div class="info-table-row-box">定向井</div>
          </div>
        </div>
        <div class="info-table-row">
          <div class="info-table-row-d"></div>
          <div class="info-table-row-title info-table-row-label">地理位置</div>
          <div class="info-table-row-des">山西省寿阳县马首乡大照村西1000m</div>
        </div>
        <div class="info-table-row">
          <div class="info-table-row-d"></div>
          <div class="info-table-row-title info-table-row-label">构造位置</div>
          <div class="info-table-row-des">太行山脉西麓，太原东山背斜之东南翼</div>
        </div>
        <div class="info-table-row">
          <div class="info-table-row-d"></div>
          <div class="info-table-row-title info-table-row-label">油气田构造</div>
          <div class="info-table-row-des">鄂尔多斯盆地晋西挠褶带西缘，乔家洼背斜西翼</div>
        </div>
        <div class="info-table-row">
          <div class="info-table-row-d"></div>
          <div class="info-table-row-title info-table-row-label">测线位置</div>
          <div class="info-table-row-des">INLINE493, XLINE548</div>
        </div>
        <div class="info-table-row">
          <div class="info-table-row-d"></div>
          <div class="info-table-row-title info-table-row-label">钻探目的</div>
          <div class="info-table-row-des">评价产能</div>
        </div>
        <div class="info-table-row">
          <div class="info-table-row-d"></div>
          <div class="info-table-row-title info-table-row-label">开钻日期</div>
          <div class="info-table-row-des">
            <div class="info-table-row-box">2012.05.23</div>
            <div class="info-table-row-box info-table-row-label">完钻日期</div>
            <div class="info-table-row-box">2012.06.23</div>
            <div class="info-table-row-box info-table-row-label">完井日期</div>
            <div class="info-table-row-box">2010.07.23</div>
          </div>
        </div>
        <div class="info-table-row">
          <div class="info-table-row-d"></div>
          <div class="info-table-row-title info-table-row-label">设计井深</div>
          <div class="info-table-row-des">
            <div class="info-table-row-box">860</div>
            <div class="info-table-row-box info-table-row-label">设计垂深</div>
            <div class="info-table-row-box">810.04</div>
            <div class="info-table-row-box info-table-row-label">完钻井深</div>
            <div class="info-table-row-box">936</div>
          </div>
        </div>
        <div class="info-table-row">
          <div class="info-table-row-d"></div>
          <div class="info-table-row-title info-table-row-label">地面海拔</div>
          <div class="info-table-row-des">
            <div class="info-table-row-box"></div>
            <div class="info-table-row-box info-table-row-label">补心海拔</div>
            <div class="info-table-row-box">1091.39</div>
            <div class="info-table-row-box info-table-row-label">补心距</div>
            <div class="info-table-row-box"></div>
          </div>
        </div>
        <div class="info-table-row info-table-row-spe">
          <div class="info-table-row-d"></div>
          <div class="info-table-row-title info-table-row-label">设计完钻层位</div>
          <div class="info-table-row-des">
            <div class="info-table-row-box"></div>
            <div class="info-table-row-box info-table-row-label">
              <p>实际完钻</p>
              <p>层位</p>
            </div>
            <div class="info-table-row-box">本溪组</div>
            <div class="info-table-row-box info-table-row-label">人工井底</div>
            <div class="info-table-row-box">930.10</div>
          </div>
        </div>
        <div class="info-table-row info-table-row-spe">
          <div class="info-table-row-d"></div>
          <div class="info-table-row-title info-table-row-label">作业方式</div>
          <div class="info-table-row-des">
            <div class="info-table-row-box">有限PSC</div>
            <div class="info-table-row-box info-table-row-label">作业者</div>
            <div class="info-table-row-box" style="font-size: 12px">
              <p>中联煤层气有限</p>
              <p>责任公司</p>
            </div>
            <div class="info-table-row-box info-table-row-label">钻井单位</div>
            <div class="info-table-row-box" style="font-size: 12px">
              <p>河南豫中地质</p>
              <p>勘察工程公司</p>
            </div>
          </div>
        </div>
      </div>
      <div class="info-chart" v-show="tabsIndex === 1">
        <div class="info-chart-title">
          <p class="info-chart-title-t">LX-151井采气曲线</p>
          <div class="info-chart-title-p">选择时间段:
            <el-date-picker
              class="date-picker"
              v-model="value"
              type="daterange"
              size="small"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </div>
        <div ref="chart1" class="info-chart-box"></div>
        <div ref="chart2" class="info-chart-box"></div>
        <div ref="chart3" class="info-chart-box"></div>
      </div>
      <div class="info-report" v-show="tabsIndex === 2">
        <div class="info-table-header">
          <div class="table-header-box">报告名称</div>
          <div class="table-header-box">上传时间</div>
          <div class="table-header-box">上传人</div>
          <div class="table-header-box">操作</div>
        </div>
        <div class="info-table-body" v-for="item in tableArrs" :key="item.id">
          <div class="table-body-box">{{item.name}}</div>
          <div class="table-body-box">{{item.date}}</div>
          <div class="table-body-box">{{item.reporter}}</div>
          <div class="table-body-box">
            <div class="table-body-btn">{{item.operation}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { infoOption } from '@/assets/config/set';
let optionData = require('@/assets/data/info');
export default {
  name: 'Info',
  data () {
    return {
      value: '',
      tabsArr: ['基本概况', '生产曲线', '相关报告'],
      tableArrs: [
        {
          id: 0,
          name: '钻井设计报告',
          date: '2019.05.13',
          reporter: '管理员',
          operation: '下载'
        },
        {
          id: 1,
          name: '钻完井总结报告',
          date: '2019.05.13',
          reporter: '管理员',
          operation: '下载'
        },
        {
          id: 2,
          name: '压裂设计报告',
          date: '2019.05.13',
          reporter: '管理员',
          operation: '下载'
        },
        {
          id: 3,
          name: '压裂施工成果报告',
          date: '2019.05.13',
          reporter: '管理员',
          operation: '下载'
        }
      ],
      tabsIndex: 0
    }
  },
  mounted () {
    for(let key in optionData) {
      const { xAxis, yAxis } = optionData[key] || {}
      let optipnT = infoOption;
      optipnT.xAxis.data = xAxis;
      yAxis.forEach((y, index) => {
        optipnT.series[index].name = y.label;
        optipnT.series[index].data = y.data;
        optipnT.series[index].itemStyle.normal.color = y.color;
        optipnT.series[index].itemStyle.normal.lineStyle.color = y.color;
        optipnT.series[index].itemStyle.normal.areaStyle.color = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
          offset: 0,
          color: y.startColor
        }, {
          offset: 1,
          color: y.endColor
        }]);
      })
      this.initEcharts(key, optipnT)
    }
  },
  methods: {
    tabsSwitchHandle (index) {
      this.tabsIndex = index
    },
    initEcharts (dom = 'chart1', option) {
      const Chart = echarts.init(this.$refs[dom])
      Chart.setOption(option)
    }
  }
}
</script>

<style scoped lang="scss">
.info-container {
  .info-title {
    width: 360px;
    height: 0.36rem;
    border-radius: 0.18rem;
    border: 1px solid #298efe;
    margin: 0.22rem auto;
    overflow: hidden;
    display: flex;
    .info-label {
      width: 120px;
      font-size: 14px;
      font-weight: 400;
      line-height: 0.36rem;
      text-align: center;
      border-right: 1px solid #298efe;
      box-sizing: border-box;
      cursor: pointer;
    }
    .info-label-sel {
      color: #fff;
      background-image: linear-gradient(to right, #00c0ff, #2487ff);
      border-color: transparent;
    }
    .info-label:last-of-type {
      border-right-color: transparent;
    }
  }
  .info-content {
    padding: 0 0.1rem;
    .info-situation {
      .info-table-row {
        height: 0.38rem;
        line-height: 0.38rem;
        background-color: #eaf1f8;
        display: flex;
        font-size: 14px;
        border-bottom: 1px solid #fff;
        .info-table-row-d {
          width: 4px;
          background-color: #298efe;
        }
        .info-table-row-title {
          width: 100px;
          text-align: center;
          border-right: 1px solid #fff;
          box-sizing: border-box;
        }
        .info-table-row-label {
          font-weight: bold;
        }
        .info-table-row-des {
          flex: 1;
          text-indent: 0.12rem;
          display: flex;
          .info-table-row-box {
            width: 20%;
            border-right: 1px solid #fff;
            box-sizing: border-box;
            text-align: center;
          }
          .info-table-row-box:last-of-type {
            border-right: none;
          }
        }
      }
      .info-table-row:first-of-type {
        border-radius: 0 5px 0 0;
      }
      .info-table-row:last-of-type {
        border-radius: 0 0 5px 0;
      }
      .info-table-row-spe {
        height: 0.6rem;
        line-height: 0.6rem;
        .info-table-row-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            line-height: 0.2rem;
          }
        }
      }
    }
    .info-chart {
      .info-chart-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .info-chart-title-t {
          font-size: 16px;
          font-weight: bold;
          color: #333;
        }
        .info-chart-title-p {
          font-size: 14px;
          font-weight: bold;
          color: #333;
          .date-picker {
            width: 240px;
            margin-right: 4px;
          }
        }
      }
      .info-chart-box {
        height: 1.5rem;
        width: 660px;
      }
    }
    .info-report {
      .info-table-header {
        height: 0.5rem;
        line-height: 0.5rem;
        background-image: linear-gradient(to right, #00c0ff, #2486ff);
        border-radius: 5px 5px 0 0;
        display: flex;
        .table-header-box {
          width: 25%;
          border-right: 1px solid #fff;
          box-sizing: border-box;
          font-size: 14px;
          color: #fff;
          text-align: center;
        }
        .table-header-box:last-of-type{
          border-color: transparent;
        }
      }
      .info-table-body {
        height: 0.42rem;
        line-height: 0.42rem;
        background-color: #eaf1f8;
        display: flex;
        border-bottom: 1px solid #fff;
        .table-body-box {
          width: 25%;
          border-right: 1px solid #fff;
          box-sizing: border-box;
          font-size: 14px;
          color: #333;
          text-align: center;
          .table-body-btn {
            width: 60px;
            height: 0.3rem;
            border-radius: 5px;
            background-color: #f9a31a;
            color: #fff;
            line-height: 0.3rem;
            margin: 0.06rem auto;
            cursor: pointer;
          }
        }
        .table-header-box:last-of-type{
          border-color: transparent;
        }
      }
    }
  }
}
</style>
