/**
*@author CheYongJi
*@date 2020/4/15 14:06
*@title index
*/
<template>
  <div class="app-title">
    <div class="title">供应商信息</div>
    <van-field name="supplierName" v-model="custList.supplierName" type="text" label="供应商名称:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.supplierName}}</div>
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
      name="bizId"
      v-model="custList.bizId"
      type="text"
      label="供应商编号:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.bizId}}</div>
      </template>
    </van-field>

    <van-field
      name="oneTimeStorageDesc"
      v-model="custList.oneTimeStorageDesc"
      type="text"
      label="是否一次性入库:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.oneTimeStorageDesc}}</div>
      </template>
    </van-field>

    <van-field
    name="contractNo"
    v-model="custList.contractNo"
    type="text"
    label="销售合同号:"
    readonly
  >
    <template #input>
      <div style="text-align: left;margin: 0;">{{custList.contractNo}}</div>
    </template>
  </van-field>

    <van-field
      name="socialCreditCode"
      v-model="custList.socialCreditCode"
      type="text"
      label="统一社会信用代码:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.socialCreditCode}}</div>
      </template>
    </van-field>
    <van-field
      name="establishDate"
      v-model="custList.establishDate"
      type="text"
      label="成立日期:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.establishDate}}</div>
      </template>
    </van-field>

    <van-field
      name="operateStartDate"
      v-model="custList.operateStartDate"
      type="text"
      label="经营期限开始时间:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.operateStartDate}}</div>
      </template>
    </van-field>
    <van-field
      name="operateEndDate"
      v-model="custList.operateEndDate"
      type="text"
      label="经营期限结束时间:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.operateEndDate}}</div>
      </template>
    </van-field>
    <van-field
      name="registeredAddress"
      v-model="custList.registeredAddress"
      type="text"
      label="注册地址:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.registeredAddress}}</div>
      </template>
    </van-field>
    <van-field
      name="registeredCapital"
      v-model="custList.registeredCapital"
      type="text"
      label="注册资金(万元):"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.registeredCapital}}</div>
      </template>
    </van-field>
    <van-field
      name="companyType"
      v-model="custList.companyType"
      type="text"
      label="企业类型（性质）:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.companyType}}</div>
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
    <van-field
      name="regalUser"
      v-model="custList.regalUser"
      type="text"
      label="法定代表人:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.regalUser}}</div>
      </template>
    </van-field>
    <van-field
      name="regalPhone"
      v-model="custList.regalPhone"
      type="text"
      label="法人联系电话:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.regalPhone}}</div>
      </template>
    </van-field>
    <van-field
      name="regalEmail"
      v-model="custList.regalEmail"
      type="text"
      label="法人联系邮箱:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.regalEmail}}</div>
      </template>
    </van-field>
    <van-field
      name="businessUser"
      v-model="custList.businessUser"
      type="text"
      label="商务联系人姓名:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.businessUser}}</div>
      </template>
    </van-field>
    <van-field
      name="businessUserPhone"
      v-model="custList.businessUserPhone"
      type="text"
      label="商务联系人电话:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.businessUserPhone}}</div>
      </template>
    </van-field>
    <van-field
      name="businessUserEmail"
      v-model="custList.businessUserEmail"
      type="text"
      label="商务联系人邮箱:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.businessUserEmail}}</div>
      </template>
    </van-field>
    <van-field
      name="isRelevancezkDesc"
      v-model="custList.isRelevancezkDesc"
      type="text"
      label="企业是否与中科金财有关联关系:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.isRelevancezkDesc}}</div>
      </template>
    </van-field>
    <van-field
      name="isRelevancezkDesc"
      v-model="custList.isRelevancezkDesc"
      type="text"
      label="是否国企:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.isRelevancezkDesc}}</div>
      </template>
    </van-field>
    <van-field
      name="isListedCompanyDesc"
      v-model="custList.isListedCompanyDesc"
      type="text"
      label="是否上市公司:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.isListedCompanyDesc}}</div>
      </template>
    </van-field>
    <van-field
      name="officeAddress"
      v-model="custList.officeAddress"
      type="text"
      label="办公地址/企业地址:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.officeAddress}}</div>
      </template>
    </van-field>
    <van-field
      name="supplierNatureDesc"
      v-model="custList.supplierNatureDesc"
      type="text"
      label="供应商性质:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.supplierNatureDesc}}</div>
      </template>
    </van-field>
    <van-field
      name="basicQualifiDesc"
      v-model="custList.basicQualifiDesc"
      type="text"
      label="公司基本资质:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.basicQualifiDesc}}</div>
      </template>
    </van-field>
    <van-field
      name="otherBasicQualifi"
      v-model="custList.otherBasicQualifi"
      type="text"
      label="基本资质描述:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.otherBasicQualifi}}</div>
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
    <van-field
      name="projectDeptName"
      v-model="custList.projectDeptName"
      type="text"
      label="项目主导部门:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.projectDeptName}}</div>
      </template>
    </van-field>
    <van-field name="remark" v-model="custList.remark" type="text" label="备注:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.remark}}</div>
      </template>
    </van-field>
    <van-field
      v-if="isRiskRule"
      readonly
      clickable
      label="是否特批"
      colon
      name="isSpecialApproval"
      :value="SpecialApproval"
      placeholder="请选择"
      :rules="[{ required: true, message: '是否特批是必选字段' }]"
    >
      <template #input>
        <el-select v-model="SpecialApproval" placeholder="请选择">
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="0"></el-option>
        </el-select>
      </template>
    </van-field>
    <van-field
      name="specialReason"
      v-if="isRiskRule && SpecialApproval === '1'"
      readonly
      clickable
      label="特批原因"
      colon
      :value="specialReasonValue"
      placeholder="请选择"
      :rules="[{ required: true, message: '特批原因是必选字段' }]"
    >
      <template #input>
        <el-select v-model="specialReasonValue" multiple placeholder="请选择">
          <el-option
            v-for="item in specialReasonList"
            :key="item.attribute"
            :label="item.nameChs"
            :value="item.attribute">
          </el-option>
        </el-select>
      </template>
    </van-field>
    <van-field v-if="isRiskRule && specialReasonValue.includes('4')" name="specialDetail" v-model="custList.specialDetail" type="text" label="无采购产品资质描述:">
