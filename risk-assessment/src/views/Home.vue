<template>
  <div class="home-container">
    <div class="home-header">
      <headerCom :navArrs="navArrs" />
      <p class="home-title">多一份评估 · 少一分风险</p>
      <article class="home-article">
        <p class="home-detail">分享时机，在不同的时机分析用户是否有分享的意愿，提供给他们合适的分享内容，能让分享的效果更好。</p>
        <p class="home-detail">我们从分享时机、分享形式、分享动机、分享场景4个维度来聊聊「社交分享」的那些事儿。
尤其是刚上线的产品，很难通过产品的内部体系来实现快速的用户增长，所以会更加依赖于分享来达到广泛的传播，获取目标用户。</p>
      </article>
      <div class="home-btn" @click="skipTo">开起评估</div>
      <div class="home-datas">
        <div class="data-item" v-for="item in dataArrs" :key="item.lable">
          <p class="data-value">{{item.value}}</p>
          <p class="data-label">{{item.label}}</p>
        </div>
      </div>
    </div>
    <div class="home-des">
      <p class="home-title">简洁化 · 智能化 · 专业化</p>
      <div class="home-divider"></div>
      <div class="des-container">
        <div class="des-box" :class="{'des-box-spe': index === 0}" v-for="(item, index) in caseArrs" :key="item.img">
          <img class="des-img" :src="require(`../assets/imgs/index/case-${item.img}.png`)" />
          <p class="des-title">{{item.title}}</p>
          <p class="des-des">{{item.des}}</p>
        </div>
      </div>
    </div>
    <div class="home-case"></div>
    <div class="home-professor">
      <p class="home-title">完整全面的专家库</p>
      <div class="home-divider"></div>
      <div class="home-professor-container">
        <div class="home-professor-box" v-for="item in professorArrs" :key="item.img">
          <img class="professor-img" src="../assets/imgs/index/professor-00.png" />
          <p class="professor-name">{{item.name}}</p>
          <p class="professor-des">{{item.des}}</p>
        </div>
      </div>
    </div>
    <div class="home-extend">
      <p class="home-title">安全便捷的手机调查软件</p>
      <div class="home-divider"></div>
      <div class="extend-container">
        <img class="extend-software" src="../assets/imgs/index/software.png" />
        <img class="extend-qrcode" src="../assets/imgs/index/qrcode.png" />
        <span class="extend-tips">微信扫一扫直接打开小程序</span>
      </div>
    </div>
    <footerCom />
  </div>
</template>

<script>
import headerCom from '@/components/header.vue'
import footerCom from '@/components/footer.vue'
import imgBg from '@/assets/imgs/index/header-bg.png'

