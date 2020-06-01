<template>
  <div style="height: 100%;background-color: #f8f8f8;">
    <NavBar/>
    <van-form id='editPwdForm' @submit="onSubmit">
      <van-field
        v-model="username"
        type="text"
        label="用户名"
        name="userName"
        readonly
      />
      <van-field
        v-model="userId"
        type="text"
        label="用户名"
        name="userId"
        style="display: none;"
      />
      <van-field
        v-model="oldPwd"
        type="password"
        label="原密码"
        name="oldPwd"
        placeholder="请输入原密码"
        :rules="[{ required: true, message: '请输入原密码' }]"
      />
      <van-field
        show-word-limit
        maxlength="16"
        v-model="password"
        type="password"
        label="密码"
        name="userToken"
        required
        placeholder="请输入密码"
        :rules="[{ required: true, message: toastMessage, validator: validator }]"
      />
      <van-field
        show-word-limit
        required
        maxlength="16"
        v-model="repassword"
        type="password"
        label="确认密码"
        name="confirmPwd"
        placeholder="请输入确认密码"
        :rules="[{ validator: revalidator, required: true, message: retoastMessage }]"
      />
      <div class="submitBox">
        <van-button style="width: 30%" round block  type="info" native-type="submit">
          提交
        </van-button>
        <van-button style="width: 30%" @click="back" round block type="default" native-type="button">
          取消
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar'
import { editPswd, checkOldPwd } from '../../api/user'
import { Dialog } from 'vant'

export default {
  name: 'index',
  components: {
    NavBar
  },
  data () {
    return {
      toastMessage: '',
      retoastMessage: '',
      username: JSON.parse(sessionStorage.getItem('userinfo')).userName,
      userId: JSON.parse(sessionStorage.getItem('userinfo')).id,
      phone: '',
      code: '',
      password: '',
      repassword: '',
      oldPwd: '',
      status: this.$route.params.status,
      title: this.$route.params.status === 'forget' ? '忘记密码' : '修改密码',
      ischeckPwd: false
    }
  },
  created () {
  },
  mounted () {
    this.validator()
    this.revalidator()
  },
  methods: {
    // 验证密码规则
    validator (val) {
      console.log(val)
      if (/(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{0,16}/.test(val) === false) {
        this.toastMessage = '密码6-16位，必须为字母+数字+特殊字符'
      }
      return /(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{0,16}/.test(val)
    },
    revalidator (val) {
      if (/(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{0,16}/.test(val) === false) {
        console.log(this.retoastMessage)
        this.retoastMessage = '密码6-16位，必须为字母+数字+特殊字符'
      }
      return /(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{0,16}/.test(val)
    },
    onSubmit (values) {
      checkOldPwd({ oldPwd: this.oldPwd }).then(res => {
        if (res.data === '1') {
          this.ischeckPwd = true
          this.submit(values)
        } else {
          this.$toast('原始密码不正确')
          this.ischeckPwd = false
        }
      })
      console.log(values)
    },
    submit (values) {
      if (this.ischeckPwd === true) {
        if (values.userToken === values.confirmPwd) {
          if (values.userToken !== values.oldPwd) {
            Dialog.confirm({
              message: '你确定要提交吗？'
            }).then(() => {
              editPswd(values).then(res => {
                if (res.resultCode === '200') {
                  this.$toast.loading({
                    duration: 1000,
                    loadingType: 'spinner',
                    type: 'success',
                    forbidClick: true,
                    message: '修改成功',
                    onClose: () => {
                      // this.$store.dispatch('getInfo')
                      this.$router.push('/')
                    }
                  })
                }
              })
            }).catch(() => {
            })
          } else {
            this.$toast('新密码不能与旧密码相同')
          }
        } else {
          this.$toast('两次密码不一致')
        }
      }
    },
    sendSms () {
      if (this.phone) {
        console.log(this.phone)
      }
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .submitBox {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    background: #fff;
  }
</style>
