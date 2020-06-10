/**
*@author CheYongJi
*@date 2020/4/15 14:06
*@title index
*/
<template>
  <div class="app-title">
    <div
      class="title"
    >供应商信息</div>
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
      <div
        class="table-title"
      >合作信息</div>
      <el-table border :data="cooperativeList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="合作产品" prop="product"></el-table-column>
        <el-table-column label="代理级别" prop="agentLevel"></el-table-column>
        <el-table-column label="采购合同金额" prop="contractAmount"></el-table-column>
      </el-table>
    </div>
    <div>
      <div
        class="table-title"
        style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;"
      >资质详情</div>
      <el-table border :data="qualificationsList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="资质名称" prop="qualificaName"></el-table-column>
        <el-table-column label="代理类型" prop="agenttypeDesc"></el-table-column>
        <el-table-column label="代理产品" prop="agentgoods"></el-table-column>
        <el-table-column label="代理商级别" prop="agentlevelDesc"></el-table-column>
        <el-table-column label="联系人" prop="linkman"></el-table-column>
        <el-table-column label="电话" prop="phone"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="合作次数" prop="count"></el-table-column>
        <el-table-column label="账期" prop="cycle"></el-table-column>
        <el-table-column label="资质有效截止日期" prop="endDate"></el-table-column>
      </el-table>
    </div>
    <div>
      <div
        class="table-title"
      >附件列表</div>
      <el-table border :data="attachmentVOList" style="width: 100%">
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
