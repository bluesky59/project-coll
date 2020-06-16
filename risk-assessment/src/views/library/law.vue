<template>
    <div class="law-container">
        <div class="tabs-list">
            <div 
                @click="tabsHandle(item)" 
                :class="{'tabs-item-sel': (tabsVal === item.val) && !isSpe, 'tabs-item-sel-spe': (tabsVal === item.val) && isSpe}" 
                class="tabs-item" 
                v-for="item in tabsArr" 
                :key="item.val">
                {{item.label}}
            </div>
        </div>
        <div class="law-system" v-if="tabsVal === 'system'">
            <searchCom 
                :tagArrs="tagArrs"
                :isSpe="isSpe"
                btnTxt="添加自建法规"
                placeholder="输入关键字搜索" />
            <div :class="{'search-res-spe': isSpe}" class="search-res">搜索结果: <span class="law-num">16273</span> 份</div>
            <articleCom :isSpe="isSpe" />
            <pageCom :isSpe="isSpe" />
        </div>
        <div class="law-system" v-if="tabsVal === 'custom'">
            <div class="custom-data">
                <div class="custom-data-list">
                    <div class="custom-data-item" v-for="item in dataArrs" :key="item.label">
                        <span class="custom-data-label">{{item.label}}:</span>
                        <span class="custom-data-val">{{item.val}}</span>
                    </div>
                </div>
                <el-button class="linear-btn custom-data-btn" type="primary">添加自建法规</el-button>
            </div>
            <articleCom />
            <pageCom />
        </div>
    </div>
</template>

<script>
import articleCom from './common/article'
import searchCom from '@/components/search.vue'
import pageCom from '@/components/page.vue'
export default {
    components: { articleCom, searchCom, pageCom },
    props: {
        isSpe: {
            type: Boolean,
            default:false
        }
    },
    data() {
        return {
            tabsVal: 'system',
            tabsArr: [
                {
                    label: '系统库',
                    val: 'system'
                },
                {
                    label: '自建库',
                    val: 'custom'
                }
            ],
            tagArrs: [
                {
                    label: '级别',
                    dataList: ['不限', '国家级', '省级'],
                    selIndex: 0
                },
                {
                    label: '类型',
                    dataList: ['不限', '拆迁', '稳评'],
                    selIndex: 1
                }
            ],
            dataArrs: [
                {
                    label: '自建法律法规',
                    val: '273'
                },
                {
                    label: '已公开',
                    val: '124'
                },
                {
                    label: '资料库存',
                    val: '123.11M'
                }
            ]
        }
    },
    methods: {
        tabsHandle(data) {
            !this.isSpe && (this.tabsVal = data.val);
        }
    }
}
</script>

<style scoped lang="scss">
    .law-container {
        .tabs-list {
            height: 0.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .tabs-item {
                font-size: 0.18rem;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color: #999;
                line-height: 0.4rem;
                letter-spacing:1px;
                cursor: pointer;
                border-bottom: 2px solid transparent;
                margin: 0 0.3rem;
            }
            .tabs-item-sel {
                border-color: #5CA9FF;
                color: #333;
            }
            .tabs-item-sel-spe {
                border-color: #5CA9FF;
                color: #fff;
            }
        }
        .law-system {
            .search-res {
                height: 0.6rem;
                line-height: 0.6rem;
                background-color: #F6F6F6;
                text-indent: 0.3rem;
                font-size: 0.16rem;
                color: #666;
                .law-num {
                    color: #5CA9FF;
                    font-size: 0.24rem;
                    font-weight: bolder;
                    margin: 0 5px;
                }
            }
            .search-res-spe {
                background-color: #10458F;
                color: #fff;
                .law-num {
                    color: #fff;
                }
            }
        }
        .custom-data {
            height: 0.6rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0.15rem 0;
            .custom-data-list {
                width: 10.35rem;
                height: 0.6rem;
                padding-left: 0.55rem;
                background-color: #F6F6F6;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .custom-data-item {
                    margin-right: 1rem;
                    height: 0.6rem;
                    line-height: 0.1rem;
                    .custom-data-label {
                        font-size: 0.16rem;
                        color: #666;
                    }
                    .custom-data-val {
                        font-size: 0.24rem;
                        color: #5CA9FF;
                        font-weight: bolder;
                        margin-left: 0.2rem;
                    }
                }
            }
            .custom-data-btn {
                width: 2rem;
                height: 0.5rem;
                border-radius: 0.25rem;
            }
        }
    }
</style>