<!--      <template #input>-->
<!--        <div style="text-align: left;margin: 0;">{{custList.specialDetail}}</div>-->
<!--      </template>-->
    </van-field>

    <van-field v-if="isRiskRule && specialReasonValue.includes('7')" name="loseDetail" v-model="custList.loseDetail" type="text" label="资料不全描述:">
<!--      <template #input>-->
<!--        <div style="text-align: left;margin: 0;">{{custList.loseDetail}}</div>-->
<!--      </template>-->
    </van-field>
    <van-field
      v-if="isRiskRule && specialReasonValue.includes('8')"
      name="otherDetail"
      v-model="custList.otherDetail"
      type="text"
      label="其他描述:"
    >
<!--      <template #input>-->
<!--        <div style="text-align: left; margin: 0;">{{custList.otherDetail}}</div>-->
<!--      </template>-->
    </van-field>
    <van-field
      name="operateRisk"
      v-if="isRiskRule"
      readonly
      clickable
      label="经营风险"
      colon
      :value="operateRiskValue"
      placeholder="请选择"
      :rules="[{ required: true, message: '经营风险是必选字段' }]"
    >
      <template #input>
        <el-select v-model="operateRiskValue" placeholder="请选择">
          <el-option
            v-for="item in operateRiskList"
            :key="item.attribute"
            :label="item.nameChs"
            :value="item.attribute"
            style="overflow: hidden"
          >
          </el-option>
        </el-select>
      </template>
    </van-field>



    <van-field v-if="ApprovalShow" name="isSpecialApprovalDesc" v-model="custList.isSpecialApprovalDesc" type="text" label="是否特批:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.isSpecialApprovalDesc}}</div>
      </template>
    </van-field>
    <van-field v-if="ApprovalShow" name="specialReasonDesc" v-model="custList.specialReasonDesc" type="text" label="特批原因:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.specialReasonDesc}}</div>
      </template>
    </van-field>
    <van-field v-if="ApprovalShow" name="specialDetail" v-model="custList.specialDetail" type="text" label="无采购产品资质描述:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.specialDetail}}</div>
      </template>
    </van-field>

    <van-field v-if="ApprovalShow" name="loseDetail" v-model="custList.loseDetail" type="text" label="资料不全描述:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.loseDetail}}</div>
      </template>
    </van-field>
    <van-field
      v-if="ApprovalShow"
      name="otherDetail"
      v-model="custList.otherDetail"
      type="text"
      label="其他描述:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.otherDetail}}</div>
      </template>
    </van-field>

    <van-field v-if="ApprovalShow" name="operateRiskDesc" v-model="custList.operateRiskDesc" type="text" label="经营风险:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.operateRiskDesc}}</div>
      </template>
    </van-field>
    <van-field name="isFinancialReportDesc" v-model="custList.isFinancialReportDesc" type="text" label="是否有财报:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.isFinancialReportDesc}}</div>
      </template>
    </van-field>
    <van-field name="reportStartDate" v-model="custList.reportStartDate" type="text" label="报告期:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.reportStartDate}}</div>
      </template>
    </van-field>
    <van-field name="actualReceive" v-model="custList.actualReceive" type="text" label="实收资本(元):" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.actualReceive}}</div>
      </template>
    </van-field>
    <van-field name="netProfit" v-model="custList.netProfit" type="text" label="净利润(元):" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.netProfit}}</div>
      </template>
    </van-field>
    <van-field name="taxpaperScaleDesc" v-model="custList.taxpaperScaleDesc" type="text" label="纳税人规模:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.taxpaperScaleDesc}}</div>
      </template>
    </van-field>


    <div>
      <div class="table-title">本次采购内容</div>
      <vxe-table border resizable highlight-hover-row :data="purchaseConmentList" >
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="contractNo" title="销售合同号" width="30%"></vxe-table-column>
        <vxe-table-column field="contractName" title="销售合同名称" width="25%"></vxe-table-column>
        <vxe-table-column field="purchaseProductBrandDesc" title="采购产品品牌" width="20%"></vxe-table-column>
        <vxe-table-column field="purchaseProductName" title="采购产品名称" width="20%"></vxe-table-column>
        <vxe-table-column field="purchaseAmount" title="采购金额" width="20%"></vxe-table-column>
      </vxe-table>
    </div>

    <div>
      <div
        class="table-title"
        style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;"
      >产品/服务信息</div>
      <vxe-table border resizable highlight-hover-row :data="qualificationsList" >
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="productBrandDesc" title="产品品牌" width="21%"></vxe-table-column>
        <vxe-table-column field="productName" title="产品名称" width="21%"></vxe-table-column>
        <vxe-table-column field="isQualifiDesc" title="是否有资质" width="21%">
          <template slot-scope="scope">
            <span>{{Number(scope.row.isQualifi) === 1 ? '是' : '否'}}</span>
          </template>
        </vxe-table-column>
        <vxe-table-column field="isOnceEmpowerDesc" title="是否一次性授权" width="20%">
          <template slot-scope="scope">
            <span>{{Number(scope.row.isOnceEmpower) === 1 ? '是' : '否'}}</span>
          </template>
        </vxe-table-column>
        <vxe-table-column field="isOldManufacturerDesc" title="是否是原厂商" width="17%">
          <template slot-scope="scope">
            <span>{{Number(scope.row.isOldManufacturer) === 1 ? '是' : '否'}}</span>
          </template>
        </vxe-table-column>
        <vxe-table-column field="isTotalAgentDesc" title="是否是总代" width="20%">
          <template slot-scope="scope">
            <span>{{Number(scope.row.isTotalAgent) === 1 ? '是' : '否'}}</span>
          </template>
        </vxe-table-column>
        <vxe-table-column field="contractNo" title="销售合同号" width="20%"></vxe-table-column>
        <vxe-table-column field="contractName" title="销售合同名称" width="21%"></vxe-table-column>
        <vxe-table-column field="agentLevel" title="代理级别" width="20%"></vxe-table-column>
        <vxe-table-column field="empowerTrade" title="授权行业" width="25%"></vxe-table-column>
        <vxe-table-column field="empowerRegion" title="授权区域" width="25%"></vxe-table-column>
        <vxe-table-column field="empowerProductLine" title="授权产品线" width="25%"></vxe-table-column>
        <vxe-table-column field="empowerValid" title="授权有效期" width="25%"></vxe-table-column>
        <vxe-table-column field="fixedBill" title="固定账期" width="25%"></vxe-table-column>
        <vxe-table-column title="操作" width="15%">
          <template slot-scope="scope">
            <el-button  v-if="scope.row.attVOList && scope.row.attVOList.length > 0" @click="handleClick(scope.row[0])" type="text" size="small">下载</el-button>
          </template>
        </vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <div class="table-title">服务案例信息</div>
      <vxe-table border resizable highlight-hover-row :data="serverCaseList" >
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="serviceTypeDesc" title="服务类型" width="30%"></vxe-table-column>
        <vxe-table-column field="projectName" title="项目名称" width="25%"></vxe-table-column>
        <vxe-table-column field="customerName" title="客户名称" width="25%"></vxe-table-column>
        <vxe-table-column field="contractAmount" title="合同金额（元）" width="20%"></vxe-table-column>
        <vxe-table-column title="操作" width="15%">
          <template slot-scope="scope">
            <el-button v-if="scope.row.attVOList && scope.row.attVOList.length > 0" @click="handleClick(scope.row.attVOList[0])" type="text" size="small">下载</el-button>
          </template>
        </vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <div class="table-title">附件列表</div>
      <vxe-table border resizable highlight-hover-row :data="infoVOAttList">
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
    <div>
      <div class="table-title">财务附件列表</div>
      <vxe-table border resizable highlight-hover-row :data="financeAttList">
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
import { supplierList, custPro } from '../../api/customer'
// import { downLoad } from '../../api/flowfrom'

