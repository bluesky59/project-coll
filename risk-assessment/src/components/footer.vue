<template>
    <div class="footer-container">
        <div class="footer-box">
            <section class="footer-txt footer-txt1">
                <p class="footer-title">中国风险评估</p>
                <p class="footer-content">中国风险评估网管理机构是负责审查项目的机构！管理机构是负责审查项目的机构！管理机构是负。</p>
                <p class="footer-copyright">@2020-2027 Yunrul All Rights Reserved. 黔ICP备18729930号</p>
            </section>
            <section class="footer-txt footer-txt2">
                <p class="footer-title">友情链接</p>
                <p class="footer-content">中国风险评估网   听讯网   腾讯网   百度  阿里巴巴</p>
            </section>
            <div class="footer-qr">
                <img class="footer-qrcode" src="../assets/imgs/footer-qrcode.png" />
                公众号二维码
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
    .footer-container {
        width: 100vw;
        height: 1.8rem;
        background: rgba(255,255,255,1);
        box-shadow: 0 0.02rem 0.2rem 0 rgba(0,0,0,0.06);
        padding: 0.2rem 0;
        .footer-box {
            width: 14.4rem;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .footer-txt {
                height: 100%;
                display: flex;
                flex-direction: column;
                .footer-title {
                    font-size: 0.2rem;
                    color: #666;
                    padding: 0.14rem 0;
                    line-height: 0.3rem;
                }
                .footer-content {
                    font-size: 0.16rem;
                    color: #999;
                    margin-bottom: 0.36rem;
                }
                .footer-copyright {
                    font-size: 0.18rem;
                    color: #999;
                }
            }
            .footer-txt1 {
                width: 5.6rem;
            }
            .footer-txt2 {
                width: 3.7rem;
            }
            .footer-qr {
                font-size: 0.18rem;
                color: #999;
                line-height: 0.24rem;
                width: 1.24rem;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                .footer-qrcode {
                    width: 1.24rem;
                    height: 1.24rem;
                    display: block;
                    margin-bottom: 0.12rem;
                }
            }
        }
    }
</style>
