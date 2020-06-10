/** *@author XuJinTao *@date 2020/5/12 15:40 *@title index */
<template>
  <div class="app-title">
    <div class="title">投标报价信息</div>
    <van-field style="display: none;" name="cbxAchievementFlow" type="text" readonly />
    <van-field style="display: none;" name="cbxCashFlow" type="text" readonly />
    <van-field style="display: none;" name="cbxCostDetail" type="text" readonly />
    <van-field style="display: none;" name="cbxIncomeDetail" type="text" readonly />
    <van-field style="display: none;" name="id" v-model="tenderOfferList.id" type="text" readonly />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="tenderOfferList.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      type="text"
      name="recordId"
      v-model="tenderOfferList.recordId"
      label="投标备案编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.recordId}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="projectName"
      v-model="tenderOfferList.projectName"
      label="项目名称"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.projectName}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="reqUserName"
      v-model="tenderOfferList.reqUserName"
      label="申请人"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.reqUserName}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="customerName"
      v-model="tenderOfferList.customerName"
      label="客户名称"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.customerName}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="reqDeptName"
      v-model="tenderOfferList.reqDeptName"
      label="申请人部门"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.reqDeptName}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="isCooperate"
      v-model="tenderOfferList.isCooperate"
      label="是否合作项目"
      colon
      readonly
    >
      <template #input>
        <div v-if="tenderOfferList.isCooperate === '1'" style="margin: 0;">是</div>
        <div v-else style="margin: 0;">否</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="assureAmount"
      v-model="tenderOfferList.assureAmount"
      label="质保金金额(元)"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.assureAmount}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="amount"
      v-model="tenderOfferList.amount"
      label="投标保证金金额(元)"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.amount}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="ownDeptName"
      v-model="tenderOfferList.ownDeptName"
      label="主导部门"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.ownDeptName}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="bidTime"
      v-model="tenderOfferList.bidTime"
      label="投标时间"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.bidTime}}</div>
      </template>
</van-field>
    <div>
      <div class="table-title">收入明细</div>
      <el-table border :data="incomeList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="收入类型" prop="feesTypeText"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="数量" prop="num"></el-table-column>
        <el-table-column label="单价" prop="price"></el-table-column>
        <el-table-column label="金额" prop="amount"></el-table-column>
        <el-table-column label="税率" prop="taxRateText"></el-table-column>
        <el-table-column label="缴税类型" prop="invoiceTypeText"></el-table-column>
      </el-table>
    </div>
    <div>
      <div class="table-title">成本明细</div>
      <el-table border :data="costList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="成本明细" prop="costFeesTypeText"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="金额" prop="amount"></el-table-column>
        <el-table-column label="税率" prop="taxRateText"></el-table-column>
        <el-table-column label="缴税类型" prop="costInvoiceTypeText"></el-table-column>
      </el-table>
    </div>
    <div>
      <div class="table-title">业绩切分</div>
      <el-table border :data="achievementList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="切分部门" prop="segmentDeptText"></el-table-column>
        <el-table-column label="负责人" prop="leadUserText"></el-table-column>
        <el-table-column label="切分比例" prop="segmentP"></el-table-column>
        <el-table-column label="切分金额" prop="segmentAmount"></el-table-column>
        <el-table-column label="部门类型" prop="deptTypeDesc"></el-table-column>
      </el-table>
    </div>
    <div>
      <div class="table-title">预计现金流量表（收/付款情况）</div>
      <el-table border :data="projpContractPaymentList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="收付类型" prop="prTypeText"></el-table-column>
        <el-table-column label="预计收/付款时间" prop="paymentDate"></el-table-column>
        <el-table-column label="预计收/付款金额" prop="paymentAmount"></el-table-column>
        <el-table-column label="预计收/付款条件" prop="paymentCondition"></el-table-column>
        <el-table-column label="计入科目" prop="accountSubjectText"></el-table-column>
        <el-table-column label="验收报告名称" prop="reportName"></el-table-column>
        <el-table-column label="现金流量金额" prop="confirmAmount"></el-table-column>
        <el-table-column label="款项名称" prop="paymentName"></el-table-column>
        <el-table-column label="资金占用时间" prop="occupyTime"></el-table-column>
        <el-table-column label="资金占用成本" prop="occupyAmount"></el-table-column>
      </el-table>
      <van-field
        type="text"
        name="occupy"
        v-model="tenderOfferList.occupy"
        label="资金占用情况"
        colon
        readonly
      >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.occupy}}</div>
      </template>
</van-field>
    </div>
    <div class="title title-content">金额计算</div>
    <van-field
      type="text"
      name="rGoods"
      v-model="tenderOfferList.rGoods"
      label="商品收入"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.rGoods}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="rTechnology"
      v-model="tenderOfferList.rTechnology"
      label="技术服务收入"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.rTechnology}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="rCount"
      v-model="tenderOfferList.rCount"
      label="收入合计(元)"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.rCount}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="purchasingCost"
      v-model="tenderOfferList.purchasingCost"
      label="采购成本"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.purchasingCost}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="subcontractCost"
      v-model="tenderOfferList.subcontractCost"
      label="分包成本"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.subcontractCost}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="cCount"
      v-model="tenderOfferList.cCount"
      label="成本合计(元)"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.cCount}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="addedTax"
      v-model="tenderOfferList.addedTax"
      label="增值税及附加(元)"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.addedTax}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="ownSoftware"
      v-model="tenderOfferList.ownSoftware"
      label="自有软件增值税及附加(元)"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.ownSoftware}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="stampDuty"
      v-model="tenderOfferList.stampDuty"
      label="印花税(元)"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.stampDuty}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="tCount"
      v-model="tenderOfferList.tCount"
      label="税金合计(元)"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.tCount}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="grossProfit"
      v-model="tenderOfferList.grossProfit"
      label="税后毛利润合计(元)"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.grossProfit}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="pretaxGrossProfitRate"
      v-model="tenderOfferList.pretaxGrossProfitRate"
      label="税前毛利润率(%)"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.pretaxGrossProfitRate}}</div>
      </template>
</van-field>
    <van-field
      type="text"
      name="aftertaxGrossProfitRate"
      v-model="tenderOfferList.aftertaxGrossProfitRate"
      label="税后毛利润率(%)"
      colon
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{tenderOfferList.aftertaxGrossProfitRate}}</div>
      </template>
</van-field>
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
import { projptenderquoteList } from '../../api/customer'

export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      incomeList: [], // 收入
      costList: [], // 成本
      tenderOfferList: [], // 投标数据
      projpContractPaymentList: [], // 预计现金流量表
      achievementList: [], // 业绩
      fileList: [],
      files: []
    }
  },
  created () {
    projptenderquoteList(this.dataList.dataId).then(res => {
      if (res.data) {
        const resData = res.data.projpContractFeesList
        this.tenderOfferList = res.data
        this.achievementList = res.data.projpContractAchievementList // 业绩切分
        this.projpContractPaymentList = res.data.projpContractPaymentList // 预计现金流量表
        this.files = res.data.fileList ? res.data.fileList : []
        this.fileList = this.files.map(item => {
          return JSON.stringify({
            fileName: item.fileName,
            url: item.url,
            fileSize: item.fileSize,
            fileId: item.fileId
          })
        })
        if (resData) {
          for (const i in resData) {
            if (resData[i].pRType === 'r') {
              this.incomeList = this.incomeList.concat(resData[i])
            } else if (resData[i].pRType === 'c') {
              this.costList = this.costList.concat(resData[i])
            } else {
              return {}
            }
          }
        } else {
          return {}
        }
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
