<template>
    <div class="tabs-container">
        <div 
            @click="tabsSwitch(index, item)" 
            class="tabs-box" 
            :class="{'tabs-box-sel': (index === tabsIndexInit) && !isSpe, 'tabs-box-sel-spe': (index === tabsIndexInit) && isSpe}" 
            v-for="(item, index) in tabsArr" 
            :key="item.label">
            <span>{{item.label}}</span>
            <span class="tabs-d"></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabsArr: [
                {
                    label: '法律法规库',
                    val: 'law'
                },
                {
                    label: '案例库',
                    val: 'case'
                },
                {
                    label: '专家库',
                    val: 'professor'
                },
                {
                    label: '风险库',
                    val: 'risk'
                },
                {
                    label: '防化措施库',
                    val: 'measures'
                },
                {
                    label: '项目资料库',
                    val: 'info'
                }
            ],
            tabsIndexInit: 0
        }
    },
    methods: {
        tabsSwitch(index, data) {
            this.tabsIndexInit = index;
            this.$emit('tabRes', data);
        }
    },
    props: {
        tabsIndex: {
            type: Number,
            default: 0
        },
        isSpe: {
            type: Boolean,
            default:false
        }
    },
    watch: {
        'tabsIndex': function(val) {
            this.tabsIndexInit = val;
        }
    }
}
</script>

<style scoped lang="scss">
    .tabs-container {
        height: 0.8rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .tabs-box {
            font-size: 0.18rem;
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            color:#999;
            letter-spacing:1px;
            margin-right: 0.6rem;
            cursor: pointer;
            align-items: center;
            display: flex;
            flex-direction: column;
            .tabs-d {
                width: 0.7rem;
                height: 4px;
                background:transparent;
                border-radius: 2px;
                display: inline-block;
                margin-top: 4px;
            }
        }
        .tabs-box-sel {
            color: #333;
            .tabs-d {
                background:rgba(92,169,255,1);
            }
        }
        .tabs-box-sel-spe {
            color: #fff;
            .tabs-d {
                background:rgba(92,169,255,1);
            }
        }
    }
</style>