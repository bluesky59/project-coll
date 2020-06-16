<template>
    <div class="progress-container" :style="{'background': backgroundProps}">
        <div class="progress-bar">
            <div class="progress-bar-item" 
                v-for="item in barArrs" 
                :key="item.background"
                :style="{'background': item.background, 'width': item.val}"></div>
        </div>
        <div class="progress-list">
            <div class="progress-item" v-for="item in progressArrs" :key="item.label">
                <span class="progress-color" :style="{'background': item.color}"></span>
                {{item.label}}
            </div>
        </div>
        <borderCom v-if="isSpe" />
    </div>
</template>

<script>
import borderCom from '@/components/border.vue'
export default {
    components: { borderCom },
    props: {
        backgroundProps: {
            type: String,
            default: '#fff'
        },
        isSpe: {
            type: Boolean,
            default: false
        }
    },
    created() {
        if (this.isSpe) {
            this.barArrs[5].background = '#196DEB';
        } else {
            this.barArrs[5].background = '#F1F1F1';
        }
    },
    data() {
        return {
            barArrs: [
                {
                    val: '34%',
                    background: 'linear-gradient(270deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%)'
                },
                {
                    val: '3%',
                    background: 'linear-gradient(270deg,rgba(117,209,228,1) 0%,rgba(63,193,55,1) 100%)'
                },
                {
                    val: '16%',
                    background: 'linear-gradient(270deg,rgba(255,214,142,1) 0%,rgba(248,175,62,1) 100%)'
                },
                {
                    val: '10%',
                    background: 'linear-gradient(270deg,rgba(255,170,58,1) 0%,rgba(238,98,54,1) 100%)'
                },
                {
                    val: '8%',
                    background: 'linear-gradient(270deg,rgba(255,146,146,1) 0%,rgba(255,97,97,1) 100%)'
                },
                {
                    val: '29%',
                    background: '#F1F1F1'
                }
            ],
            progressArrs: [
                {
                    label: '容量（512M）',
                    color: 'linear-gradient(209deg,rgba(242,242,242,1) 0%,rgba(195,195,195,1) 100%)'
                },
                {
                    label: '法规库（234M）',
                    color: 'linear-gradient(270deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%)'
                },
                {
                    label: '案例库（112M）',
                    color: 'linear-gradient(270deg,rgba(117,209,228,1) 0%,rgba(63,193,55,1) 100%)'
                },
                {
                    label: '风险库（12M）',
                    color: 'linear-gradient(225deg,rgba(255,228,60,1) 0%,rgba(248,168,2,1) 100%)'
                },
                {
                    label: '防化措施库（22M）',
                    color: 'linear-gradient(223deg,rgba(255,170,58,1) 0%,rgba(238,98,54,1) 100%)'
                },
                {
                    label: '项目资料库（22M）',
                    color: 'linear-gradient(193deg,rgba(255,146,146,1) 0%,rgba(255,97,97,1) 100%)'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .progress-container {
        width: 12.96rem;
        height: 1.2rem;
        margin-top: 0.3rem;
        background-color: #fff;
        padding: 0.3rem 0.7rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        .progress-bar {
            width: 100%;
            height: 0.6rem;
            border-radius: 0.3rem;
            overflow: hidden;
            display: flex;
            .progress-bar-item {
                height: 0.6rem;
            }
        }
        .progress-list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .progress-item {
                font-size: 0.16rem;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height: 0.22rem;
                .progress-color {
                    width: 0.2rem;
                    height: 0.2rem;
                    border-radius: 50%;
                    display: inline-block;
                    margin-right: 0.2rem;
                }
            }
        }
    }
</style>