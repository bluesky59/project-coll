<template>
    <div>
        <navCom :navIndex="1" :navArrs="navArrs" />
        <div class="main-container">
            <p class="main-nav">认证 ＞ 项目主体认证</p>
            <div class="main-content">
                <h4 class="content-title">新建报备</h4>
                <div class="content-divider"></div>
                <p class="content-tips">上传资料建立新项目</p>
                <stepCom :stepArr="step3" :stepIndex="1" />
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
                    已添加报备单位
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
                    </div>
                </div>
                <div class="form-btns">
                    <el-button class="content-btn content-btn-cancel" @click="preStep">上一步</el-button>
                    <el-button class="content-btn content-btn-cancel">取消</el-button>
                    <el-button class="content-btn content-btn-submit" type="primary" @click="nextStep">提交报备</el-button>
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
import searchCom from '@/components/search.vue'
import { navArrs } from '@/data/nav.js';
import { step3 } from '@/data/step.js';
export default {
    components: {
        navCom, footerCom, stepCom, searchCom
    },
    data() {
        return {
            navArrs,
            step3,
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
            ]
        }
    },
    methods: {
        nextStep() {
            this.$router.push('/report');
        },
        preStep() {
            this.$router.push('/report/add');
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
            padding: 0.5rem 2rem;
            margin: 0 auto 1rem;
            background-color: #fff;
            .main-list {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                .main-item {
                    width: 2.5rem;
                    height: 1.2rem;
                    padding: 0 0.3rem;
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
                        margin: 0 0.2rem;
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
                }
            }
            .content-form-divider-spe {
                margin-top: 0;
                margin-bottom: 0.4rem;
            }
        }
    }
</style>