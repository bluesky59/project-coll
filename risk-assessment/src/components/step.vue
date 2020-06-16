<template>
    <div class="step-container">
        <div class="step-box" :class="{'step-box-active': stepIndex >= 0}">录入资料</div>
        <div class="step-circle" :class="{'step-circle-active': stepIndex >= 1}">
            <span class="step-circle-o"></span>
            <span class="step-circle-o"></span>
            <span class="step-circle-o"></span>
        </div>
        <div class="step-box" :class="{'step-box-active': stepIndex >= 1}">评估内容</div>
        <div class="step-circle" :class="{'step-circle-active': stepIndex >= 2}">
            <span class="step-circle-o"></span>
            <span class="step-circle-o"></span>
            <span class="step-circle-o"></span>
        </div>
        <div class="step-box" :class="{'step-box-active': stepIndex >= 2}">评估方式</div>
        <div class="step-circle" :class="{'step-circle-active': stepIndex >= 3}">
            <span class="step-circle-o"></span>
            <span class="step-circle-o"></span>
            <span class="step-circle-o"></span>
        </div>
        <div class="step-box" :class="{'step-box-active': stepIndex >= 3}">资料审核</div>
    </div>
</template>

<script>
export default {
    props: {
        stepIndex: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped lang="scss">
    .step-container {
        width: 12rem;
        height: 0.4rem;
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin: 0.6rem auto 0;
        .step-box {
            width: 1.75rem;
            height: 0.4rem;
            background-image: url("../assets/imgs/step-bg.png");
            background-size: cover;
            font-size: 0.16rem;
            color: #666;
            text-align: center;
            line-height: 0.4rem;
        }
        .step-box-active {
            background-image: url("../assets/imgs/step-bg-1.png");
            color: #fff;
        }
        .step-circle {
            width: 1.2rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .step-circle-o {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                display: block;
                background-color: #D8D8D8;
            }
        }
        .step-circle-active {
            .step-circle-o {
                background-color: #5CA9FF;
            }
        }
    }
</style>>