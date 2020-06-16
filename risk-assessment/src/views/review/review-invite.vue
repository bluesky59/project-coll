<template>
    <div>
        <navCom :navIndex="1" :navArrs="navArrs" />
        <div class="main-container">
            <p class="main-nav">认证 ＞ 项目主体认证</p>
            <div class="main-content">
                <div class="content-form-divider content-form-divider-spe">
                    <span class="content-form-line"></span>
                    审查项目
                </div>
                <projectCom />
                <div class="content-form-divider content-form-divider-spe">
                    <span class="content-form-line"></span>
                    会议详情
                </div>
                <el-form class="content-form" ref="form" :model="form" label-width="80px">
                    <el-row>
                        <el-col :span="11">
                            <el-form-item required label="会议时间">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11" :offset="1">
                            <el-form-item required label="会议地点">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="11">
                            <el-form-item required label="会议主持">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="23">
                            <el-form-item required label="参与人员">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4">
                            <el-form-item  label="">
                                <el-button class="linear-btn">会议现场照片</el-button>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item  label="">
                                <el-button class="linear-btn">会议资料</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="11">
                            <el-form-item required label="与会人员">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="23">
                            <el-form-item  label="">
                                <el-button class="linear-btn">与会人员资料</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="23">
                            <el-form-item required label="会议纪要">
                                <el-input type="textarea" :rows="3" v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="23">
                            <el-form-item  label="">
                                <el-button class="linear-btn">资料上传</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </div>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import photoCom from '../../views/library/common/photo'
import projectCom from './common/project'
import { navArrs } from '@/data/nav.js';
export default {
    components: {
        navCom, footerCom, photoCom, projectCom
    },
    data() {
        return {
            form: {},
            navArrs
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
            padding: 0.1rem 1.5rem;
            background-color: #fff;
            margin-bottom: 1rem;
            .content-form {
                margin: 0.4rem auto 0;
            }
        }
    }
</style>