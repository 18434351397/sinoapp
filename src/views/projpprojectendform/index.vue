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
      <vxe-table border resizable highlight-hover-row :data="files">
       <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
       <vxe-table-column field="attname" title="附件名称" width="50%"></vxe-table-column>
       <vxe-table-column title="大小" width="20%">
         <template slot-scope="scope">{{ (scope.row.attsize / 1024).toFixed(2) + 'KB' }}</template>
       </vxe-table-column>
       <vxe-table-column title="操作" width="15%">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
          </template>
       </vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <div class="table-title">项目人员打分</div>
      <vxe-table border resizable highlight-hover-row :data="personData" >
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="paymentMattersText" title="人员姓名" width="21%"></vxe-table-column>
        <vxe-table-column field="detailPayNoText" title="评分" width="21%"></vxe-table-column>
        <vxe-table-column field="mustPayAmount" title="优点" width="21%"></vxe-table-column>
        <vxe-table-column field="cPayAmount" title="缺点" width="21%"></vxe-table-column>
        <vxe-table-column field="tPayAmount" title="备注" width="21%"></vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <div class="table-title">供应商打分</div>
      <vxe-table border resizable highlight-hover-row :data="supplierData" >
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="supplierName" title="供应商名称" width="21%"></vxe-table-column>
        <vxe-table-column field="contractAmount" title="合同金额" width="21%"></vxe-table-column>
        <vxe-table-column field="score" title="总评分" width="17%"></vxe-table-column>
        <vxe-table-column field="productQualityScore" title="产品质量" width="21%"></vxe-table-column>
        <vxe-table-column field="productPriceScore" title="产品价格" width="21%"></vxe-table-column>
        <vxe-table-column field="arrivalDateScore" title="到货时间" width="21%"></vxe-table-column>
        <vxe-table-column field="accountsScore" title="账期支持" width="21%"></vxe-table-column>
        <vxe-table-column field="satisfactionScore" title="客户满意度" width="21%"></vxe-table-column>
        <vxe-table-column field="preSaleScore" title="售前支持" width="21%"></vxe-table-column>
        <vxe-table-column field="afterSaleScore" title="售后支持" width="21%"></vxe-table-column>
        <vxe-table-column field="breakContractScore" title="违约处理能力" width="21%"></vxe-table-column>
        <vxe-table-column field="hasIndustryPublish" title="是否有行业内处罚" width="21%"></vxe-table-column>
        <vxe-table-column field="hasIndustryReward" title="是否有行业内奖励" width="21%"></vxe-table-column>
      </vxe-table>
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
