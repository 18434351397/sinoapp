/** *@author XuJinTao *@date 2020/5/18 15:55 *@title index */
<template>
  <div class="app-title">
    <div class="title">中标服务费信息</div>
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="projpbidservicefee.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="id"
      v-model="projpbidservicefee.id"
      type="text"
      readonly
    />

    <van-field
      type="text"
      name="agentName"
      v-model="projpbidservicefee.agentName"
      label="经办人"
      colon
      readonly
    />
    <van-field
      type="text"
      name="contractNo"
      v-model="projpbidservicefee.contractNo"
      label="合同编号"
      colon
      readonly
    />
    <van-field
      type="text"
      name="contractPaymentDesc"
      v-model="projpbidservicefee.contractPaymentDesc"
      label="付款条件"
      colon
      readonly
    />
    <van-field
      type="text"
      name="ownDeptName"
      v-model="projpbidservicefee.ownDeptName"
      label="主导部门"
      colon
      readonly
    />
    <van-field
      type="text"
      name="applyDate"
      v-model="projpbidservicefee.applyDate"
      label="申请时间"
      colon
      readonly
    />
    <van-field
      type="text"
      name="mPayAmount"
      v-model="projpbidservicefee.mPayAmount"
      label="应付款金额"
      colon
      readonly
    />
    <van-field
      type="text"
      name="hPayAmount"
      v-model="projpbidservicefee.hPayAmount"
      label="已付款金额"
      colon
      readonly
    />
    <van-field
      type="text"
      name="cPayAmount"
      v-model="projpbidservicefee.cPayAmount"
      label="本次申请金额"
      colon
      readonly
    />
    <van-field
      type="text"
      v-model="projpbidservicefee.hasInvoiceText"
      label="是否有发票"
      colon
      readonly
    />
    <van-field type="text" v-model="projpbidservicefee.hasPayText" label="是否实际付款" colon readonly />
    <van-field
      type="text"
      name="company"
      v-model="projpbidservicefee.company"
      label="支出公司"
      colon
      readonly
    />
    <van-field
      type="text"
      name="bidPayTypeText"
      v-model="projpbidservicefee.bidPayTypeText"
      label="支付方式"
      colon
      readonly
    />
    <van-field
      v-if="isDate"
      type="text"
      name="dueDate"
      v-model="projpbidservicefee.dueDate"
      label="到期日"
      colon
      readonly
    />
    <van-field
      type="text"
      name="payee"
      v-model="projpbidservicefee.payee"
      label="收款单位"
      colon
      readonly
    />
    <van-field
      type="text"
      name="account"
      v-model="projpbidservicefee.account"
      label="账户"
      colon
      readonly
    />
    <van-field
      type="text"
      name="openAccount"
      v-model="projpbidservicefee.openAccount"
      label="开户银行"
      colon
      readonly
    />
    <van-field
      type="text"
      name="otherExplain"
      v-model="projpbidservicefee.otherExplain"
      label="其他说明"
      colon
      readonly
    />
    <div>
      <div class="table-title">中标服务费明细</div>
      <el-table border :data="projpBidServiceFeeDetailList" style="width: 100%">
        <el-table-column label="人员" prop="person"></el-table-column>
        <el-table-column label="支出明细说明" prop="payDetailExplain"></el-table-column>
        <el-table-column label="数量" prop="number"></el-table-column>
        <el-table-column label="单价" prop="price"></el-table-column>
        <el-table-column label="金额" prop="amount"></el-table-column>
        <el-table-column label="合同编号" prop="contractNo"></el-table-column>
        <el-table-column label="计入项目" prop="recjonInProject"></el-table-column>
        <el-table-column label="开发票单位" prop="invoiceDept"></el-table-column>
      </el-table>
    </div>
    <div>
      <div class="table-title">附件列表</div>
      <el-table border :data="files" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="附件名称" prop="fileName"></el-table-column>
        <el-table-column label="大小" width="80">
          <template slot-scope="scope">{{ (scope.row.fileSize / 1024).toFixed(2) + 'KB' }}</template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="50">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { projpbidservicefeeApi } from '../../api/contract'
export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      isDate: false, // 是否是银行汇票
      fileList: [],
      fileIdList: [],
      files: [], // 循环列表
      projpBidServiceFeeDetailList: [], // 明细
      projpbidservicefee: []
    }
  },
  created () {
    projpbidservicefeeApi(this.dataList.dataId).then(res => {
      if (res.data) {
        this.projpbidservicefee = res.data
        this.projpBidServiceFeeDetailList = res.data.projpBidServiceFeeDetailList
        if (res.data.hasInvoice === '1') {
          res.data.hasInvoiceText = '是'
        } else {
          res.data.hasInvoiceText = '否'
        }
        if (res.data.hasPay === '1') {
          res.data.hasPayText = '是'
        } else {
          res.data.hasPayText = '否'
        }
        // 判断是否是银行汇票
        if (res.data.bidPayTypeText === '银行汇票') {
          this.isDate = true
        } else {
          this.isDate = false
        }
        res.data.fileList.forEach(item => {
          this.fileIdList = this.fileIdList.concat(item.fileId)
        })
        this.files = res.data.fileList ? res.data.fileList : []
        this.fileList = this.files.map(item => {
          return JSON.stringify({
            fileName: item.fileName,
            url: item.url,
            fileSize: item.fileSize,
            fileId: item.fileId
          })
        })
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
