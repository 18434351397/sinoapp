/**
*@author CheYongJi
*@date 2020/4/15 14:06
*@title index
*/
<template>
  <div class="app-title">
    <div class="title">供应商信息</div>
    <van-field name="name" v-model="custList.name" type="text" label="供应商名称:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.name}}</div>
      </template>
    </van-field>
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="custList.meetingUsers"
      type="text"
      readonly
    />
    <van-field style="display: none;" name="id" v-model="custList.id" type="text" readonly />
    <van-field
      name="registeredCapital"
      v-model="custList.registeredCapital"
      type="text"
      label="注册资金(元):"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.registeredCapital}}</div>
      </template>
    </van-field>
    <van-field
      name="operateScope"
      v-model="custList.operateScope"
      type="text"
      label="经营范围:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.operateScope}}</div>
      </template>
    </van-field>
    <van-field name="score" v-model="custList.score" type="text" label="评分:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.score}}</div>
      </template>
    </van-field>
    <van-field name="lastDate" v-model="custList.lastDate" type="text" label="末次合作日期:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.lastDate}}</div>
      </template>
    </van-field>
    <van-field name="endDate" v-model="custList.endDate" type="text" label="供应商营业执照有效期:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.endDate}}</div>
      </template>
    </van-field>
    <van-field
      name="applicantUser"
      v-model="custList.applicantUser"
      type="text"
      label="申请人:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.applicantUser}}</div>
      </template>
    </van-field>
    <van-field name="contractNo" v-model="custList.contractNo" type="text" label="合同号:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.contractNo}}</div>
      </template>
    </van-field>
    <van-field
      name="contractProjectName"
      v-model="custList.contractProjectName"
      type="text"
      label="合作项目名称:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.contractProjectName}}</div>
      </template>
    </van-field>
    <van-field
      name="contractDept"
      v-model="custList.contractDept"
      type="text"
      label="项目主导部门:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.contractDept}}</div>
      </template>
    </van-field>
    <van-field name="capital" v-model="custList.capital" type="text" label="实收资本:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.capital}}</div>
      </template>
    </van-field>
    <van-field
      name="accountPeriod"
      v-model="custList.accountPeriod"
      type="text"
      label="账期:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.accountPeriod}}</div>
      </template>
    </van-field>
    <van-field name="remark" v-model="custList.remark" type="text" label="备注:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.remark}}</div>
      </template>
    </van-field>
    <van-field
      name="classificationDesc"
      v-model="custList.classificationDesc"
      type="text"
      label="分类:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.classificationDesc}}</div>
      </template>
    </van-field>
    <van-field
      name="contactPhone"
      v-model="custList.contactPhone"
      type="text"
      label="联系电话:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.contactPhone}}</div>
      </template>
    </van-field>
    <van-field name="contactName" v-model="custList.contactName" type="text" label="联系人:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.contactName}}</div>
      </template>
    </van-field>
    <van-field
      name="contactEmail"
      v-model="custList.contactEmail"
      type="text"
      label="联系邮箱:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.contactEmail}}</div>
      </template>
    </van-field>
    <div>
      <div class="table-title">合作信息</div>
      <vxe-table border resizable highlight-hover-row :data="cooperativeList" >
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="product" title="合作产品" width="30%"></vxe-table-column>
        <vxe-table-column field="agentLevel" title="代理级别" width="25%"></vxe-table-column>
        <vxe-table-column field="contractAmount" title="采购合同金额" width="20%"></vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <div
        class="table-title"
        style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;"
      >资质详情</div>
      <vxe-table border resizable highlight-hover-row :data="qualificationsList" >
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="qualificaName" title="资质名称" width="21%"></vxe-table-column>
        <vxe-table-column field="agenttypeDesc" title="代理类型" width="21%"></vxe-table-column>
        <vxe-table-column field="agentgoods" title="代理产品" width="21%"></vxe-table-column>
        <vxe-table-column field="agentlevelDesc" title="代理商级别" width="20%"></vxe-table-column>
        <vxe-table-column field="linkman" title="联系人" width="17%"></vxe-table-column>
        <vxe-table-column field="phone" title="电话" width="20%"></vxe-table-column>
        <vxe-table-column field="email" title="邮箱" width="20%"></vxe-table-column>
        <vxe-table-column field="count" title="合作次数" width="21%"></vxe-table-column>
        <vxe-table-column field="cycle" title="账期" width="20%"></vxe-table-column>
        <vxe-table-column field="endDate" title="资质有效截止日期" width="25%"></vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <div class="table-title">附件列表</div>
      <vxe-table border resizable highlight-hover-row :data="attachmentVOList">
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
import { supplierList } from '../../api/customer'
// import { downLoad } from '../../api/flowfrom'

export default {
  name: 'bizcustinfoform',
  data () {
    return {
      fileList: [],
      attachmentVOList: [],
      custList: [],
      cooperativeList: [],
      qualificationsList: [],
      dataList: this.$route.query
    }
  },
  created () {
    supplierList(this.dataList.dataId).then(res => {
      if (res.data) {
        this.custList = res.data
        this.qualificationsList = res.data.qualificationsList
        this.cooperativeList = res.data.cooperativeList
        this.fileList = res.data.attachmentVOList
        this.attachmentVOList = res.data.attachmentVOList
        this.fileList = this.fileList.map(item => {
          return JSON.stringify({
            url: item.atturl,
            fileName: item.attname,
            filePath: item.attdir,
            fileSize: item.attsize,
            fileId: item.id,
            bizid: item.bizid
          })
        })
        this.attachmentVOList = this.attachmentVOList.map(item => {
          return {
            url: item.atturl,
            fileName: item.attname,
            filePath: item.attdir,
            fileSize: item.attsize,
            fileId: item.id,
            bizid: item.bizid
          }
        })
      }
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
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
