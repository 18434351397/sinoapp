/**
*@author CheYongJi
*@date 2020/4/15 14:06
*@title index
*/
<template>
  <div class="app-title">
    <div class="title">客户申请信息</div>
    <van-field name="username" v-model="custList.name" type="text" label="客户名称:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.name}}</div>
      </template>
    </van-field>
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="custList.meetingUsers"
      type="text"
      readonly
    ></van-field>
    <van-field style="display: none;" name="id" v-model="custList.id" type="text" readonly></van-field>
    <van-field
      name="industryDesc"
      v-model="custList.industryDesc"
      type="text"
      label="行业分类:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.industryDesc}}</div>
      </template>
    </van-field>
    <van-field name="areaDesc" v-model="custList.areaDesc" type="text" label="客户区域:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.areaDesc}}</div>
      </template>
    </van-field>
    <van-field
      name="custnatureDesc"
      v-model="custList.custnatureDesc"
      type="text"
      label="客户性质:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.custnatureDesc}}</div>
      </template>
    </van-field>
    <van-field name="remark" v-model="custList.remark" type="text" label="备注:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.remark}}</div>
      </template>
    </van-field>
  </div>
</template>

<script>
import { customerList } from '../../api/customer'

export default {
  name: 'bizcustinfoform',
  data () {
    return {
      custList: [],
      dataList: this.$route.query
    }
  },
  created () {
    customerList(this.dataList.dataId).then(res => {
      this.custList = res.data
    })
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
