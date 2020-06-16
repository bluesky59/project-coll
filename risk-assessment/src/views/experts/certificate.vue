<template>
  <div>
    <navCom :navArrs="expertsNavArrs" />
    <div class="main-content">
      <p class="main-nav">认证 ＞ 项目主体认证</p>
      <div class="main-box">
          <h4 class="content-title">专家认证</h4>
          <div class="content-divider"></div>
          <p class="content-tips">认证通过后，企业可参与竞标平台稳评项目！</p>
          <el-form class="content-form" ref="form" :model="form" label-width="140px">
              <el-row>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="姓名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="身份证号">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="地区">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="手机号">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="专业">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="职称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="11" :offset="1">
                    <el-form-item class="form-spe" required label="身份证">
                        <div class="form-spe-box form-spe-box-f">
                            <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <p>身份证正面</p>
                        </div>
                        <div class="form-spe-box">
                            <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <p>身份证背面</p>
                        </div>
                    </el-form-item>
                </el-col>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="证件信息">
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="上传简历"></el-form-item>
                    <el-button class="resume-upload">上传</el-button>
                </el-col>
              </el-row>
            <el-form-item class="form-btns" label-width="0">
                <el-button class="content-btn content-btn-cancel">取消</el-button>
                <el-button class="content-btn content-btn-submit" type="primary" @click="onSubmit">提交</el-button>
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
import { expertsNavArrs } from '@/data/nav.js';

export default {
  name: 'Home',
  components: {
    navCom, footerCom
  },
  data() {
    return {
        form: {},
        expertsNavArrs
    }
  },
  methods: {
      onSubmit() {},
      handlePictureCardPreview() {},
      handleRemove() {}
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
        }
    }
  }
  .resume-upload {
      display: block;
      width: 1.2rem;
      height: 0.4rem;
      line-height: 0.1rem;
      border-radius: 0.2rem;
      font-size: 0.16rem;
      color: #666;
      border: 1px solid #5CA9FF;
      margin-left: 0.9rem;
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
</style>
