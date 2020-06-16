<template>
    <div>
        <navCom :navIndex="1" :navArrs="navArrs" />
        <detailHeader />
        <div class="content-form">
            <div class="project-report">
                <div class="project-report-list">
                    <div class="project-report-item" v-for="item in arrs" :key="item">
                        <div class="project-report-box"></div>
                        {{item}}
                    </div>
                </div>
                <el-button class="set-btn" type="primary">设置封面</el-button>
            </div>
            <div class="form-detail-btns">
                <el-button class="detail-content-btn detail-content-btn-spe">上一步</el-button>
                <el-button class="detail-content-btn" type="primary">下载报告</el-button>
                <el-button class="detail-content-btn" type="primary">打印报告</el-button>
                <el-button class="detail-content-btn" type="primary">申请审核</el-button>
                <el-button class="detail-content-btn" type="primary">完结项目</el-button>
            </div>
        </div>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import detailHeader from './detail';
import { navArrs } from '@/data/nav.js';
export default {
    data() {
        return {
            navArrs,
            arrs: ['封面/封底', '目录', '项目概述(10P)', '调查数据(8P)', '分析评估(15P)', '资料附件(20P)']
        }
    },
    components: { detailHeader, navCom, footerCom }
}
</script>

<style scoped lang="scss">
    .content-form {
        padding: 0.4rem 2.2rem 0.2rem;
        width: 10rem;
        height: auto;
        margin: 0 auto 1rem;
        background-color: #fff;
        .project-report {
            height: 5.7rem;
            border: 2px dashed #5CA9FF;
            padding: 0.4rem 0.5rem;
            .project-report-list{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .project-report-item {
                    width:1.3rem;
                    font-size: 0.16rem;
                    color: #666;
                    line-height: 0.6rem;
                    text-align: center;
                    .project-report-box {
                        height:1.7rem;
                        background:rgba(236,236,236,1);
                        border-radius:6px;
                        border:1px solid rgba(151,151,151,1);
                    }
                }
            }
        }
        .set-btn {
            width: 1.4rem;
            height: 0.4rem;
            line-height: 0.1rem;
            border-radius: 0.2rem;
            font-size: 0.16rem;
            color: #fff;
            background:linear-gradient(270deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%);
            box-shadow:0px 0px 10px 0px rgba(42,130,228,0.2);
            position: relative;
            top: -0.6rem;
        }
        .form-detail-btns {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1rem 0;
            .detail-content-btn {
                width: 1.6rem;
                height: 0.4rem;
                border-radius: 0.2rem;
                font-size: 0.16rem;
                color: #fff;
                line-height: 0.1rem;
                background:linear-gradient(207deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%);
                box-shadow:0px 2px 16px 0px rgba(42,130,228,0.2);
            }
            .detail-content-btn-spe {
                border: 1px solid #5CA9FF;
                background: #fff;
                color: #666;
            }
        }
    }
</style>>