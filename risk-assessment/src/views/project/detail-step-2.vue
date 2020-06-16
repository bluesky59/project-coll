<template>
    <div>
        <navCom :navIndex="1" :navArrs="navArrs" />
        <detailHeader />
        <el-form class="content-form" ref="form" size="small" :model="form">
            <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        方案依据
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="23">
                    <el-form-item>
                        <el-input type="textarea" :rows="3" v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="23">
                    <el-form-item  label="">
                        <el-button class="linear-btn">上传资料</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        法律法规依据
                    </div>
                </el-col>
            </el-row>
            <div class="form-txt">
                <p class="form-txt-text">1、《中央办公厅、国务院办公厅关于建立健全重大决策社会稳定风险评估机制的指导意见（试行）》  中办发（2012）2号</p>
                <img class="form-txt-search" src="../../assets/imgs/search-icon.png" />
                <img class="form-txt-del" src="../../assets/imgs/del-icon.png" />
            </div>
            <div class="form-txt">
                <p class="form-txt-text">2、《国家发展改革委关于印发国家发展改革委重大固定资产投资项目社会稳定风险评估暂行办法的通知》 发改投资[2012]2492号</p>
                <img class="form-txt-search" src="../../assets/imgs/search-icon.png" />
                <img class="form-txt-del" src="../../assets/imgs/del-icon.png" />
            </div>
            <el-row>
                <el-col :span="5">
                    <el-form-item  label="">
                        <el-button class="linear-btn">添加</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item  label="">
                        <el-button class="linear-btn">在法规库选择</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        工作要求
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="23">
                    <el-form-item>
                        <el-input type="textarea" :rows="3" v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="23">
                    <el-form-item  label="">
                        <el-button class="linear-btn">上传文档</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        调查方式
                    </div>
                </el-col>
            </el-row>
            <div class="form-methods">
                <div class="form-method" v-for="item in labelArrs" :key="item">{{item}}</div>
                <div class="plus-icon">+</div>
            </div>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="问卷数">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option
                                v-for="item in typeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="走访数">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option
                                v-for="item in typeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="调查数">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option
                                v-for="item in typeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="调查区域"></el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="辐射范围">
                        <el-input v-model="form.name"></el-input>
                        <span class="form-unit">KM</span>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item class="form-btns" label-width="0">
                <el-button class="content-btn content-btn-cancel">取消</el-button>
                <el-button class="content-btn content-btn-submit" type="primary" @click="skipNext">下一步</el-button>
            </el-form-item>
        </el-form>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import detailHeader from './detail';
import { navArrs } from '@/data/nav.js';
export default {
    data() {
        return {
            navArrs,
            form: {},
            labelArrs: ['问卷', '走访', '调查'],
            typeOptions: [{
                value: '类型1',
                label: '类型1'
            }, {
                value: '类型2',
                label: '类型2'
            }, {
                value: '类型3',
                label: '类型3'
            }, {
                value: '类型4',
                label: '类型4'
            }, {
                value: '类型5',
                label: '类型5'
            }]
        }
    },
    components: { detailHeader, navCom, footerCom },
    methods: {
        skipNext() {
            this.$router.push('/project/detail/3');
        }
    }
}
</script>

<style scoped lang="scss">
    .content-form {
        padding: 0 2.2rem 0.2rem;
        width: 10rem;
        height: auto;
        margin: 0 auto 1rem;
        background-color: #fff;
        .form-spe {
            .form-spe-box {
                width: 1.35rem;
                height: auto;
                text-align: center;
                font-size: 0.16rem;
                color: #666;
                float: left;
            }
            .form-spe-box-f {
                margin-right: 0.22rem;
            }
        }
        .form-btns {
            text-align: center;
            margin-top: 0.4rem;
        }
        .content-btn {
            width: 1.6rem;
            height: 0.4rem;
            border-radius: 0.2rem;
            line-height: 0.12rem;
            font-size: 0.16rem;
            margin-top: 0.2rem;
        }
        .content-btn-cancel {
            color: #666;
            margin-right: 0.7rem;
            box-shadow:0px 2px 16px 0px rgba(42,130,228,0.2);
            border:1px solid rgba(92,169,255,1);
        }
        .content-btn-submit {
            color: #fff;
            background:linear-gradient(207deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%);
            box-shadow:0px 2px 16px 0px rgba(42,130,228,0.2);
        }
        .content-form-divider {
            font-size: 0.16rem;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:0.22rem;
            display: flex;
            margin-bottom: 0.3rem;
            .content-form-line {
                width: 4px;
                height: 0.22rem;
                background-color: #2A82E4;
                margin-right: 0.3rem;
                display: inline-block;
            }
        }
        .content-form-upload {
            font-size: 0.16rem;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color: #333;
            width: 100%;
            height: 0.6rem;
            line-height: 0.6rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-bottom: 1px solid #D8D8D8;
            .content-form-upload-icon {
                width: 0.17rem;
                height: 0.2rem;
                margin-left: 0.3rem;
            }
            span {
                color: #FF0024;
                margin-right: 4px;
            }
        }
        .content-form-upload-spe {
            border-bottom: 1px solid #D8D8D8;
            padding-bottom: 0.2rem;
            .content-form-upload {
                border-bottom: none;
            }
        }
        .form-upload-case {
            display: flex;
            .form-upload-img {
                width: 0.86rem;
                height: 0.86rem;
                display: flex;
                align-items: center;
                justify-content: center;
                background-size: cover;
            }
            .form-upload-img0 {
                margin-right: 0.2rem;
                background-image: url("../../assets/imgs/project/bg0.png");
                .form-upload-icon0 {
                    width: 0.3rem;
                    height: 0.3rem;
                }
            }
            .form-upload-img1 {
                background-image: url("../../assets/imgs/project/bg1.png");
                .form-upload-icon1{
                    width: 0.31rem;
                    height: 0.38rem;
                }
            }
        }
    }
    .form-txt {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 0.32rem;
        .form-txt-text {
            font-size: 0.14rem;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height: 0.2rem;
        }
        .form-txt-search {
            width: 0.17rem;
            height: 0.18rem;
            margin-left: 0.1rem;
        }
        .form-txt-del {
            width: 0.14rem;
            height: 0.18rem;
            margin-left: 0.1rem;
        }
    }
    .form-methods {
        display: flex;
        justify-content: flex-start;
        height: 0.6rem;
        align-items: center;
        margin-bottom: 0.2rem;
        .form-method {
            width: 1.6rem;
            height: 0.4rem;
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 16px 0px rgba(42,130,228,0.2);
            border-radius: 0.2rem;
            border:1px solid rgba(92,169,255,1);
            font-size: 0.16rem;
            color: #666;
            text-align: center;
            line-height: 0.4rem;
            margin-right: 0.22rem;
        }
        .plus-icon {
            font-size: 0.6rem;
            color: #5CA9FF;
            height: 0.6rem;
            line-height: 0.44rem;
        }
    }
    .form-unit {
        font-size: 0.16rem;
        color: #333;
        margin-left: 10px;
    }
</style>>

<style>
    .el-input {
        width: auto;
    }
</style>