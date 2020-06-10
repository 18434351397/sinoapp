<template>
  <div style="height: 100%;background-color: #f8f8f8;">
    <NavBar/>
    <div style="padding: 10px 15px;text-align: center;">{{title}}</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        center
        clearable
        name="telephone"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请输入手机号'}]"
      >
        <template #button>
          <van-button size="small" round native-type="button" type="info" @click="sendSms"><span>发送验证码</span></van-button>
        </template>
      </van-field>
      <van-field
        v-model="code"
        name="code"
        label="验证码"
        placeholder="请输入验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <van-field
        v-model="repassword"
        type="password"
        label="确认密码"
        name="repassword"
        placeholder="请输入确认密码"
        :rules="[{ required: true, message: '请再次输入密码' }]"
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
import { smsSend } from '../../api/user'
export default {
  name: 'index',
  components: {
    NavBar
  },
  data () {
    return {
      phone: '',
      code: '',
      password: '',
      repassword: '',
      OriginalPassword: '',
      status: this.$route.params.status,
      title: this.$route.params.status === 'forget' ? '忘记密码' : '修改密码'
    }
  },
  created () {
    console.log(this.$route.params.status)
  },
  methods: {
    onSubmit (values) {
      // let params = {}
      // if (this.status === 'forget') {
      //   params = {
      //     phone: this.phone,
      //     code: this.code,
      //     password: this.password,
      //     repassword: this.repassword
      //   }
      // } else {
      //   params = {
      //     OriginalPassword: this.OriginalPassword,
      //     password: this.password,
      //     repassword: this.repassword
      //   }
      // }
      console.log(values)
    },
    sendSms () {
      if (this.phone) {
        smsSend().then(res => {
          console.log(res)
        })
        console.log(this.phone)
      }
    },
    back () {
      this.$router.push('/')
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
    padding: 8px 0 16px;
    background: #fff;
  }
</style>
