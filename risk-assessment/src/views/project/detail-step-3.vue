<template>
    <div>
        <navCom :navIndex="1" :navArrs="navArrs" />
        <detailHeader />
        <el-form class="content-form" ref="form" :model="form">
            <div class="tabs-list">
                <div :class="{'tabs-item-sel': tabsVal === item.val}" class="tabs-item" v-for="item in tabsArr" :key="item.val">
                    {{item.label}}
                </div>
            </div>
            <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        线上数据采集
                    </div>
                </el-col>
            </el-row>
            <div class="form-qrcode-container">
                <img class="form-qrcode" src="../../assets/imgs/footer-qrcode.png" />
                <div class="form-qrcode-txt">
                    <p class="form-qrcode-title">扫描二维码打开问卷系统</p>
                    <p class="form-qrcode-tips">问卷系统连接</p>
                    <p class="form-qrcode-url">https://www.xiaopiu.com/h5/byId?type=project&id=5dce62be541a5d1f308f53fe</p>
                </div>
            </div>
            <el-row>
                <el-col :span="4">
                    <el-form-item  label="">
                        <el-button class="linear-btn">生成新问卷</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="4" :offset="1">
                    <el-form-item  label="">
                        <el-button class="linear-btn">纸质问卷上填</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="4" :offset="1">
                    <el-form-item  label="">
                        <el-button class="linear-btn">上传资料</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="4" :offset="1">
                    <el-form-item  label="">
                        <el-button class="linear-btn">数据查看</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="4" :offset="1">
                    <el-form-item  label="">
                        <el-button class="linear-btn">下载问卷</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        线下数据采集
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="23">
                    <el-form-item label="走访">
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
                <el-col :span="23" label="调查">
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
            <el-form-item class="form-btns" label-width="0">
                <el-button class="content-btn content-btn-cancel">取消</el-button>
                <el-button class="content-btn content-btn-submit" type="primary" @click="nextHandle">下一步</el-button>
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
            tabsVal: '0',
            tabsArr: [
                {
                    label: '问卷采集',
                    val: '0'
                },
                {
                    label: '数据统计',
                    val: '1'
                }
            ]
        }
    },
    components: { detailHeader, navCom, footerCom },
    methods: {
        nextHandle() {
            this.$router.push('/project/detail/4');
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
        }
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
    .form-qrcode-container {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 0.2rem;
        .form-qrcode {
            width: 1.61rem;
            height: 1.63rem;
            margin-right: 0.2rem;
        }
        .form-qrcode-txt {
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(51,51,51,1);
            font-size: 0.16rem;
            line-height: 0.22rem;
            width: 5rem;
            padding-top: 0.36rem;
            .form-qrcode-title {
                font-size: 0.18rem;
                line-height: 0.25rem;
                margin-bottom: 0.2rem;
            }
            .form-qrcode-tips {
                margin-bottom: 0.1rem;
            }
        }
    }
</style>>