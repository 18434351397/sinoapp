/** *@author XuJinTao *@date 2020/5/13 16:10 *@title index */
<template>
  <div class="projpriskbond">
    <div class="title">风险保证金信息</div>
    <van-field
      style="display: none;"
      name="id"
      v-model="projpriskbondList.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="projpriskbondList.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      type="text"
      name="contractNo"
      v-model="projpriskbondList.contractNo"
      label="合同号"
      colon
      readonly
    />
    <van-field
      type="text"
      name="contractName"
      v-model="projpriskbondList.contractName"
      label="合同名称"
      colon
      readonly
    />
    <van-field
      type="text"
      name="ownDeptName"
      v-model="projpriskbondList.ownDeptName"
      label="合同主导部门"
      colon
      readonly
    />
    <van-field
      type="text"
      name="ownUserName"
      v-model="projpriskbondList.ownUserName"
      label="主导部门负责人"
      colon
      readonly
    />
    <van-field
      type="text"
      name="frozenAmount"
      v-model="projpriskbondList.frozenAmount"
      label="冻结金额"
      colon
      readonly
    />
    <van-field
      type="text"
      name="startFrozenTime"
      v-model="projpriskbondList.startFrozenTime"
      label="开始冻结时间"
      colon
      readonly
    />
    <van-field
      type="text"
      name="riskTypeText"
      v-model="projpriskbondList.riskTypeText"
      label="风险类型"
      colon
      readonly
    />
    <van-field
      type="text"
      name="remark"
      v-model="projpriskbondList.remark"
      label="备注"
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
import { projpriskbondList } from '../../api/contract'

export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      fileList: [],
      files: [], // 循环列表
      projpriskbondList: [] // 风险保证金
    }
  },
  created () {
    console.log(this.dataList)
    projpriskbondList(this.dataList.dataId).then(res => {
      if (res.data) {
        this.projpriskbondList = res.data
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
div.projpriskbond {
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
div.projpriskbond {
  div.tax.van-cell:not(:last-child)::after {
    border-bottom: 1px solid #6c6c6c;
  }
  .van-cell:not(:last-child)::after {
    border-bottom: none;
  }
}
</style>
