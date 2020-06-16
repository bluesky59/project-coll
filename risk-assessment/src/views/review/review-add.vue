<template>
    <div>
        <navCom :navIndex="1" :navArrs="navArrs" />
        <div class="main-container">
            <p class="main-nav">认证 ＞ 项目主体认证</p>
            <div class="main-content">
                <div class="content-form-divider content-form-divider-spe">
                    <span class="content-form-line"></span>
                    评审人员邀请
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
                <div class="content-form-divider content-form-divider-spe">
                    <span class="content-form-line"></span>
                    审查项目
                </div>
                <projectCom />
                <div class="content-form-divider content-form-divider-spe">
                    <span class="content-form-line"></span>
                    评审人员反馈
                </div>
                <article class="acticle-container">
                    <h6 class="acticle-title">程宇豪（专家）</h6>
                    <p class="acticle-detail">中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，项目立志于打造金阳新区中诚区域性购物中心。中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，项目立志于打造金阳新区中诚区域性购物中心。中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，项目立志于打造金阳新区中诚区域性购物中心。中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，项目立志于打造金阳新区中诚区域性购物中心。</p>
                </article>
                <article class="acticle-container">
                    <h6 class="acticle-title">刘志兵（专家）</h6>
                    <p class="acticle-detail">中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，项目立志于打造金阳新区中诚区域性购物中心。中诚宜都测评项目是中诚近年来的重要项目之一，项目占地面积33万平方米，</p>
                </article>
            </div>
        </div>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import projectCom from './common/project'
import { navArrs } from '@/data/nav.js';
export default {
    components: {
        navCom, footerCom, projectCom
    },
    data() {
        return {
            navArrs
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
            padding: 0.1rem 2.2rem 1.27rem;
            background-color: #fff;
            margin-bottom: 1rem;
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
            .acticle-container {
                .acticle-title {
                    font-size: 0.16rem;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height: 0.22rem;
                }
                .acticle-detail {
                    font-size: 0.14rem;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height: 0.28rem;
                }
            }
        }
    }
</style>