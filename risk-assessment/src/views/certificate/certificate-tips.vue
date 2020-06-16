<template>
  <div>
    <navCom :navIndex="7" :navArrs="navArrs" />
    <div class="main-content">
      <p class="main-nav">认证 ＞ 项目主体认证</p>
      <div class="main-tips">
          <img class="main-tips-img" src="../../assets/imgs/certificate-img.png" />
          <p class="main-tip-title">资料审核中</p>
          <p class="main-tip-des">您的资料已上传审核，我们会在最迟3个工作日内审核通过，请您注意查看后续通知，感谢使用。</p>
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
        form: {},
        navArrs
    }
  },
  methods: {
      onSubmit() {}
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
        width: 100%;
        height: 5rem;
        background-color: #fff;
        margin: 0.4rem auto 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color:rgba(102,102,102,1);
        font-family:PingFangSC-Semibold,PingFang SC;
        .main-tips-img {
            width: 0.9rem;
            height: 1rem;
        }
        .main-tip-title {
            font-size: 0.28rem;
            font-weight:600;
            line-height: 0.4rem;
            letter-spacing:1px;
            margin: 0.1rem auto;
        }
        .main-tip-des {
            font-size: 0.16rem;
            font-weight:400;
            line-height: 0.22rem;
        }
    }
  }
</style>>
