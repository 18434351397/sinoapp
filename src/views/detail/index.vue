/**
*@author CheYongJi
*@date 2020/4/15 12:51
*@title index
*/
<template>
    <div>
      <div style="background-color: #f8f8f8;">
        <van-form id='editPwdForm' @submit="onSubmit">
          <van-field
            v-model="flowList.currFlowName"
            type="text"
            label="流程名称:"
            readonly
          />
          <van-field
            v-model="flowList.statusDes"
            type="text"
            label="流程状态:"
            readonly
          />
          <van-field
            v-model="flowList.currTaskDefinitionName"
            type="text"
            label="当前节点:"
            readonly
          />
          <van-field
            v-model="flowList.currUserName"
            type="text"
            label="当前处理人:"
            readonly
          />
          <van-field
            v-model="flowList.userName"
            type="text"
            label="发起人:"
            readonly
          />
          <van-field
            v-model="flowList.createdDate"
            type="text"
            label="发起时间:"
            readonly
          />
          <router-view />
          <div class="submitBox">
            <van-button style="width: 30%" round block  type="info" native-type="submit">
              提交
            </van-button>
            <van-button style="width: 30%" @click="counterSign" round block type="default" native-type="button">
              会签
            </van-button>
            <van-button style="width: 30%" @click="back" round block type="default" native-type="button">
              取消
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
</template>

<script>
import { flowForm } from '../../api/flowfrom'
import { Dialog } from 'vant'

export default {
  name: 'index',
  data () {
    return {
      flowList: [],
      dataList: this.$route.query
    }
  },
  created () {
    const url = '/' + this.dataList.searchType + '/' + this.dataList.id
    flowForm(url).then(res => {
      if (res) {
        this.flowList = res.data
        this.flowList.createdDate = this.flowList.createdDate.split('.')[0]
      }
    })
    console.log(this.dataList)
  },
  methods: {
    onSubmit (values) {
      // checkOldPwd({ oldPwd: this.oldPwd }).then(res => {
      //   if (res.data === '1') {
      //     this.ischeckPwd = true
      //     this.submit(values)
      //   } else {
      //     this.$toast('原始密码不正确')
      //     this.ischeckPwd = false
      //   }
      // })
      // console.log(values)
    },
    submit (values) {
      if (this.ischeckPwd === true) {
        if (values.userToken === values.confirmPwd) {
          if (values.userToken !== values.oldPwd) {
            Dialog.confirm({
              message: '你确定要提交吗？'
            }).then(() => {
              // editPswd(values).then(res => {
              //   if (res.resultCode === '200') {
              //     this.$toast.loading({
              //       duration: 1000,
              //       loadingType: 'spinner',
              //       type: 'success',
              //       forbidClick: true,
              //       message: '修改成功',
              //       onClose: () => {
              //         // this.$store.dispatch('getInfo')
              //         this.$router.push('/')
              //       }
              //     })
              //   }
              // })
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
    counterSign () {
      console.log('huiqian')
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .submitBox {
    z-index: 999;
    width: 100%;
    position: fixed;
    bottom: 50px;
    left: 0;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    background: #fff;
  }
</style>
