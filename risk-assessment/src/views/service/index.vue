<template>
    <div>
        <navCom :navIndex="2" :navArrs="navArrs" />
        <div class="service-container">
            <p class="main-nav">认证 ＞ 项目主体认证</p>
            <div class="service-tabs">
                <div @click="tabsHandle(index)" class="service-tab" :class="{'service-tab-active': tabsIndex === index}" v-for="(item, index) in tabsArrs" :key="item.label">{{item.label}}</div>
            </div>
            <div class="service-query">
                <searchCom :tagArrs="tagArrs" />
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
                </div>
                </div>
        </div>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import searchCom from '@/components/search.vue'
import { navArrs } from '@/data/nav.js';
export default {
    components: {
        navCom, footerCom, searchCom
    },
    data() {
        return {
            navArrs,
            tagArrs: [
                {
                    label: '企业地区',
                    dataList: ['不限', '贵阳', '黔东南', '遵义', '毕节', '六盘水', '黔南'],
                    selIndex: 0
                },
                {
                    label: '企业规模',
                    dataList: ['不限', '100万以下', '100万～1000万', '1000万以上'],
                    selIndex: 1
                }
            ],
            tabsIndex: 0,
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
                },
                    {
                    name: '大钟稳评有限公司',
                    location: '贵阳',
                    num: '21',
                    des: '大钟稳评有限公司成立于1999年，注册资金2000万，从事稳评行业已有20余年，经验丰富',
                    id: 3
                },
                {
                    name: '大钟稳评有限公司',
                    location: '贵阳',
                    num: '21',
                    des: '大钟稳评有限公司成立于1999年，注册资金2000万，从事稳评行业已有20余年，经验丰富',
                    id: 4
                },
                {
                    name: '大钟稳评有限公司',
                    location: '贵阳',
                    num: '21',
                    des: '大钟稳评有限公司成立于1999年，注册资金2000万，从事稳评行业已有20余年，经验丰富',
                    id: 5
                },
                {
                    name: '大钟稳评有限公司',
                    location: '贵阳',
                    num: '21',
                    des: '大钟稳评有限公司成立于1999年，注册资金2000万，从事稳评行业已有20余年，经验丰富',
                    id: 6
                },
                {
                    name: '大钟稳评有限公司',
                    location: '贵阳',
                    num: '21',
                    des: '大钟稳评有限公司成立于1999年，注册资金2000万，从事稳评行业已有20余年，经验丰富',
                    id: 7
                }
            ],
            tabsArrs: [
                {
                    label: '服务企业',
                    value: 0
                },
                {
                    label: '行业专家',
                    value: 1
                },
                {
                    label: '招标大厅',
                    value: 2
                },
            ]
        }
    },
    methods: {
        tabsHandle(index) {
            this.tabsIndex = index;
        }
    }
}
</script>

<style scoped lang="scss">
    .service-container {
        width: 14.4rem;
        height: auto;
        margin: 0 auto;
        .service-tabs {
            height: 0.6rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .service-tab {
                font-size: 0.18rem;
                color: #999;
                height: 0.5rem;
                line-height: 0.5rem;
                margin-right: 0.7rem;
                cursor: pointer;
            }
            .service-tab-active {
                color: #333;
                border-bottom: 4px solid #5CA9FF;
                border-radius: 2px;
            }
        }
        .service-query {
            width: 100%;
            height: 2.5rem;
            background-color: #fff;
            margin: 0.3rem 0;
        }
        .content-list {
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            flex-wrap: wrap;
            padding-bottom: 0.8rem;
        .content-item {
          width: 25%;
          height: 2.4rem;
          padding: 0.4rem 0.3rem;
          background:rgba(255,255,255,1);
          box-shadow:0px 0px 10px 0px rgba(0,0,0,0.06);
          border:1px solid rgba(241,241,241,1);
          box-sizing: border-box;
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
        }
      }
    }
</style>