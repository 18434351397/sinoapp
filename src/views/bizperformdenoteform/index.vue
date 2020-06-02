<template>
  <div class="app-title">
    <div class="title">履约保函信息</div>
    <van-field
      style="display: none;"
      name="id"
      v-model="bizperformdenoteform.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="bondId"
      v-model="bizperformdenoteform.bondId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="bizperformdenoteform.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="ownDeptId"
      v-model="bizperformdenoteform.ownDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="payCompany"
      v-model="bizperformdenoteform.payCompany"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="paymentName"
      v-model="bizperformdenoteform.paymentName"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reqtype"
      v-model="bizperformdenoteform.reqtype"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="salesMan"
      v-model="bizperformdenoteform.salesMan"
      type="text"
      readonly
    />

    <van-field
      type="text"
      name="contractNo"
      v-model="bizperformdenoteform.contractNo"
      label="合同编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.contractNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="contractName"
      v-model="bizperformdenoteform.contractName"
      label="合同名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.contractName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="contractTime"
      v-model="bizperformdenoteform.contractTime"
      label="合同签订日期"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.contractTime}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="salesManName"
      v-model="bizperformdenoteform.salesManName"
      label="销售人员"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.salesManName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="leadOrgName"
      v-model="bizperformdenoteform.leadOrgName"
      label="合同主导部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.leadOrgName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="reqUserName"
      v-model="bizperformdenoteform.reqUserName"
      label="申请人"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.reqUserName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="reqDeptName"
      v-model="bizperformdenoteform.reqDeptName"
      label="申请人部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.reqDeptName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="reqDate"
      v-model="bizperformdenoteform.reqDate"
      label="申请日期"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.reqDate}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="paymentNameId"
      v-model="bizperformdenoteform.paymentNameId"
      label="履约保函付款款项名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.paymentNameId}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="bondName"
      v-model="bizperformdenoteform.bondName"
      label="履约保函匹配条件"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.bondName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="amount"
      v-model="bizperformdenoteform.amount"
      label="履约保函金额"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.amount}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="amountCapital"
      v-model="bizperformdenoteform.amountCapital"
      label="金额大写"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.amountCapital}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="payCompanyName"
      v-model="bizperformdenoteform.payCompanyName"
      label="支出公司"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.payCompanyName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="payTypeDesc"
      v-model="bizperformdenoteform.payTypeDesc"
      label="支出形式"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.payTypeDesc}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="backDate"
      v-model="bizperformdenoteform.backDate"
      label="退回日期"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.backDate}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="projectNo"
      v-model="bizperformdenoteform.projectNo"
      label="保函计入项目号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.projectNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="projectName"
      v-model="bizperformdenoteform.projectName"
      label="立项名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.projectName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="keepDate"
      v-model="bizperformdenoteform.keepDate"
      label="保函有效期"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.keepDate}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="lastDate"
      v-model="bizperformdenoteform.lastDate"
      label="保函最晚开具时间"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.lastDate}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="custprojectName"
      v-model="bizperformdenoteform.custprojectName"
      label="客户项目名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.custprojectName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="beneficiary"
      v-model="bizperformdenoteform.beneficiary"
      label="对方单位"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.beneficiary}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="remarks"
      v-model="bizperformdenoteform.remarks"
      label="备注"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{bizperformdenoteform.remarks}}</div>
      </template>
    </van-field>
    <div>
      <div class="table-title">上传附件</div>
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
import { bizperformdenoteformApi } from '../../api/contract'
export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      fileList: [],
      files: [], // 循环列表
      bizperformdenoteform: []
    }
  },
  created () {
    bizperformdenoteformApi(this.dataList.dataId).then(res => {
      if (res.data) {
        this.bizperformdenoteform = res.data
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
