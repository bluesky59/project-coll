<template>
    <div>
        <navCom :navIndex="1" :navArrs="expertsNavArrs" />
        <div class="main-container">
            <p class="main-nav">认证 ＞ 项目主体认证</p>
            <div class="main-content">
                <div class="main-title">
                    <div class="company-info">
                        <div class="company-txt">
                            <h5 class="company-name">万科云崖典城商品房用地稳评项目</h5>
                            <p class="company-text">项目编号：GZ-GY-NM-BMH-JS-18293</p>
                            <p class="company-text">承接方：中联稳评公司</p>
                            <p class="company-text">承接时间：2019-09-11</p>
                        </div>
                        <div class="company-edit">
                            <img class="company-edit-img" src="../../assets/imgs/company/c-2.png" />
                            项目资料
                        </div>
                    </div>
                </div>
                <div class="main-main">
                    <div class="content-form-divider content-form-divider-spe">
                        <span class="content-form-line"></span>
                        分析意见参考
                    </div>
                    <el-table
                        :data="tableData"
                        :span-method="objectSpanMethod"
                        border
                        small
                        style="width: 80%; margin: 20px auto 0">
                        <el-table-column
                            prop="title"
                            label="title">
                        </el-table-column>
                        <el-table-column
                            prop="des"
                            label="des"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="score"
                            label="score"
                            width="180">
                        </el-table-column>
                    </el-table>
                    <div class="content-form-divider content-form-divider-spe">
                        <span class="content-form-line"></span>
                        打分资料参考
                    </div>
                    <div class="main-score-info">
                        <img class="main-score-icon" src="../../assets/imgs/document-icon.png" />
                        <div class="main-score-txt">
                            <p class="score-title">项目打分表2020.zip(182.M)</p>
                            <p class="score-date">（2020-01-11）</p>
                        </div>
                    </div>
                    <div class="main-score-info">
                        <img class="main-score-icon" src="../../assets/imgs/document-icon.png" />
                        <div class="main-score-txt">
                            <p class="score-title">项目打分表2020.zip(182.M)</p>
                            <p class="score-date">（2020-01-11）</p>
                        </div>
                    </div>
                    <div class="content-form-divider content-form-divider-spe">
                        <span class="content-form-line"></span>
                        专家打分
                    </div>
                    <el-form class="content-form content-form-spe" ref="form" :model="form" label-width="80px">
                        <el-row>
                            <el-col :span="24">
                                <el-form-item label="意见反馈">
                                    <el-input type="textarea" :rows="3" v-model="form.name"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="5">
                                <el-form-item  label="">
                                    <el-button class="linear-btn">上传打分表</el-button>
                                </el-form-item>    
                            </el-col>
                            <el-col :span="5">
                                <el-form-item  label="">
                                    <el-button class="linear-btn">上传其他资料</el-button>
                                </el-form-item> 
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
            </div>
        </div>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import { expertsNavArrs } from '@/data/nav.js';
export default {
    components: {
        navCom, footerCom
    },
    data() {
        return {
            expertsNavArrs,
            form: {},
            tableData: [
                {
                    title: '本项目可能存在的风险因素：项目资金筹措与保障引发的风险',
                    des: '风险概率',
                    score: '0.7'
                },
                {
                    title: '本项目可能存在的风险因素：项目资金筹措与保障引发的风险',
                    des: '影响程度',
                    score: '0.3'
                },
                {
                    title: '本项目可能存在的风险因素：项目资金筹措与保障引发的风险',
                    des: '风险概率',
                    score: '0.7'
                },
                {
                    title: '本项目可能存在的风险因素：项目资金筹措与保障引发的风险',
                    des: '影响程度',
                    score: '0.3'
                },
                {
                    title: '本项目可能存在的风险因素：项目资金筹措与保障引发的风险',
                    des: '风险概率',
                    score: '0.7'
                },
                {
                    title: '本项目可能存在的风险因素：项目资金筹措与保障引发的风险',
                    des: '影响程度',
                    score: '0.3'
                },
                {
                    title: '本项目可能存在的风险因素：项目资金筹措与保障引发的风险',
                    des: '风险概率',
                    score: '0.7'
                },
                {
                    title: '本项目可能存在的风险因素：项目资金筹措与保障引发的风险',
                    des: '影响程度',
                    score: '0.3'
                },
                {
                    title: '本项目可能存在的风险因素：项目资金筹措与保障引发的风险',
                    des: '风险概率',
                    score: '0.7'
                },
                {
                    title: '本项目可能存在的风险因素：项目资金筹措与保障引发的风险',
                    des: '影响程度',
                    score: '0.3'
                }
            ]
        }
    },
    mounted() {
        this.$nextTick(() => {
            document.querySelector('.el-table__header').getElementsByTagName('thead')[0].style.display = 'none';
        })
    },
    methods: {
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
            if (rowIndex % 2 === 0) {
                return {
                rowspan: 2,
                colspan: 1
                };
            } else {
                return {
                rowspan: 0,
                colspan: 0
                };
            }
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .main-container {
        width: 14.4rem;
        height: auto;
        margin: 0 auto 1rem;
        .main-content {
            padding: 0.2rem 0.5rem;
            background-color: #fff;
            .main-title {
                height: 2.1rem;
                border-bottom: 1px solid #D8D8D8;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .company-info {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    height: 2.1rem;
                    .company-txt {
                        height: 2.1rem;
                        margin-right: 1rem;
                        .company-name {
                            font-size: 0.2rem;
                            font-family:PingFangSC-Semibold,PingFang SC;
                            font-weight:600;
                            color:rgba(51,51,51,1);
                            line-height: 0.28rem;
                            letter-spacing:1px;
                        }
                        .company-text {
                            font-size: 0.16rem;
                            font-family:PingFangSC-Regular,PingFang SC;
                            font-weight:400;
                            color:rgba(51,51,51,1);
                            line-height: 0.3rem;
                        }
                    }
                    .company-edit {
                        width: 1rem;
                        height: 1rem;
                        border: 1px solid #5CA9FF;
                        border-radius: 4px;
                        margin-right: 0.4rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        font-size: 0.16rem;
                        color: #333;
                        .company-edit-img {
                            width: 0.34rem;
                            height: 0.27rem;
                            margin-bottom: 5px;
                        }
                    }
                }
            }
        }
        .main-score-info {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 0.38rem;
            margin-top: 0.3rem;
            .main-score-icon {
                width: 0.31rem;
                height: 0.38rem;
                margin-right: 0.3rem;
            }
            .main-score-txt {
                .score-title {
                    font-size: 0.16rem;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height: 0.22rem;
                }
                .score-date {
                    font-size: 0.14rem;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(153,153,153,1);
                    line-height: 0.2rem;
                }
            }
        }
        .content-form-spe {
            margin-top: 0.2rem;
        }
    }
</style>