<template>
  <div class="projpinvoicereq">
    <div class="title">开发票/收据信息</div>
    <van-field
      type="text"
      name="reqUserName"
      v-model="projpinvoicereq.reqUserName"
      label="申请人"
      colon
      readonly
    />
    <van-field
      type="text"
      name="reqDeptName"
      v-model="projpinvoicereq.reqDeptName"
      label="申请人部门"
      colon
      readonly
    />
    <van-field
      type="text"
      name="billTypeName"
      v-model="projpinvoicereq.billTypeName"
      label="票据类型"
      colon
      readonly
    />
    <van-field
      type="text"
      name="hasReportName"
      v-model="projpinvoicereq.hasReportName"
      label="是否有验收报告"
      colon
      readonly
    />
    <van-field
      type="text"
      name="reportDate"
      v-model="projpinvoicereq.reportDate"
      label="预计验收报告收回时间"
      colon
      readonly
    />
    <van-field
      type="text"
      name="isReceivedName"
      v-model="projpinvoicereq.isReceivedName"
      label="是否提前开发票"
      colon
      readonly
    />
    <van-field
      type="text"
      name="planReceiveDate"
      v-model="projpinvoicereq.planReceiveDate"
      label="预计收款时间"
      colon
      readonly
    />
    <van-field
      type="text"
      name="invoiceTypeName"
      v-model="projpinvoicereq.invoiceTypeName"
      label="发票类型"
      colon
      readonly
    />
    <van-field
      type="text"
      name="contractNo"
      v-model="projpinvoicereq.contractNo"
      label="合同号"
      colon
      readonly
    />
    <van-field
      type="text"
      name="companyDesc"
      v-model="projpinvoicereq.companyDesc"
      label="开具发票公司"
      colon
      readonly
    />
    <van-field
      type="text"
      name="payeeName"
      v-model="projpinvoicereq.payeeName"
      label="对方单位名称"
      colon
      readonly
    />
    <van-field
      type="text"
      name="taxNo"
      v-model="projpinvoicereq.taxNo"
      label="税号"
      colon
      readonly
    />
    <van-field
      type="text"
      name="addr"
      v-model="projpinvoicereq.addr"
      label="单位地址"
      colon
      readonly
    />
    <van-field
      type="text"
      name="phone"
      v-model="projpinvoicereq.phone"
      label="电话号码"
      colon
      readonly
    />
    <van-field
      type="text"
      name="openBnak"
      v-model="projpinvoicereq.openBnak"
      label="开户行"
      colon
      readonly
    />
    <van-field
      type="text"
      name="account"
      v-model="projpinvoicereq.account"
      label="账号"
      colon
      readonly
    />
    <van-field
      type="text"
      name="invoiceAmount"
      v-model="projpinvoicereq.invoiceAmount"
      label="确认开发票金额"
      colon
      readonly
    />
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
import { projpinvoicereqApi } from '../../api/costManagementApi'
export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      fileList: [],
      fileIdList: [],
      files: [], // 循环列表
      projpinvoicereq: []
    }
  },
  created () {
    projpinvoicereqApi(this.dataList.dataId).then(res => {
      if (res.data) {
        this.projpinvoicereq = res.data

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

<style lang="less">
div.projpinvoicereq {
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
div.projpinvoicereq {
  div.tax.van-cell:not(:last-child)::after {
    border-bottom: 1px solid #6c6c6c;
  }
  .van-cell:not(:last-child)::after {
    border-bottom: none;
  }
}
</style>
