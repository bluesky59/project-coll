<template>
  <div>
    <navCom :navIndex="1" :navArrs="expertsNavArrs" />
    <div class="main-content">
      <p class="main-nav">认证 ＞ 项目主体认证</p>
      <div class="main-box">
          <div class="main-txt">
                <div class="content-form-divider content-form-divider-spe">
                    <span class="content-form-line"></span>
                    项目需求详情
                </div>
                <article class="main-acticle">
                    <p class="main-text">项目名称：中意城投稳评项目</p>
                    <p class="main-text">项目主体：中联稳评有限责任公司</p>
                    <p class="main-text">任务类型：评估打分</p>
                    <p class="main-text">任务金额：具体沟通</p>
                    <p class="main-text">项目联系人：金大川</p>
                    <p class="main-text">项目描述：中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，项…项目占地面积33万平方米，项…</p>
                </article>
          </div>
            <div class="form-btns">
                <el-button class="content-btn content-btn-cancel">拒绝邀请</el-button>
                <el-button class="content-btn content-btn-submit" type="primary">接受邀请</el-button>
            </div>
      </div>
    </div>
    <footerCom />
  </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import { expertsNavArrs } from '@/data/nav.js';

export default {
  name: 'Home',
  components: {
    navCom, footerCom
  },
  data() {
    return {
        form: {},
        expertsNavArrs
    }
  },
  methods: {
      onSubmit() {},
      handlePictureCardPreview() {},
      handleRemove() {}
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
    .main-box {
        width: 100%;
        height: auto;
        background-color: #fff;
        padding: 0.4rem 0.75rem 0.5rem;
        margin-bottom: 0.8rem;
        .main-txt {
            border-bottom: 1px solid #D8D8D8;
            .main-acticle {
                margin: 0.3rem 0;
                .main-text {
                    font-size: 0.16rem;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height: 0.4rem;
                }
            }
        }
    }
  }
</style>>
