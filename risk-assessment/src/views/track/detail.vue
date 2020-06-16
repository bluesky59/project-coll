<template>
    <div>
        <navCom :navIndex="5" :navArrs="navArrs" />
        <div class="main-container">
            <p class="main-nav">认证 ＞ 项目主体认证</p>
            <div class="main-content">
                <p class="main-content-p">项目名称：中意城投稳评项目</p>
                <p class="main-content-p">项目主体：中联稳评有限责任公司</p>
                <p class="main-content-p">项目详情：中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，项目立志于打造金阳新区中诚区域性购物中心。</p>
                <img class="main-img" src="../../assets/imgs/track-bg.png" />
                <div class="content-form-divider">
                    <span class="content-form-line"></span>
                    群众意见
                </div>
                <div class="suggest-list">
                    <div class="suggest-item" v-for="item in suggestArrs" :key="item.id">
                        <p class="suggest-title">{{item.title}}
                            <span class="suggest-date">{{item.date}}</span>
                        </p>
                        <p class="suggest-des">{{item.des}}</p>
                    </div>
                </div>
                <pageCom />
                <div class="content-form-divider">
                    <span class="content-form-line"></span>
                    意见反馈
                </div>
                <el-form class="content-form" ref="form" :model="form" label-width="80px">
                    <el-row>
                        <el-col :span="11">
                            <el-form-item label="意见标题">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="23">
                            <el-form-item label="意见反馈">
                                <el-input type="textarea" :rows="3" v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <div class="form-btns">
                    <el-button class="content-btn content-btn-submit" type="primary">提交意见</el-button>
                </div>
            </div>
        </div>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import pageCom from '@/components/page.vue'
import { navArrs } from '@/data/nav.js';
export default {
    components: {
        navCom, footerCom, pageCom
    },
    data() {
        return {
            navArrs,
            form: {},
            suggestArrs: [
                {
                    id: 0,
                    title: '施工太吵闹了！',
                    date: '2019-12-21   14：26：21',
                    des: '中国风险评估网管理机构是负责审查项目的机构！管理机构是负责审查项目的机构！管理机构是负。中国风险评估网管理机构是负责审查项目的机构！'
                },
                {
                    id: 1,
                    title: '施工太吵闹了！',
                    date: '2019-12-21   14：26：21',
                    des: '中国风险评估网管理机构是负责审查项目的机构！管理机构是负责审查项目的机构！管理机构是负。中国风险评估网管理机构是负责审查项目的机构！'
                },
                {
                    id: 2,
                    title: '还我血汗钱，还我性苦钱',
                    date: '2019-12-21   14：26：21',
                    des: '中国风险评估网管理机构是负责审查项目的机构！管理机构是负责审查项目的机构！管理机构是负。中国风险评估网管理机构是负责审查项目的机构！'
                },
                {
                    id: 3,
                    title: '还我血汗钱，还我性苦钱',
                    date: '2019-12-21   14：26：21',
                    des: '中国风险评估网管理机构是负责审查项目的机构！管理机构是负责审查项目的机构！管理机构是负。中国风险评估网管理机构是负责审查项目的机构！'
                },
                {
                    id: 4,
                    title: '还我血汗钱，还我性苦钱',
                    date: '2019-12-21   14：26：21',
                    des: '中国风险评估网管理机构是负责审查项目的机构！管理机构是负责审查项目的机构！管理机构是负。中国风险评估网管理机构是负责审查项目的机构！'
                }
            ]
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
            padding: 0.5rem 0.75rem;
            background-color: color;
            font-size: 0.18rem;
            color: #333;
            background-color: #fff;
            margin-bottom: 1rem;
            .main-content-p {
                letter-spacing: 1px;
                line-height: 0.36rem;
            }
            .main-img {
                width: 12.9rem;
                height: 3.76rem;
                margin: 0.2rem 0;
            }
            .content-form {
                margin-top: 0.3rem;
            }
            .suggest-list {
                margin: 0.3rem 0 0.12rem;
                .suggest-item {
                    border-bottom: 1px solid #D8D8D8;
                    height: 0.8rem;
                    padding: 0.1rem 0;
                    .suggest-title {
                        font-size: 0.18rem;
                        font-family:PingFangSC-Medium,PingFang SC;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        line-height: 0.46rem;
                        letter-spacing:1px;
                    }
                    .suggest-des {
                        font-size: 0.14rem;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        line-height: 0.2rem;
                    }
                    .suggest-date {
                        font-size: 0.14rem;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        margin-left: 0.25rem;
                    }
                }
            }
        }
    }
</style>