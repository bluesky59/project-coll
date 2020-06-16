<template>
    <div>
        <navCom :navIndex="1" :navArrs="managerNavArrs" />
        <div class="main-container">
            <p class="main-nav">认证 ＞ 项目主体认证</p>
            <div class="main-content">
                <searchCom 
                    :isShowBtn="false" 
                    placeholder="输入您要查看的项目"/>
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
                            <el-col :span="5">项目联系人： 杨大川
                                <img class="main-item-phone" src="../../assets/imgs/phone-icon.png" />
                            </el-col>
                            <el-col :span="4" :offset="5">
                                <el-button class="trans-btn" @click="skipHandle">查看</el-button>
                            </el-col>
                        </el-row>
                        </div>
                    </div>
                </div>
                <pageCom />
            </div>
        </div>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import pageCom from '@/components/page.vue'
import searchCom from '@/components/search.vue'
import { managerNavArrs } from '@/data/nav.js';
export default {
    components: {
        navCom, footerCom, pageCom, searchCom
    },
    data() {
        return {
            managerNavArrs,
            tabsIndex: 0,
            tagArrs: [
                {
                    label: '地区',
                    dataList: ['不限', '贵阳', '黔东南', '遵义', '毕节', '六盘水', '黔南'],
                    selIndex: 0
                },
                {
                    label: '类型',
                    dataList: ['不限', '拆迁', '新建'],
                    selIndex: 1
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
        skipHandle() {
            this.$router.push('/manager/project/detail/1');
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
                        .main-item-phone {
                            width: 0.2rem;
                            height: 0.2rem;
                            margin-left: 0.2rem;
                        }
                    }
                }
            }
        }
    }
</style>