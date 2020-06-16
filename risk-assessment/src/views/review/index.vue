<template>
    <div>
        <navCom :navIndex="3" :navArrs="navArrs" />
        <div class="main-container">
            <p class="main-nav">认证 ＞ 项目主体认证</p>
            <div class="main-content">
                <el-button class="linear-btn" type="primary" @click="addHandle">新建审查</el-button>
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
                            <el-col :span="4" :offset="10">
                                <el-button class="trans-btn" @click="inviteHandle">申请审查</el-button>
                            </el-col>
                        </el-row>
                        </div>
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
import { navArrs } from '@/data/nav.js';
export default {
    components: {
        navCom, footerCom
    },
    data() {
        return {
            navArrs,
            tabsIndex: 0,
            tabsArrs: [
                {
                    label: '可报备项目',
                    value: '0'
                },
                {
                    label: '报备中项目',
                    value: '1'
                },
                {
                    label: '已通过项目',
                    value: '2'
                }
            ],
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
            ]
        }
    },
    methods: {
        tabsSwitch(index) {
            this.tabsIndex = index;
        },
        addHandle() {
            this.$router.push('/review/add');
        },
        inviteHandle() {
            this.$router.push('/review/invite');
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
            padding: 0 0.5rem 0.5rem;
            background-color: #fff;
            margin-bottom: 1rem;
            .main-tabs {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
                height: 0.4rem;
                margin-top: 0.4rem;
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
        }
    }
</style>