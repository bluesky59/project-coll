<template>
    <div>
        <navCom :navIndex="1" :navArrs="navArrs" />
        <detailHeader />
        <el-form class="content-form" ref="form" :model="form">
            <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        选择分析模型
                    </div>
                </el-col>
            </el-row>
            <div class="model-container">
                <div class="model-box" :class="{'model-box-spe': index === 1}" v-for="(item, index) in modelArrs" :key="item.label">
                    {{item.label}}
                    <el-button class="model-btn" type="primary">{{item.btnLabel}}</el-button>
                </div>
            </div>
            <div class="11"></div>
            <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        风险分析
                    </div>
                </el-col>
            </el-row>
            <article class="detail-acticle-list" v-for="item in dataList" :key="item.title">
                <p class="detail-acticle-title">{{item.title}}</p>
                <section class="detail-acticle-section" v-for="i in item.data" :key="i.label">
                    <p class="detail-acticle-section-title">{{i.title}}</p>
                    <p class="detail-acticle-section-detail">{{i.detail}}</p>
                    <p class="detail-acticle-section-risk">{{i.risk}}</p>
                </section>
            </article>
            <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        邀请专家打分
                    </div>
                </el-col>
            </el-row>
            <div class="form-radio">
                <el-radio v-model="radio" label="1">不邀请专家</el-radio>
                <el-radio v-model="radio" label="2">邀请专家</el-radio>
            </div>
            <div class="review-list">
                <div class="photo-box">
                    <img class="photo-pic" src="../../assets/imgs/index/professor-00.png" />
                    <div class="photo-txt">
                        <p class="photo-name">程宇豪</p>
                        <p class="photo-des">高级工程师</p>
                        <p class="photo-des">10年行业经验</p>
                        <p class="photo-des">博士后</p>
                    </div>
                </div>
                <div class="photo-box">
                    <img class="photo-pic" src="../../assets/imgs/index/professor-00.png" />
                    <div class="photo-txt">
                        <p class="photo-name">程宇豪</p>
                        <p class="photo-des">高级工程师</p>
                        <p class="photo-des">10年行业经验</p>
                        <p class="photo-des">博士后</p>
                    </div>
                </div>
                <div class="review-plus">
                    <p class="review-plus-icon">+</p>
                    <p>继续邀请专家</p>
                </div>
            </div>
            <el-form-item class="form-btns" label-width="0">
                <el-button class="content-btn content-btn-cancel">上一步</el-button>
                <el-button class="content-btn content-btn-submit" type="primary">生成报告</el-button>
            </el-form-item>
        </el-form>
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
            modelArrs: [
                {
                    label: '叶培思网络分析法',
                    btnLabel: '一键分析'
                },
                {
                    label: '打分法',
                    btnLabel: '上传资料'
                },
                {
                    label: '上传自建模型',
                    btnLabel: '上传资料'
                }
            ],
            form: {},
            radio: '2',
            dataList: [
                {
                    title: '合法性',
                    data: [
                        {
                            title: '项目资金筹措与保障引发的风险',
                            detail: '下面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。所以监听用户的截图操作，提示用户进行分享，既缩短了以前分享截图的操作路径，避免了在之前长路径中的行为流失（比如截图完成后忘记分享或觉得麻烦放弃分享等等），也让用户觉得更加贴心。',
                            risk: '风险程度：较高'
                        },
                        {
                            title: '项目审批过程引发的风险',
                            detail: '下面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。所以监听用户的截图操作，提示用户进行分享，既缩短了以前分享截图的操作路径，避免了在之前长路径中的行为流失（比如截图完成后忘记分享或觉得麻烦放弃分享等等），也让用户觉得更加贴心。',
                            risk: '风险程度：较低'
                        }
                    ]
                },
                {
                    title: '合理性',
                    data: [
                        {
                            title: '项目资金筹措与保障引发的风险',
                            detail: '下面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。所以监听用户的截图操作，提示用户进行分享，既缩短了以前分享截图的操作路径，避免了在之前长路径中的行为流失（比如截图完成后忘记分享或觉得麻烦放弃分享等等），也让用户觉得更加贴心。',
                            risk: '风险程度：较高'
                        },
                        {
                            title: '项目资金筹措与保障引发的风险',
                            detail: '下面我们会从不同维度来分析一下APP的社交分享功能设计，看看这里面有哪些值得探讨之处。所以监听用户的截图操作，提示用户进行分享，既缩短了以前分享截图的操作路径，避免了在之前长路径中的行为流失（比如截图完成后忘记分享或觉得麻烦放弃分享等等），也让用户觉得更加贴心。',
                            risk: '风险程度：较高'
                        }
                    ]
                }
            ]
        }
    },
    components: { detailHeader, navCom, footerCom }
}
</script>

