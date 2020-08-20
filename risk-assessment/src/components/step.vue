<template>
    <div class="step-container">
        <div class="step-warp" v-html="creatDivider()"></div>
    </div>
</template>

<script>
export default {
    data(){
        const warp = (label, index) => {
            return `<div class="step-box" :class="{'step-box-active': ${this.stepIndex} >= ${index}}">${label}</div>`;
        }
        const divider = (index) => {
            return `<div class="step-circle" :class="{'step-circle-active': ${this.stepIndex} >= ${index}}">
                <span class="step-circle-o"></span>
                <span class="step-circle-o"></span>
                <span class="step-circle-o"></span>
            </div>`;
        }
        return {
            warp,
            divider
        }
    },
    props: {
        stepIndex: {
            type: Number,
            default: 0
        },
        stepArr: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        creatDivider() {
            let str = '';
            this.stepArr.forEach((e, index) => {
                str += this.warp(e, index);
                if (index < this.stepArr.length - 1) {
                    str += this.divider(index);
                }
            });
            return str;
        }
    }
}
</script>

<style lang="scss">
    .step-container {
        width: 100%;
        height: 0.4rem;
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin: 0.6rem auto 0;
        .step-warp {
            display: flex;
            width: 100%;
            justify-content: space-between;
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
    }
</style>>