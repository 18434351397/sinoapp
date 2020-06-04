/**
*@author CheYongJi
*@date 2020/5/15 9:39
*@title index
*/

<template>
  <div>
    <div style="padding: 10px 15px;text-align: left;background-color: #fff;">客户申请信息</div>
    <van-field
      name="username"
      v-model="custList.userName"
      type="text"
      label="申请人:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.userName}}</div>
      </template>
    </van-field>
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="custList.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="ownDeptId"
      v-model="custList.ownDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reqDeptId"
      v-model="custList.reqDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reqUserId"
      v-model="custList.reqUserId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="id"
      v-model="custList.id"
      type="text"
      readonly
    />
    <van-field
      name="orgName"
      v-model="custList.orgName"
      type="text"
      label="申请人部门:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.orgName}}</div>
      </template>
</van-field>
    <van-field
      name="companyDesc"
      v-model="custList.companyDesc"
      type="text"
      label="涉及公司:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.companyDesc}}</div>
      </template>
</van-field>
    <van-field
      name="sealTypeDesc"
      v-model="custList.sealTypeDesc"
      type="text"
      label="印章类型:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.sealTypeDesc}}</div>
      </template>
</van-field>
    <van-field
      name="operaTionDesc"
      v-model="custList.operaTionDesc"
      type="text"
      label="操作:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.operaTionDesc}}</div>
      </template>
</van-field>
    <van-field
      name="reason"
      v-model="custList.reason"
      type="text"
      label="原因和依据:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.reason}}</div>
      </template>
</van-field>
    <van-field
      name="remark"
      v-model="custList.remark"
      type="text"
      label="备注:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.remark}}</div>
      </template>
</van-field>
  </div>
</template>
<script>
import { sealdestoryformList } from '../../api/characteristic'

export default {
  name: 'index',
  data () {
    return {
      custList: [],
      dataList: this.$route.query
    }
  },
  created () {
    sealdestoryformList(this.dataList.dataId).then(res => {
      this.custList = res.data
    })
  }
}
</script>

<style scoped>

</style>
