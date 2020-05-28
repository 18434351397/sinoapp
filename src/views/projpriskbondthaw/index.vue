/** *@author XuJinTao *@date 2020/5/14 10:10 *@title index */
<template>
  <div class="app-title">
    <div class="title">风险保证金解冻信息</div>
    <van-field
      style="display: none;"
      name="id"
      v-model="projpriskbondthawList.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="projpriskbondthawList.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      type="text"
      name="contractNo"
      v-model="projpriskbondthawList.contractNo"
      label="合同号"
      colon
      readonly
    />
    <van-field
      type="text"
      name="contractName"
      v-model="projpriskbondthawList.contractName"
      label="合同名称"
      colon
      readonly
    />
    <van-field
      type="text"
      name="ownDeptName"
      v-model="projpriskbondthawList.ownDeptName"
      label="合同主导部门"
      colon
      readonly
    />
    <van-field
      type="text"
      name="ownUserName"
      v-model="projpriskbondthawList.ownUserName"
      label="主导部门负责人"
      colon
      readonly
    />
    <van-field
      type="text"
      name="frozenAmount"
      v-model="projpriskbondthawList.frozenAmount"
      label="冻结金额"
      colon
      readonly
    />
    <van-field
      type="text"
      name="startFrozenTime"
      v-model="projpriskbondthawList.startFrozenTime"
      label="开始冻结时间"
      colon
      readonly
    />
    <van-field
      type="text"
      name="riskTypeText"
      v-model="projpriskbondthawList.riskTypeText"
      label="风险类型"
      colon
      readonly
    />
    <van-field
      type="text"
      name="remark"
      v-model="projpriskbondthawList.remark"
      label="备注"
      colon
      readonly
    />
    <van-field
      type="text"
      name="cThawAmount"
      v-model="projpriskbondthawList.cThawAmount"
      label="本次解冻金额"
      colon
      readonly
    />
    <van-field
      type="text"
      name="thawTime"
      v-model="projpriskbondthawList.thawTime"
      label="解冻时间"
      colon
      readonly
    />
    <div>
      <div class="table-title">其他</div>
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
import { projpriskbondthawList } from '../../api/contract'

export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      fileList: [],
      files: [], // 循环列表
      projpriskbondthawList: [] // 解冻风险保证金
    }
  },
  created () {
    projpriskbondthawList(this.dataList.dataId).then(res => {
      if (res.data) {
        this.projpriskbondthawList = res.data
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
