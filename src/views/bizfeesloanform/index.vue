/**
*@author CheYongJi
*@date 2020/5/18 11:09
*@title index
*/
<template>
  <div class="app-title">
    <div class="title">个人借款信息</div>
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
    <van-field style="display: none;" name="id" v-model="custList.id" type="text" readonly />
    <van-field
      style="display: none;"
      name="company"
      v-model="custList.company"
      type="text"
      readonly
    />
    <van-field style="display: none;" name="type" v-model="custList.type" type="text" readonly />
    <van-field
      style="display: none;"
      name="loanUserId"
      v-model="custList.loanUserId"
      type="text"
      readonly
    />
    <van-field label="付款对象:" name="borrower" v-model="custList.borrower">
      <template #input>
        <div v-if="custList.borrower === '1'" style="margin: 0;">公司</div>
        <div v-if="custList.borrower === '0'" style="margin: 0;">个人</div>
      </template>
    </van-field>
    <van-field name="loanNo" v-model="custList.loanNo" type="text" label="借款编号:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.loanNo}}</div>
      </template>
    </van-field>
    <van-field name="date" v-model="custList.date" type="text" label="日期:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.date}}</div>
      </template>
    </van-field>
    <van-field
      v-if="custList.borrower === '0'"
      name="loanUserName"
      v-model="custList.loanUserName"
      type="text"
      label="借款人:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.loanUserName}}</div>
      </template>
    </van-field>
    <van-field
      name="waitLoanAmount"
      v-model="custList.waitLoanAmount"
      type="text"
      label="历史借款余额(元):"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.waitLoanAmount}}</div>
      </template>
    </van-field>
    <van-field
      name="loanAmount"
      v-model="custList.loanAmount"
      type="text"
      label="本次借款金额(元):"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.loanAmount}}</div>
      </template>
    </van-field>
    <van-field name="typeName" v-model="custList.typeName" type="text" label="方式:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.typeName}}</div>
      </template>
    </van-field>
    <van-field name="loanFor" v-model="custList.loanFor" type="text" label="借款用途:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.loanFor}}</div>
      </template>
    </van-field>
    <van-field name="companyName" v-model="custList.companyName" type="text" label="支出公司:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.companyName}}</div>
      </template>
    </van-field>
    <van-field name="projectNo" v-model="custList.projectNo" type="text" label="项目编号:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.projectNo}}</div>
      </template>
    </van-field>
    <van-field name="projectName" v-model="custList.projectName" type="text" label="项目名称:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.projectName}}</div>
      </template>
    </van-field>
    <van-field name="ownDeptName" v-model="custList.ownDeptName" type="text" label="归属部门:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.ownDeptName}}</div>
      </template>
    </van-field>
    <van-field name="contractNo" v-model="custList.contractNo" type="text" label="合同编号:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.contractNo}}</div>
      </template>
    </van-field>
    <van-field name="abstractDesc" v-model="custList.abstractDesc" type="text" label="摘要:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.abstractDesc}}</div>
      </template>
    </van-field>
    <van-field name="reAmount" v-model="custList.reAmount" type="text" label="已还金额(元):" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.reAmount}}</div>
      </template>
    </van-field>
    <van-field
      name="waitReAmount"
      v-model="custList.waitReAmount"
      type="text"
      label="待还金额(元):"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.waitReAmount}}</div>
      </template>
    </van-field>
    <van-field name="planReDate" v-model="custList.planReDate" type="text" label="预计归还日期:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.planReDate}}</div>
      </template>
    </van-field>
    <van-field
      v-if="custList.borrower === '1'"
      name="cy"
      v-model="custList.cy"
      type="text"
      label="公司名称:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.cy}}</div>
      </template>
    </van-field>
    <van-field name="account" v-model="custList.account" type="text" label="账号:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.account}}</div>
      </template>
    </van-field>
    <van-field
      v-if="custList.borrower === '1'"
      name="bank"
      v-model="custList.bank"
      type="text"
      label="开户银行:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.bank}}</div>
      </template>
    </van-field>
  </div>
</template>

<script>
import { bizfeesloanformList } from '../../api/costManagementApi'

export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      custList: []
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      bizfeesloanformList(this.dataList.dataId).then(res => {
        this.custList = res.data
        this.custList.date = this.custList.date.split(' ')[0]
        this.custList.planReDate = this.custList.planReDate.split(' ')[0]
      })
    }
  }
}
</script>

<style scoped>
</style>
