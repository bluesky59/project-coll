export const lineOption = {
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
    data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '2020',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90]
    },
    {
      name: '2019',
      type: 'line',
      stack: '总量',
      data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290]
    },
    {
      name: '2018',
      type: 'line',
      stack: '总量',
      data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
    }
  ]
}

export const barOption = {
  xAxis: {
    type: 'category',
    data: ['2017', '2018', '2019', '2020']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [123, 243, 336, 421],
    type: 'bar',
    barWidth: '30%',
    itemStyle: {
      normal: {
        // 每根柱子颜色设置
        color: (params) => {
          const colorList = [
            '#EE9B22',
            '#2AA379',
            '#2A82E4',
            '#C3C3C3'
          ]
          return colorList[params.dataIndex]
        }
      }
    },
    showBackground: true,
    backgroundStyle: {
      color: 'rgba(220, 220, 220, 0.8)'
    }
  }]
}
