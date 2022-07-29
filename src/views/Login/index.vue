<template>
  <div class="login_box">
    <div class="value_box" style="width: 80%;">
      <div class="form_box">
        <div class="official_box" style="margin-top: -5.2em;">
          <img style="width: 110px;height: 70px;" src="@/assets/image/twodevelopment/logo.png">
<!--          <img style="width: 180px; height: 55px;" src="@/assets/image/twodevelopment/logo-light-text-large.png">-->
        </div>
        <div class="formtitle" style="margin-bottom: 2em;">
          <p class="chiness">运营管理系统</p>
          <p class="english">Operation Management System</p>
        </div>
        <div class="sendform_box">
          <div class="sendform">
            <div class="form_val">
              <ul style="margin-top: 1em;">
                <li class="form_val_box" style="padding-bottom: 40px;">
                  <p class="form_val_title" style="font-size: 17px;">账号</p>
                  <div>
                    <p class="username"></p>
                    <input style="caret-color:#fff;" v-focus @focus="userFocus(1)" @blur="userBlur(1)" type="text" :placeholder="userAccount ? '' :userToast"  v-model="userAccount" id="userAccount" class="inputs">
                  </div>
                </li>
                <li style="">
                  <p class="form_val_title" style="font-size: 17px;">密码</p>
                  <div>
                    <p class="pasword"></p>
                    <input style="caret-color:#fff;" type="password"  @focus="userFocus(2)" @blur="userBlur(2)" :placeholder="passToast" v-model="password" id="password" class="inputs">
                  </div>
                </li>
                <div class="errlog_box">
                  <p class="errlog" id="errMsg" v-show="errMsg">{{errMsg}}</p>
                </div>
                <!-- <li>
                  <span class="forget_pwd" @click="forgetpwd()" style="visibility: hidden;">忘记密码</span>
                </li> -->
                <li>
                  <!--<input class="login_btn" type="button" id="btnSubmit" value="登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录">-->
                  <span v-if="isShow" style="position: absolute;left: 0;width: 80%;bottom: 5.5em;right: 0;font-size: 20px;border-radius: 25px;" class="login_btn" id="btnSubmit" @keyup.enter="login()" @click="login()">登录</span>
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
      status: 'edit',
      isLogin: false,
      userToast: '请输入账号',
      passToast: '请输入密码',
      isShow: true,
      height: window.innerHeight
    }
  },
  created () {
    this.enterKeyup()
    if(localStorage.getItem('userAccount')) {
      this.userAccount = localStorage.getItem('userAccount')
      this.password = localStorage.getItem('password')
    }
  },
  destroyed () {
    this.enterKeyupDestroyed()
    window.onresize = null
  },
  mounted () {
    var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1
    if (isAndroid) { // 如果是安卓手机的浏览器
      window.onresize = () => {
        if (this.height > window.innerHeight) {
          this.isShow = false
        } else {
          this.isShow = true
        }
      }
    }
  },
  watch:{
    password (e){
     if(e) {
      this.errMsg = false
     } else {
       this.errMsg = '密码不能为空！'
     }
    },
    userAccount(e) {
       if(e) {
      this.errMsg = false
     } else {
       this.errMsg = '用户名不能为空！'
     }
    }
  },
  methods: {
    // 处理按钮被顶的问题
    // handleLoginBtn () {
    //   console.log(window.innerHeight)
    //   var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
    //   if (isAndroid) { // 如果是安卓手机的浏览器
    //     window.onresize = () => {
    //       if (this.height > window.innerHeight) {
    //         this.isShow = false
    //       } else {
    //         this.isShow = true
    //       }
    //     }
    //   }
    //   //   var win_h = $(window).height(); // 关键代码
    //   //   $("body").height(win_h); // 关键代码
    //   //   window.addEventListener('resize', function () {
    //   //     // Document 对象的activeElement 属性返回文档中当前获得焦点的元素。
    //   //     if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
    //   //       if ($('.footerText').is(':visible')) {
    //   //         $('.footerText').hide()
    //   //       }else{
    //   //         $('.footerText').show();
    //   //       }
    //   //     }
    //   //   });
    //   // }
    // },
    // 处理输入状态不明显
    userFocus (val) {
      // var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
      // if (isAndroid) { // 如果是安卓手机的浏览器
      //   this.isShow = false
      // }
      if (val === 1) {
        this.userToast = ''
      } else {
        this.passToast = ''
      }
    },
    userBlur (val) {
      // var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1;
      // if (isAndroid) { // 如果是安卓手机的浏览器
      //   this.isShow = true
      // }
      if (val === 1) {
        this.userToast = this.userAccount ? '' : '请输入账号'
      } else {
        this.passToast = this.password ? '' : '请输入密码'
      }
    },
    // 登录方法
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
                message: '登录成功',
                onClose: () => {
                  localStorage.setItem('userAccount', data.userAccount)
                  localStorage.setItem('password', data.password)
                  this.$store.dispatch('getInfo')
                }
              })
            } else {
              this.$toast(res.bizResultMessage)
            }
          }).catch(err => {
            console.log(err)
            this.$toast('(╥﹏╥) 我走丢了，请稍后再试！')
          })
        } else {
          this.errMsg = '密码不能为空！'
        }
      } else {
        this.errMsg = '用户名不能为空！'
      }
    },
    forgetpwd () {
      this.$router.push({ name: 'forgetPassword', params: { status: this.status ? this.status : 'forget', statu1: '1' } })
    },
    // 监听键盘事件--回车键
    enterKey (event) {
      const componentName = this.$options.name
      if (componentName === 'Login') {
        const code = event.keyCode
          ? event.keyCode
          : event.which
            ? event.which
            : event.charCode
        if (code === 13) {
          this.login()
        }
      }
    },
    // 登陆成功后，摧毁监听事件
    enterKeyupDestroyed () {
      document.removeEventListener('keyup', this.enterKey)
    },
    // 调用监听事件
    enterKeyup () {
      document.addEventListener('keyup', this.enterKey)
    }
  }
}
</script>
<style  src="../../assets/css/Login.css" scoped></style>
<style scoped>
  @import '../../assets/css/Login.css';
  /*@import '@/assets/css/Login.css';*/
  .van-toast {
    background-color: rgba(241, 239, 239, 0.8);
    /* rgba(210, 199, 199, 0.3); */
  }
  input::-webkit-input-placeholder {
    /* placeholder颜色 */
    /* placeholder字体大小 */
    font-size: 16px;
  }
</style>
<style lang="less">
div.formtitle {
  /*padding-top: 0.2em !important;*/
  padding-bottom: 0px !important;
}
</style>
