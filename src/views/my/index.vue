<template>
    <div>
      <van-card
        :title="userinfo.userName"
        :thumb="imageURL"
        centered
        @click="toPerson"
        style="margin: 0;"
      >
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
        <van-dialog id="van-dialog" />
        <van-button @click="editPassword" round type="default" style="width: 100%;margin-bottom: 20px;">修改密码</van-button>
        <van-button @click="loginout" round id="loginout" type="default" style="width: 100%;">退出</van-button>
      </div>

    </div>
</template>

<script>
import { Dialog } from 'vant'
import { getSession } from '../../utils/auth'

export default {
  name: 'index',
  data () {
    return {
      imageURL: 'touxiang',
      title: '陈景硕',
      message: 'chenjingshuo',
      num: '>',
      userinfo: getSession('userinfo')
    }
  },
  methods: {
    toPerson () {
      // console.log('personCenter')
      this.$router.push('/personCenter')
    },
    editPassword () {
      this.$router.push('/editPassword')
    },
    loginout () {
      Dialog.confirm({
        message: '你确定要退出吗？'
      }).then(() => {
        // sessionStorage.removeItem('userinfo')
        this.$store.dispatch('loginout')
        this.$router.push('/')
      }).catch(() => {
        // on close
      })
    }
  }
}
</script>

<style scoped>
  .van-card__content div{
    margin: 0;
    text-align: left;
  }
  .van-icon, span{
    margin: 0;
  }
</style>
