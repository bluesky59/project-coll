<template>
    <div class="search-container">
        <div class="search-input">
            <div class="main-query">
                <img class="main-query-icon" src="../assets/imgs/search-icon.png" />
                <el-input :placeholder="placeholder"></el-input>
            </div>
            <el-button v-if="isShowBtn" class="search-btn-submit" type="primary">{{btnTxt}}</el-button>
        </div>
        <div class="search-tags">
            <div class="search-tag" v-for="item in tagArrs" :key="item.label">
                <span class="search-tag-label">{{item.label}}: </span>
                <span 
                    class="search-tag-val" 
                    @click="tagSelHandle(index, item)" 
                    :class="{'search-tag-val-sel': item.selIndex === index, 'search-tag-val-spe': isSpe}" 
                    v-for="(i, index) in item.dataList" 
                    :key="i">{{i}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        tagArrs: {
            type: Array,
            default: () => []
        },
        placeholder: {
            type: String,
            default: '输入关键字搜索企业专家'
        },
        isShowBtn: {
            type: Boolean,
            default: true
        },
        btnTxt: {
            type: String,
            default: '发布项目需求'
        },
        isSpe: {
            type: Boolean,
            default:false
        }
    },
    methods: {
        tagSelHandle(index, item) {
            item.selIndex = index;
        }
    }
}
</script>

<style scoped lang="scss">
    .search-container {
        padding: 0.4rem;
        .search-input {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .main-query {
                width: 11rem;
                height: 0.6rem;
                line-height: 0.6rem;
                border-bottom: 1px solid #D8D8D8;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .main-query-icon {
                    width: 0.23rem;
                    height: 0.24rem;
                    margin-right: 0.1rem;
                }
            }
            .search-btn-submit {
                width: 2rem;
                height: 0.4rem;
                border-radius: 0.2rem;
                line-height: 0.12rem;
                font-size: 0.16rem;
                color: #fff;
                background:linear-gradient(207deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%);
                box-shadow:0px 2px 16px 0px rgba(42,130,228,0.2);
            }
        }
        .search-tags {
            margin-top: 0.2rem;
            .search-tag {
                height: 0.5rem;
                line-height: 0.5rem;
                font-size: 0.18rem;
                .search-tag-label {
                    color: #999;
                    width: 1rem;
                    display: inline-block;
                    margin-right: 4px;
                }
                .search-tag-val {
                    color: #333;
                    cursor: pointer;
                    width: auto;
                    height: 0.4rem;
                    line-height: 0.4rem;
                    display: inline-block;
                    padding: 0 0.4rem;
                }
                .search-tag-val-sel {
                    border-radius: 0.2rem;
                    color: #fff;
                    background:linear-gradient(207deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%);
                }
                .search-tag-val-spe {
                    color: #fff;
                }
            }
        }
    }
</style>

<style>
  .el-input__inner {
    border-color: transparent;
    background-color: transparent;
  }
</style>