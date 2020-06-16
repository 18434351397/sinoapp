/**
*@author CheYongJi
*@date 2020/5/15 9:40
*@title index
*/
<template>
  <div class="app-title">
    <div class="title"
    >发文管理信息</div>
    <van-field name="postCode" v-model="custList.postCode" type="text" label="发文编号:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.postCode}}</div>
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
      name="ownDeptId"
      v-model="custList.ownDeptId"
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
    <van-field name="postName" v-model="custList.postName" type="text" label="发文名称:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.postName}}</div>
      </template>
    </van-field>
    <van-field name="postPurpose" v-model="custList.postPurpose" type="text" label="发文目的:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.postPurpose}}</div>
      </template>
    </van-field>
    <van-field name="postKindDes" v-model="custList.postKindDes" type="text" label="发文种类:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.postKindDes}}</div>
      </template>
    </van-field>
    <van-field name="postWay" v-model="custList.postWay" type="text" label="发文方式:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.postWay}}</div>
      </template>
    </van-field>
    <van-field
      name="postRangeDes"
      v-model="custList.postRangeDes"
      type="text"
      label="发文范围:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.postRangeDes}}</div>
      </template>
    </van-field>
    <van-field
      name="classifiedDes"
      v-model="custList.classifiedDes"
      type="text"
      label="秘密等级:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.classifiedDes}}</div>
      </template>
    </van-field>
    <van-field name="reqUserName" v-model="custList.reqUserName" type="text" label="申请人:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.reqUserName}}</div>
      </template>
    </van-field>
    <van-field
      name="reqDeptName"
      v-model="custList.reqDeptName"
      type="text"
      label="申请人部门:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.reqDeptName}}</div>
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
import { postmanageformList } from '../../api/characteristic'

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
    postmanageformList(this.dataList.dataId).then(res => {
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
