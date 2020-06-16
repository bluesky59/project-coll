<template>
  <div>
    <navCom :navIndex="0" :navArrs="managerNavArrs" />
    <div class="main-content">
      <p class="main-nav">认证 ＞ 项目主体认证</p>
      <div class="main-container">
          <div class="home-company">
              <div class="company-info">
                <div class="item-title">
                  <img class="item-title-icon" src="../../assets/imgs/project/p-img.png" />
                  <div class="item-title-txt">
                    <div class="item-title-text item-title-text-t">
                      大钟稳评有限公司
                      <img class="item-title-locate" src="../../assets/imgs/project/m-icon.png" />
                      <span class="company-edit">修改资料</span>
                    </div>
                    <div class="item-title-text">
                      <img class="item-title-m" src="../../assets/imgs/project/locate-icon.png" />
                      <span class="company-l">贵阳</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <el-button class="linear-btn home-btn">邀请人员</el-button>
          <img class="home-bg" src="../../assets/imgs/m-bg.png" />
        </div>
    </div>
    <footerCom />
  </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import { managerNavArrs } from '@/data/nav.js';

export default {
  name: 'Home',
  components: {
    navCom, footerCom
  },
  data() {
    return {
      managerNavArrs
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
      height: auto;
      margin: 0.1rem 0 1rem;
      background-color: #fff;
      padding: 0 0.5rem;
      text-align: center;
      .home-company {
          height: 1.4rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border-bottom: 1px solid #D8D8D8;
          .company-info {
              height: 0.6rem;
              .item-title {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                .item-title-icon {
                  width: 0.6rem;
                  height: 0.6rem;
                  margin-right: 0.18rem;
                }
                .item-title-txt {
                  .item-title-text {
                    height: 0.3rem;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    font-size: 0.18rem;
                    color: #666;
                    .item-title-locate {
                      width: 0.2rem;
                      height: 0.2rem;
                      margin-left: 0.3rem;
                    }
                    .item-title-m {
                      width: 0.16rem;
                      height: 0.2rem;
                    }
                    .company-edit {
                      color: #5CA9FF;
                      text-decoration: underline;
                      margin-left: 10px;
                      cursor: pointer;
                    }
                    .company-l {
                      margin: 0 0.3rem 0 0.1rem;
                    }
                  }
                  .item-title-text-t {
                    color: #333;
                  }
                }
            }
          }
      }
    }
    .home-bg {
        width: 11rem;
        height: 6.2rem;
        margin: 0.2rem auto;
    }
    .home-btn {
        display: block;
        margin-top: 0.3rem;
    }
  }
</style>

<style>
  .el-input__inner {
    border-color: transparent;
  }
</style>
