<template>
    <div class="chart-container">
        <div class="chart-box" :style="{'background': item.background}" v-for="item in chartArrs" :key="item.type">
            <p>{{item.type}}</p>
            <p class="chart-num"><span>{{item.num}}</span> 份</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartArrs: [
                {
                    type: '法律法规数量',
                    num: '172,638,990',
                    background: 'linear-gradient(270deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%)'
                },
                {
                    type: '案例数量',
                    num: '2,638,900',
                    background: 'linear-gradient(270deg,rgba(117,209,228,1) 0%,rgba(63,193,55,1) 100%)'
                },
                {
                    type: '风险数量',
                    num: '72,638,990',
                    background: 'linear-gradient(270deg,rgba(255,214,142,1) 0%,rgba(248,175,62,1) 100%)'
                },
                {
                    type: '防化措施数量',
                    num: '12,638,990',
                    background: 'linear-gradient(270deg,rgba(255,170,58,1) 0%,rgba(238,98,54,1) 100%)'
                },
                {
                    type: '项目资料数',
                    num: '638,990',
                    background: 'linear-gradient(270deg,rgba(255,146,146,1) 0%,rgba(255,97,97,1) 100%)'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .chart-container {
        width: 13.4rem;
        height: 2.8rem;
        background-color: #fff;
        padding: 0.4rem 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        .chart-box {
            width: 3.7rem;
            height: 0.7rem;
            padding: 0.25rem;
            box-shadow:0px 2px 10px 0px rgba(0,0,0,0.2);
            border-radius:4px;
            font-size: 0.16rem;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .chart-num {
                text-align: right;
                span {
                    font-size: 0.4rem;
                    font-weight: bold;
                }
            }
        }
    }
    .chart-container:after {
        content: "";
        width: 4.2rem;
    }
</style>