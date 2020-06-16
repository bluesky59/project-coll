<template>
    <div>
        <navCom :navIndex="1" :navArrs="navArrs" />
        <detailHeader />
        <div class="content-form">
            <div class="content-form-divider content-form-divider-spe">
                <span class="content-form-line"></span>
                选择跟踪主体
            </div>
            <div class="main-query">
                <img class="main-query-icon" src="../../assets/imgs/search-icon.png" />
                <el-input placeholder="输入关键字搜索企业专家"></el-input>
            </div>
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
            <div class="content-form-divider">
                <span class="content-form-line"></span>
                选择监管单位
            </div>
            <searchCom 
                    :tagArrs="tagArrs"
                    :isShowBtn="false"
                    placeholder="输入关键字搜索部门" />
            <div class="main-list">
                <div class="main-item" v-for="item in arrs" :key="item.id">
                    <img class="main-item-img" src="../../assets/imgs/project/p-img.png" />
                    <div class="main-item-txt">
                        <p class="main-item-text">{{item.label}}</p>
                        <p class="main-item-text main-item-text-d">
                            <img class="main-item-locate" src="../../assets/imgs/project/locate-icon.png" />
                            {{item.location}}</p>
                    </div>
                    <div class="main-item-plus">+</div>
                </div>
            </div>
            <div class="content-form-divider content-form-divider-spe">
                <span class="content-form-line"></span>
                已添加监管单位
            </div>
            <div class="main-list">
                <div class="main-item" v-for="item in arrsHas" :key="item.id">
                    <img class="main-item-img" src="../../assets/imgs/project/p-img.png" />
                    <div class="main-item-txt">
                        <p class="main-item-text">{{item.label}}</p>
                        <p class="main-item-text main-item-text-d">
                            <img class="main-item-locate" src="../../assets/imgs/project/locate-icon.png" />
                            {{item.location}}</p>
                    </div>
                    <div class="main-item-plus main-item-plus-spe">+</div>
                </div>
            </div>
            <div class="form-btns form-btns-spe">
                <el-button class="content-btn content-btn-cancel">上一步</el-button>
                <el-button class="content-btn content-btn-submit" type="primary">完结项目</el-button>
            </div>
        </div>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import detailHeader from './detail';
import searchCom from '@/components/search.vue'
import { navArrs } from '@/data/nav.js';
export default {
    data() {
        return {
            navArrs,
            tagArrs: [
                {
                    label: '地区',
                    dataList: ['不限', '贵阳', '黔东南', '遵义', '毕节', '六盘水', '黔南'],
                    selIndex: 0
                },
                {
                    label: '类型',
                    dataList: ['不限', '维稳办', '拆迁办'],
                    selIndex: 1
                }
            ],
            arrsHas: [
                {
                    label: '贵阳市维稳办',
                    id: 1,
                    location: '贵阳'
                }
            ],
            arrs: [
                {
                    label: '贵阳市维稳办',
                    id: 1,
                    location: '贵阳'
                },
                {
                    label: '贵阳市维稳办',
                    id: 2,
                    location: '贵阳'
                },
                {
                    label: '贵阳市维稳办',
                    id: 3,
                    location: '贵阳'
                },
                {
                    label: '贵阳市维稳办',
                    id: 4,
                    location: '贵阳'
                },
                {
                    label: '贵阳市维稳办',
                    id: 5,
                    location: '贵阳'
                },
                {
                    label: '贵阳市维稳办',
                    id: 6,
                    location: '贵阳'
                }
            ],
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
    components: { detailHeader, navCom, footerCom, searchCom }
}
</script>

<style scoped lang="scss">
    .content-form {
        padding: 0.2rem 1.6rem;
        height: auto;
        margin: 0 auto 1rem;
        background-color: #fff;
        width: 11.2rem;
        .main-list {
            width: 11.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            margin: 0 auto;
            .main-item {
                width: 2.7rem;
                height: 1.2rem;
                padding: 0 0.2rem;
                background:rgba(255,255,255,1);
                box-shadow:0px 0px 10px 0px rgba(0,0,0,0.06);
                border:1px solid rgba(241,241,241,1);
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-bottom: 0.4rem;
                .main-item-img {
                    width: 0.6rem;
                    height: 0.6rem;
                }
                .main-item-txt {
                    font-size: 0.18rem;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height: 0.3rem;
                    margin: 0 0.1rem;
                    .main-item-locate {
                        width: 0.16rem;
                        height: 0.2rem;
                        margin-right: 4px;
                    }
                }
                .main-item-text-d {
                    color: #666;
                }
                .main-item-plus {
                    color: #5CA9FF;
                    font-size: 0.58rem;
                    font-weight: bolder;
                }
                .main-item-plus-spe {
                    transform: rotate(45deg);
                }
            }
        }
        .content-form-divider-spe {
            margin-top: 0;
            margin-bottom: 0.4rem;
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
      .form-btns-spe {
          margin-top: 0rem;
          margin-bottom: 0.3rem;
      }
    }
</style>>