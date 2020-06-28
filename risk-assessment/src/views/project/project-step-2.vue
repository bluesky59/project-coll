<template>
  <div>
    <navCom :navIndex="1" :navArrs="navArrs" />
    <div class="main-content">
      <p class="main-nav">认证 ＞ 项目主体认证</p>
      <div class="main-box">
          <h4 class="content-title">新建项目</h4>
          <div class="content-divider"></div>
          <p class="content-tips">上传资料建立新项目</p>
          <div class="main-content-d">
            <stepCom :stepArr="step4" :stepIndex="2" />
            <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        选择评估方式
                    </div>
                </el-col>
            </el-row>
            <div class="content-list">
              <div class="content-item" @click="indexCheck(index)" :class="{'content-item-active': index === contentIndex}" v-for="(item, index) in arrs" :key="item.img">
                <div class="content-item-circle">
                  <img class="content-item-icon" :src="require(`../../assets/imgs/project/step-2-icon${item.img}.png`)" />
                </div>
                <p class="content-item-title">{{item.title}}</p>
                <p class="content-item-des">{{item.des}}</p>
              </div>
            </div>
            <div class="form-btns">
                <el-button class="content-btn content-btn-cancel" @click="preStep">上一步</el-button>
                <el-button class="content-btn content-btn-cancel">取消</el-button>
                <el-button class="content-btn content-btn-submit" type="primary" @click="nextStep">下一步</el-button>
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
import stepCom from '@/components/step.vue'
import { navArrs } from '@/data/nav.js';
import { step4 } from '@/data/step.js';

export default {
  name: 'Home',
  components: {
    navCom, footerCom, stepCom
  },
  data() {
    return {
      navArrs,
      step4,
      contentIndex: 1,
        arrs: [
          {
            title: '自评',
            des: '主体进行自我评估，不委托稳评公司。',
            img: '0'
          },
          {
            title: '指定承接',
            des: '指定稳评公司进行招标。',
            img: '1'
          },
          {
            title: '公开招标',
            des: '面对平台稳评公司公开招标。',
            img: '2'
          }
        ]
    }
  },
  methods: {
      nextStep() {
          this.$router.push('/project/step/3');
      },
      preStep() {
          this.$router.push('/project/step/1');
      },
      indexCheck(index) {
        this.contentIndex = index;
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
    .main-box {
        width: 100%;
        height: auto;
        background-color: #fff;
        padding: 0.4rem 1rem 0.5rem;
        margin-bottom: 0.8rem;
        box-sizing: border-box;
        .content-title {
            font-size: 0.2rem;
            font-family:FZZCHJW--GB1-0,FZZCHJW--GB1;
            font-weight:normal;
            color:rgba(42,130,228,1);
            line-height: 0.24rem;
            letter-spacing: 1px;
            text-align: center;
        }
        .content-divider {
            width: 0.4rem;
            height: 4px;
            background-color: #333;
            border-radius: 2px;
            margin: 0.15rem auto 0.3rem;
        }
        .content-tips {
            font-size: 0.14rem;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height: 0.2rem;
            text-align: center;
        }
        .main-content-d {
          width: 12rem;
          height: auto;
          margin: 0 auto;
          .content-list {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.5rem;
            .content-item {
              width: 2rem;
              height: 2.8rem;
              padding: 0.4rem;
              background:rgba(255,255,255,1);
              box-shadow:0px 2px 20px 0px rgba(0,0,0,0.06);
              border-radius: 6px;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              .content-item-circle {
                width: 1.06rem;
                height: 1.06rem;
                border-radius: 50%;
                background-color: #F1F1F1;
                display: flex;
                justify-content: center;
                align-items: center;
                .content-item-icon {
                  width: 0.5rem;
                  height: 0.5rem;
                }
              }
              .content-item-title {
                font-size: 0.24rem;
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height: 0.34rem;
                letter-spacing:1px;
                margin: 0.2rem 0;
              }
              .content-item-des {
                font-size: 0.16rem;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(153,153,153,1);
                line-height: 0.24rem;
              }
            }
            .content-item-active {
              border: 1px solid #2A82E4;
            }
          }
        }
    }
  }
</style>>

<style>
    .el-form-item__label {
        color: #333;
        font-size: 0.16rem;
    }
    .el-upload--picture-card {
        width: 1.35rem;
        height: 0.86rem;
        line-height: 0.86rem;
    }
    .el-upload--picture-card i {
        color: rgb(76, 149, 255);
        font-weight: bolder;
    }
    .el-select {
        width: 100%;
    }
</style>
