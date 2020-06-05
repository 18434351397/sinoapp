/** *@author XuJinTao *@date 2020/5/13 16:10 *@title index */
<template>
  <div class="app-title">
    <div class="title">项目结项申请信息</div>
    <van-field style="display: none;" name="id" v-model="custList.id" type="text" readonly />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="custList.meetingUsers"
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
    <van-field
      style="display: none;"
      name="hasAttachment"
      v-model="custList.hasAttachment"
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
      type="text"
      label="申请人"
      name="reqUserName"
      v-model="custList.reqUserName"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{ custList.reqUserName }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      label="申请人部门"
      name="reqDeptName"
      v-model="custList.reqDeptName"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{ custList.reqDeptName }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      label="项目编号"
      name="projectNo"
      v-model="custList.projectNo"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{ custList.projectNo }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      label="合同号"
      name="contractNo"
      v-model="custList.contractNo"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{ custList.contractNo }}</div>
      </template>
    </van-field>
    <van-field type="text" label="结项申请时间" v-model="custList.reqTime" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{ custList.reqTime }}</div>
      </template>
    </van-field>
    <van-field type="text" label="项目执行情况总结" v-model="custList.summary" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{ custList.summary }}</div>
      </template>
    </van-field>
    <div>
      <div class="table-title">项目文档列表</div>
      <el-table border :data="files" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="附件名称" prop="attname"></el-table-column>
        <el-table-column label="大小" width="80">
          <template slot-scope="scope">
            {{
            (scope.row.attsize / 1024).toFixed(2) + 'KB'
            }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="50">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <div class="table-title">项目人员打分</div>
      <el-table border :data="personData" style="width: 100%">
        <el-table-column label="人员姓名" prop="reqUserName"></el-table-column>
        <el-table-column label="评分" prop="score"></el-table-column>
        <el-table-column label="优点" prop="good"></el-table-column>
        <el-table-column label="缺点" prop="bad"></el-table-column>
        <el-table-column label="备注" prop="remark"></el-table-column>
      </el-table>
    </div>
    <div>
      <div class="table-title">供应商打分</div>
      <el-table border :data="supplierData" style="width: 100%">
        <el-table-column label="供应商名称" prop="supplierName"></el-table-column>
        <el-table-column label="合同金额" prop="contractAmount"></el-table-column>
        <el-table-column label="总评分" prop="score"></el-table-column>
        <el-table-column label="产品质量" prop="productQualityScore"></el-table-column>
        <el-table-column label="产品价格" prop="productPriceScore"></el-table-column>
        <el-table-column label="到货时间" prop="arrivalDateScore"></el-table-column>
        <el-table-column label="账期支持" prop="accountsScore"></el-table-column>
        <el-table-column label="客户满意度" prop="satisfactionScore"></el-table-column>
        <el-table-column label="售前支持" prop="preSaleScore"></el-table-column>
        <el-table-column label="售后支持" prop="afterSaleScore"></el-table-column>
        <el-table-column label="违约处理能力" prop="breakContractScore"></el-table-column>
        <el-table-column label="是否有行业内处罚" prop="hasIndustryPublish" :formatter="hasPublish"></el-table-column>
        <el-table-column label="是否有行业内奖励" prop="hasIndustryReward" :formatter="hasReward"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {
  projpprojectendformApi,
  attachmentApi,
  getOtherInfoApi
} from '../../api/contract'
export default {
  name: 'index',
  data () {
    return {
      fileList: [],
      fileIdList: [],
      files: [], // 循环列表
      dataList: this.$route.query,
      supplierData: [], // 项目人员打分
      personData: [], // 供应商打分
      custList: [] // 项目变更-预算变更
    }
  },
  created () {
    projpprojectendformApi(this.dataList.dataId).then((res) => {
      if (res.data) {
        this.custList = res.data
        getOtherInfoApi(res.data.projectNo, res.data.contractNo).then((res) => {
          if (res.data) {
            this.supplierData = res.data.supplierData
            this.personData = res.data.personData
          } else {
            throw new '数据异常'()
          }
        })
      } else {
        throw new '数据异常'()
      }
    })
    // 项目附件列表
    attachmentApi(this.dataList.dataId).then((res) => {
      if (res.data) {
        this.files = res.data ? res.data : []
        // 传输附件id字段
        res.data.map((item) => {
          this.fileIdList = this.fileIdList.concat(item.id)
        })
        this.fileList = this.files.map((item) => {
          return JSON.stringify({
            attdir: item.attdir,
            attname: item.attname,
            attsize: item.attsize,
            atturl: item.atturl,
            bizid: item.bizid,
            biztable: item.biztable,
            createdDate: item.createdDate,
            id: item.id,
            userId: item.userId,
            userName: item.userName
          })
        })
      } else {
        throw new '数据异常'()
      }
    })
  },
  methods: {
    hasPublish: function (row, column, cellValue) {
      if (cellValue === '1') {
        return '有'
      } else if (cellValue === '0') {
        return '没有'
      }
    },
    hasReward: function (row, column, cellValue) {
      if (cellValue === '1') {
        return '有'
      } else if (cellValue === '0') {
        return '没有'
      }
    },
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
