<template>
  <div>
    <navCom :navIndex="1" :navArrs="navArrs" />
    <div class="main-content">
      <p class="main-nav">认证 ＞ 项目主体认证</p>
      <div class="main-box">
          <h4 class="content-title">新建项目</h4>
          <div class="content-divider"></div>
          <p class="content-tips">上传资料建立新项目</p>
          <stepCom :stepArr="step4" :stepIndex="1" />
          <div class="content-d-container">
              <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        项目评估内容选择
                    </div>
                </el-col>
            </el-row>
            <div class="step-content">
                <div class="step-box" :class="{'step-box-check': index === contentIndex}" v-for="(item, index) in arrs" :key="item.img">
                    <div class="step-box-img" @click="indexCheck(index)">
                        <img class="step-box-icon" :src="require(`../../assets/imgs/project/step-1-icon${item.img}.png`)" />
                        <img v-show="index === contentIndex" class="step-box-check-icon" src="../../assets/imgs/project/check-icon.png" />
                    </div>
                    <p class="step-box-title">{{item.title}}</p>
                    <p class="step-box-des" v-for="i in item.des" :key="i">{{i}}</p>
                </div>
            </div>
            <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        自主编辑评估内容
                    </div>
                </el-col>
            </el-row>
            <div class="content-edit-box">
                <div class="content-edit-l">
                    <div class="content-edit-tag" v-for="item in labelArrs" :key="item">{{item}}</div>
                </div>
                <div class="content-edit-r">
                    <div class="content-edit-start">开始</div>
                    <div class="content-edit-circle"></div>
                    <div class="content-edit-circle"></div>
                    <div class="content-edit-step">资料整理
                        <img class="content-edit-close" src="../../assets/imgs/project/close-icon.png" />
                    </div>
                    <div class="content-edit-circle"></div>
                    <div class="content-edit-step">方案设计
                        <img class="content-edit-close" src="../../assets/imgs/project/close-icon.png" />
                    </div>
                    <div class="content-edit-circle"></div>
                    <div class="content-edit-circle"></div>
                    <div class="content-edit-start">开始</div>
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
                title: '标准稳评流程',
                des: ['完整的评估流程'],
                img: '0'
            },
            {
                title: '调查',
                des: ['调查方案整理', '调查数据收集'],
                img: '1'
            },
            {
                title: '分析论证',
                des: ['上传资料，分析论证', '或邀请专家评分'],
                img: '2'
            },
            {
                title: '监管跟踪',
                des: ['上传项目', '在平台进行监管跟踪'],
                img: '3'
            }
        ],
        labelArrs: ['资料整理', '方案设计', '数据调查', '分子论证', '跟踪监管']
    }
  },
  methods: {
      nextStep() {
          this.$router.push('/project/step/2');
      },
      preStep() {
          this.$router.push('/project/add');
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
    .content-d-container {
        width: 12rem;
        height: auto;
        margin: 0 auto;
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
    }
    .step-content {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 0.25rem;
        .step-box {
            width: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .step-box-img {
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                background-color: #F1F1F1;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                .step-box-icon {
                    width: 0.3rem;
                    height: 0.3rem;
                }
                .step-box-check-icon {
                    width: 0.3rem;
                    height: 0.3rem;
                    position: absolute;
                    bottom: 0;
                    left: 0.35rem;
                }
            }
            .step-box-title {
                font-size: 0.18rem;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height: 0.26rem;
                margin: 0.2rem 0 0.15rem;
            }
            .step-box-des {
                font-size: 0.14rem;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(153,153,153,1);
                line-height: 0.2rem;
            }
        }
        .step-box-check {
            .step-box-img {
                background-color: #2A82E4;
            }
            .step-box-title {
                font-weight: 500;
            }
        }
    }
    .content-edit-box {
        display: flex;
        justify-content: space-between;
        margin-top: 0.3rem;
        .content-edit-l:after {
            content: "";
            width: 1.6rem;
        }
        .content-edit-l {
            width: 6rem;
            height: 3.8rem;
            padding: 0.25rem;
            border: 1px dashed #979797;
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
            align-content: flex-start;
            flex-wrap: wrap;
            .content-edit-tag {
                width: 1.6rem;
                height: 0.4rem;
                border-radius: 0.2rem;
                border: 1px solid #5CA9FF;
                line-height: 0.4rem;
                font-size: 0.16rem;
                color: #333;
                text-align: center;
                margin-bottom: 0.25rem;
            }
        }
        .content-edit-r {
            width: 2.5rem;
            height: 3.8rem;
            padding: 0.25rem;
            border: 1px dashed #979797;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            .content-edit-start {
                width: 1.2rem;
                height: 0.4rem;
                border-radius: 0.2rem;
                background-color: #5CA9FF;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.16rem;
                color: #fff;
                margin-bottom: 0.2rem;
            }
            .content-edit-circle {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #5CA9FF;
                margin-bottom: 0.12rem;
            }
            .content-edit-step {
                width: 1.5rem;
                height: 0.4rem;
                border-radius: 0.2rem;
                border: 1px solid #5CA9FF;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.16rem;
                color: #666;
                margin-bottom: 0.2rem;
                .content-edit-close {
                    width: 0.13rem;
                    height: 0.13rem;
                    margin-left: 0.2rem;
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
