/**
*@author CheYongJi
*@date 2020/5/18 10:52
*@title index
*/
<template>
  <div class="app-title">
    <div class="title" style="padding: 10px 15px;text-align: left;background-color: #fff;">报销发起信息</div>
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
    <van-field style="display: none;" name="id" v-model="custList.id" type="text" readonly />
    <van-field style="display: none;" name="cou" v-model="custList.cou" type="text" readonly />
    <van-field style="display: none;" name="payee" v-model="custList.payee" type="text" readonly />
    <van-field
      style="display: none;"
      name="capitalizedProjectId"
      v-model="capitalizedProjects"
      type="text"
    />
    <van-field style="display: none;" name="employeeTypeId" v-model="employeeTypes" type="text" />
    <!--    <van-field label="付款对象:" name="borrower" v-model="custList.borrower">-->
    <!--      <template #input>-->
    <!--        <div v-if="custList.borrower === '1'" style="margin: 0;">公司</div>-->
    <!--        <div v-if="custList.borrower === '0'" style="margin: 0;">个人</div>-->
    <!--      </template>-->
    <!--    </van-field>-->
    <van-field name="feesTypeDes" v-model="custList.feesTypeDes" type="text" label="报销类型:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.feesTypeDes}}</div>
      </template>
    </van-field>
    <van-field
      name="companyCodeUs"
      v-model="custList.companyCodeUs"
      type="text"
      label="公司名称:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.companyCodeUs}}</div>
      </template>
    </van-field>
    <van-field name="feesCode" v-model="custList.feesCode" type="text" label="报销编号:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.feesCode}}</div>
      </template>
    </van-field>
    <van-field name="exeUserName" v-model="custList.exeUserName" type="text" label="经办人员:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.exeUserName}}</div>
      </template>
    </van-field>
    <van-field
      name="reimbursementDate"
      v-model="custList.reimbursementDate"
      type="text"
      label="报销日期:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.reimbursementDate}}</div>
      </template>
    </van-field>
    <van-field
      v-if="dataList.currTaskDefinitionKey === 'Accountant'  && this.active === 0"
      name="employeeType"
      readonly
      clickable
      right-icon="arrow-down"
      label="员工类型"
      colon
      :value="personType"
      placeholder="请选择"
      :rules="[{ required: true, message: '员工类型是必选字段' }]"
      @click="showpersonType = true"
    />
    <van-popup v-model="showpersonType" round position="bottom">
      <van-picker
        show-toolbar
        :columns="personTypeList"
        @cancel="showpersonType = false"
        @confirm="isshowpersonType"
      />
    </van-popup>
    <van-field
      v-if="dataList.currTaskDefinitionKey === 'Accountant' && this.active === 0"
      readonly
      clickable
      name="capitalizedProject"
      right-icon="arrow-down"
      label="资本化项目"
      colon
      :value="capitalizedProject"
      placeholder="请选择"
      :rules="[{ required: true, message: '资本化项目是必选字段' }]"
      @click="showcapitalizedProject = true"
    />
    <van-popup v-model="showcapitalizedProject" round position="bottom">
      <van-picker
        show-toolbar
        :columns="capitalizedProjectList"
        @cancel="showcapitalizedProject = false"
        @confirm="isshowcapitalizedProject"
      />
    </van-popup>
    <van-field @blur="checkCou" v-if="dataList.currTaskDefinitionKey === 'Accountant'  && this.active === 0" name="cou" v-model="custList.cou" type="text" label="记字:">
    </van-field>
    <van-field name="payeeName" v-model="custList.payeeName" type="text" label="领款人:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.payeeName}}</div>
      </template>
    </van-field>
    <van-field name="protocolNo" v-model="custList.protocolNo" type="text" label="协议号:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.protocolNo}}</div>
      </template>
    </van-field>
    <van-field
      name="ownDeptName"
      v-model="custList.ownDeptName"
      type="text"
      label="立项号主导部门:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.ownDeptName}}</div>
      </template>
    </van-field>
    <van-field
      v-if="custList.feesType === '2' || custList.feesType === '3'"
      name="oppositeCompany"
      v-model="custList.oppositeCompany"
      type="text"
      label="对方公司名称:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.oppositeCompany}}</div>
      </template>
    </van-field>
    <van-field
      v-if="custList.feesType === '2' || custList.feesType === '3'"
      name="oppenBank"
      v-model="custList.oppenBank"
      type="text"
      label="开户行:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.oppenBank}}</div>
      </template>
    </van-field>
    <van-field
      v-if="custList.feesType === '2' || custList.feesType === '3'"
      name="bankAccount"
      v-model="custList.bankAccount"
      type="text"
      label="账号:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.bankAccount}}</div>
      </template>
    </van-field>
    <div>
      <div class="table-title">报销明细详情</div>
      <vxe-table border resizable highlight-hover-row :data="costDetailList" >
        <vxe-table-column fixed="left" field="reimbursementUserName" title="报销人员姓名" width="17%"></vxe-table-column>
        <vxe-table-column fixed="left" field="subjectName" title="科目" width="17%"></vxe-table-column>
        <vxe-table-column title="是否本地票" width="17%">
          <template slot-scope="scope">
            <div v-if="scope.row.isLocal === '1'">是</div>
            <div v-if="scope.row.isLocal === '2'">否</div>
          </template>
        </vxe-table-column>
        <vxe-table-column field="amount" title="金额" width="21%"></vxe-table-column>
        <vxe-table-column field="projectNo" title="立项号" width="21%"></vxe-table-column>
        <vxe-table-column field="projectName" title="项目名称" width="20%"></vxe-table-column>
        <vxe-table-column field="ownDeptName" title="费用归属部门名称" width="20%"></vxe-table-column>
        <vxe-table-column field="ownDeptCode" title="费用归属部门编号" width="20%"></vxe-table-column>
        <vxe-table-column field="aprUserIds" title="应审批人" width="20%"></vxe-table-column>
        <vxe-table-column title="借款余额" width="20%">
          <template slot-scope="scope">{{totalLoanAmount}}</template>
        </vxe-table-column>
        <vxe-table-column field="loanAmount" title="清借款金额" width="20%"></vxe-table-column>
        <vxe-table-column field="remark" title="备注" width="20%"></vxe-table-column>
        <vxe-table-column title="查看明细" width="20%"></vxe-table-column>
      </vxe-table>
      <van-field
        name="reimbursementAmount"
        v-model="reimbursementAmount"
        type="text"
        label="报销总金额:"
        readonly
      >
        <template #input>
          <div style="text-align: left;margin: 0;">{{reimbursementAmount}}</div>
        </template>
      </van-field>
    </div>
    <div>
      <div class="table-title">清借款列表</div>
      <vxe-table border resizable highlight-hover-row :data="feesReimbursementLoanVOList" >
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="loanUserName" title="借款人" width="17%"></vxe-table-column>
        <vxe-table-column field="projectNo" title="项目号" width="17%"></vxe-table-column>
        <vxe-table-column field="projectName" title="项目名" width="17%"></vxe-table-column>
        <vxe-table-column field="waitReAmount" title="待还金额" width="21%"></vxe-table-column>
        <vxe-table-column field="loanNo" title="借款编号" width="21%"></vxe-table-column>
        <vxe-table-column field="subjectNames" title="科目" width="15%"></vxe-table-column>
        <vxe-table-column field="amounts" title="清借款金额" width="20%"></vxe-table-column>
      </vxe-table>
      <van-field
        name="cleranloanAmount"
        v-model="cleranloanAmount"
        type="text"
        label="清借款总金额:"
        readonly
      >
        <template #input>
          <div style="text-align: left;margin: 0;">{{cleranloanAmount}}</div>
        </template>
      </van-field>
      <van-field name="payAmount" v-model="payAmount" type="text" label="应付款金额:" readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{payAmount}}</div>
        </template>
      </van-field>
    </div>
    <div>
      <div class="table-title" >附件列表</div>
      <vxe-table border resizable highlight-hover-row :data="file">
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
    <div style="background-color: #fff;padding: 10px 0;">
      <el-button type="primary" @click="Print()" style="background-color: #1989fa;" round>打印</el-button>
    </div>
  </div>
