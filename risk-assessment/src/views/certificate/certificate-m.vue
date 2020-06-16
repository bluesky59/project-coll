<template>
  <div>
    <navCom :navArrs="navArrs" />
    <div class="main-content">
      <p class="main-nav">认证 ＞ 项目主体认证</p>
      <div class="main-box">
          <h4 class="content-title">管理机构认证</h4>
          <div class="content-divider"></div>
          <p class="content-tips">认证通过后，企业可参与竞标平台稳评项目！</p>
          <el-form class="content-form" ref="form" :model="form" label-width="140px">
              <el-row>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="机构名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="统一社会信用代码">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="机构类型">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="所属地区">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="11" :offset="1">
                    <el-form-item label="机构官网">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11" :offset="1">
                    <el-form-item label="机构座机">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="机构负责人">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="11" :offset="1">
                    <el-form-item required label="负责人电话">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="23" :offset="1">
                    <el-form-item required label="机构地址">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="23" :offset="1">
                    <el-form-item required label="机构简介">
                        <el-input type="textarea" :rows="3" v-model="form.name"></el-input>
                    </el-form-item>
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
import { navArrs } from '@/data/nav.js';

export default {
  name: 'Home',
  components: {
    navCom, footerCom
  },
  data() {
    return {
        form: {},
        navArrs
    }
  },
  methods: {
      onSubmit() {}
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
