<template>
    <div>
      <van-card
        :thumb="imageURL"
        centered
        @click="toPerson"
        style="margin: 0;"
      >
        <div slot="title">
          <div style="font-size: 20px;">{{userinfo.userName}}</div>
        </div>
        <div slot="desc" style="width: 100%;margin: 0;">
          <div style="margin: 0;width: 100%;display: flex;justify-content: space-between;align-items: center;">
            <div><span>账号: </span>{{userinfo.userAccount}}</div><van-icon name="arrow" />
          </div>
        </div>
        <div slot="thumb">
            <div style="display: flex;justify-content: center;align-items: center;height: 100px;border-radius: 50%;">
              <img style="border: 1px solid rgb(153, 153, 153);border-radius: 50%;" src="../../assets/image/twodevelopment/my.png" height="50" width="50"/>
            </div>
        </div>
      </van-card>
      <div style="padding: 10px;">
        <van-button @click="editPassword" round type="default" style="width: 100%;margin-bottom: 20px;position: fixed;top: 190px;left: 0;">修改密码</van-button>
        <van-button @click="loginout($event)" round id="loginout" type="default" style="width: 100%;position: fixed;bottom: 100px;left: 0;">退出</van-button>
      </div>

    </div>
</template>

<script>
import { Dialog } from 'vant'
import { getSession } from '../../utils/auth'

export default {
  name: 'my',
  data () {
    return {
      imageURL: 'touxiang',
      title: '陈景硕',
      message: 'chenjingshuo',
      num: '>',
      userinfo: getSession('userinfo'),
      show: false
    }
  },
  created () {
    // this.enterKeyup()
  },
  destroyed () {
    this.enterKeyupDestroyed()
    // window.removeEventListener('scroll')
  },
  methods: {
    toPerson () {
      // console.log('personCenter')
      this.$router.push('/personCenter')
    },
    editPassword () {
      this.$router.push('/editPassword')
    },
    loginout (e) {
      e.stopPropagation()
      this.show = true
      if (this.show === true) {
        Dialog.confirm({
          message: '你确定要退出吗？'
        }).then(() => {
          // sessionStorage.removeItem('userinfo')
          this.$store.dispatch('setactive', 0)
          this.$store.dispatch('loginout')
          this.$router.push('/')
        }).catch(() => {
          // on close
        })
      }
    },
    // 监听键盘事件--空格键
    enterKey (event) {
      const componentName = this.$options.name
      if (componentName === 'my') {
        const code = event.keyCode
          ? event.keyCode
          : event.which
            ? event.which
            : event.charCode
        if (code === 32) {
          this.show = false
          Dialog.close()
          this.$store.dispatch('loginout')
          this.$router.push('/')
        }
      }
    },
    // 退出成功后，摧毁监听事件
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

<style scoped>
  .van-card{
    padding: 20px 15px;
  }
  .van-card__content div{
    margin: 0;
    text-align: left;
  }
  .van-icon, span{
    margin: 0;
  }
</style>
