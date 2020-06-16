<template>
    <div>
        <navCom :navIndex="1" :navArrs="navArrs" />
        <div class="main-container">
            <p class="main-nav">认证 ＞ 项目主体认证</p>
            <div class="main-content">
                <h4 class="content-title">新建报备</h4>
                <div class="content-divider"></div>
                <p class="content-tips">上传资料建立新项目</p>
                <stepCom :stepIndex="1" />
                <el-form class="content-form" ref="form" :model="form" label-width="80px">
                    <el-row>
                        <el-col :span="11">
                            <el-form-item required label="跟踪项目">
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
                    <div class="main-list">
                        <div class="main-item" v-for="item in parjectArrs" :key="item.id">
                            <div class="main-item-title">
                            <el-row>
                                <el-col :span="10">项目编号: {{item.number}}</el-col>
                                <el-col :span="5">承接方: {{item.obj}}</el-col>
                                <el-col :span="5">承接时间: {{item.date}}</el-col>
                            </el-row>
                            </div>
                            <div class="main-item-content">
                            <el-row>
                                <el-col :span="10">{{item.name}}</el-col>
                                <el-col :span="5">{{item.status}}</el-col>
                            </el-row>
                            </div>
                        </div>
                    </div>
                    <el-row>
                        <el-col :span="23">
                            <el-form-item required label="跟踪反馈">
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
                </el-form>
                <div class="form-btns">
                    <el-button class="content-btn content-btn-cancel" @click="preStep">上一步</el-button>
                    <el-button class="content-btn content-btn-cancel">取消</el-button>
                    <el-button class="content-btn content-btn-submit" type="primary" @click="nextStep">提交报备</el-button>
                </div>
            </div>
        </div>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import stepCom from '@/components/step.vue'
import { navArrs } from '@/data/nav.js';
export default {
    components: {
        navCom, footerCom, stepCom
    },
    data() {
        return {
            navArrs,
            parjectArrs: [
                {
                number: 'GZ-GY-NM-BMH-JS-170705',
                obj: '中科测评',
                date: '2020-01-11',
                name: '万科运雅典城商品房用地稳评项目',
                status: '调查评估中',
                id: 0
                }
            ],
            form: {},
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
    methods: {
        nextStep() {
            this.$router.push('/report');
        },
        preStep() {
            this.$router.push('/report/step/1');
        }
    }
}
</script>

<style scoped lang="scss">
    .main-container {
        width: 14.4rem;
        height: auto;
        margin: 0 auto;
        .main-content {
            padding: 0.5rem;
            background-color: #fff;
            margin-bottom: 1rem;
            .content-form {
                width: 10rem;
                margin: 0.4rem auto 0;
            }
        }
    }
</style>