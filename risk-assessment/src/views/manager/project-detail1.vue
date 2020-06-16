<template>
    <div>
        <navCom :navIndex="1" :navArrs="managerNavArrs" />
        <div class="main-container">
            <p class="main-nav">认证 ＞ 项目主体认证</p>
            <div class="main-content">
                <p class="main-content-p">项目名称：中意城投稳评项目</p>
                <p class="main-content-p">项目主体：中联稳评有限责任公司</p>
                <p class="main-content-p">项目详情：中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，项目立志于打造金阳新区中诚区域性购物中心。</p>
                <img class="main-img" src="../../assets/imgs/track-bg.png" />
                <div class="tabs-contaier">
                    <div @click="tabsHandle(item)" class="tabs-box" :class="{'tabs-box-sel': tabsVal === item.value}" v-for="item in tabsArr" :key="item.label">{{item.label}}</div>
                </div>
                <article v-if="tabsVal === '1'" class="main-article">
                    <p class="main-article-p">作为用户和产品之间的桥梁，社交分享在产品的发展过程中扮演了重要的角色。</p>
                    <p class="main-article-p">在常用的社交分享组件中，微信（微信好友和朋友圈）、微博、QQ（QQ好友和QQ空间）是三大主要平台，而其中微信凭借高达9.38亿的月活跃用户以及高达29%的日均手机应用使用率，成为各款APP选择最多、排位最靠前的分享途径。即便同样是腾讯系下的QQ，也在QQ空间中加入了分享到微信好友和朋友圈的功能。</p>
                    <p class="main-article-p">我们从分享时机、分享形式、分享动机、分享场景4个维度来聊聊「社交分享」的那些事儿。分享时机，在不同的时机分析用户是否有分享的意愿，提供给他们合适的分享内容，能让分享的效果更好。</p>
                    <p class="main-article-p">现在很多APP在用户截图时会自动提示用户是否要进行分享。这个时机确实抓的很棒，一般来说，用户截图大多数时候都是为了分享给他人，少部分是为了留底备份。</p>
                    <p class="main-article-p">所以监听用户的截图操作，提示用户进行分享，既缩短了以前分享截图的操作路径，避免了在之前长路径中的行...作为用户和产品之间的桥梁，社交分享在产品的发展过程中扮演了重要的角色。</p>
                    <p class="main-article-p">在常用的社交分享组件中，微信（微信好友和朋友圈）、微博、QQ（QQ好友和QQ空间）是三大主要平台，而其中微信凭借高达9.38亿的月活跃用户以及高达29%的日均手机应用使用率，成为各款APP选择最多、排位最靠前的分享途径。即便同样是腾讯系下的QQ，也在QQ空间中加入了分享到微信好友和朋友圈的功能。</p>
                    <p class="main-article-p">我们从分享时机、分享形式、分享动机、分享场景4个维度来聊聊「社交分享」的那些事儿。分享时机，在不同的时机分析用户是否有分享的意愿，提供给他们合适的分享内容，能让分享的效果更好。</p>
                    <p class="main-article-p">现在很多APP在用户截图时会自动提示用户是否要进行分享。这个时机确实抓的很棒，一般来说，用户截图大多数时候都是为了分享给他人，少部分是为了留底备份。</p>
                    <p class="main-article-p">所以监听用户的截图操作，提示用户进行分享，既缩短了以前分享截图的操作路径，避免了在之前长路径中的行...</p>
                </article>
                <div v-if="tabsVal === '2'" class="main-steps">
                    <div class="content-form-divider content-form-divider-spe">
                        <span class="content-form-line"></span>
                        审查简报
                    </div>
                    <div class="main-doc-container">
                        <img class="main-doc-img" src="../../assets/imgs/doc-icon.png" />
                        <div class="main-doc-txt">
                            <p class="main-doc-label">大川白金城拆迁稳评简报</p>
                            <p class="main-doc-date">（283KB；2019-02-11）</p>
                        </div>
                        <el-button class="trans-btn">下载文档</el-button>
                    </div>
                    <div class="content-form-divider content-form-divider-spe">
                        <span class="content-form-line"></span>
                        审查报告
                    </div>
                    <div class="project-report">
                        <p class="project-report-title">审查报告</p>
                        <div class="project-report-list">
                            <div class="project-report-item" v-for="item in arrs" :key="item">
                                <div class="project-report-box"></div>
                                {{item}}
                            </div>
                        </div>
                        <el-button class="trans-btn">下载文档</el-button>
                    </div>
                    <div class="content-form-divider content-form-divider-spe">
                        <span class="content-form-line"></span>
                        审查
                    </div>
                    <el-form class="content-form" ref="form" :model="form" label-width="80px">
                        <el-row>
                            <el-col :span="24">
                                <el-form-item label="审查反馈">
                                    <el-input type="textarea" :rows="3" v-model="form.name"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <el-form-item  label="">
                                    <el-button class="linear-btn">审查反馈</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <photoCom :len="8" :width="2.8" v-if="tabsVal === '3'" />
            </div>
        </div>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import photoCom from '@/views/library/common/photo'
import { managerNavArrs } from '@/data/nav.js';
export default {
    components: {
        navCom, footerCom, photoCom
    },
    data() {
        return {
            form: {},
            managerNavArrs,
            tabsVal: '1',
            tabsArr: [
                {
                    label: '项目详情',
                    value: '1'
                },
                {
                    label: '审查资料',
                    value: '2'
                },
                {
                    label: '审查人员',
                    value: '3'
                }
            ],
            arrs: ['封面/封底', '目录', '项目概述(10P)', '调查数据(8P)', '分析评估(15P)', '资料附件(20P)']
        }
    },
    methods: {
        tabsHandle(item) {
            this.tabsVal = item.value;
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
        }
        .tabs-contaier {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 0.2rem;
            .tabs-box {
                font-size: 0.18rem;
                line-height: 0.4rem;
                margin-right: 1rem;
                border-bottom: 4px solid transparent;
                color: #999;
                cursor: pointer;
            }
            .tabs-box-sel {
                color: #333;
                border-bottom: 4px solid #5CA9FF;
            }
        }
        .main-article {
            font-size: 0.16rem;
            line-height: 0.48rem;
            color: #666;
            .main-article-p {
                text-indent: 0.3rem;
            }
        }
        .main-steps {
            text-align: center;
            .project-report {
                border: 2px dashed #5CA9FF;
                margin-top: 0.32rem;
                padding: 0.4rem 1.8rem;
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
                    margin-bottom: 0.2rem;
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
            .main-doc-container {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 0.6rem;
                margin-top: 0.2rem;
                .main-doc-img {
                    width: 0.52rem;
                    height: 0.6rem;
                }
                .main-doc-txt {
                    margin: 0 0.4rem;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    text-align: left;
                    .main-doc-label {
                        font-size: 0.16rem;
                        line-height: 0.3rem;
                    }
                    .main-doc-date {
                        font-size: 0.14rem;
                        line-height: 0.3rem;
                    }
                }
            }
        }
    }
</style>

<style>
    .el-form-item {
        text-align: left;
    }
</style>