</template>

<script>
import { bizfeesreimbursementformList, selectByUserIdLoanList, getBySubCodes, fessCheckInoId, api } from '../../api/costManagementApi'
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      custList: [],
      costDetailList: [],
      feesReimbursementLoanVOList: [],
      reimbursementAmount: 0, // 报销总金额
      cleranloanAmount: 0, // 清借款总金额
      payAmount: 0, // 应付款金额
      totalLoanAmount: 0.00,
      file: [],
      fileList: [],
      fileIdList: [],
      personType: null,
      capitalizedProject: null,
      showcapitalizedProject: false,
      showpersonType: false,
      personTypeList: [],
      capitalizedProjectList: [],
      employeeTypes: null,
      capitalizedProjects: null,
      isCou: false
    }
  },
  computed: {
    ...mapGetters(['active'])
  },
  created () {
    console.log(this.active)
    this.loadData()
    this.getBySubCodesList()
  },
  methods: {
    // 打印方法
    Print () {
      const data = {
        url: api.printMethod,
        id: this.custList.id
      }
      this.print(data)
    },
    // 检查记字号
    checkCou () {
      const data = {
        cou: this.custList.cou,
        company: this.custList.companyCodeU
      }
      // 记字号的处理
      fessCheckInoId(data).then(res => {
        debugger
        if (res.resultCode !== '200') {
          this.$toast(res.data.bizResultMessage)
          this.custList.cou = ''
          this.isCou = false
        }
        if (res.data === 'false') {
          this.$toast('输入记字有误，请重新输入！')
          this.custList.cou = ''
          this.isCou = false
        } else {
          this.isCou = true
        }
      })
    },
    // 获取数据
    loadData () {
      bizfeesreimbursementformList(this.dataList.dataId).then(res => {
        // 处理feetypedes
        if (res.data.feesType === '1') {
          res.data.feesTypeDes = '普通报销'
        } else if (res.data.feesType === '2') {
          res.data.feesTypeDes = '个人快速报销'
        } else if (res.data.feesType === '3') {
          res.data.feesTypeDes = '对公付款'
        } else if (res.data.feesType === '4') {
          res.data.feesTypeDes = '财务资金'
        }
        // 计算 报销总金额 清借款总金额 应付款金额 的字段
        res.data.feesReimbursementDetailVOList.forEach(item => {
          this.reimbursementAmount = (Number(this.reimbursementAmount) + Number(item.amount)).toFixed(2)
          this.cleranloanAmount = (Number(this.cleranloanAmount + Number(item.loanAmount))).toFixed(2)
          this.payAmount = (Number(this.reimbursementAmount) - Number(this.cleranloanAmount)).toFixed(2)
        })

        this.custList = res.data
        // 处理时间的格式
        this.custList.reimbursementDate = this.custList.reimbursementDate.split(' ')[0]
        this.costDetailList = res.data.feesReimbursementDetailVOList
        // 获取清借款列表并对借款金额进行计算
        this.getselectByUserIdLoanList(res.data.payee)
        // 清借款列表数据
        this.feesReimbursementLoanVOList = res.data.feesReimbursementLoanVOList
        // 附件上传列表数据
        this.file = res.data.fileList
        this.fileList = res.data.fileList
        // 处理上传文件的fileIdList
        this.fileList.forEach(item => {
          this.fileIdList = this.fileIdList.concat(item.fileId)
        })
        // 处理上传文件的fileList
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
    // 获取借款列表数据
    getselectByUserIdLoanList (userid) {
      selectByUserIdLoanList(userid).then(res => {
        res.data.forEach(item => {
          this.totalLoanAmount = (Number(this.totalLoanAmount) + Number(item.loanAmount))
        })
        this.totalLoanAmount = '￥' + this.totalLoanAmount.toFixed(2)
      })
    },
    // 获取字典数据
    getBySubCodesList () {
      getBySubCodes('company-ReimbursementType-U8Company-employeeType-capitalizedProject').then(res => {
        this.personTypeList = res.data.employeeType.map(item => {
          return {
            employeeType: item.attribute,
            id: item.id,
            text: item.nameChs
          }
        })
        this.capitalizedProjectList = res.data.capitalizedProject.map(item => {
          return {
            capitalizedProject: item.attribute,
            id: item.id,
            text: item.nameChs
          }
        })
      })
    },
    handleClick (data) {
      console.log(data.url)
      this.downLoad(data)
    },
    // 处理表格的序号的方法
    indexMethods (index) {
      return index + 1
    },
    // 员工类型
    isshowpersonType (value) {
      console.log(value)
      this.personType = value.text
      this.employeeTypes = value.employeeType
      this.showpersonType = false
    },
    // 资本化项目
    isshowcapitalizedProject (value) {
      this.capitalizedProject = value.text
      this.capitalizedProjects = value.capitalizedProject
      this.showcapitalizedProject = false
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
