<template>
  <div style="background-color: #f8f8f8;">
    <van-form id='editPwdForm'>
      <van-field
        v-model="personList.userAccount"
        type="text"
        label="账号:"
        readonly
      />
      <van-field
        v-model="personList.userName"
        type="text"
        label="用户名:"
        readonly
      />
      <van-field
        v-model="personList.genderDesc"
        type="text"
        label="性别:"
        readonly
      />
      <van-field
        v-model="personList.birthday"
        type="text"
        label="生日:"
        readonly
      />
      <van-field
        v-model="personList.telephone"
        type="text"
        label="电话:"
        readonly
      />
      <van-field
        v-model="personList.email"
        type="text"
        label="邮箱:"
        readonly
      />
      <van-field
        v-model="personList.certificatesType"
        type="text"
        label="证件类型:"
        readonly
      />
      <van-field
        v-model="personList.certificatesCode"
        type="text"
        label="证件号码:"
        readonly
      />
      <van-field
        v-model="personList.jobNumber"
        type="text"
        label="工号:"
        readonly
      />
      <van-field
        v-model="personList.bankCard"
        type="text"
        label="工资卡:"
        readonly
      />
      <van-field
        v-model="personList.weight"
        type="text"
        label="用户销售等级加权:"
        readonly
      />
      <van-field
        v-model="personList.roles"
        type="text"
        label="角色:"
        readonly
      />
      <van-field
        v-model="personList.orgName"
        type="text"
        label="机构:"
        readonly
      />
    </van-form>
  </div>
</template>

<script>
import { getUserInfo } from '../../api/user'

export default {
  name: 'index',
  data () {
    return {
      username: JSON.parse(sessionStorage.getItem('userinfo')).userName,
      userId: JSON.parse(sessionStorage.getItem('userinfo')).id,
      phone: '',
      code: '',
      password: '',
      repassword: '',
      oldPwd: '',
      status: this.$route.params.status,
      title: '个人信息',
      ischeckPwd: false,
      personList: {}
    }
  },
  created () {
    const params = { id: JSON.parse(sessionStorage.getItem('userinfo')).id }
    getUserInfo(params).then(res => {
      if (res.data) {
        if (res.data.roles) {
          res.data.roles = res.data.roles.map(item => {
            return item.roleName
          }).join(',')
        }
        if (res.data.orgList) {
          res.data.orgList = res.data.orgList.map(item => {
            return item.orgName
          }).join(',')
        }
        this.personList = res.data
      }
    })
  },
  methods: {}
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
  >>>.van-field__label {
    width: 90px;
    margin-right: 10px;
    /*text-align: right;*/
  }
</style>
