/**
*@author XuJinTao
*@date 2020/5/19 15:00
*@title index
*/
<template>
  <div class="app-title">
    <div class="title">分摊费用信息</div>
    <van-field
      style="display: none;"
      name="id"
      v-model="bizfeesreimbursementform.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="ownDeptId"
      v-model="bizfeesreimbursementform.ownDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="payee"
      v-model="bizfeesreimbursementform.payee"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="feesType"
      v-model="bizfeesreimbursementform.feesType"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="bizfeesreimbursementform.meetingUsers"
      type="text"
      readonly
    />
    <van-field type="text" name="feesTypeDes" v-model="feesTypeDes" label="报销类型" colon readonly >
<template #input>
        <div style="text-align: left;margin: 0;">{{feesTypeDes}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="companyCodeUs"
      v-model="bizfeesreimbursementform.companyCodeUs"
      label="公司名称"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesreimbursementform.companyCodeUs}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="feesCode"
      v-model="bizfeesreimbursementform.feesCode"
      label="报销编号"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesreimbursementform.feesCode}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="exeUserName"
      v-model="bizfeesreimbursementform.exeUserName"
      label="经办人员"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesreimbursementform.exeUserName}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="remark"
      v-model="bizfeesreimbursementform.remark"
      label="备注"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesreimbursementform.remark}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="reimbursementDate"
      v-model="bizfeesreimbursementform.reimbursementDate"
      label="报销日期"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesreimbursementform.reimbursementDate}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="costDate"
      v-model="bizfeesreimbursementform.costDate"
      label="费用归属日期"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesreimbursementform.costDate}}</div>
      </template>
</van-field>
    <div>
      <div class="table-title">报销明细详情</div>
       <vxe-table border resizable highlight-hover-row :data="feesReimbursementDetailVOList" >
        <vxe-table-column field="reimbursementUserName" title="报销人员姓名" width="21%"></vxe-table-column>
        <vxe-table-column field="subjectName" title="科目" width="21%"></vxe-table-column>
        <vxe-table-column field="amount" title="金额" width="21%"></vxe-table-column>
        <vxe-table-column field="projectNo" title="立项号" width="21%"></vxe-table-column>
        <vxe-table-column field="ownDeptCode" title="费用归属部门编码" width="21%"></vxe-table-column>
        <vxe-table-column field="ownDeptName" title="费用归属部门名称" width="21%"></vxe-table-column>
        <vxe-table-column field="ownDeptManager" title="费用归属部门经理" width="21%"></vxe-table-column>
        <vxe-table-column field="projectName" title="计入项目" width="21%"></vxe-table-column>
      </vxe-table>
    </div>
    <van-field
      type="text"
      name="reimbursementAmount"
      v-model="bizfeesreimbursementform.reimbursementAmount"
      label="报销总金额"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesreimbursementform.reimbursementAmount}}</div>
      </template>
  </van-field>
  </div>
</template>

<script>
import { bizfeesreimbursementformApi } from '../../api/costManagementApi'
export default {
  name: 'index',
  data () {
    return {
      feesTypeDes: '费用分摊',
      dataList: this.$route.query,
      feesReimbursementDetailVOList: [], // 报销明细详情列表
      bizfeesreimbursementform: []
    }
  },
  created () {
    bizfeesreimbursementformApi(this.dataList.dataId).then(res => {
      if (res.data) {
        this.bizfeesreimbursementform = res.data
        this.feesReimbursementDetailVOList = res.data.feesReimbursementDetailVOList ? res.data.feesReimbursementDetailVOList : []
        this.bizfeesreimbursementform.reimbursementAmount = 0
        for (const i of this.feesReimbursementDetailVOList) {
          if (i.amount) {
            this.bizfeesreimbursementform.reimbursementAmount += Number(i.amount)
          }
        }
        this.bizfeesreimbursementform.reimbursementAmount = this.bizfeesreimbursementform.reimbursementAmount.toFixed(2)
      } else { }
    })
  },
  methods: {
    // 下载调用方法
    handleClick (data) {
      console.log(data.url)
      this.downLoad(data)
    },
    // 处理序号
    indexMethods (index) {
      return index + 1
    }
  }
}
</script>
