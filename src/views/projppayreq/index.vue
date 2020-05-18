<template>
  <div class="projppayreq">
    <div class="title">合同付款信息</div>
    <van-field style="display: none;" name="id" v-model="projppayreq.id" type="text" readonly />

    <van-field
      type="text"
      name="contractNo"
      v-model="projppayreq.contractNo"
      label="合同号"
      colon
      readonly
    />
    <van-field
      type="text"
      name="projectname"
      v-model="projppayreq.projectname"
      label="项目名称"
      colon
      readonly
    />
    <van-field
      type="text"
      name="payTypeDesc"
      v-model="projppayreq.payTypeDesc"
      label="付款类型"
      colon
      readonly
    />
    <van-field
      type="text"
      name="payAmount"
      v-model="projppayreq.payAmount"
      label="本次付款总金额"
      colon
      readonly
    />
    <van-field
      type="text"
      name="contractNo"
      v-model="projppayreq.contractNo"
      label="支出形式"
      colon
      readonly
    />
    <van-field
      type="text"
      name="contractNo"
      v-model="projppayreq.contractNo"
      label="到期日"
      colon
      readonly
    />
    <van-field
      type="text"
      name="contractNo"
      v-model="projppayreq.contractNo"
      label="主导部门"
      colon
      readonly
    />
    <van-field
      type="text"
      name="contractNo"
      v-model="projppayreq.contractNo"
      label="项目经理"
      colon
      readonly
    />
    <van-field
      type="text"
      name="contractAmount"
      v-model="projppayreq.contractAmount"
      label="合同金额"
      colon
      readonly
    />
    <van-field
      type="text"
      name="receiveAmount"
      v-model="projppayreq.receiveAmount"
      label="合同已收款金额"
      colon
      readonly
    />
    <van-field
      type="text"
      name="contractPayAmount"
      v-model="projppayreq.contractPayAmount"
      label="合同已付款金额"
      colon
      readonly
    />
    <van-field
      type="text"
      name="companyq"
      v-model="projppayreq.companyq"
      label="现金流状态"
      colon
      readonly
    />
    <van-field
      type="text"
      name="purchaseNo"
      v-model="projppayreq.purchaseNo"
      label="采购合同号"
      colon
      readonly
    />
    <van-field
      type="text"
      name="supplierIdDesc"
      v-model="projppayreq.supplierIdDesc"
      label="供应商"
      colon
      readonly
    />
    <van-field
      type="text"
      name="bank"
      v-model="projppayreq.bank"
      label="开户银行"
      colon
      readonly
    />
    <van-field
      type="text"
      name="accountInformention"
      v-model="projppayreq.accountInformention"
      label="对方账户信息"
      colon
      readonly
    />
    <van-field
      type="text"
      name="nexReceiveAmount"
      v-model="projppayreq.nexReceiveAmount"
      label="下一笔收款金额"
      colon
      readonly
    />
    <van-field
      type="text"
      name="nextReceiveTime"
      v-model="projppayreq.nextReceiveTime"
      label="下一笔收款时间"
      colon
      readonly
    />
    <van-field
      type="text"
      name="nextReceivePeople"
      v-model="projppayreq.nextReceivePeople"
      label="收款负责人"
      colon
      readonly
    />
    <van-field
      type="text"
      name="companyDesc"
      v-model="projppayreq.companyDesc"
      label="支出公司"
      colon
      readonly
    />
    <van-field
      type="text"
      name="reqUserName"
      v-model="projppayreq.reqUserName"
      label="申请人"
      colon
      readonly
    />
    <van-field
      type="text"
      name="reqDeptName"
      v-model="projppayreq.reqDeptName"
      label="申请人部门"
      colon
      readonly
    />
    <van-field
      type="text"
      name="payMoneyType"
      v-model="projppayreq.payMoneyTypeDesc"
      label="付款方式"
      colon
      readonly
    />
    <van-field type="text" name="remark" v-model="projppayreq.remark" label="备注" colon readonly />
  </div>
</template>

<script>
import { projppayreqApi } from '../../api/contract'
export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      fileList: [],
      files: [], // 循环列表
      projppayreq: []
    }
  },
  created () {
    projppayreqApi(this.dataList.dataId).then(res => {
      if (res.data) {
        if (res.data.payMoneyType === '0') {
          res.data.payMoneyTypeDesc = '人民币'
        } else {
          res.data.payMoneyTypeDesc = '美元'
        }
        this.projppayreq = res.data
      } else {

      }
    })
  }
}
</script>

<style lang="less">
div.projppayreq {
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
div.projppayreq {
  div.tax.van-cell:not(:last-child)::after {
    border-bottom: 1px solid #6c6c6c;
  }
  .van-cell:not(:last-child)::after {
    border-bottom: none;
  }
}
</style>
