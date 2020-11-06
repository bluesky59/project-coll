<template>
  <div class="main-container page-bg-color">
    <div class="abnormal-list" v-for="el in abnormalList" :key="el.label">
        {{el.label}}
        <van-icon name="arrow" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  abnormalList = [
    {
      label: '任务中心',
      value: ''
    },
    {
      label: '生产异常上报',
      value: ''
    },
    {
      label: '报警异常上报',
      value: ''
    },
    {
      label: '异常任务工单处理',
      value: ''
    }
  ]

  created (): void {
    document.title = '异常管理'
  }
}
</script>

<style lang="scss" scoped>
.main-container {
    padding-top: 10px;
    height: 100%;
    .abnormal-list {
        height: 42px;
        line-height: 42px;
        font-size: 14px;
        color: #555;
        background-color: #fff;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
}
</style>
