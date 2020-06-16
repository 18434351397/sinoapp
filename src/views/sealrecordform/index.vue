/**
*@author CheYongJi
*@date 2020/6/15 16:27
*@title index
*/
<template>
  <div class="app-title">
    <div class="title"
    >印章刻制备案信息</div>
    <van-field name="userName" v-model="custList.userName" type="text" label="申请人:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.userName}}</div>
      </template>
    </van-field>
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="custList.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reqDeptId"
      v-model="custList.reqDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reqUserId"
      v-model="custList.reqUserId"
      type="text"
      readonly
    />
    <van-field style="display: none;" name="id" v-model="custList.id" type="text" readonly />
    <van-field name="orgName" v-model="custList.orgName" type="text" label="申请人部门:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.orgName}}</div>
      </template>
    </van-field>
    <van-field name="companyDesc" v-model="custList.companyDesc" type="text" label="涉及公司:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.companyDesc}}</div>
      </template>
    </van-field>
    <van-field name="sealName" v-model="custList.sealName" type="text" label="刻章名称:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.sealName}}</div>
      </template>
    </van-field>
    <van-field name="sealTypeDesc" v-model="custList.sealTypeDesc" type="text" label="印章类型:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.sealTypeDesc}}</div>
      </template>
    </van-field>
    <van-field
      name="sealUse"
      v-model="custList.sealUse"
      type="text"
      label="刻章用途:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.sealUse}}</div>
      </template>
    </van-field>
    <van-field
      name="sealRequire"
      v-model="custList.sealRequire"
      type="text"
      label="刻章要求:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.sealRequire}}</div>
      </template>
    </van-field>
    <van-field name="timeLimit" v-model="custList.timeLimit" type="text" label="时限:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.timeLimit}}</div>
      </template>
    </van-field>
    <van-field
      name="userRule"
      v-model="custList.userRule"
      type="text"
      label="使用规则:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.userRule}}</div>
      </template>
    </van-field>
    <van-field
      name="depositoryName"
      v-model="custList.depositoryName"
      type="text"
      label="保管人:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.depositoryName}}</div>
      </template>
    </van-field>
    <van-field
      name="responsibleName"
      v-model="custList.responsibleName"
      type="text"
      label="责任人:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.responsibleName}}</div>
      </template>
    </van-field>
    <div>
      <div
        class="table-title"
      >附件列表</div>
      <el-table border :data="postmanageList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="附件名称" prop="fileName"></el-table-column>
        <el-table-column label="大小" width="80">
          <template slot-scope="scope">{{(scope.row.fileSize/1024).toFixed(2) + 'KB'}}</template>
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
import { sealrecordformList } from '../../api/characteristic'

export default {
  name: 'index',
  data () {
    return {
      custList: [],
      postmanageList: [],
      fileList: [],
      fileIdList: [],
      dataList: this.$route.query
    }
  },
  created () {
    sealrecordformList(this.dataList.dataId).then(res => {
      this.custList = res.data
      this.postmanageList = res.data.fileList
      this.fileList = res.data.fileList
      this.fileList.forEach(item => {
        this.fileIdList = this.fileIdList.concat(item.fileId)
      })
      this.fileList = this.fileList.map(item => {
        return JSON.stringify({
          url: item.url,
          fileName: item.fileName,
          fileSize: item.fileSize,
          fileId: item.fileId
        })
      })
    })
  },
  methods: {
    // 处理序号
    indexMethods (index) {
      return index + 1
    },
    // 下载调用方法
    handleClick (data) {
      this.downLoad(data)
    }
  }
}
</script>

<style scoped>
</style>
