/**
*@author XuJinTao
*@date 2020/5/19 9:02
*@title index
*/
<template>
  <div class="app-title">
    <div class="title">开发票/收据信息</div>
    <van-field style="display: none;" name="id" v-model="projpinvoicereq.id" type="text" readonly />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="projpinvoicereq.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="billType"
      v-model="projpinvoicereq.billType"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="hasReport"
      v-model="projpinvoicereq.hasReport"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="isReceived"
      v-model="projpinvoicereq.isReceived"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="invoiceType"
      v-model="projpinvoicereq.invoiceType"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="ownDeptId"
      v-model="projpinvoicereq.ownDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reqDeptId"
      v-model="projpinvoicereq.reqDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reqUserId"
      v-model="projpinvoicereq.reqUserId"
      type="text"
      readonly
    />

    <van-field
      type="text"
      name="reqUserName"
      v-model="projpinvoicereq.reqUserName"
      label="申请人"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.reqUserName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="reqDeptName"
      v-model="projpinvoicereq.reqDeptName"
      label="申请人部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.reqDeptName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="billTypeName"
      v-model="projpinvoicereq.billTypeName"
      label="票据类型"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.billTypeName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="hasReportName"
      v-model="projpinvoicereq.hasReportName"
      label="是否有验收报告"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.hasReportName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="reportDate"
      v-model="projpinvoicereq.reportDate"
      label="预计验收报告收回时间"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.reportDate}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="isReceivedName"
      v-model="projpinvoicereq.isReceivedName"
      label="是否提前开发票"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.isReceivedName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="planReceiveDate"
      v-model="projpinvoicereq.planReceiveDate"
      label="预计收款时间"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.planReceiveDate}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="invoiceTypeName"
      v-model="projpinvoicereq.invoiceTypeName"
      label="发票类型"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.invoiceTypeName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="contractNo"
      v-model="projpinvoicereq.contractNo"
      label="合同号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.contractNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="companyDesc"
      v-model="projpinvoicereq.companyDesc"
      label="开具发票公司"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.companyDesc}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="payeeName"
      v-model="projpinvoicereq.payeeName"
      label="对方单位名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.payeeName}}</div>
      </template>
    </van-field>
    <van-field type="text" name="taxNo" v-model="projpinvoicereq.taxNo" label="税号" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.taxNo}}</div>
      </template>
    </van-field>
    <van-field type="text" name="addr" v-model="projpinvoicereq.addr" label="单位地址" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.addr}}</div>
      </template>
    </van-field>
    <van-field type="text" name="phone" v-model="projpinvoicereq.phone" label="电话号码" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.phone}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="openBnak"
      v-model="projpinvoicereq.openBnak"
      label="开户行"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.openBnak}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="account"
      v-model="projpinvoicereq.account"
      label="账号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.account}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="invoiceAmount"
      v-model="projpinvoicereq.invoiceAmount"
      label="确认开发票金额"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpinvoicereq.invoiceAmount}}</div>
      </template>
    </van-field>
    <div>
      <div class="table-title">填开内容</div>
      <vxe-table border resizable highlight-hover-row :data="invoiceDetail" >
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="taxCode" title="税收分类编码" width="25%"></vxe-table-column>
        <vxe-table-column field="name" title="品名" width="21%"></vxe-table-column>
        <vxe-table-column field="reqNo" title="型号规格" width="21%"></vxe-table-column>
        <vxe-table-column field="unit" title="单位" width="15%"></vxe-table-column>
        <vxe-table-column field="num" title="数量" width="17%"></vxe-table-column>
        <vxe-table-column field="price" title="单价" width="21%"></vxe-table-column>
        <vxe-table-column field="amount" title="金额" width="21%"></vxe-table-column>
        <vxe-table-column field="invoiceRateDesc" title="税率" width="15%"></vxe-table-column>
        <vxe-table-column field="remark" title="备注" width="21%"></vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <div class="table-title">附件列表</div>
      <vxe-table border resizable highlight-hover-row :data="files">
       <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
       <vxe-table-column field="fileName" title="附件名称" width="50%"></vxe-table-column>
       <vxe-table-column title="大小" width="20%">
         <template slot-scope="scope">{{ (scope.row.fileSize / 1024).toFixed(2) + 'KB' }}</template>
       </vxe-table-column>
       <vxe-table-column title="操作" width="15%">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
          </template>
       </vxe-table-column>
      </vxe-table>
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
      invoiceDetail: [], // 填开内容列表
      projpinvoicereq: []
    }
  },
  created () {
    projpinvoicereqApi(this.dataList.dataId).then(res => {
      if (res.data) {
        this.projpinvoicereq = res.data
        this.invoiceDetail = res.data.invoiceDetail
        if (res.data.billType === '1') {
          res.data.billTypeName = '发票'
        } else {
          res.data.billTypeName = '收据'
        }
        if (res.data.hasReport === '1') {
          res.data.hasReportName = '是'
        } else {
          res.data.hasReportName = '否'
        }
        if (res.data.isReceived === '1') {
          res.data.isReceivedName = '是'
        } else {
          res.data.isReceivedName = '否'
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
