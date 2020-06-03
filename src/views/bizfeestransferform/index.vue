/**
*@author XuJinTao
*@date 2020/5/19 10:40
*@title index
*/
<template>
  <div class="app-title">
    <div class="title">内部收益划转</div>
    <van-field
      style="display: none;"
      name="id"
      v-model="bizfeestransferform.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="payDeptId"
      v-model="bizfeestransferform.payDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="recDeptId"
      v-model="bizfeestransferform.recDeptId"
      type="text"
      readonly
    />

    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="bizfeestransferform.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      type="text"
      name="payDeptN"
      v-model="bizfeestransferform.payDeptN"
      label="划出部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeestransferform.payDeptN}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="amount"
      v-model="bizfeestransferform.amount"
      label="划转金额(元)"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeestransferform.amount}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="transFerTypeDesc"
      v-model="bizfeestransferform.transFerTypeDesc"
      label="划转类型"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeestransferform.transFerTypeDesc}}</div>
      </template>
    </van-field>

    <van-field
      type="text"
      v-model="bizfeestransferform.isCostPatName"
      label="是否成本支付"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeestransferform.isCostPatName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="recDeptN"
      v-model="bizfeestransferform.recDeptN"
      label="划入部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeestransferform.recDeptN}}</div>
      </template>
    </van-field>

    <van-field
      type="text"
      v-model="bizfeestransferform.isReceiveName"
      label="是否计入合同到款"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeestransferform.isReceiveName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isContractNo"
      name="contractNo"
      v-model="bizfeestransferform.contractNo"
      label="划出合同编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeestransferform.contractNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="conNo"
      v-if="isConNo"
      v-model="bizfeestransferform.conNo"
      label="划入合同编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeestransferform.conNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="voucherDate"
      v-model="bizfeestransferform.voucherDate"
      label="凭证日期"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeestransferform.voucherDate}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="hasAttachment"
      v-model="bizfeestransferform.hasAttachment"
      style="display: none;"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeestransferform.hasAttachment}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-model="bizfeestransferform.hasAttachmentName"
      label="是否有附件"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeestransferform.hasAttachmentName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="des"
      v-model="bizfeestransferform.des"
      label="收益划转情况简述"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeestransferform.des}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="remark"
      v-model="bizfeestransferform.remark"
      label="备注"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeestransferform.remark}}</div>
      </template>
    </van-field>
    <div v-if="hasAttachment">
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
import { bizfeestransferformApi } from '../../api/costManagementApi'
export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      fileList: [],
      fileIdList: [],
      hasAttachment: false, // 是否有附件
      isContractNo: false, // 是否成本支付
      isConNo: false, // 是否计入合同到款
      files: [], // 循环列表
      bizfeestransferform: []
    }
  },
  created () {
    bizfeestransferformApi(this.dataList.dataId).then(res => {
      if (res.data) {
        this.bizfeestransferform = res.data
        // 判断是否显示附件
        if (res.data.hasAttachment === '1') {
          res.data.hasAttachmentName = '是'
          this.hasAttachment = true
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
        } else {
          res.data.hasAttachmentName = '否'
          this.hasAttachment = false
        }
        if (res.data.isReceive === '2') {
          this.isConNo = true
          res.data.isReceiveName = '是'
        } else {
          this.isConNo = false
          res.data.isReceiveName = '否'
        }
        if (res.data.isCostPat === '1') {
          this.isContractNo = true
          res.data.isCostPatName = '是'
        } else {
          this.isContractNo = false
          res.data.isCostPatName = '否'
        }
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
