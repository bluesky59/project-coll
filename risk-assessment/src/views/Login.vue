<template>
    <div class="login-container">
        <headerCom :navArrs="navArrs" />
        <div class="login-content">
            <div class="login-txt">
                <p class="login-title">多一份评估 · 少一分风险</p>
                <div class="login-divider"></div>
                <article class="home-article">
                    <p class="home-detail">分享时机，在不同的时机分析用户是否有分享的意愿，提供给他们合适的分享内容，能让分享的效果更好。</p>
                    <p class="home-detail">我们从分享时机、分享形式、分享动机、分享场景4个维度来聊聊「社交分享」的那些事儿。
            尤其是刚上线的产品，很难通过产品的内部体系来实现快速的用户增长，所以会更加依赖于分享来达到广泛的传播，获取目标用户。</p>
                </article>
            </div>
            <div class="login-form-container">
                <div class="login-tabs">
                    <div class="login-tab" @click="tabsClick(index)" :class="{'login-tab-sel': tabsIndex === index}" v-for="(item, index) in tabsArr" :key="item">
                        <p class="login-title">{{item}}</p>
                        <div class="login-tab-divider"></div>
                    </div>
                </div>
                <el-form class="login-form" label-position="left" label-width="60px" :model="form">
                    <el-form-item class="login-form-item" label="手机号">
                        <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item class="login-form-item" label="密码">
                        <el-input placeholder="请输入登陆密码" v-model="form.pwd" show-password></el-input>
                    </el-form-item>
                    <el-form-item class="login-form-item" label="" label-width="0">
                        <div class="form-tips">
                            <el-checkbox v-model="checked">记住登陆密码</el-checkbox>
                            <span class="form-find">忘记密码 ?</span>
                        </div>
                        <el-button class="form-btn" type="primary" @click="submitHandle">登陆</el-button>
                    </el-form-item>
                </el-form>
                <div class="login-qrcode">
                    <img class="login-qrcode-img" src="../assets/imgs/footer-qrcode.png" />
                    点击查看企业公众号二维码
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerCom from '@/components/header.vue'
export default {
    components: {
        headerCom
    },
    data () {
        return {
            tabsIndex: 0,
            tabsArr: ['登陆', '注册'],
            form: {
                phone: '',
                pwd: ''
            },
            checked: false,
            navArrs: [
                {
                    label: '首页'
                },
                {
                    label: '评估案例'
                },
                {
                    label: '调查'
                },
                {
                    label: '专家库'
                },
                {
                    label: '法规库'
                },
                {
                    label: '案例库'
                },
                {
                    label: '关于我们'
                }
            ]
        }
    },
    methods: {
        tabsClick(index) {
            this.tabsIndex = index;
        },
        submitHandle() {
            this.$router.push('/certificate');
        }
    }
}
</script>

<style scoped lang="scss">
    .login-container {
        width: 100vw;
        height: 100vh;
        background-image: url('../assets/imgs/login/login-bg.png');
        background-size: cover;
        .login-content {
            width: 14.4rem;
            height: 7rem;
            display: flex;
            justify-content: space-between;
            align-content: center;
            margin: 0.3rem auto 0;
            .login-txt {
                width: 7.2rem;
                height: auto;
                text-align: left;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                .login-title {
                    font-size: 0.5rem;
                    font-family:PingFangSC-Semibold,PingFang SC;
                    font-weight:600;
                    color:rgba(255,255,255,1);
                    line-height: 0.84rem;
                    letter-spacing: 3px;
                }
                .login-divider {
                    width: 0.4rem;
                    height: 0.1rem;
                    background-color: #5CA9FF;
                }
                .home-article {
                    width: 6.2rem;
                    margin-top: 0.3rem;
                    .home-detail {
                    font-size: 0.14rem;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height: 0.22rem;
                    letter-spacing: 2px;
                    }
                }
            }
            .login-form-container {
                width: 5rem;
                height: 6.6rem;
                background:rgba(255,255,255,1);
                box-shadow: 0 0.02rem 0.2rem 0 rgba(0,0,0,0.2);
                border-radius: 0.1rem;
                .login-tabs {
                    width: 100%;
                    height: 0.6rem;
                    display: flex;
                    justify-content: center;
                    padding-top: 0.5rem;
                    .login-tab {
                        width: 30%;
                        height: auto;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        cursor: pointer;
                        .login-title {
                            font-size: 0.3rem;
                            line-height: 0.42rem;
                            color: #999;
                            margin-bottom: 0.1rem;
                        }
                        .login-tab-divider {
                            width: 0.3rem;
                            height: 4px;
                            background-color: #2A82E4;
                            border-radius: 2px;
                            visibility: hidden;
                        }
                    }
                    .login-tab-sel {
                        .login-title{
                            color: #333;
                        }
                        .login-tab-divider {
                            visibility: visible;
                        }
                    }
                }
                .login-form {
                    padding: 0.5rem 0.3rem 0;
                    .login-form-item {
                        padding-bottom: 0.15rem;
                        border-bottom: 1px solid #D8D8D8;
                        .form-tips {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            font-size: 0.16rem;
                            color: #666;
                            .form-find {
                                cursor: pointer;
                            }
                        }
                        .form-btn {
                            width: 100%;
                            height: 0.6rem;
                            margin: 0.2rem 0;
                            border-radius: 0.3rem;
                            background:linear-gradient(270deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%);
                            box-shadow:0px 2px 20px 0px rgba(42,130,228,0.2);
                        }
                    }
                }
                .login-qrcode {
                    width: 100%;
                    font-size: 0.16rem;
                    color: #333;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .login-qrcode-img {
                        width: 0.65rem;
                        height: 0.65rem;
                        margin-right: 0.15rem;
                    }
                }
            }
        }
    }
</style>

<style>
    .el-input__inner {
        border-color: transparent;
    }
</style>