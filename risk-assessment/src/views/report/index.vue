<template>
    <div>
        <navCom :navIndex="4" :navArrs="navArrs" />
        <div class="main-container">
            <p class="main-nav">认证 ＞ 项目主体认证</p>
            <div class="main-content">
                <div class="company-action" v-for="item in actionArrs" :key="item.lable">
                  <img class="company-action-img" :src="require(`../../assets/imgs/company/c-${item.img}.png`)" />
                  {{item.label}}
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
    components: {
        navCom, footerCom
    },
    data() {
        return {
            navArrs,
            actionArrs: [
                {
                    label: '评估文件报备',
                    img: '0'
                },
                {
                    label: '报告报备',
                    img: '1'
                },
                {
                    label: '跟踪资料报备',
                    img: '2'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .main-container {
        width: 14.4rem;
        height: auto;
        margin: 0 auto;
        .main-content {
            padding: 0.5rem;
            background-color: #fff;
            margin-bottom: 1rem;
            display: flex;
            min-height: 6rem;
            .company-action {
              width: 1.4rem;
              height: 1.4rem;
              background-color: #fff;
              box-shadow:0px 2px 20px 0px rgba(0,0,0,0.06);
              margin-left: 0.2rem;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              font-size: 0.16rem;
              color: #333;
              .company-action-img {
                  width: 0.4rem;
                  height: 0.4rem;
                  margin-bottom: 6px;
              }
          }
        }
    }
</style>