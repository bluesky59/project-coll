<template>
  <div class="main-container page-bg-color">
    <div class="main-user">
      <h6 class="page-title">工作台</h6>
      <div class="user-detail">
        <van-image class="user-headerpic" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="user-info">
          <p class="user-name">张定华</p>
          <p class="user-email">zhangdinghua</p>
        </div>
      </div>
      <div class="user-deal">
        <div class="user-deal-box" v-for="(el, index) in dealArr" :key="el.label">
          <div class="deal-detail">
            <p class="deal-label">{{el.label}}</p>
            <p class="deal-account">{{el.account}}</p>
          </div>
          <div class="deal-divider" v-if="index < dealArr.length - 1"></div>
        </div>
      </div>
    </div>
    <div class="main-entry">
      <div class="entry-list">
        <div class="entry-item" v-for="el in entryArr" :key="el.label" @click="skipTo(el.value)">
          <van-icon class="entry-icon" :name="el.icon" />
          <span class="entry-label">{{el.label}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  dealArr = [
    {
      label: '待处理',
      account: '8'
    },
    {
      label: '已处理',
      account: '11'
    },
    {
      label: '已挂起',
      account: '34'
    },
    {
      label: '我发起',
      account: '34'
    }
  ]

  entryArr = [
    {
      label: '生产计划',
      value: '生产计划',
      icon: 'todo-list-o'
    },
    {
      label: '调度管理',
      value: '调度管理',
      icon: 'chart-trending-o'
    },
    {
      label: '生产运行',
      value: '生产运行',
      icon: 'video-o'
    },
    {
      label: '设备管理',
      value: '设备管理',
      icon: 'label-o'
    },
    {
      label: '安环管理',
      value: '安环管理',
      icon: 'flower-o'
    },
    {
      label: '质量跟踪',
      value: '质量跟踪',
      icon: 'certificate'
    },
    {
      label: '物流跟踪',
      value: '物流跟踪',
      icon: 'pending-payment'
    },
    {
      label: '报表管理',
      value: '报表管理',
      icon: 'records'
    },
    {
      label: '自控连锁',
      value: '自控连锁',
      icon: 'cluster-o'
    },
    {
      label: '异常管理',
      value: 'abnormal',
      icon: 'failure'
    },
    {
      label: '生产监控',
      value: '生产监控',
      icon: 'other-pay'
    },
    {
      label: '预警报警',
      value: 'warning',
      icon: 'tosend'
    }
  ]

  skipTo (route: string) {
    route && this.$router.push(`/${route}`)
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  .main-user {
    background-color: #fff;
    .user-detail {
      display: flex;
      align-items: center;
      padding: 0 15px 10px;
      .user-headerpic {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
      }
      .user-info {
        margin-left: 15px;
        .user-name {
          font-size: 14px;
          color: #000;
        }
        .user-email {
          color: #666;
          line-height: 22px;
        }
      }
    }
    .user-deal {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user-deal-box {
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .deal-detail {
          width: 90%;
          text-align: center;
          .deal-label {
            color: #999;
          }
          .deal-account {
            font-size: 16px;
            color: #333;
            margin-top: 12px;
          }
        }
        .deal-divider {
          width: 2px;
          height: 20px;
          background-color: #ddd;
        }
      }
    }
  }
  .main-entry {
    background-color: #fff;
    margin-top: 10px;
    .entry-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .entry-item {
        width: 33%;
        height: 80px;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .entry-label {
          margin-top: 10px;
          font-size: 13px;
          color: #222;
        }
        .entry-icon {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
