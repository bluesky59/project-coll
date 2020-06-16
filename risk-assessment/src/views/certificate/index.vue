<template>
  <div>
    <navCom :navArrs="navArrs" />
    <div class="main-content">
      <p class="main-nav">认证 ＞ 项目主体认证</p>
      <p class="main-tips">您还未认证身份，请认证后再操作！</p>
      <div class="main-body">
        <div class="main-box" v-for="item in contentArrs" :key="item.label">
          <div class="main-box-cir">
            <img :src="require(`../../assets/imgs/shape-${item.img}.png`)" />
          </div>
          <p class="main-box-title">{{item.title}}</p>
          <p class="main-box-des">{{item.des}}</p>
          <div v-if="item.status === 0" class="main-box-btn" @click="skipTo(item)">我要认证</div>
          <p v-else class="main-box-tips">已认证</p>
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
      contentArrs: [
        {
          title: '管理机构',
          des: '管理机构是负责审查项目的机构！管理机构是负责审查项目的机构！管理机构是负。',
          img: '00',
          status: 0,
          router: '/manager'
        },
        {
          title: '审查机构',
          des: '管理机构是负责审查项目的机构！管理机构是负责审查项目的机构！管理机构是负。',
          img: '01',
          status: 0,
          router: '/project'
        },
        {
          title: '主体单位',
          des: '管理机构是负责审查项目的机构！管理机构是负责审查项目的机构！管理机构是负。',
          img: '02',
          status: 0,
          router: '/manager'
        },
        {
          title: '服务机构',
          des: '管理机构是负责审查项目的机构！管理机构是负责审查项目的机构！管理机构是负。',
          img: '03',
          status: 0,
          router: '/manager'
        },
        {
          title: '专家',
          des: '管理机构是负责审查项目的机构！管理机构是负责审查项目的机构！管理机构是负。',
          img: '04',
          status: 0,
          router: '/manager'
        },
        {
          title: '个人认证',
          des: '管理机构是负责审查项目的机构！管理机构是负责审查项目的机构！管理机构是负。',
          img: '05',
          status: 1,
          router: '/manager'
        }
      ]
    }
  },
  methods: {
    skipTo(data) {
      const { router } = data || {};
      this.$router.push(`/certificate${router}`);
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
    .main-tips {
      font-size: 0.24rem;
      color: #666;
      text-align: center;
      font-weight: 600;
    }
    .main-body {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: row;
      margin-top: 0.6rem;
      .main-box {
        width: 3.2rem;
        height: 5rem;
        box-shadow: 0 0.02rem 0.2rem 0 rgba(0,0,0,0.06);
        border-radius: 0.06rem;
        margin-bottom: 0.6rem;
        background-color: #fff;
        text-align: center;
        padding: 0.4rem;
        .main-box-cir {
          width: 1.5rem;
          height: 1.5rem;
          background-color: #F1F1F1;
          border-radius: 50%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .main-box-title {
          font-size: 0.36rem;
          color: #666;
          margin: 0.3rem 0;
        }
        .main-box-des {
          font-size: 0.18rem;
          color: #999;
          text-align: left;
        }
        .main-box-btn {
          width: 3.2rem;
          height: 0.6rem;
          background: linear-gradient(206deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%);
          box-shadow: 0 0.02rem 0.16rem 0 rgba(42,130,228,0.2);
          border-radius: 0.06rem;
          font-size: 0.18rem;
          color: #fff;
          text-align: center;
          line-height: 0.6rem;
          margin-top: 0.9rem;
          cursor: pointer;
        }
        .main-box-tips {
          font-size: 0.18rem;
          color: #666;
          margin-top: 0.9rem;
        }
      }
    }
  }
</style>>
