<template>
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
                    <div class="company-edit">
                        <img class="company-edit-img" src="../../assets/imgs/company/c-2.png" />
                        报告预览
                    </div>
                </div>
                <el-button class="linear-btn" type="primary">上传资料</el-button>
            </div>
            <div class="main-step">
                <stepCom :stepIndex="0" />
            </div>
        </div>
    </div>
</template>

<script>
import stepCom from '@/components/step.vue'
export default {
    components: {
        stepCom
    },
    data() {
        return {
            form: {}
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
    }
</style>