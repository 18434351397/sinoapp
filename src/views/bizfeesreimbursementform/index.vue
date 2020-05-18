/**
*@author CheYongJi
*@date 2020/5/18 10:52
*@title index
*/
<template>
  <div>
    <div style="padding: 10px 15px;text-align: left;background-color: #fff;">个人借款信息</div>
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="custList.meetingUsers"
      type="text"
      readonly
    /><van-field
    style="display: none;"
    name="ownDeptId"
    v-model="custList.ownDeptId"
    type="text"
    readonly
  />
    <van-field
      style="display: none;"
      name="id"
      v-model="custList.id"
      type="text"
      readonly
    /><van-field
    style="display: none;"
    name="company"
    v-model="custList.company"
    type="text"
    readonly
  />
    <van-field
      style="display: none;"
      name="type"
      v-model="custList.type"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="loanUserId"
      v-model="custList.loanUserId"
      type="text"
      readonly
    />
<!--    <van-field label="付款对象:" name="borrower" v-model="custList.borrower">-->
<!--      <template #input>-->
<!--        <div v-if="custList.borrower === '1'" style="margin: 0;">公司</div>-->
<!--        <div v-if="custList.borrower === '0'" style="margin: 0;">个人</div>-->
<!--      </template>-->
<!--    </van-field>-->
    <van-field
      name="feesTypeDes"
      v-model="custList.feesTypeDes"
      type="text"
      label="报销类型:"
      readonly
    />
    <van-field
      name="companyCodeUs"
      v-model="custList.companyCodeUs"
      type="text"
      label="公司名称:"
      readonly
    />
    <van-field
      name="feesCode"
      v-model="custList.feesCode"
      type="text"
      label="报销编号:"
      readonly
    />
    <van-field
      name="exeUserName"
      v-model="custList.exeUserName"
      type="text"
      label="经办人员:"
      readonly
    />
    <van-field
      name="reimbursementDate"
      v-model="custList.reimbursementDate"
      type="text"
      label="报销日期:"
      readonly
    />
    <van-field
      name="payeeName"
      v-model="custList.payeeName"
      type="text"
      label="领款人:"
      readonly
    />
    <van-field
      name="protocolNo"
      v-model="custList.protocolNo"
      type="text"
      label="协议号:"
      readonly
    />
    <van-field
      name="ownDeptName"
      v-model="custList.ownDeptName"
      type="text"
      label="立项号主导部门:"
      readonly
    />
    <div>
      <div style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;">报销明细详情</div>
      <el-table
        border
        :data="costDetailList"
        style="width: 100%">
<!--        <el-table-column-->
<!--          label="预计收款日期">-->
<!--          <template slot-scope="scope">-->
<!--            {{scope.row.receivDate.split(' ')[0]}}-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          label="预计付款时间">-->
<!--          <template slot-scope="scope">-->
<!--            {{scope.row.paytime.split(' ')[0]}}-->
<!--          </template>-->
<!--        </el-table-column>-->
        <el-table-column
          label="报销人员姓名"
          prop="reimbursementUserName">
        </el-table-column>
        <el-table-column
          label="科目"
          prop="subjectName">
        </el-table-column>
        <el-table-column
          label="是否本地票"
          prop="isLocal">
        </el-table-column>
        <el-table-column
          label="金额"
          prop="amount">
        </el-table-column>
        <el-table-column
          label="立项号"
          prop="projectNo">
        </el-table-column>
        <el-table-column
          label="项目名称"
          prop="projectName">
        </el-table-column>
        <el-table-column
          label="费用归属部门名称"
          prop="ownDeptName">
        </el-table-column>
        <el-table-column
          label="费用归属部门编号"
          prop="ownDeptCode">
        </el-table-column>
        <el-table-column
          label="应审批人"
          prop="aprUserIds">
        </el-table-column>
        <el-table-column
          label="借款余额"
          prop="totalRepayAmount">
        </el-table-column>
        <el-table-column
          label="清借款金额"
          prop="loanAmount">
        </el-table-column>
        <el-table-column
          label="备注"
          prop="remark">
        </el-table-column>
        <el-table-column
          label="查看明细">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { bizfeesreimbursementformList, selectByUserIdLoanList } from '../../api/costManagementApi'

export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      custList: [],
      costDetailList: []
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    // 获取数据
    loadData () {
      bizfeesreimbursementformList(this.dataList.dataId).then(res => {
        this.custList = res.data
        // this.custList.date = this.custList.date.split(' ')[0]
        // this.custList.planReDate = this.custList.planReDate.split(' ')[0]
        this.costDetailList = res.data.feesReimbursementDetailVOList
        this.getselectByUserIdLoanList(this.custList.payee)
      })
    },
    // 获取借款列表数据
    getselectByUserIdLoanList (userid) {
      selectByUserIdLoanList(userid).then(res => {

      })
    },
    // 处理借款金额
    handletotalRepayAmount () {
    }
  }
}
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
