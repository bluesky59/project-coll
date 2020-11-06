<template>
  <div class="main-container">
    <van-circle
        v-model="currentRate"
        :rate="rate"
        :stroke-width="100"
        size="220px"
        text="84.39%"
        layer-color="#ebedf0"
        class="cirle-container"
    />
    <div class="circle-info">
        <div class="circle-box" v-for="el in circleInfo" :key="el.label">
            <p class="circle-box-label">{{el.label}}</p>
            <p class="circle-box-value">{{el.value}}</p>
        </div>
    </div>
    <div class="content-title page-bg-color">集团生产全景</div>
    <van-tabs v-model="active">
        <van-tab title="碳素">
            <div class="echarts-dom" ref="chart1"></div>
        </van-tab>
        <van-tab title="电热">电热</van-tab>
        <van-tab title="PVC">PVC</van-tab>
        <van-tab title="电解铝">电解铝</van-tab>
        <van-tab title="水泥">水泥</van-tab>
    </van-tabs>
    <div class="content-title page-bg-color">集团报警分布</div>
    <div class="warning-table">
        <div class="warning-table-th warning-table-row">
            <span class="warning-table-span">板块/公司</span>
            <span class="warning-table-span">一级</span>
            <span class="warning-table-span">二级</span>
            <span class="warning-table-span">三级</span>
            <span class="warning-table-span">总计</span>
        </div>
        <div class="warning-table-tbody warning-table-row" v-for="el in warningList" :key="el.label">
            <span class="warning-table-plate warning-table-span">{{el.plate}}</span>
            <span class="warning-table-span">{{el.level1}}</span>
            <span class="warning-table-span">{{el.level2}}</span>
            <span class="warning-table-span">{{el.level3}}</span>
            <span class="warning-table-span">{{el.total}}</span>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import echarts from 'echarts'

@Component({})
export default class App extends Vue {
  currentRate = 0
  rate = 80
  circleInfo = [
    {
      label: '开机',
      value: '654'
    },
    {
      label: '停机',
      value: '32'
    },
    {
      label: '维保',
      value: '15'
    }
  ]

  warningList = [
    {
      plate: '化工/包化',
      level1: 0,
      level2: 1,
      level3: 5,
      total: 6
    },
    {
      plate: '碳素/准碳',
      level1: 0,
      level2: 1,
      level3: 5,
      total: 6
    },
    {
      plate: '碳素/固碳',
      level1: 0,
      level2: 1,
      level3: 5,
      total: 6
    },
    {
      plate: '水泥/焙泥',
      level1: 0,
      level2: 1,
      level3: 5,
      total: 6
    },
    {
      plate: '水泥/达泥',
      level1: 0,
      level2: 1,
      level3: 5,
      total: 6
    },
    {
      plate: '多晶硅/准能',
      level1: 0,
      level2: 1,
      level3: 5,
      total: 6
    },
    {
      plate: '电解铝/准铝',
      level1: 0,
      level2: 1,
      level3: 5,
      total: 6
    }
  ]

  active = 0
  seriesLabel = {
    normal: {
      show: true,
      textBorderColor: '#333',
      textBorderWidth: 2
    }
  }

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['实际完成', '目标产量']
  },
  grid: {
    left: 100
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'value',
    name: 'Days',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
    data: ['焙泥', '达泥', '永泥']
  },
  series: [
    {
      name: '实际完成',
      type: 'bar',
      data: [165, 170, 30],
      label: this.seriesLabel
    },
    {
      name: '目标产量',
      type: 'bar',
      label: this.seriesLabel,
      data: [150, 105, 110]
    }
  ]
}

mounted () {
  this.$nextTick(() => {
    const Chart = echarts.init(this.$refs.chart1 as HTMLCanvasElement)
    Chart.setOption(this.option)
  })
}
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
    .warning-table {
        .warning-table-row {
            height: 32px;
            line-height: 32px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 12px;
            color: #333;
            .warning-table-plate {
                color: #999;
            }
            .warning-table-span {
                text-align: center;
                width: 20%;
                display: block;
            }
        }
        .warning-table-th {
            background-color: #efefef;
        }
        .warning-table-tbody {
            border-bottom: 1px solid #ddd;
        }
    }
    .echarts-dom {
        width: 100vw;
        height: 200px;
    }
}
</style>