export default {
  name: 'bizcustinfoform',
  data () {
    return {
      SpecialApproval: null,
      isSpecialApproval: null,
      value: null,
      specialReasonValue: [],
      operateRiskValue: null,
      options: [
        {
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      operateRiskList: [],
      specialReasonList: [],
      fileList: [],
      infoVOAttList: [],
      financeAttList: [],
      custList: [],
      serverCaseList: [],
      purchaseConmentList: [],
      qualificationsList: [],
      dataList: this.$route.query,
      isRiskRule: false,
      ApprovalShow: false
    }
  },
  created () {
    supplierList(this.dataList.dataId).then(res => {
      if (res.data) {
        this.custList = res.data
        this.qualificationsList = res.data.qualificationsList
        this.purchaseConmentList = res.data.purchaseConmentList
        this.serverCaseList = res.data.serverCaseList
        this.fileList = res.data.infoVOAttList
        this.infoVOAttList = res.data.infoVOAttList
        this.financeAttList = res.data.financeAttList
        this.SpecialApproval = res.data.isSpecialApproval
        this.specialReasonValue = res.data.specialReasons ? res.data.specialReasons : []
        this.operateRiskValue = res.data.operateRisk

        this.fileList = this.fileList && this.fileList.map(item => {
          return JSON.stringify({
            url: item.atturl,
            fileName: item.attname,
            filePath: item.attdir,
            fileSize: item.attsize,
            fileId: item.id,
            bizid: item.bizid
          })
        })
        this.infoVOAttList = this.infoVOAttList && this.infoVOAttList.map(item => {
          return {
            url: item.atturl,
            fileName: item.attname,
            filePath: item.attdir,
            fileSize: item.attsize,
            fileId: item.id,
            bizid: item.bizid
          }
        })
        this.financeAttList = this.financeAttList && this.financeAttList.map(item => {
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
    console.log(this.financeAttList)

    // 特殊处理
    if (this.dataList.currTaskDefinitionKey === 'RiskRule' && this.dataList.status === '1' && this.dataList.onlyId === 'Todo') {
      this.isRiskRule = true
    } else {
      this.ApprovalShow = true
    }
    custPro().then(res => {
      this.operateRiskList = res.data.operateRisk
      this.specialReasonList = res.data.specialReason
    })
  },
  methods: {
    // 处理序号
    indexMethods (index) {
      return index + 1
    },
    // 下载调用方法
    handleClick (data) {
      console.log(data.url)
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
>>>.el-select__tags {
    overflow: auto;
  }
</style>
