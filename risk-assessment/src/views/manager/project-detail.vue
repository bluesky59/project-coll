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
                    <el-steps direction="vertical">
                        <el-step v-for="item in stepArrs" :key="item" :title="item"></el-step>
                    </el-steps>
                </div>
            </div>
        </div>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import { managerNavArrs } from '@/data/nav.js';
export default {
    components: {
        navCom, footerCom
    },
    data() {
        return {
            managerNavArrs,
            tabsVal: '1',
            tabsArr: [
                {
                    label: '项目详情',
                    value: '1'
                },
                {
                    label: '当前进度',
                    value: '2'
                }
            ],
            stepArrs: [
                '论证分析（进行中）',
                '数据报告（2019-11-20）',
                '资料汇总（2019-11-10）',
                '数据采集（2019-11-08）',
                '整理资料（2019-11-06）',
                '整理资料（2019-11-06）',
                '整理资料（2019-11-06）',
                '整理资料（2019-11-06）',
                '整理资料（2019-11-06）'
            ]
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
            height: 6.4rem;
        }
    }
</style>

<style>
    .el-step__title {
        font-size: 0.16rem;
        color: #666;
    }
    .el-step__title.is-wait {
        color: #666;
    }
    .el-step__icon.is-text {
        background-color: #5CA9FF;
        border: none;
        width: 0.16rem;
        height: 0.16rem;
        left: 0.08rem;
    }
    .el-step__icon-inner {
        color: transparent;
    }
</style>