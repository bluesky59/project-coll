<template>
    <div>
        <navCom :navIndex="6" :navArrs="navArrs" :isSpe="true" backgroundProps="#0A0339" />
        <div class="main-container">
            <div class="main-content">
                <p class="main-title">发法律法规库（累计数据量）</p>
                <div class="main-nums">
                    <div class="main-num">3</div>
                    <div class="main-num">5</div>
                    <span class="main-d">,</span>
                    <div class="main-num">1</div>
                    <div class="main-num">0</div>
                    <div class="main-num">2</div>
                </div>
                <div class="main-statistics">
                    <div class="main-statistic" v-for="item in dataList" :key="item.label">
                        <p class="main-statistic-label">{{item.label}}</p>
                        <p class="main-statistic-val">{{item.val}}</p>
                        <borderCom />
                    </div>
                </div>
                <progressCom :isSpe="true" backgroundProps="linear-gradient(180deg,rgba(16,100,216,0) 0%,rgba(16,100,216,0.3) 100%)" />
                <tabsCom :tabsIndex="0" :isSpe="true" />
                <div class="main-data">
                    <lawCom :isSpe="true" />
                    <borderCom />
                </div>
            </div>
        </div>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import borderCom from '@/components/border.vue'
import progressCom from './common/progress'
import tabsCom from './common/tabs'
import lawCom from './law.vue'
import { navArrs } from '@/data/nav.js';
export default {
    components: {
        navCom, footerCom, progressCom, tabsCom, lawCom, borderCom
    },
    data() {
        return {
            navArrs,
            dataList: [
                {
                    label: '本月新增数量',
                    val: '3,123'
                },
                {
                    label: '国家级法律法规数',
                    val: '13,123'
                },
                {
                    label: '省级法律法规数',
                    val: '21,123'
                },
                {
                    label: '其它法律法规数',
                    val: '8,123'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .main-container {
        width: 100vw;
        height: auto;
        background:linear-gradient(270deg,rgba(7,38,56,1) 0%,rgba(16,22,82,1) 100%);
        box-shadow:0px 2px 20px 0px rgba(0,0,0,0.06);
        .main-content {
            width: 14.36rem;
            padding: 0.5rem 0 1.3rem;
            margin: 0 auto;
            .main-data {
                background:linear-gradient(180deg,rgba(16,100,216,0) 0%,rgba(16,100,216,0.3) 100%);
                box-shadow:0px 2px 20px 0px rgba(0,0,0,0.06);
                border:1px solid rgba(48,76,143,1);
                padding: 0.5rem;
                position: relative;
            }
            .main-title {
                font-size: 0.24rem;
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:0.34rem;
            }
            .main-nums {
                display: flex;
                justify-content: flex-start;
                margin-top: 0.3rem;
                font-size: 0.7rem;
                font-family:BebasNeue;
                color:rgba(255,255,255,1);
                text-align: center;
                line-height: 0.8rem;
                .main-num {
                    width: 0.6rem;
                    height: 0.8rem;
                    margin-right: 0.15rem;
                    background:linear-gradient(180deg,rgba(0,78,243,1) 0%,rgba(42,130,228,1) 100%);
                }
            }
            .main-statistics{
                display: flex;
                justify-content: space-between;
                margin: 0.4rem 0 0.22rem;
                .main-statistic {
                    width: 2.7rem;
                    height: 1.1rem;
                    padding: 0.3rem;
                    background:linear-gradient(360deg,rgba(16,100,216,0.3) 0%,rgba(18,100,236,0) 100%);
                    border:1px solid rgba(48,76,143,1);
                    position: relative;
                    .main-statistic-label {
                        font-size: 0.2rem;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height: 0.28rem;
                    }
                    .main-statistic-val {
                        font-size: 0.5rem;
                        font-family:BebasNeue;
                        color:rgba(255,255,255,1);
                        line-height: 0.6rem;
                        letter-spacing:0.1rem;
                    }
                }
            }
        }
    }
</style>