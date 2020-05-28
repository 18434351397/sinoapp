/** *@author XuJinTao *@date 2020/5/13 15:10 *@title index */
<template>
  <div class="app-title">
    <div class="title">分子公司设立与变更信息</div>
    <van-field
      style="display: none;"
      name="id"
      v-model="bizcompanychangeformList.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="bizcompanychangeformList.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="proposerId"
      v-model="bizcompanychangeformList.proposerId"
      type="text"
      readonly
    />
    <van-field
      type="text"
      name="proposerName"
      v-model="bizcompanychangeformList.proposerName"
      label="申请人"
      colon
      readonly
    />
    <van-field
      type="text"
      name="deptName"
      v-model="bizcompanychangeformList.deptName"
      label="申请人部门"
      colon
      readonly
    />
    <van-field
      type="text"
      name="type"
      v-model="bizcompanychangeformList.type"
      label="类型"
      colon
      readonly
    />
    <van-field
      type="text"
      name="companyName"
      v-model="bizcompanychangeformList.companyName"
      label="公司名"
      colon
      readonly
    />
    <van-field
      type="text"
      name="demand"
      v-model="bizcompanychangeformList.demand"
      label="需求"
      colon
      readonly
    />
    <van-field
      type="text"
      name="purpose"
      v-model="bizcompanychangeformList.purpose"
      label="目的用途"
      colon
      readonly
    />
    <van-field
      type="text"
      name="bussinessPlan"
      v-model="bizcompanychangeformList.bussinessPlan"
      label="经营计划"
      colon
      readonly
    />
    <van-field
      type="text"
      name="executer"
      v-model="bizcompanychangeformList.executer"
      label="实施人"
      colon
      readonly
    />
    <van-field
      type="text"
      name="remark"
      v-model="bizcompanychangeformList.remark"
      label="备注"
      colon
      readonly
    />
  </div>
</template>

<script>
import { bizcompanychangeformList } from '../../api/characteristic'

export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      bizcompanychangeformList: [] // 分子公司变更数据
    }
  },
  created () {
    bizcompanychangeformList(this.dataList.dataId).then(res => {
      if (res.data) {
        this.bizcompanychangeformList = res.data
      } else {
        throw new '数据异常'()
      }
    })
  },
  methods: {

  }
}

</script>
