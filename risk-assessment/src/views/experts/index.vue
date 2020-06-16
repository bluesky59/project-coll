<template>
  <div>
    <navCom :navIndex="0" :navArrs="expertsNavArrs" />
    <div class="main-content">
      <p class="main-nav">认证 ＞ 项目主体认证</p>
      <div class="main-container">
          <div class="home-company">
              <div class="company-info">
                <div class="item-title">
                  <img class="item-title-icon" src="../../assets/imgs/project/p-img.png" />
                  <div class="item-title-txt">
                    <div class="item-title-text item-title-text-t">
                      詹建明(专家)
                      <img class="item-title-locate" src="../../assets/imgs/project/m-icon.png" />
                      <span class="company-edit">修改资料</span>
                    </div>
                    <div class="item-title-text">
                      <img class="item-title-m" src="../../assets/imgs/project/locate-icon.png" />
                      <span class="company-l">贵阳</span>
                      大钟稳评有限责任公司
                    </div>
                  </div>
                </div>
              </div>
              <div @click="isShowDialog = true" class="company-action" v-for="item in actionArrs" :key="item.lable">
                  <img class="company-action-img" :src="require(`../../assets/imgs/company/c-${item.img}.png`)" />
                  {{item.label}}
              </div>
          </div>
          <div class="home-company-project">
            <div class="home-company-p" v-for="item in pArrs" :key="item.id">
              <div class="home-company-title">
                参与项目
              </div>
              <div class="home-company-content">
                <p class="company-content-name">{{item.title}}</p>
                <p class="company-content-des">{{item.des}}</p>
                <div class="company-content-more">
                  <div class="company-content-more-pics">
                    <img class="company-more-pic company-more-pic0" src="../../assets/imgs/company/p0.png" />
                    <img class="company-more-pic company-more-pic1" src="../../assets/imgs/company/p1.png" />
                    <img class="company-more-pic company-more-pic2" src="../../assets/imgs/company/p2.png" />
                    <img class="company-more-pic company-more-pic3" src="../../assets/imgs/company/p3.png" />
                    <img class="company-more-pic company-more-pic4" src="../../assets/imgs/company/p4.png" />
                  </div>
                  <span class="company-content-more-t">查看详情</span>
                </div>
              </div>
            </div>
          </div>
          <div class="home-project-list">
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
    </div>
    <footerCom />
    <el-dialog
      title="打分邀请"
      :visible.sync="isShowDialog"
      width="5rem"
      class="dialog-container"
      center>
      <div class="dialog-content">
        <p class="dialog-title">中城宜都项目</p>
        <p class="dialog-title">邀请您参与专家打分</p>
        <p class="dialog-detail">中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，项…项目占地面积33万平方米，项…</p>
        <p class="dialog-footer">项目主体：大钟城投有限公司</p>
        <p class="dialog-footer">稳评公司：大钟稳评有限公司</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="dislog-btn" @click="isShowDialog = false">查看详情</el-button>
      </span>
    </el-dialog>
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
        expertsNavArrs,
        isShowDialog: false,
      pArrs: [
        {
          title: '中诚宜都测评项',
          count: 6,
          total: 8,
          id: 0,
          des: '中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，项…项目占地面积33万平方米，项…'
        },
        {
          title: '中诚宜都测评项',
          count: 6,
          total: 8,
          id: 1,
          des: '中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，项…项目占地面积33万平方米，项…'
        },
        {
          title: '中诚宜都测评项',
          count: 6,
          total: 8,
          id: 2,
          des: '中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，项…项目占地面积33万平方米，项…'
        },
        {
          title: '中诚宜都测评项',
          count: 6,
          total: 8,
          id: 3,
          des: '中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，项…项目占地面积33万平方米，项…'
        }
      ],
        actionArrs: [
            {
                label: '项目打分',
                img: '0'
            }
        ],
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
            label: '评分任务',
            value: '0'
          },
          {
            label: '项目审查',
            value: '1'
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
      margin: 0.1rem 0 1rem;
      .main-tabs {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 0.4rem;
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
      .home-company {
          height: 1.4rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .company-info {
              width: 6.1rem;
              height: 0.6rem;
              background-color: #fff;
              padding: 0.4rem 0.5rem;
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
              cursor: pointer;
              .company-action-img {
                  width: 0.4rem;
                  height: 0.4rem;
                  margin-bottom: 6px;
              }
          }
      }
      .home-company-project {
          height: 3.9rem;
          margin: 0.2rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .home-company-p {
            width: 3.45rem;
            height: 100%;
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 20px 0px rgba(0,0,0,0.06);
            .home-company-title {
              height: 0.7rem;
              line-height: 0.7rem;
              border-bottom: 1px solid #D8D8D8;
              text-align: center;
              font-size: 0.16rem;
              color: #333;
              .title-spe {
                font-size: 0.24rem;
                color: #999;
              }
              .title-count {
                color: #FF0024;
              }
            }
            .home-company-content {
              padding: 0.3rem;
              .company-content-name {
                font-size: 0.2rem;
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height: 0.3rem;
                letter-spacing:2px;
                margin-bottom: 0.25rem;
              }
              .company-content-des {
                font-size: 0.16rem;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(153,153,153,1);
                line-height: 0.28rem;
                letter-spacing:1px;
              }
              .company-content-more {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #5CA9FF;
                font-size: 0.16rem;
                text-decoration: underline;
                height: 0.62rem;
                margin-top: 0.12rem;
                .company-content-more-t {
                  cursor: pointer;
                }
                .company-content-more-pics {
                  width: auto;
                  height: 0.62rem;
                  position: relative;
                  .company-more-pic {
                    width: 0.62rem;
                    height: 0.62rem;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                  }
                  .company-more-pic1 {
                    left: 0.31rem;
                    z-index: 2;
                  }
                  .company-more-pic2 {
                    left: 0.62rem;
                    z-index: 3;
                  }
                  .company-more-pic3 {
                    left: 0.93rem;
                    z-index: 4;
                  }
                  .company-more-pic4 {
                    left: 1.24rem;
                    z-index: 5;
                  }
                }
              }
            }
          }
      }
      .home-project-list {
          background-color: #fff;
          padding: 0.3rem;
      }
    }
  }
  .dialog-container {
    .dialog-content {
        font-size: 0.16rem;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height: 0.28rem;
        letter-spacing:1px;
      .dialog-title {
        font-size:0.2rem;
        text-align: center;
      }
      .dialog-detail {
        color:rgba(153,153,153,1);
        margin: 0.4rem 0;
      }
    }
    .dislog-btn {
      width: 1.6rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      color: #666;
      font-size: 0.16rem;
      border: 1px solid #5CA9FF;
      line-height: 0.1rem;
    }
  }
</style>

<style>
  .el-input__inner {
    border-color: transparent;
  }
  .el-dialog__header {
    padding: 0;
    margin: 0 0.2rem;
    border-bottom: 1px solid #D8D8D8;
  }
  .el-dialog__title {
    font-size: 0.2rem;
    color: #666;
  }
  .el-dialog__footer {
    padding: 0;
  }
</style>
