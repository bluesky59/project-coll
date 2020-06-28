<template>
  <div>
    <navCom :navIndex="1" :navArrs="navArrs" />
    <div class="main-content">
      <p class="main-nav">认证 ＞ 项目主体认证</p>
      <div class="main-box">
          <h4 class="content-title">新建项目</h4>
          <div class="content-divider"></div>
          <p class="content-tips">上传资料建立新项目</p>
          <stepCom :stepArr="step4" :stepIndex="2" />
          <div class="main-query">
            <img class="main-query-icon" src="../../assets/imgs/search-icon.png" />
            <el-input placeholder="输入关键字搜索企业专家"></el-input>
          </div>
          <el-row>
            <el-col :span="23">
                <div class="content-form-divider">
                    <span class="content-form-line"></span>
                    推荐公司
                </div>
            </el-col>
        </el-row>
        <div class="content-list">
          <div class="content-item" v-for="item in conpanyArrs" :key="item.id">
            <div class="item-title">
              <img class="item-title-icon" src="../../assets/imgs/project/p-img.png" />
              <div class="item-title-txt">
                <div class="item-title-text item-title-text-t">
                  {{item.name}}
                  <img class="item-title-locate" src="../../assets/imgs/project/m-icon.png" />
                </div>
                <div class="item-title-text">
                  <div>
                    <img class="item-title-m" src="../../assets/imgs/project/locate-icon.png" />
                    {{item.location}}
                  </div>
                  总承接：{{item.num}}单
                </div>
              </div>
            </div>
            <div class="item-des">{{item.des}}</div>
            <div class="item-btns">
              <el-button class="item-btn">查看详情</el-button>
              <el-button class="item-btn">邀请</el-button>
            </div>
          </div>
        </div>
        <el-row>
            <el-col :span="23">
                <div class="content-form-divider">
                    <span class="content-form-line"></span>
                    已邀请公司
                </div>
            </el-col>
        </el-row>
        <div class="content-list">
          <div class="content-item" v-for="item in conpanyArrs" :key="item.id">
            <div class="item-title">
              <img class="item-title-icon" src="../../assets/imgs/project/p-img.png" />
              <div class="item-title-txt">
                <div class="item-title-text item-title-text-t">
                  {{item.name}}
                  <img class="item-title-locate" src="../../assets/imgs/project/m-icon.png" />
                </div>
                <div class="item-title-text">
                  <div>
                    <img class="item-title-m" src="../../assets/imgs/project/locate-icon.png" />
                    {{item.location}}
                  </div>
                  总承接：{{item.num}}单
                </div>
              </div>
            </div>
            <div class="item-des">{{item.des}}</div>
            <div class="item-btns">
              <el-button class="item-btn">查看详情</el-button>
              <el-button class="item-btn">邀请</el-button>
            </div>
          </div>
        </div>
        <div class="form-btns">
            <el-button class="content-btn content-btn-cancel" @click="preStep">上一步</el-button>
            <el-button class="content-btn content-btn-cancel">取消</el-button>
            <el-button class="content-btn content-btn-submit" type="primary" @click="nextStep">确定</el-button>
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
        conpanyArrs: [
          {
            name: '大钟稳评有限公司',
            location: '贵阳',
            num: '21',
            des: '大钟稳评有限公司成立于1999年，注册资金2000万，从事稳评行业已有20余年，经验丰富',
            id: 0
          },
          {
            name: '大钟稳评有限公司',
            location: '贵阳',
            num: '21',
            des: '大钟稳评有限公司成立于1999年，注册资金2000万，从事稳评行业已有20余年，经验丰富',
            id: 1
          },
          {
            name: '大钟稳评有限公司',
            location: '贵阳',
            num: '21',
            des: '大钟稳评有限公司成立于1999年，注册资金2000万，从事稳评行业已有20余年，经验丰富',
            id: 2
          }
        ]
    }
  },
  methods: {
      nextStep() {
          this.$router.push('/project');
      },
      preStep() {
          this.$router.push('/project/step/2');
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
        .main-query {
          width: 100%;
          height: 0.6rem;
          line-height: 0.6rem;
          border-bottom: 1px solid #D8D8D8;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 0.3rem;
          .main-query-icon {
            width: 0.23rem;
            height: 0.24rem;
            margin-right: 0.1rem;
          }
        }
        .content-form-divider {
          font-size: 0.16rem;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height:0.22rem;
          display: flex;
          margin-bottom: 0.3rem;
          .content-form-line {
              width: 4px;
              height: 0.22rem;
              background-color: #2A82E4;
              margin-right: 0.3rem;
              display: inline-block;
          }
      }
      .content-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.3rem;
        .content-item {
          width: 3rem;
          height: 2rem;
          padding: 0.4rem 0.3rem;
          background:rgba(255,255,255,1);
          box-shadow:0px 0px 10px 0px rgba(0,0,0,0.06);
          border:1px solid rgba(241,241,241,1);
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
                width: 1.8rem;
                height: 0.3rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 0.18rem;
                color: #666;
                .item-title-locate {
                  width: 0.2rem;
                  height: 0.2rem;
                }
                .item-title-m {
                  width: 0.16rem;
                  height: 0.2rem;
                }
              }
              .item-title-text-t {
                color: #333;
              }
            }
          }
          .item-des {
            font-size: 0.14rem;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height: 0.24rem;
            margin-top: 0.2rem;
          }
          .item-btns {
            display: flex;
            justify-content: space-between;
            margin-top: 0.2rem;
            .item-btn {
              width: 1.4rem;
              height: 0.4rem;
              border-radius: 0.2rem;
              text-align: center;
              line-height: 0.1rem;
              border: 1px solid #5CA9FF;
              font-size: 0.16rem;
              color: #666;
            }
          }
        }
      }
    }
  }
</style>>

<style>
    .el-input__inner {
      border-color: transparent;
    }
</style>
