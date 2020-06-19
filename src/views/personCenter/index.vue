<template>
  <div class="user-style">
    <van-form id="editPwdForm">
      <van-field v-model="personList.userAccount" type="text" label="账号:" readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{personList.userAccount}}</div>
        </template>
      </van-field>
      <van-field v-model="personList.userName" type="text" label="用户名:" readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{personList.userName}}</div>
        </template>
      </van-field>
      <van-field v-model="personList.genderDesc" type="text" label="性别:" readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{personList.genderDesc}}</div>
        </template>
      </van-field>
      <van-field v-model="personList.birthday" type="text" label="生日:" readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{personList.birthday}}</div>
        </template>
      </van-field>
      <van-field v-model="personList.telephone" type="text" label="电话:" readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{personList.telephone}}</div>
        </template>
      </van-field>
      <van-field v-model="personList.email" type="text" label="邮箱:" readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{personList.email}}</div>
        </template>
      </van-field>
      <van-field v-model="personList.certificatesType" type="text" label="证件类型:" readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{personList.certificatesType}}</div>
        </template>
      </van-field>
      <van-field v-model="personList.certificatesCode" type="text" label="证件号码:" readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{personList.certificatesCode}}</div>
        </template>
      </van-field>
      <van-field v-model="personList.jobNumber" type="text" label="工号:" readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{personList.jobNumber}}</div>
        </template>
      </van-field>
      <van-field v-model="personList.bankCard" type="text" label="工资卡:" readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{personList.bankCard}}</div>
        </template>
      </van-field>
      <van-field v-model="personList.weight" type="text" label="用户销售等级加权:" readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{personList.weight}}</div>
        </template>
      </van-field>
      <van-field v-model="personList.roles" type="text" label="角色:" readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{personList.roles}}</div>
        </template>
      </van-field>
      <van-field v-model="personList.orgName" type="text" label="机构:" readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{personList.orgName}}</div>
        </template>
      </van-field>
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
          res.data.orgName = res.data.orgList.map(item => {
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
  padding: 16px 0 20px;
  background: #fff;
}
>>> .van-field__label {
  width: 90px;
  margin-right: 10px;
  /*text-align: right;*/
}
</style>
<style lang="less">
.user-style {
  background-color: #f8f8f8;
  padding-bottom: 61px;
}
</style>
