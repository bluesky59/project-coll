import echarts from 'echarts'

export const infoOption = {
  tooltip: {
    trigger: "axis"
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["2020.1.1", "2020.2.1", "2020.3.1", "2020.4.1", "2020.5.1", "2020.6.1", "2020.7.1"],
    axisLabel: {
      interval: 0,
      textStyle: {
        color: "#1B253A",
        fontStyle: "normal",
        fontFamily: "微软雅黑",
        fontSize: 12
      }
    },
    axisTick:{
      show: false
    },
    axisLine:{
      lineStyle:{
        color:"#E5E9ED"
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#E5E9ED"
      }
    }
  },
  yAxis: [
    {
      type: "value",
      splitNumber: 5,
      axisLabel: {
        textStyle: {
          color: "#a8aab0",
          fontStyle: "normal",
          fontFamily: "微软雅黑",
          fontSize: 12
        }
      },
      axisLine:{
        show: false
      },
      axisTick:{
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#E5E9ED"
        }
      }
    }
  ],
  series: [
    {
      name: "开井时间",
      type: "line",
      itemStyle: {
        normal: {
          color:"#60b9e7",
          lineStyle: {
            color: "#60b9e7",
            width:1
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "rgba(96,185,231,0)"
            }, {
              offset: 1,
              color: "rgba(96,185,231,0.35)"
            }]),
          }
        }
      },
      data: [ 1, 2, 3, 3, 5, 7, 10]
    },
    {
      name: "计量产液",
      type: "line",
      itemStyle: {
        normal: {
          color:"#faa92b",
          lineStyle: {
            color: "#faa92b",
            width:1
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: "rgba(250,169,43,0)",
            }, {
              offset: 1,
              color: "rgba(250,169,43,0.35)"
            }]),
          }
        }
      },
      data: [9, 5, 7, 8, 6, 5, 2]
    }
  ]
}

export const bottomOption = {
  legend: {},
  xAxis: {
    type: 'category',
    data: ['临兴东勘探', '一体化四期', '一体化五期', '第一开发区', '第二开发区', '第三开发区']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      barWidth: 20,
      itemStyle: {
        normal: {
          barBorderRadius: [30, 30, 0, 0],
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#00adff' },
              { offset: 0.5, color: '#0094ff' },
              { offset: 1, color: '#0078fe' },
            ],
          ),
        },
      },
      name: '年初计划',
      data: [8, 7, 6, 5, 4, 3]
    },
    {
      type: 'bar',
      barWidth: 20,
      itemStyle: {
        normal: {
          barBorderRadius: [30, 30, 0, 0],
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#9632ed' },
              { offset: 0.5, color: '#7c4df0' },
              { offset: 1, color: '#5b6ff3' },
            ],
          ),
        },
      },
      name: '累计完钻',
      data: [8, 7, 6, 5, 4, 3]
    },
  ]
}

export const pieOption = {
  calculable: true,
  series: [
    {
      name: '面积模式',
      type: 'pie',
      radius: [40, 60],
      center: ['50%', '50%'],
      data: [{
        value: 9.3,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: '#f5a70d'
          }, {
            offset: 1,
            color: '#ff7f00'
          }])
        },
        label: {
          color: "#333",
          fontSize: 12,
          formatter: '新建产能\n{a|9.3}',
          rich: {
            a: {
              color: "#ff8600",
              fontSize: 12,
              lineHeight: 16,
              fontWeight: 600
            },
          }
        }
      },
        {
          value: 9.3,
          name: 'rose2',
          itemStyle: {
            color: "transparent"
          }
        }
      ]
    },
    {
      name: '面积模式',
      type: 'pie',
      radius: [45, 55],
      center: ['50%', '50%'],
      data: [{
        value: 9.16,
        itemStyle: {
          color: "transparent"
        }
      },
        {
          value: 9.16,
          name: 'rose2',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#3ebafa'
            }, {
              offset: 1,
              color: '#32a0fd'
            }])
          },
          label: {
            color: "#333",
            fontSize: 12,
            formatter: '老井产能\n{a|9.16}',
            rich: {
              a: {
                color: "#298efe",
                fontSize: 12,
                lineHeight: 16,
                fontWeight: 600
              },
            }
          }
        }
      ]
    }
  ]
}

export const barOption = {
  legend: {},
  xAxis: {
    type: 'category',
    data: ['临兴东勘探', '一体化四期', '一体化五期', '第一开发区', '第二开发区', '第三开发区']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      barWidth: 12,
      itemStyle: {
        normal: {
          barBorderRadius: [30, 30, 0, 0],
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#00adff' },
              { offset: 0.5, color: '#0094ff' },
              { offset: 1, color: '#0078fe' },
            ],
          ),
        },
      },
      name: '年初计划',
      data: [8, 7, 6, 5, 4, 3]
    },
    {
      type: 'bar',
      barWidth: 12,
      itemStyle: {
        normal: {
          barBorderRadius: [30, 30, 0, 0],
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#9632ed' },
              { offset: 0.5, color: '#7c4df0' },
              { offset: 1, color: '#5b6ff3' },
            ],
          ),
        },
      },
      name: '累计完钻',
      data: [8, 7, 6, 5, 4, 3]
    },
  ]
}

export const lineOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  color: ['#47dd3a', '#ff9700'],
  legend: {
    data: ['2020年新建产能,亿方', '2020年老井产能,亿方'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['浅..', '先..', '第..', '第..', '一..', '临..', '神..'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: '2020年新建产能,亿方',
      type: 'bar',
      stack: '产能',
      data: [120, 132, 101, 134, 90, 230, 210],
      barWidth: 12,
    },
    {
      name: '2020年老井产能,亿方',
      type: 'bar',
      stack: '产能',
      data: [220, 182, 191, 234, 290, 330, 310],
      barWidth: 12,
    },
  ],
}
