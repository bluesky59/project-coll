<template>
    <div class="project-container">
        <p class="main-content-p">项目名称：中意城投稳评项目</p>
        <p class="main-content-p">项目主体：中联稳评有限责任公司</p>
        <p class="main-content-p">项目详情：中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，项目立志于打造金阳新区中诚区域性购物中心。</p>
        <div class="project-report">
            <p class="project-report-title">审查报告</p>
            <div class="project-report-list">
                <div class="project-report-item" v-for="item in arrs" :key="item">
                    <div class="project-report-box"></div>
                    {{item}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arrs: ['封面/封底', '目录', '项目概述(10P)', '调查数据(8P)', '分析评估(15P)', '资料附件(20P)']
        }
    }
}
</script>

<style scoped lang="scss">
    .project-container {
        margin-top: 0.2rem;
        .main-content-p {
            line-height: 0.36rem;
            font-size: 0.18rem;
            color: #333;
        }
        .project-report {
            height: 2.85rem;
            border: 2px dashed #5CA9FF;
            margin-top: 0.32rem;
            padding: 0.4rem 0.5rem;
            .project-report-title {
                font-size: 0.16rem;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height: 0.22rem;
                text-align: center;
            }
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
                    margin-top: 0.4rem;
                    .project-report-box {
                        height:1.7rem;
                        background:rgba(236,236,236,1);
                        border-radius:6px;
                        border:1px solid rgba(151,151,151,1);
                    }
                }
            }
        }
    }
</style>