<template>
  <div class="app-title">
    <div class="title">印章保管登记信息</div>
    <van-field
      style="display: none;"
      name="depositoryId"
      v-model="sealpreservationList.depositoryId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="id"
      v-model="sealpreservationList.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="ownDeptId"
      v-model="sealpreservationList.ownDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="recipientsId"
      v-model="sealpreservationList.recipientsId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="recipientsDeptId"
      v-model="sealpreservationList.recipientsDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="sealpreservationList.meetingUsers"
      type="text"
      readonly
    />

    <van-field
      type="text"
      name="userName"
      v-model="sealpreservationList.userName"
      label="领用人"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{sealpreservationList.userName}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="orgName"
      v-model="sealpreservationList.orgName"
      label="领用人部门"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{sealpreservationList.orgName}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="companyDesc"
      v-model="sealpreservationList.companyDesc"
      label="涉及公司"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{sealpreservationList.companyDesc}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="sealName"
      v-model="sealpreservationList.sealName"
      label="印章名称"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{sealpreservationList.sealName}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="timeLimit"
      v-model="sealpreservationList.timeLimit"
      label="保管期限"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{sealpreservationList.timeLimit}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      v-if="!isSeal"
      name="sealTypeDesc"
      v-model="sealpreservationList.sealTypeDesc"
      label="印章类型"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{sealpreservationList.sealTypeDesc}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      v-if="isSeal"
      v-model="sealpreservationList.sealTypeDesc"
      label="印章类型"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{sealpreservationList.sealTypeDesc}}</div>
      </template>
</van-field>
    <van-field
      v-if="isSeal"
      style="display: none;"
      type="text"
      name="company"
      v-model="sealpreservationList.company"
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{sealpreservationList.company}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="depositoryName"
      v-model="sealpreservationList.depositoryName"
      label="保管人"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{sealpreservationList.depositoryName}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="remark"
      v-model="sealpreservationList.remark"
      label="备注说明"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{sealpreservationList.remark}}</div>
      </template>
</van-field>
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
import { sealpreservationformList } from '../../api/characteristic'

export default {
  name: 'index',
  data () {
    return {
      isSeal: false, // 限制特殊属性
      dataList: this.$route.query,
      sealpreservationList: [], // 印信使用审批数据
      fileList: [],
      files: [],
      fileIdList: [], // 附件编号
      sealTypes: [] // 印章类型
    }
  },
  created () {
    if (this.dataList.currFlowId === 'SealKeepApprove' &&
      this.dataList.currUserName === '白建平' &&
      this.dataList.currTaskDefinitionKey === 'SealManager' &&
      this.dataList.currTaskDefinitionName === '印章管理员') {
      this.isSeal = true
    }
    sealpreservationformList(this.dataList.dataId).then(res => {
      if (res.data) {
        this.sealpreservationList = res.data
        this.sealTypes = res.data.sealTypes
        this.files = res.data.fileList ? res.data.fileList : []
        // 传输附件id字段
        res.data.fileList.map(item => {
          this.fileIdList = this.fileIdList.concat(item.fileId)
        })
        this.fileList = this.files.map(item => {
          return JSON.stringify({
            fileName: item.fileName,
            url: item.url,
            fileSize: item.fileSize,
            fileId: item.fileId
          })
        })
      } else {
        throw new '数据异常'()
      }
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
