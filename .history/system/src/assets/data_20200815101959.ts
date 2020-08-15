import echarts from 'echarts';

const data = [{
  name: 'Apples',
  value: 70,
}, {
  name: 'Strawberries',
  value: 68,
}, {
  name: 'Bananas',
  value: 48,
}, {
  name: 'Oranges',
  value: 40,
}, {
  name: 'Pears',
  value: 32,
}, {
  name: 'Pineapples',
  value: 27,
}, {
  name: 'Grapes',
  value: 18,
}];

export default {
  left: [
    {
      dom: 'chart2',
      optionData: {
        legend: {
          orient: 'vertical',
          right: 20,
          top: 40,
          data: ['新建产能 9.16', '老井产能 9.3'],
        },
        color: ['#1caafc', '#f9a31a'],
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'inner',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 9.16, name: '新建产能 9.16' },
              { value: 9.3, name: '老井产能 9.3' },
            ],
          },
        ],
      },
    },
    {
      dom: 'chart3',
      optionData: {
        legend: {},
        tooltip: {},
        color: ['#00caa7', '#10a7ff'],
        dataset: {
          source: [
            ['product', '2020年计划产能,亿方', '2020年建成产能,亿方'],
            ['浅..', 8, 8],
            ['先..', 7, 7],
            ['第..', 6, 6],
            ['第..', 5, 5],
            ['一..', 4, 4],
            ['神..', 3, 3],
            ['临..', 2, 2],
            ['临..', 1, 1],
          ],
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [
          {
            type: 'bar',
            barWidth: 12,
            itemStyle: {
              normal: {
                barBorderRadius: [30, 30, 0, 0],
              },
            },
          },
          {
            type: 'bar',
            barWidth: 12,
            itemStyle: {
              normal: {
                barBorderRadius: [30, 30, 0, 0],
              },
            },
          },
        ],
      },
    },
    {
      dom: 'chart4',
      optionData: {
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
      },
    },
  ],
  bottom: [
    {
      dom: 'chart1',
      optionData: {
        legend: {},
        tooltip: {},
        color: ['#20d3df', '#ff494e'],
        dataset: {
          source: [
            ['product', '计划产量，亿方', '实际产量，亿方'],
            ['临兴东勘探', 8, 8],
            ['一体化四期', 7, 7],
            ['一体化五期', 6, 6],
            ['第一开发区', 5, 5],
            ['第二开发区', 4, 4],
            ['第三开发区', 3, 3],
          ],
        },
        xAxis: { type: 'category' },
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
                    { offset: 0, color: '#12f4d8' },
                    { offset: 0.5, color: '#26c5e3' },
                    { offset: 1, color: '#3a94ee' },
                  ],
                ),
              },
            },
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
                    { offset: 0, color: '#ff4351' },
                    { offset: 0.5, color: '#ff4e4b' },
                    { offset: 1, color: '#ff4e4b' },
                  ],
                ),
              },
            },
          },
        ],
      },
    },
    {
      dom: 'chart2',
      optionData: {
        legend: {},
        tooltip: {},
        color: ['#20d3df', '#ff494e'],
        dataset: {
          source: [
            ['product', '年初计划', '累计完钻'],
            ['临兴东勘探', 8, 8],
            ['一体化四期', 7, 7],
            ['一体化五期', 6, 6],
            ['第一开发区', 5, 5],
            ['第二开发区', 4, 4],
            ['第三开发区', 3, 3],
          ],
        },
        xAxis: { type: 'category' },
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
                    { offset: 0, color: '#12f4d8' },
                    { offset: 0.5, color: '#26c5e3' },
                    { offset: 1, color: '#3a94ee' },
                  ],
                ),
              },
            },
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
                    { offset: 0, color: '#ff4351' },
                    { offset: 0.5, color: '#ff4e4b' },
                    { offset: 1, color: '#ff4e4b' },
                  ],
                ),
              },
            },
          },
        ],
      },
    },
    {
      dom: 'chart3',
      optionData: {
        legend: {},
        tooltip: {},
        color: ['#fda81e', '#0dc1a7'],
        dataset: {
          source: [
            ['product', '年初计划', '累计完钻'],
            ['临兴东勘探', 8, 8],
            ['一体化四期', 7, 7],
            ['一体化五期', 6, 6],
            ['第一开发区', 5, 5],
            ['第二开发区', 4, 4],
            ['第三开发区', 3, 3],
          ],
        },
        xAxis: { type: 'category' },
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
                    { offset: 0, color: '#fac832' },
                    { offset: 0.5, color: '#fcac20' },
                    { offset: 1, color: '#ff8f0d' },
                  ],
                ),
              },
            },
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
                    { offset: 0, color: '#1ecc88' },
                    { offset: 0.5, color: '#0fc2a4' },
                    { offset: 1, color: '#01b9be' },
                  ],
                ),
              },
            },
          },
        ],
      },
    },
    {
      dom: 'chart4',
      optionData: {
        legend: {},
        tooltip: {},
        color: ['#0093fe', '#8741ef'],
        dataset: {
          source: [
            ['product', '年初计划', '累计完钻'],
            ['临兴东勘探', 8, 8],
            ['一体化四期', 7, 7],
            ['一体化五期', 6, 6],
            ['第一开发区', 5, 5],
            ['第二开发区', 4, 4],
            ['第三开发区', 3, 3],
          ],
        },
        xAxis: { type: 'category' },
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
          },
        ],
      },
    },
  ],
  info: [
    {
      dom: 'chart1',
      optionData: {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2020.1.1', '2020.2.1', '2020.3.1', '2020.4.1', '2020.5.1', '2020.6.1', '2020.7.1'],
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#1B253A',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 12,
            },
          },
          axisTick:{
            show: false,
          },
          axisLine:{
            lineStyle:{
              color:'#E5E9ED',
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#E5E9ED',
            }
          }
        },
        yAxis: [
          {
            type: 'value',
            splitNumber: 5,
            axisLabel: {
              textStyle: {
                color: '#a8aab0',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
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
                color: '#E5E9ED',
              }
            }

          }
        ],
        series: [
          {
            name: '开井时间',
            type: 'line',
            itemStyle: {
              normal: {
                color:'#60b9e7',
                lineStyle: {
                  color: "#60b9e7",
                  width:1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(96,185,231,0)'
                  }, {
                    offset: 1,
                    color: 'rgba(96,185,231,0.35)'
                  }]),
                }
              }
            },
            data: [ 1, 2, 3, 3, 5, 7, 10]
          },
          {
            name: '计量产液',
            type: 'line',
            itemStyle: {
              normal: {
                color:'#faa92b',
                lineStyle: {
                  color: "#faa92b",
                  width:1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(250,169,43,0)'
                  }, {
                    offset: 1,
                    color: 'rgba(250,169,43,0.35)'
                  }]),
                }
              }
            },
            data: [9, 5, 7, 8, 6, 5, 2]
          }
        ]
      },
    },
    {
      dom: 'chart2',
      optionData: {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2020.1.1', '2020.2.1', '2020.3.1', '2020.4.1', '2020.5.1', '2020.6.1', '2020.7.1'],
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#1B253A',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 12,
            },
          },
          axisTick:{
            show: false,
          },
          axisLine:{
            lineStyle:{
              color:'#E5E9ED',
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#E5E9ED',
            }
          }
        },
        yAxis: [
          {
            type: 'value',
            splitNumber: 5,
            axisLabel: {
              textStyle: {
                color: '#a8aab0',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
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
                color: '#E5E9ED',
              }
            }

          }
        ],
        series: [
          {
            name: '折算产气量',
            type: 'line',
            itemStyle: {
              normal: {
                color:'#c53bfa',
                lineStyle: {
                  color: "#c53bfa",
                  width:1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(197,59,250,0)'
                  }, {
                    offset: 1,
                    color: 'rgba(197,59,250,0.35)'
                  }]),
                }
              }
            },
            data: [ 1, 2, 3, 3, 5, 7, 10]
          },
          {
            name: '产气量',
            type: 'line',
            itemStyle: {
              normal: {
                color:'#f43f71',
                lineStyle: {
                  color: "#f43f71",
                  width:1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(244,63,113,0)'
                  }, {
                    offset: 1,
                    color: 'rgba(244,63,113,0.35)'
                  }]),
                }
              }
            },
            data: [9, 5, 7, 8, 6, 5, 2]
          }
        ]
      },
    },
    {
      dom: 'chart3',
      optionData: {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2020.1.1', '2020.2.1', '2020.3.1', '2020.4.1', '2020.5.1', '2020.6.1', '2020.7.1'],
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#1B253A',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 12,
            },
          },
          axisTick:{
            show: false,
          },
          axisLine:{
            lineStyle:{
              color:'#E5E9ED',
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#E5E9ED',
            }
          }
        },
        yAxis: [
          {
            type: 'value',
            splitNumber: 5,
            axisLabel: {
              textStyle: {
                color: '#a8aab0',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
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
                color: '#E5E9ED',
              }
            }

          }
        ],
        series: [
          {
            name: '套压',
            type: 'line',
            itemStyle: {
              normal: {
                color:'#36f09c',
                lineStyle: {
                  color: "#36f09c",
                  width:1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(54,240,156,0)'
                  }, {
                    offset: 1,
                    color: 'rgba(54,240,156,0.35)'
                  }]),
                }
              }
            },
            data: [ 1, 2, 3, 3, 5, 7, 10]
          },
          {
            name: '油压',
            type: 'line',
            itemStyle: {
              normal: {
                color:'#3c76ee',
                lineStyle: {
                  color: "#3c76ee",
                  width:1
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(60,138,238,0)'
                  }, {
                    offset: 1,
                    color: 'rgba(60,138,238,0.35)'
                  }]),
                }
              }
            },
            data: [9, 5, 7, 8, 6, 5, 2]
          }
        ]
      },
    },
  ],
};
