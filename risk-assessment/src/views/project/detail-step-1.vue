<template>
    <div>
        <navCom :navIndex="1" :navArrs="navArrs" />
        <detailHeader />
        <el-form class="content-form" ref="form" :model="form" label-width="80px">
            <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        实施小组名单
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="11">
                    <el-form-item required label="组长">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="副组长">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="23">
                    <el-form-item required label="组员">
                        <el-input type="textarea" :rows="3" v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        项目资料
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="23">
                    <div class="content-form-upload-spe">
                        <div class="content-form-upload">
                            <span>* </span>项目委托书
                            <img class="content-form-upload-icon" src="../../assets/imgs/project/upload-icon.png" />
                        </div>
                        <div class="form-upload-case">
                            <div class="form-upload-img form-upload-img0">
                                <img class="form-upload-icon0" src="../../assets/imgs/project/icon0.png" />
                            </div>
                            <div class="form-upload-img form-upload-img1">
                                <img class="form-upload-icon1" src="../../assets/imgs/project/icon1.png" />
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="23">
                    <div class="content-form-upload">
                        立项建议书
                        <img class="content-form-upload-icon" src="../../assets/imgs/project/upload-icon.png" />
                    </div>
                </el-col>
                <el-col :span="23">
                    <div class="content-form-upload">
                        <span>* </span>可行性研究报告
                        <img class="content-form-upload-icon" src="../../assets/imgs/project/upload-icon.png" />
                    </div>
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
            form: {},
            navArrs
        }
    },
    components: { detailHeader, navCom, footerCom },
    methods: {
        skipNext() {
            this.$router.push('/project/detail/2');
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
</style>>