<template>
    <div class="page-container">
        <div 
            @click="pageHandle(item)" 
            class="page-box" 
            :class="{'page-box-sel': pageVal == item.label, 'page-box-spe': isSpe}" 
            v-for="item in pageArrs" 
            :key="item.label">{{item.label}}</div>
    </div>
</template>

<script>
export default {
    props: {
        isSpe: {
            type: Boolean,
            default:false
        }
    },
    data() {
        return {
            pageVal: 1,
            pageArrs: [
                {
                    label: '首页',
                    value: 0,
                },
                {
                    label: '1',
                    value: 0,
                },
                {
                    label: '2',
                    value: 1,
                },
                {
                    label: '3',
                    value: 2,
                },
                {
                    label: '4',
                    value: 3,
                },
                {
                    label: '5',
                    value: 4,
                },
                {
                    label: '6',
                    value: 5,
                },
                {
                    label: '尾页',
                    value: 5,
                }
            ]
        }
    },
    methods: {
        pageHandle(item) {
            this.pageVal = item.label;
        }
    }
}
</script>

<style scoped lang="scss">
    .page-container {
        display: flex;
        margin-top: 0.2rem;
        .page-box {
            height: 0.4rem;
            line-height: 0.4rem;
            border-radius: 4px;
            border: 1px solid #999999;
            padding: 0 0.18rem;
            margin-right: 0.15rem;
            cursor: pointer;
            font-size: 0.16rem;
            color: #666;
        }
        .page-box-sel {
            background:linear-gradient(270deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%);
            color: #fff;
            border-color: transparent;
        }
        .page-box-spe {
            color: #fff;
            border-color: transparent;
            background-color: #10458F;
        }
    }
</style>