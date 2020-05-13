<template>
  <div class="sealpreservation">
    <div class="title">投标报价信息表详情</div>
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
    />
    <van-field
      type="text"
      name="orgName"
      v-model="sealpreservationList.orgName"
      label="领用人部门"
      colon
      readonly
    />
    <van-field
      type="text"
      name="companyDesc"
      v-model="sealpreservationList.companyDesc"
      label="涉及公司"
      colon
      readonly
    />
    <van-field
      type="text"
      name="sealName"
      v-model="sealpreservationList.sealName"
      label="印章名称"
      colon
      readonly
    />
    <van-field
      type="text"
      name="timeLimit"
      v-model="sealpreservationList.timeLimit"
      label="保管期限"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="!isSeal"
      name="sealTypeDesc"
      v-model="sealpreservationList.sealTypeDesc"
      label="印章类型"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isSeal"
      v-model="sealpreservationList.sealTypeDesc"
      label="印章类型"
      colon
      readonly
    />
    <van-field
      v-if="isSeal"
      style="display: none;"
      type="text"
      name="company"
      v-model="sealpreservationList.company"
    />
    <van-field
      type="text"
      name="depositoryName"
      v-model="sealpreservationList.depositoryName"
      label="保管人"
      colon
      readonly
    />
    <van-field
      type="text"
      name="remark"
      v-model="sealpreservationList.remark"
      label="备注说明"
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
        this.fileList = res.data.fileList.map(item => {
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

<style lang="less">
div.sealpreservation {
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
</style>
<style lang="less">
div.sealpreservation {
  div.tax.van-cell:not(:last-child)::after {
    border-bottom: 1px solid #6c6c6c;
  }
  .van-cell:not(:last-child)::after {
    border-bottom: none;
  }
}
</style>
