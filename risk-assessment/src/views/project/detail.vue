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
                <el-button class="linear-btn" type="primary" @click="dialogVisible = true">上传资料</el-button>
            </div>
            <div class="main-step">
                <stepCom :stepArr="step4" :stepIndex="0" />
            </div>
            <el-dialog
                title="项目流程细节设计"
                center
                :visible.sync="dialogVisible"
                width="60%">
                <div class="dialog-container">
                    <stepCom :stepArr="step4" :stepIndex="0" />
                    <div class="dialog-box">
                        <div class="dialog-circle-list">
                            <div class="dialog-circle-item" v-for="item in circleArr" :key="item"></div>
                        </div>
                        <div class="dialog-box-list">
                            <div class="dialog-box-item" v-for="item in dialogContentArr" :key="item.label">
                                <div class="dialog-box-title">{{item.title}}</div>
                                <div class="dialog-box-txt">
                                    <p class="dialog-txt-label">{{item.label}}</p>
                                    <p class="dialog-txt-des">{{item.des}}</p>
                                </div>
                                <div class="dialog-divider">
                                    <div class="dialog-divider-div"></div>
                                    <div class="dialog-divider-div"></div>
                                    <div class="dialog-divider-div"></div>
                                </div>
                            </div>
                            <div class="dialog-box-add">+</div>
                        </div>
                    </div>
                </div>
                <span slot="footer" class="form-btns form-btns-spe">
                    <el-button @click="dialogVisible = false" class="content-btn content-btn-cancel">取消</el-button>
                    <el-button @click="dialogVisible = false" class="content-btn content-btn-submit" type="primary">确认</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import stepCom from '@/components/step.vue'
import { step4 } from '@/data/step.js';
export default {
    components: {
        stepCom
    },
    data() {
        return {
            step4,
            form: {},
            dialogVisible: false,
            dialogContentArr: [
                {
                    title: '资料整理',
                    label: '审查资料整理',
                    des: '整理审查所需的若干资料，用以报告生成备用'
                },
                {
                    title: '资料整理',
                    label: '图片资料整理',
                    des: '整理图片资料上传。'
                }
            ],
            circleArr: new Array(7)
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
    .dialog-container {
        .dialog-box {
            width: 90%;
            height: 5rem;
            border: 1px dashed #979797;
            margin: 0 auto;
            display: flex;
            padding-top: 0.4rem;
            margin-top: 0.5rem;
            .dialog-circle-list {
                width: 1rem;
                padding-top: 0.4rem;
                .dialog-circle-item {
                    width: 0.1rem;
                    height: 0.1rem;
                    background-color: #D8D8D8;
                    border-radius: 50%;
                    margin: 10px auto;
                    &:first-child, &:last-child {
                        width: 0.2rem;
                        height: 0.2rem;
                        background-color: #5CA9FF;
                    }
                }
            }
            .dialog-box-list {
                .dialog-box-item {
                    width: 5.1rem;
                    height: 0.74rem;
                    background:rgba(255,255,255,1);
                    box-shadow:0px 2px 20px 0px rgba(0,0,0,0.06);
                    border-radius:4px;
                    border:1px solid rgba(92,169,255,1);
                    margin-bottom: 0.4rem;
                    padding: 0.18rem 0.2rem;
                    display: flex;
                    position: relative;
                    .dialog-box-title {
                        font-size: 0.16rem;
                        font-family:PingFangSC-Medium,PingFang SC;
                        font-weight:500;
                        color:rgba(92,169,255,1);
                        width: 0.9rem;
                        border-right: 1px solid #ccc;
                        line-height: 0.74rem;
                    }
                    .dialog-box-txt {
                        padding-left: 0.4rem;
                        .dialog-txt-label {
                            font-size: 0.16rem;
                            font-family:PingFangSC-Medium,PingFang SC;
                            font-weight:500;
                            color:rgba(51,51,51,1);
                            line-height: 0.3rem;
                        }
                        .dialog-txt-des {
                            font-size: 0.14rem;
                            font-family:PingFangSC-Regular,PingFang SC;
                            font-weight:400;
                            color:rgba(102,102,102,1);
                            line-height: 0.3rem;
                        }
                    }
                    .dialog-divider {
                        position: absolute;
                        right: 0.2rem;
                        top: 0.1rem;
                        .dialog-divider-div {
                            width: 0.18rem;
                            height: 1px;
                            margin-bottom: 3px;
                            background:rgba(153,153,153,1);
                        }
                    }
                }
                .dialog-box-add {
                    width: 1.6rem;
                    height: 0.4rem;
                    background:rgba(255,255,255,1);
                    box-shadow:0px 2px 16px 0px rgba(42,130,228,0.2);
                    border-radius: 0.2rem;
                    border:1px solid rgba(92,169,255,1);
                    font-size: 0.4rem;
                    font-weight: bold;
                    text-align: center;
                    line-height: 0.3rem;
                    color: #5CA9FF;
                }
            }
        }
    }
</style>

<style>
.el-dialog__header {
    font-size: 0.5rem;
}
.el-dialog__footer {
    font-size: 0.2rem;
}
</style>