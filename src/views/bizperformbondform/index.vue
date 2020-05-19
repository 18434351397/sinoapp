<template>
  <div class="bizperformbondform">
    <div class="title">风险保证金详细</div>
    <van-field
      style="display: none;"
      name="bondId"
      v-model="bizperformbondform.bondId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="exeUserId"
      v-model="bizperformbondform.exeUserId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="id"
      v-model="bizperformbondform.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="bizperformbondform.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="ownDeptId"
      v-model="bizperformbondform.ownDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="payType"
      v-model="bizperformbondform.payType"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="paymentName"
      v-model="bizperformbondform.paymentName"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reqDeptId"
      v-model="bizperformbondform.reqDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reqUserId"
      v-model="bizperformbondform.reqUserId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reqtype"
      v-model="bizperformbondform.reqtype"
      type="text"
      readonly
    />

    <van-field
      type="text"
      name="reqUserName"
      v-model="bizperformbondform.reqUserName"
      label="申请人"
      colon
      readonly
    />
    <van-field
      type="text"
      name="reqDeptName"
      v-model="bizperformbondform.reqDeptName"
      label="申请人部门"
      colon
      readonly
    />
    <van-field
      type="text"
      name="contractNo"
      v-model="bizperformbondform.contractNo"
      label="合同编号"
      colon
      readonly
    />
    <van-field
      type="text"
      name="contractName"
      v-model="bizperformbondform.contractName"
      label="合同名称"
      colon
      readonly
    />
    <van-field
      type="text"
      name="leadOrgName"
      v-model="bizperformbondform.leadOrgName"
      label="主导部门"
      colon
      readonly
    />
    <van-field
      type="text"
      name="agreementNo"
      v-model="bizperformbondform.agreementNo"
      label="履约保证金编号"
      colon
      readonly
    />
    <van-field
      type="text"
      name="paymentNameId"
      v-model="bizperformbondform.paymentNameId"
      label="履约保证金付款款项名称"
      colon
      readonly
    />
    <van-field
      type="text"
      name="bondName"
      v-model="bizperformbondform.bondName"
      label="履约保证金匹配条件"
      colon
      readonly
    />
    <van-field
      type="text"
      name="total"
      v-model="bizperformbondform.total"
      label="履约保证金金额"
      colon
      readonly
    />
    <van-field
      type="text"
      name="totalCapital"
      v-model="bizperformbondform.totalCapital"
      label="金额转大写"
      colon
      readonly
    />
    <van-field
      type="text"
      name="exeuserName"
      v-model="bizperformbondform.exeuserName"
      label="经办人"
      colon
      readonly
    />
    <van-field
      type="text"
      name="payTypeDesc"
      v-model="bizperformbondform.payTypeDesc"
      label="支出形式"
      colon
      readonly
    />
    <van-field
      type="text"
      name="explain"
      v-model="bizperformbondform.explain"
      label="其他说明"
      colon
      readonly
    />
    <van-field
      type="text"
      name="payDate"
      v-model="bizperformbondform.payDate"
      label="支出日期"
      colon
      readonly
    />
    <van-field
      type="text"
      name="backDate"
      v-model="bizperformbondform.backDate"
      label="退回日期"
      colon
      readonly
    />
    <van-field
      type="text"
      name="payCompanyName"
      v-model="bizperformbondform.payCompanyName"
      label="支出公司"
      colon
      readonly
    />
    <van-field
      type="text"
      name="payeeName"
      v-model="bizperformbondform.payeeName"
      label="开户名称"
      colon
      readonly
    />
    <van-field
      type="text"
      name="payeeAccount"
      v-model="bizperformbondform.payeeAccount"
      label="对方账号"
      colon
      readonly
    />
    <van-field
      type="text"
      name="payeeBank"
      v-model="bizperformbondform.payeeBank"
      label="开户银行"
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
import { bizperformbondformApi } from '../../api/contract'
export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      fileList: [],
      fileIdList: [],
      files: [], // 循环列表
      bizperformbondform: []
    }
  },
  created () {
    bizperformbondformApi(this.dataList.dataId).then(res => {
      if (res.data) {
        this.bizperformbondform = res.data
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
div.bizperformbondform {
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
div.bizperformbondform {
  div.tax.van-cell:not(:last-child)::after {
    border-bottom: 1px solid #6c6c6c;
  }
  .van-cell:not(:last-child)::after {
    border-bottom: none;
  }
}
</style>
