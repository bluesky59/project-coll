<template>
  <div>
    <navCom :navIndex="1" :navArrs="navArrs" />
    <div class="main-content">
      <p class="main-nav">认证 ＞ 项目主体认证</p>
      <div class="main-box">
          <h4 class="content-title">新建项目</h4>
          <div class="content-divider"></div>
          <p class="content-tips">上传资料建立新项目</p>
          <stepCom :stepIndex="0" />
          <el-form class="content-form" ref="form" :model="form" label-width="80px">
              <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        项目基础资料
                    </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="11">
                    <el-form-item required label="项目名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="主管部门">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="11">
                    <el-form-item required label="责任主体">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="项目地址">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="11">
                    <el-form-item required label="项目类型">
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
                <el-col :span="11" :offset="1">
                    <el-form-item required label="项目阶段">
                        <el-select v-model="form.name" placeholder="请选择">
                            <el-option
                                v-for="item in stepOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="23">
                    <el-form-item required label="公司简介">
                        <el-input type="textarea" :rows="3" v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="23">
                    <div class="content-form-divider">
                        <span class="content-form-line"></span>
                        领导小组成员
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
                    <el-form-item required label="联系电话">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="11">
                    <el-form-item required label="副组长">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="联系电话">
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
                        项目文件上传
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
                <el-button class="content-btn content-btn-submit" type="primary" @click="onSubmit">下一步</el-button>
            </el-form-item>
        </el-form>
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
  name: 'Home',
  components: {
    navCom, footerCom, stepCom
  },
  data() {
    return {
        navArrs,
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
        }],
        stepOptions: [{
          value: '阶段1',
          label: '阶段1'
        }, {
          value: '阶段2',
          label: '阶段2'
        }, {
          value: '阶段3',
          label: '阶段3'
        }, {
          value: '阶段4',
          label: '阶段4'
        }, {
          value: '阶段5',
          label: '阶段5'
        }]
    }
  },
  methods: {
      onSubmit() {
          this.$router.push('/project/step/1');
      }
  }
}
</script>

<style lang="scss" scoped>
  .main-content {
    width: 14.4rem;
    height: auto;
    background-color: #F7F7F7;
    margin: 0 auto;
    .main-nav {
      font-size: 0.14rem;
      line-height: 0.6rem;
      color: #666;
    }
    .main-box {
        width: 100%;
        height: auto;
        background-color: #fff;
        padding: 0.4rem 1rem 0.5rem;
        margin-bottom: 0.8rem;
        box-sizing: border-box;
        .content-title {
            font-size: 0.2rem;
            font-family:FZZCHJW--GB1-0,FZZCHJW--GB1;
            font-weight:normal;
            color:rgba(42,130,228,1);
            line-height: 0.24rem;
            letter-spacing: 1px;
            text-align: center;
        }
        .content-divider {
            width: 0.4rem;
            height: 4px;
            background-color: #333;
            border-radius: 2px;
            margin: 0.15rem auto 0.3rem;
        }
        .content-tips {
            font-size: 0.14rem;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(153,153,153,1);
            line-height: 0.2rem;
            text-align: center;
        }
        .content-form {
            margin-top: 0.6rem;
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
    }
  }
</style>>

<style>
    .el-form-item__label {
        color: #333;
        font-size: 0.16rem;
    }
    .el-upload--picture-card {
        width: 1.35rem;
        height: 0.86rem;
        line-height: 0.86rem;
    }
    .el-upload--picture-card i {
        color: rgb(76, 149, 255);
        font-weight: bolder;
    }
    .el-select {
        width: 100%;
    }
</style>
