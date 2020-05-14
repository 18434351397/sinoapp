/** *@author XuJinTao *@date 2020/5/13 9:03 *@title index */
<template>
  <div class="sealapproveform">
    <div class="title">详情</div>
    <van-field style="display: none;" name="id" v-model="useApprovalList.id" type="text" readonly />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="useApprovalList.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      type="text"
      name="applicantName"
      v-model="useApprovalList.applicantName"
      label="申请人"
      colon
      readonly
    />
    <van-field
      type="text"
      name="applicantDeptName"
      v-model="useApprovalList.applicantDeptName"
      label="申请人部门"
      colon
      readonly
    />
    <van-field
      type="text"
      name="applicationCategoryDesc"
      v-model="useApprovalList.applicationCategoryDesc"
      label="申请类别"
      colon
      readonly
    />
    <van-field
      type="text"
      name="usagemode"
      v-model="useApprovalList.usagemode"
      label="使用方式"
      colon
      readonly
    />
    <van-field
      type="text"
      name="sealcompanyDesc"
      v-model="useApprovalList.sealcompanyDesc"
      label="印信公司"
      colon
      readonly
    />
    <van-field
      type="text"
      name="othersealcompany"
      v-model="useApprovalList.othersealcompany"
      label="印信公司其它"
      colon
      readonly
    />
    <van-field
      type="text"
      name="sealnameDesc"
      v-model="useApprovalList.sealnameDesc"
      label="印信名称"
      colon
      readonly
    />
    <van-field
      type="text"
      name="othersealname"
      v-model="useApprovalList.othersealname"
      label="印信名称其它"
      colon
      readonly
    />
    <van-field
      type="text"
      name="applicationDate"
      v-model="useApprovalList.applicationDate"
      label="申请日期"
      colon
      readonly
    />
    <van-field
      type="text"
      name="items"
      v-model="useApprovalList.items"
      label="申请事项"
      colon
      readonly
    />
    <van-field
      type="text"
      name="detail"
      v-model="useApprovalList.detail"
      label="盖章资料明细"
      colon
      readonly
    />
    <van-field
      type="text"
      name="remark"
      v-model="useApprovalList.remark"
      label="备注"
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
import { sealapproveformList } from '../../api/characteristic'

export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      useApprovalList: [], // 印信使用审批数据
      fileList: [],
      files: []
    }
  },
  created () {
    sealapproveformList(this.dataList.dataId).then(res => {
      if (res.data) {
        this.useApprovalList = res.data
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
div.sealapproveform {
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
div.sealapproveform {
  div.tax.van-cell:not(:last-child)::after {
    border-bottom: 1px solid #6c6c6c;
  }
  .van-cell:not(:last-child)::after {
    border-bottom: none;
  }
}
</style>
