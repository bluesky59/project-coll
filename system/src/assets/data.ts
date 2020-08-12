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
      dom: 'chart1',
      optionData: {
        title: [{
          text: '',
        }, {
          subtext: '计划,亿方',
          left: '16.67%',
          top: '75%',
          textAlign: 'center',
        }, {
          subtext: '建成产能,亿方',
          left: '50%',
          top: '75%',
          textAlign: 'center',
        }, {
          subtext: '完成率%',
          left: '83.33%',
          top: '75%',
          textAlign: 'center',
        }],
        series: [{
          type: 'pie',
          radius: '25%',
          center: ['50%', '50%'],
          data,
          animation: false,
          label: {
            position: 'outer',
            alignTo: 'none',
            bleedMargin: 5,
          },
          left: 0,
          right: '66.6667%',
          top: 0,
          bottom: 0,
        }, {
          type: 'pie',
          radius: '25%',
          center: ['50%', '50%'],
          data,
          animation: false,
          label: {
            position: 'outer',
            alignTo: 'labelLine',
            bleedMargin: 5,
          },
          left: '33.3333%',
          right: '33.3333%',
          top: 0,
          bottom: 0,
        }, {
          type: 'pie',
          radius: '25%',
          center: ['50%', '50%'],
          data,
          animation: false,
          label: {
            position: 'outer',
            alignTo: 'edge',
            margin: 20,
          },
          left: '66.6667%',
          right: 0,
          top: 0,
          bottom: 0,
        }],
      },
    },
    {
      dom: 'chart2',
      optionData: {
        legend: {
          orient: 'vertical',
          right: 20,
          top: 40,
          data: ['新建产能', '老井产能'],
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
              { value: 9.16, name: '新建产能' },
              { value: 9.3, name: '老井产能' },
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
          { type: 'bar', barWidth: 6 },
          { type: 'bar', barWidth: 6 },
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
            barWidth: 6,
          },
          {
            name: '2020年老井产能,亿方',
            type: 'bar',
            stack: '产能',
            data: [220, 182, 191, 234, 290, 330, 310],
            barWidth: 6,
          },
        ],
      },
    },
  ],
  bottom: [
    {
      dom: 'chart1',
      optionData: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        color: ['#26c6e2'],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        legend: {
          data: ['搜索引擎'],
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
            name: '搜索引擎',
            type: 'bar',
            barWidth: 12,
            data: [8, 7, 6, 5, 4, 3, 2],
            markLine: {
              lineStyle: {
                type: 'dashed',
              },
              data: [
                [{ type: 'max' }, { type: 'min' }],
              ],
            },
            itemStyle: {
              normal: {
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
            barWidth: 10,
            itemStyle: {
              normal: {
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
            barWidth: 10,
            itemStyle: {
              normal: {
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
            barWidth: 10,
            itemStyle: {
              normal: {
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
            barWidth: 10,
            itemStyle: {
              normal: {
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
            barWidth: 10,
            itemStyle: {
              normal: {
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
            barWidth: 10,
            itemStyle: {
              normal: {
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
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        color: ['#1caafc', '#f9a31a'],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['2020.1.1', '2020.2.1', '2020.3.1', '2020.4.1', '2020.5.1', '2020.6.1', '2020.7.1'],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '开井时间',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [26, 17, 25, 19, 17, 26, 21],
          },
          {
            name: '计量产液',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [4, 14, 6, 14, 12, 22, 27],
          },
        ],
      },
    },
    {
      dom: 'chart2',
      optionData: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        color: ['#bd1af9', '#fc1c4b'],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['2020.1.1', '2020.2.1', '2020.3.1', '2020.4.1', '2020.5.1', '2020.6.1', '2020.7.1'],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '折算产气量',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [51, 34, 50, 45, 50, 52, 40],
          },
          {
            name: '产气量',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [8, 28, 20, 11, 29, 14, 54],
          },
        ],
      },
    },
    {
      dom: 'chart3',
      optionData: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        color: ['#29f095', '#2656f3'],
        legend: {
          data: ['开井时间', '计量产液', '折算产气量', '产气量', '套压', '油压'],
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
            boundaryGap: false,
            data: ['2020.1.1', '2020.2.1', '2020.3.1', '2020.4.1', '2020.5.1', '2020.6.1', '2020.7.1'],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '套压',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [50, 34, 48, 38, 46, 52, 41],
          },
          {
            name: '油压',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [8, 28, 20, 11, 30, 16, 54],
          },
        ],
      },
    },
  ],
};