export default {
  name: 'Home',
  components: {
    headerCom, footerCom
  },
  methods: {
    skipTo() {
      this.$router.push('/login');
    }
  },
  data() {
    return {
      navArrs: [
          {
              label: '首页'
          },
          {
              label: '案例库'
          },
          {
              label: '专家库'
          },
          {
              label: '调查软件'
          },
          {
              label: '关于我们'
          }
      ],
      dataArrs: [
        {
          label: '企业注册数',
          value: '1228+'
        },
        {
          label: '年项目数',
          value: '376+'
        },
        {
          label: '平台专家',
          value: '2376+'
        },
        {
          label: '平台专家',
          value: '22376+'
        }
      ],
      caseArrs: [
        {
          img: '00',
          title: '报告一键生成',
          des: '评估报告轻松一键生成，省时、省力、省心。'
        },
        {
          img: '01',
          title: '专家线上评估',
          des: '全平台专家任选，线上远程评估，安全有效。'
        },
        {
          img: '02',
          title: '完整的资料库',
          des: '完整的线上法规库、资料库、专家库、风险库、措施库'
        },
        {
          img: '03',
          title: '线上智能问卷',
          des: '线上问卷编辑、调查、一键生成结果'
        }
      ],
      professorArrs: [
        {
          name: '程宇豪',
          des: '高级工程师、10年行业经验、博士后。',
          img: 'professor-00'
        },
        {
          name: '程宇豪',
          des: '高级工程师、10年行业经验、博士后。',
          img: 'professor-01'
        },
        {
          name: '程宇豪',
          des: '高级工程师、10年行业经验、博士后。',
          img: 'professor-02'
        },
        {
          name: '程宇豪',
          des: '高级工程师、10年行业经验、博士后。',
          img: 'professor-03'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-container {
    .home-header {
      width: 100%;
      height: 9rem;
      background-image: url('../assets/imgs/index/header-bg.png');
      background-size: cover;
      position: relative;
      text-align: center;
      .home-title {
        font-size: 0.6rem;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(255,255,255,1);
        line-height: 0.84rem;
        letter-spacing:3px;
        margin: 1.2rem 0 0.6rem;
      }
      .home-article {
        width: 6.2rem;
        margin: 0.3rem auto;
        text-align: left;
        .home-detail {
          font-size: 0.14rem;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height: 0.22rem;
          letter-spacing: 2px;
        }
      }
      .home-btn {
        width: 2.4rem;
        height: 0.6rem;
        background:linear-gradient(210deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%);
        border-radius: 0.3rem;
        font-size: 0.24rem;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(255,255,255,1);
        line-height: 0.6rem;
        letter-spacing:1px;
        margin: 1rem auto 0;
        cursor: pointer;
      }
      .home-datas {
        width: 12.6rem;
        height: 1.4rem;
        background:rgba(255,255,255,1);
        box-shadow:0 0.02rem 0.2rem 0 rgba(0,0,0,0.2);
        border-radius: 0.1rem;
        position: absolute;
        left: 3.3rem;
        top: 8rem;
        display: flex;
        justify-content: space-between;
        .data-item {
          width: 25%;
          height: 1rem;
          text-align: center;
          padding: 0.2rem 0;
          .data-value {
            font-size: 0.6rem;
            font-family:SFNSDisplay;
            color:rgba(42,130,228,1);
            line-height: 0.72rem;
            letter-spacing: 3px;
          }
          .data-label {
            font-size: 0.18rem;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height: 0.25rem;
          }
        }
      }
    }
    .home-des {
      width: 100%;
      height: 7rem;
      background-image: url('../assets/imgs/index/bg1.png');
      background-size: cover;
      padding-top: 1.2rem;
      .des-container {
        width: 14.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.7rem auto 0;
        .des-box {
          width: 2.1rem;
          height: 3.4rem;
          background: #fff;
          box-shadow:0 0.02rem 0.2rem 0 rgba(42,130,228,0.2);
          text-align: center;
          padding: 0.6rem;
          .des-img {
            width: 1.8rem;
            height: 1.8rem;
            display: block;
            margin: 0 auto;
          }
          .des-title {
            font-size: 0.28rem;
            font-family:FZZCHJW--GB1-0,FZZCHJW--GB1;
            font-weight:normal;
            color:rgba(51,51,51,1);
            line-height: 0.33rem;
            letter-spacing:1px;
            margin-bottom: 0.22rem;
          }
          .des-des {
            font-size: 0.18rem;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height: 0.25rem;
          }
        }
        .des-box-spe {
          background:linear-gradient(270deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%);
          .des-title, .des-des {
            color: #fff;
          }
        }
      }
    }
    .home-case {
      width: 100%;
      height: 9.7rem;
      background-image: url('../assets/imgs/index/bg2.png');
      background-size: cover;
    }
    .home-professor {
      width: 100%;
      height: 7.5rem;
      padding-top: 0.7rem;
      background-color: #F7F7F7;
      .home-professor-container {
        width: 14.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.7rem auto 0;
        .home-professor-box {
          width: 2.96rem;
          height: auto;
          text-align: center;
          .professor-img {
            width: 2.96rem;
            height: 3.86rem;
          }
          .professor-name {
            font-size: 0.2rem;
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            color:rgba(51,51,51,1);
            line-height: 0.28rem;;
            letter-spacing: 1px;
            margin: 0.25rem 0 0.3rem;
          }
          .professor-des {
            font-size: 0.16rem;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height: 0.22rem;
          }
        }
      }
    }
    .home-extend {
      width: 100%;
      height: 8.4rem;
      padding-top: 0.6rem;
      background-color: #fff;
      .extend-container {
        width: 14.4rem;
        margin: 0 auto;
        position: relative;
        .extend-software {
          width: 10.46rem;
          height: 7.1rem;
        }
        .extend-qrcode {
          width: 2.4rem;
          height: 2.47rem;
        }
        .extend-tips {
          width: 2.6rem;
          height: 0.28rem;
          display: inline-block;
          position: absolute;
          right: 1.32rem;
          top: 5.2rem;
          font-size: 0.2rem;
          font-family:PingFangSC-Semibold,PingFang SC;
          font-weight:600;
          color:rgba(51,51,51,1);
          line-height: 0.28rem;
          letter-spacing:1px;
        }
      }
    }
    .home-title {
      font-size: 0.28rem;
      font-family: FZZCHJW--GB1-0,FZZCHJW--GB1;
      font-weight:normal;
      color:rgba(51,51,51,1);
      line-height: 0.33rem;
      letter-spacing: 1px;
      text-align: center;
    }
    .home-divider {
      width: 0.5rem;
      height: 0.08rem;
      background-color: #5CA9FF;
      border-radius: 0.04rem;
      margin: 0.2rem auto;
    }
  }
</style>>
