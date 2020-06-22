/**
*@author XuJinTao
*@date 2020/5/19 15:40
*@title index
*/
<template>
  <div class="app-title">
    <div class="title">特殊收益划转信息</div>
    <van-field
      style="display: none;"
      name="id"
      v-model="bizfeesspecialtransferform.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="bizfeesspecialtransferform.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="deptManagerId"
      v-model="bizfeesspecialtransferform.deptManagerId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="payDeptId"
      v-model="bizfeesspecialtransferform.payDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="recDeptId"
      v-model="bizfeesspecialtransferform.recDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      type="text"
      name="hasAttachment"
      v-model="bizfeesspecialtransferform.hasAttachment"
      readonly
    />
    <van-field
      type="text"
      name="transFerTypeDesc"
      v-model="bizfeesspecialtransferform.transFerTypeDesc"
      label="划转类型"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesspecialtransferform.transFerTypeDesc}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="amount"
      v-model="bizfeesspecialtransferform.amount"
      label="划转金额(元)"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesspecialtransferform.amount}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="payDeptName"
      v-model="bizfeesspecialtransferform.payDeptName"
      label="划出部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesspecialtransferform.payDeptName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="recDeptName"
      v-model="bizfeesspecialtransferform.recDeptName"
      label="划入部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesspecialtransferform.recDeptName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="deptManagerName"
      v-model="bizfeesspecialtransferform.deptManagerName"
      label="涉及部门经理"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesspecialtransferform.deptManagerName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="codeType"
      v-model="bizfeesspecialtransferform.codeTypeName"
      label="编号类型"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesspecialtransferform.codeTypeName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isContractNo"
      name="contractNo"
      v-model="bizfeesspecialtransferform.contractNo"
      label="合同编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesspecialtransferform.contractNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isContractNo"
      name="contractName"
      v-model="bizfeesspecialtransferform.contractName"
      label="合同名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesspecialtransferform.contractName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isRecordNo"
      name="recordNo"
      v-model="bizfeesspecialtransferform.recordNo"
      label="备案编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesspecialtransferform.recordNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="transferDate"
      v-model="bizfeesspecialtransferform.transferDate"
      label="划转日期"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesspecialtransferform.transferDate}}</div>
      </template>
    </van-field>

    <van-field
      type="text"
      v-model="bizfeesspecialtransferform.hasAttachmentName"
      label="是否有附件"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesspecialtransferform.hasAttachmentName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="des"
      v-model="bizfeesspecialtransferform.des"
      label="收益划转情况简述"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesspecialtransferform.des}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="remark"
      v-model="bizfeesspecialtransferform.remark"
      label="备注"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizfeesspecialtransferform.remark}}</div>
      </template>
    </van-field>
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
import { bizfeesspecialtransferformApi } from '../../api/costManagementApi'
export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      fileList: [],
      fileIdList: [],
      isFile: false,
      isContractNo: false,
      isRecordNo: false,
      files: [], // 循环附件
      bizfeesspecialtransferform: []
    }
  },
  created () {
    bizfeesspecialtransferformApi(this.dataList.dataId).then(res => {
      if (res.data) {
        this.bizfeesspecialtransferform = res.data
        if (res.data.hasAttachment === '1') {
          res.data.hasAttachmentName = '是'
          this.isFile = true
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
          this.isFile = false
        }
        if (res.data.codeType === '1') {
          this.isRecordNo = true
          res.data.codeTypeName = '备案号'
        } else if (res.data.codeType === '2') {
          this.isContractNo = true
          res.data.codeTypeName = '合同号'
        } else if (res.data.codeType === '3') {
          res.data.codeTypeName = '无'
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
