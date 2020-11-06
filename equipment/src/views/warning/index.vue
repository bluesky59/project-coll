<template>
  <div class="main-container page-bg-color">
    <div class="warning-list" v-for="el in warnList" :key="el.label">
        <div class="warning-title">{{el.label}}</div>
        <div class="warning-content">
            <div class="warning-item" v-for="e in el.items" :key="e.label">
                {{e.label}}
                <van-icon name="arrow" />
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  warnList = [
    {
      label: '报警中心',
      id: 1,
      items: [
        {
          label: '待处置',
          value: ''
        },
        {
          label: '已处置',
          value: ''
        },
        {
          label: '待督办',
          value: ''
        },
        {
          label: '已督办',
          value: ''
        },
        {
          label: '报警日志',
          value: ''
        }
      ]
    },
    {
      label: '报警统计',
      id: 2,
      items: [
        {
          label: '日报警统计',
          value: ''
        },
        {
          label: '月报警统计',
          value: ''
        },
        {
          label: '报警次数对标',
          value: ''
        },
        {
          label: '报警处理对标',
          value: ''
        }
      ]
    }
  ]

  created (): void {
    document.title = '报警预警'
  }
}
</script>

<style lang="scss" scoped>
.main-container {
    .warning-list {
        .warning-title {
            height: 36px;
            line-height: 36px;
            font-weight: bold;
            color: #333;
            font-size: 14px;
            padding: 0 15px;
        }
        .warning-item {
            height: 42px;
            line-height: 42px;
            font-size: 12px;
            color: #555;
            border-bottom: 1px solid #eee;
            background-color: #fff;
            padding: 0 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>