<style scoped lang="scss">
    .content-form {
        padding: 0 2.2rem 0.2rem;
        width: 10rem;
        height: auto;
        margin: 0 auto 1rem;
        background-color: #fff;
        .form-spe {
            .form-spe-box {
                width: 1.35rem;
                height: auto;
                text-align: center;
                font-size: 0.16rem;
                color: #666;
                float: left;
            }
            .form-spe-box-f {
                margin-right: 0.22rem;
            }
        }
        .form-btns {
            text-align: center;
            margin-top: 0.4rem;
        }
        .content-btn {
            width: 1.6rem;
            height: 0.4rem;
            border-radius: 0.2rem;
            line-height: 0.12rem;
            font-size: 0.16rem;
            margin-top: 0.2rem;
        }
        .content-btn-cancel {
            color: #666;
            margin-right: 0.7rem;
            box-shadow:0px 2px 16px 0px rgba(42,130,228,0.2);
            border:1px solid rgba(92,169,255,1);
        }
        .content-btn-submit {
            color: #fff;
            background:linear-gradient(207deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%);
            box-shadow:0px 2px 16px 0px rgba(42,130,228,0.2);
        }
        .content-form-divider {
            font-size: 0.16rem;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:0.22rem;
            display: flex;
            margin-bottom: 0.3rem;
            .content-form-line {
                width: 4px;
                height: 0.22rem;
                background-color: #2A82E4;
                margin-right: 0.3rem;
                display: inline-block;
            }
        }
        .content-form-upload {
            font-size: 0.16rem;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color: #333;
            width: 100%;
            height: 0.6rem;
            line-height: 0.6rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-bottom: 1px solid #D8D8D8;
            .content-form-upload-icon {
                width: 0.17rem;
                height: 0.2rem;
                margin-left: 0.3rem;
            }
            span {
                color: #FF0024;
                margin-right: 4px;
            }
        }
        .content-form-upload-spe {
            border-bottom: 1px solid #D8D8D8;
            padding-bottom: 0.2rem;
            .content-form-upload {
                border-bottom: none;
            }
        }
        .form-upload-case {
            display: flex;
            .form-upload-img {
                width: 0.86rem;
                height: 0.86rem;
                display: flex;
                align-items: center;
                justify-content: center;
                background-size: cover;
            }
            .form-upload-img0 {
                margin-right: 0.2rem;
                background-image: url("../../assets/imgs/project/bg0.png");
                .form-upload-icon0 {
                    width: 0.3rem;
                    height: 0.3rem;
                }
            }
            .form-upload-img1 {
                background-image: url("../../assets/imgs/project/bg1.png");
                .form-upload-icon1{
                    width: 0.31rem;
                    height: 0.38rem;
                }
            }
        }
    }
    .review-list {
        display: flex;
        margin-top: 0.3rem;
        justify-content: flex-start;
        .review-plus {
            width: 2.4rem;
            height: 1.46rem;
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 10px 0px rgba(0,0,0,0.1);
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: center;
            margin-right: 0.2rem;
            font-size: 0.14rem;
            color: #666;
            cursor: pointer;
            .review-plus-icon {
                font-size: 0.66rem;
                line-height: 0.66rem;
                font-weight: 400;
                color: #5CA9FF;
                margin: 0.1rem 0;
            }
        }
        .photo-box {
            width: 2.4rem;
            height: 1.46rem;
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 10px 0px rgba(0,0,0,0.1);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-right: 0.2rem;
            .photo-pic {
                width: 1.12rem;
                height: 1.46rem;
            }
            .photo-txt {
                padding-left: 0.25rem;
                .photo-name {
                    font-size: 0.16rem;
                    font-family:PingFangSC-Semibold,PingFang SC;
                    font-weight:600;
                    color:rgba(51,51,51,1);
                    line-height:0.22rem;
                    text-shadow:0px 0px 10px rgba(0,0,0,0.1);
                    margin-bottom: 0.2rem;
                }
                .photo-des {
                    font-size: 0.14rem;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height: 0.2rem;
                    text-shadow:0px 0px 10px rgba(0,0,0,0.1);
                }
            }
        }
    }
    .detail-acticle-list {
        font-size: 0.16rem;
        margin-top: 0.3rem;
        .detail-acticle-title {
            color: #333;
            font-weight: 500;
        }
        .detail-acticle-section {
            .detail-acticle-section-title {
                color: #333;
                font-weight: 400;
                line-height: 0.22rem;
                margin: 0.1rem 0;
            }
            .detail-acticle-section-detail {
                font-size: 0.14rem;
                color: #999;
                line-height: 0.2rem;
                font-weight: 400;
                margin: 0.2rem 0;
            }
            .detail-acticle-section-risk {
                color: #333;
                font-weight: 400;
                line-height: 0.22rem;
            }
        }
    }
    .detail-acticle-list:nth-of-type(1) {
        margin-top: 0;
    }
    .model-container {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .model-box {
            width: 3.2rem;
            height: 0.6rem;
            padding: 0 0.3rem;
            background:rgba(255,255,255,1);
            border-radius:6px;
            border:1px solid rgba(42,130,228,1);
            margin-right: 0.26rem;
            margin-bottom: 0.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.16rem;
            color: #333;
            .model-btn {
                width: 1.2rem;
                height: 0.36rem;
                line-height: 0.1rem;
                border-radius: 0.18rem;
                font-size: 0.16rem;
                color: #fff;
                background:linear-gradient(270deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%);
                box-shadow:0px 0px 10px 0px rgba(42,130,228,0.2);
            }
        }
        .model-box-spe {
            width: 2.78rem;
        }
    }
    .form-radio {
        font-size: 0.16rem;
        color: #666;
        font-weight: 400;
    }
</style>>

<style>
    .el-radio__input.is-checked+.el-radio__label {
        color: #666;
    }
</style>