<template>
  <div class="login_box">
    <div class="value_box">
      <div class="form_box">
        <div class="official_box">
          <img style="width: 50%;" src="@/assets/image/twodevelopment/logo-light.png">
          <img style="width: 120%;" src="@/assets/image/twodevelopment/logo-light-text.png">
        </div>
        <div class="formtitle">
          <p class="chiness">中科金财运营管理系统</p>
          <p class="english">Sinodata Operation Management System</p>
        </div>
        <div class="sendform_box">
          <div class="sendform">

            <div class="errlog_box">
              <p class="errlog" id="errMsg" v-show="errMsg">{{errMsg}}</p>
            </div>
            <div class="form_val">
              <ul>
                <li class="form_val_box">
                  <p class="form_val_title">账号</p>
                  <div>
                    <p class="username"></p>
                    <input type="text" placeholder="请输入账号" v-model="userAccount" id="userAccount" class="inputs">
                  </div>
                </li>
                <li>
                  <p class="form_val_title">密码</p>
                  <div>
                    <p class="pasword"></p>
                    <input type="password" placeholder="请输入密码" v-model="password" id="password" class="inputs">
                  </div>
                </li>
                <li>
                  <span class="forget_pwd" @click="forgetpwd()">忘记密码</span>
                </li>
                <li>
                  <!--<input class="login_btn" type="button" id="btnSubmit" value="登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录">-->
                  <span class="login_btn" id="btnSubmit" @click="login()">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="page_bottom">-->
    <!--<div id="suggest">-->
    <!--<p onclick="changeSuggestMessage()" ><span class="consulting"></span>咨询.建议</p>-->
    <!--</div>-->
    <!--</div>-->
    <div class="opinions_box">
      <ul>
        <li>
          <div class="opinions_icon icon1"></div>
          <div class="opinions_way">
            <p class="opinions_key">使用对接人</p>
            <p class="opinions_val">陈景硕</p>
          </div>
        </li>
        <li>
          <div class="opinions_icon icon2"></div>
          <div class="opinions_way">
            <p class="opinions_key">咨询电话</p>
            <p class="opinions_val">15699993889</p>
          </div>
        </li>
        <li>
          <div class="opinions_icon icon3"></div>
          <div class="opinions_way">
            <p class="opinions_key">建议反馈</p>
            <p class="opinions_val">运管系统是不完美的，我们渴望合理、清晰的建议</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="shade">
      <div class="hint_alert">
        <p class="alert_title">提示</p>
        <input type="text" class="inputs" id="phone" style="height: 20px;border: 1px solid #333;" placeholder="请输入手机号码">
        <input type="button" value="获取验证码" onclick="getTextCode()">
        <div class="alert_val">重置密码需发送邮件给运管项目经理陈景硕（chenjingshuo@sinodata.net.cn），并抄送给您的直属上级领导。</div>
        <input type="button" class="closs" value="确定" onclick="forgetpwd()">
      </div>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import { Login } from '../../api/user'
export default {
  name: 'Login',
  title: 'Login',
  data () {
    return {
      userAccount: '',
      password: '',
      errMsg: '',
      status: 'edit'
    }
  },
  methods: {
    login () {
      if (this.userAccount) {
        if (this.password) {
          const data = {
            userAccount: this.userAccount,
            password: this.password,
            clientType: 'mobile'
          }
          Login(data).then(res => {
            if (res.resultCode === '200') {
              // Toast.success(res.bizResultMessage)
              this.$toast.loading({
                duration: 1000,
                loadingType: 'spinner',
                type: 'success',
                forbidClick: true,
                message: res.bizResultMessage,
                onClose: () => {
                  this.$store.dispatch('getInfo')
                  this.$router.push('/approval')
                }
              })
            } else {
              this.$toast(res.bizResultMessage)
            }
          }).catch(err => {
            console.log(err)
          }
          )
        } else {
          this.errMsg = '密码不能为空'
        }
      } else {
        this.errMsg = '用户名不能为空'
      }
    },
    forgetpwd () {
      this.$router.push({ name: 'forgetPassword', params: { status: this.status ? this.status : 'forget', statu1: '1' } })
    }
  }
}
</script>
<style  src="../../assets/css/Login.css" scoped></style>
<style scoped>
  @import '../../assets/css/Login.css';
  /*@import '@/assets/css/Login.css';*/
</style>
