<template>
  <div class="main-header">
    <p class="header-title">中联非常规油气田产能建设评价跟踪系统</p>
    <div class="header-info">
      <img class="header-set" src="../assets/imgs/set.png" />
      <img class="header-portrait" src="../assets/imgs/portrait.png" />
      <p class="header-nick">欢迎您！Admin</p>
      <img class="header-more" src="../assets/imgs/more.png" />
      <img class="header-exit" src="../assets/imgs/exit.png" />
    </div>
    <div class="header-nav header-nav-l">
      <div class="header-nav-box" :class="{'header-nav-box-active': item.index === navIndex}" v-for="item in navArrsL" :key="item.label">
        <img class="header-nav-icon" :src="require(`../assets/imgs/${item.icon}.png`)" />
        <p>{{item.label}}</p>
      </div>
    </div>
    <div class="header-nav header-nav-r">
      <div class="header-nav-box" v-for="item in navArrsR" :key="item.label">
        <img class="header-nav-icon" :src="require(`../assets/imgs/${item.icon}.png`)" />
        <p>{{item.label}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class HeaderCom extends Vue {
  navIndex = 0;

  navArrsL = [
    {
      label: '首页',
      icon: 'nav-icon-0',
      index: 0,
    },
    {
      label: '产能建设',
      icon: 'nav-icon-1',
      index: 1,
    },
    {
      label: '产能跟踪',
      icon: 'nav-icon-2',
      index: 2,
    },
    {
      label: '钻井跟踪',
      icon: 'nav-icon-3',
      index: 3,
    },
  ];

  navArrsR = [
    {
      label: '压裂跟踪',
      icon: 'nav-icon-4',
      index: 4,
    },
    {
      label: '地面工程',
      icon: 'nav-icon-5',
      index: 5,
    },
    {
      label: '生产图件',
      icon: 'nav-icon-6',
      index: 6,
    },
    {
      label: '基础数据',
      icon: 'nav-icon-7',
      index: 7,
    },
  ]
}
</script>

<style lang="scss">
.main-header {
  background: url("../assets/imgs/header-bg.png") no-repeat center;
  background-size: cover;
  position: relative;
  .header-title {
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 0.6rem;
  }
  .header-info {
    height: 0.44rem;
    position: absolute;
    right: 0.2rem;
    top: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .header-set {
      width: 0.16rem;
      height: 0.16rem;
    }
    .header-portrait {
      width: 0.24rem;
      height: 0.24rem;
      margin: 0 20px;
    }
    .header-more {
      width: 0.09rem;
      height: 0.07rem;
      margin: 0 15px 0 5px;
    }
    .header-exit {
      width: 0.16rem;
      height: 0.13rem;
    }
    .header-nick {
      font-size: 13px;
      color: #fff;
    }
  }
  .header-nav {
    width: 4.22rem;
    height: 0.27rem;
    position: absolute;
    top: 0.55rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-nav-box {
      width: 0.97rem;
      height: 0.27rem;
      background: url("../assets/imgs/nav-bg.png") no-repeat center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      color: #0f456d;
      .header-nav-icon {
        margin-right: 5px;
      }
    }
    .header-nav-box-active {
      background: url("../assets/imgs/nav-bg-active.png") no-repeat center;
      background-size: cover;
      color: #fff;
    }
  }
  .header-nav-l {
    left: 0.16rem;
  }
  .header-nav-r {
    right: 0.16rem;
  }
}
</style>
