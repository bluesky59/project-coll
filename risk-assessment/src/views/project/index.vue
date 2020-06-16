<template>
  <div>
    <navCom :navIndex="1" :navArrs="navArrs" />
    <div class="main-content">
      <p class="main-nav">认证 ＞ 项目主体认证</p>
      <div class="main-container">
        <div class="main-query">
          <img class="main-query-icon" src="../../assets/imgs/search-icon.png" />
          <el-input placeholder="输入项目搜索"></el-input>
        </div>
        <div class="main-tabs">
          <div class="main-tab" :class="{'main-tab-sel': tabsIndex === index}" @click="tabsSwitch(index)" v-for="(item,index) in tabsArrs" :key="item.value">
            {{item.label}}
          </div>
        </div>
        <div class="main-list">
          <div class="main-item" v-for="item in parjectArrs" :key="item.id">
            <div class="main-item-title">
              <el-row>
                <el-col :span="7">项目编号: {{item.number}}</el-col>
                <el-col :span="3">承接方: {{item.obj}}</el-col>
                <el-col :span="5">承接时间: {{item.date}}</el-col>
              </el-row>
            </div>
            <div class="main-item-content">
              <el-row>
                <el-col :span="7">{{item.name}}</el-col>
                <el-col :span="3">{{item.status}}</el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerCom />
  </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import { navArrs } from '@/data/nav.js';

export default {
  name: 'Home',
  components: {
    navCom, footerCom
  },
  data() {
    return {
      navArrs,
      tabsIndex: 0,
      parjectArrs: [
        {
          number: 'GZ-GY-NM-BMH-JS-170705',
          obj: '中科测评',
          date: '2020-01-11',
          name: '万科运雅典城商品房用地稳评项目',
          status: '调查评估中',
          id: 0
        },
        {
          number: 'GZ-GY-NM-BMH-JS-170705',
          obj: '中科测评',
          date: '2020-01-11',
          name: '万科运雅典城商品房用地稳评项目',
          status: '调查评估中',
          id: 1
        },
        {
          number: 'GZ-GY-NM-BMH-JS-170705',
          obj: '中科测评',
          date: '2020-01-11',
          name: '万科运雅典城商品房用地稳评项目',
          status: '调查评估中',
          id: 2
        }
      ],
        tabsArrs: [
          {
            label: '全部项目',
            value: '0'
          },
          {
            label: '未承接',
            value: '1'
          },
          {
            label: '已承接',
            value: '2'
          },
          {
            label: '跟踪',
            value: '3'
          },
          {
            label: '结项',
            value: '4'
          }
        ]
    }
  },
  methods: {
    tabsSwitch(index) {
      this.tabsIndex = index;
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-content {
    width: 14.4rem;
    height: auto;
    background-color: #F7F7F7;
    margin: 0 auto;
    .main-nav {
      font-size: 0.14rem;
      line-height: 0.6rem;
      color: #666;
    }
    .main-container {
      width: 100%;
      height: auto;
      background-color: #fff;
      margin: 0.1rem 0 1rem;
      padding: 0.5rem 0.5rem 1rem;
      .main-query {
        width: 100%;
        height: 0.6rem;
        line-height: 0.6rem;
        border-bottom: 1px solid #D8D8D8;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .main-query-icon {
          width: 0.23rem;
          height: 0.24rem;
          margin-right: 0.1rem;
        }
      }
      .main-tabs {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 0.4rem;
        margin-top: 0.4rem;
        .main-tab {
          font-size: 0.18rem;
          color:#999;
          margin-right: 0.8rem;
          width: auto;
          height: 0.3rem;
          cursor: pointer;
        }
        .main-tab-sel {
          color: #333;
          border-bottom: 0.04rem solid #5CA9FF;
          font-weight: 600;
        }
      }
      .main-list {
        margin-top: 0.3rem;
        .main-item {
          width: 100%;
          height: 1.2rem;
          box-shadow:0px 2px 10px 0px rgba(0,0,0,0.06);
          border:1px solid rgba(216,216,216,1);
          font-size: 0.16rem;
          margin-bottom: 0.36rem;
          text-indent: 0.22rem;
          .main-item-title {
            height: 0.4rem;
            line-height: 0.4rem;
            background-color: #eee;
            font-weight: 400;
            color: #666;
          }
          .main-item-content {
            height: 0.8rem;
            line-height: 0.8rem;
            background-color: #fff;
            font-weight: 500;
            color: #333;
          }
        }
      }
    }
  }
</style>

<style>
  .el-input__inner {
    border-color: transparent;
  }
</style>
