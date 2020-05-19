/**
*@author XuJinTao
*@date 2020/5/19 15:00
*@title index
*/
<template>
  <div class="bizfeesreimbursementform">
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
    <van-field type="text" name="feesTypeDes" v-model="feesTypeDes" label="报销类型" colon readonly />
    <van-field
      type="text"
      name="companyCodeUs"
      v-model="bizfeesreimbursementform.companyCodeUs"
      label="公司名称"
      colon
      readonly
    />
    <van-field
      type="text"
      name="feesCode"
      v-model="bizfeesreimbursementform.feesCode"
      label="报销编号"
      colon
      readonly
    />
    <van-field
      type="text"
      name="exeUserName"
      v-model="bizfeesreimbursementform.exeUserName"
      label="经办人员"
      colon
      readonly
    />
    <van-field
      type="text"
      name="remark"
      v-model="bizfeesreimbursementform.remark"
      label="备注"
      colon
      readonly
    />
    <van-field
      type="text"
      name="reimbursementDate"
      v-model="bizfeesreimbursementform.reimbursementDate"
      label="报销日期"
      colon
      readonly
    />
    <van-field
      type="text"
      name="costDate"
      v-model="bizfeesreimbursementform.costDate"
      label="费用归属日期"
      colon
      readonly
    />
    <div>
      <div class="table-title">报销明细详情</div>
      <el-table border :data="feesReimbursementDetailVOList" style="width: 100%">
        <el-table-column label="报销人员姓名" prop="reimbursementUserName" width="100"></el-table-column>
        <el-table-column label="科目" prop="subjectName"></el-table-column>
        <el-table-column label="金额" prop="amount"></el-table-column>
        <el-table-column label="立项号" prop="projectNo"></el-table-column>
        <el-table-column label="费用归属部门编码" prop="ownDeptCode"></el-table-column>
        <el-table-column label="费用归属部门名称" prop="ownDeptName"></el-table-column>
        <el-table-column label="费用归属部门经理" prop="ownDeptManager"></el-table-column>
        <el-table-column label="计入项目" prop="projectName"></el-table-column>
      </el-table>
    </div>
    <van-field
      type="text"
      name="reimbursementAmount"
      v-model="bizfeesreimbursementform.reimbursementAmount"
      label="报销总金额"
      colon
      readonly
    />
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

<style lang="less">
div.bizfeesreimbursementform {
  background-color: #f8f8f8;
  div.title {
    font-size: 14px;
    padding: 10px 15px;
  }
  div.table-title {
    font-size: 14px;
    border-top: 1px dashed #f8f8f8;
    padding: 10px 15px;
    text-align: left;
    background-color: #fff;
  }
}
div.bizfeesreimbursementform {
  div.tax.van-cell:not(:last-child)::after {
    border-bottom: 1px solid #6c6c6c;
  }
  .van-cell:not(:last-child)::after {
    border-bottom: none;
  }
}
</style>
