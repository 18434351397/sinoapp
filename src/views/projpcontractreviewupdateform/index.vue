<template>
  <div class="app-title">
    <van-field style="display: none" name="cbxAchievementFlow" type="text" readonly />
    <van-field style="display: none" name="cbxAchievementFlowBefore" type="text" readonly />
    <van-field style="display: none" name="cbxCashFlow" type="text" readonly />
    <van-field style="display: none" name="cbxCashFlowBefore" type="text" readonly />
    <van-field style="display: none" name="cbxCostDetail" type="text" readonly />
    <van-field style="display: none" name="cbxCostDetailBefore" type="text" readonly />
    <van-field style="display: none" name="cbxIncomeDetail" type="text" readonly />
    <van-field style="display: none" name="cbxIncomeDetailBefore" type="text" readonly />

    <van-field style="display: none" name="hasUpdate" v-model="projpcontractreviewupdateform.hasUpdate" type="text" readonly />
    <van-field style="display: none" name="id" v-model="projpcontractreviewupdateform.id" type="text" readonly />
    <van-field style="display: none" name="meetingUsers" v-model="projpcontractreviewupdateform.meetingUsers" type="text" readonly />
    <div class="title">变更内容</div>
    <van-field type="text" v-model="projpcontractreviewupdateform.titleZhi" colon readonly />
    <div class="title">变更前基本信息</div>
    <van-field type="text" v-model="projpcontractreviewupdateform.bizId" label="合同号" colon readonly />
    <van-field name="radio" label="是否已投标备案" v-model="projpcontractreviewupdateform.isRecord" readonly colon>
      <template #input>
        <div v-if="projpcontractreviewupdateform.isRecord === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field v-model="projpcontractreviewupdateform.chanceId" type="text" label="商机编号" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.name" label="合同名称" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.recordId" label="投标备案编号" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.reqUserName" label="申请人" colon readonly />
    <van-field name="radio" label="是否关联交易" v-model="projpcontractreviewupdateform.isRelated" readonly colon>
      <template #input>
        <div v-if="projpcontractreviewupdateform.isRelated === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field v-model="projpcontractreviewupdateform.contractTypeDesc" type="text" label="合同类别" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.leadOrgName" label="主导部门" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.projectName" label="项目名称" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.companyText" label="签订公司" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.customerName" label="客户名称" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.saleManName" label="销售人员" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.salesManOrgName" label="销售人员部门" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.pmManagerName" label="项目经理" colon readonly />
    <van-field type="text" style="display: none" name="his_pmManagerName" v-model="projpcontractreviewupdateform.pmManagerName" readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.operationStartTime" label="运维开始时间" colon readonly />
    <van-field type="text" style="display: none" name="his_operationStartTime" v-model="projpcontractreviewupdateform.operationStartTime" readonly />
    <van-field type="text" style="display: none" name="his_operationEndTime" v-model="projpcontractreviewupdateform.operationEndTime" readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.operationEndTime" label="运维结束时间" colon readonly />
    <!-- 变更后基本信息 -->
    <div class="title">变更后基本信息</div>
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.bizId" label="合同号" colon readonly />
    <van-field name="radio" label="是否已投标备案" v-model="affterProjpcontractreviewupdateform.isRecord" readonly colon>
      <template #input>
        <div v-if="affterProjpcontractreviewupdateform.isRecord === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field v-model="affterProjpcontractreviewupdateform.chanceId" type="text" label="商机编号" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.name" label="合同名称" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.recordId" label="投标备案编号" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.reqUserName" label="申请人" colon readonly />
    <van-field name="radio" label="是否关联交易" v-model="affterProjpcontractreviewupdateform.isRelated" readonly colon>
      <template #input>
        <div v-if="affterProjpcontractreviewupdateform.isRelated === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field v-model="affterProjpcontractreviewupdateform.contractTypeDesc" type="text" label="合同类别" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.leadOrgName" label="主导部门" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.projectName" label="项目名称" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.companyText" label="签订公司" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.customerName" label="客户名称" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.saleManName" label="销售人员" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.salesManOrgName" label="销售人员部门" colon readonly />
    <van-field type="text" name="pmManagerName" v-model="affterProjpcontractreviewupdateform.pmManagerName" label="项目经理" colon readonly />
    <van-field type="text" name="operationStartTime" v-model="affterProjpcontractreviewupdateform.operationStartTime" label="运维开始时间" colon readonly />
    <van-field type="text" name="operationEndTime" v-model="affterProjpcontractreviewupdateform.operationEndTime" label="运维结束时间" colon readonly />
    <div>
      <div class="table-title">变更前收入明细</div>
      <el-table border :data="incomeList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="收入类型" prop="feesTypeText"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="数量" prop="num"></el-table-column>
        <el-table-column label="单价" prop="price"></el-table-column>
        <el-table-column label="金额" prop="amount"></el-table-column>
        <el-table-column label="税率" prop="taxRateText"></el-table-column>
        <el-table-column label="缴税类型" prop="invoiceTypeText"></el-table-column>
        <el-table-column label="备注" prop="remark"></el-table-column>
      </el-table>
      <van-field type="text" v-model="projpcontractreviewupdateform.contractAmount" label="金额合计" colon readonly />
    </div>
    <!-- 变更之后 变更后收入明细-->
    <div>
      <div class="table-title">变更后收入明细</div>
      <el-table border :data="afterIncomeList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="收入类型" prop="feesTypeText"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="数量" prop="num"></el-table-column>
        <el-table-column label="单价" prop="price"></el-table-column>
        <el-table-column label="金额" prop="amount"></el-table-column>
        <el-table-column label="税率" prop="taxRateText"></el-table-column>
        <el-table-column label="缴税类型" prop="invoiceTypeText"></el-table-column>
        <el-table-column label="备注" prop="remark"></el-table-column>
      </el-table>
      <van-field type="text" v-model="affterProjpcontractreviewupdateform.contractAmount" label="金额合计" colon readonly />
    </div>
    <!-- 变更之前成本明细 -->
    <div>
      <div class="table-title">变更前成本明细</div>
      <el-table border :data="costList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="成本明细" prop="costFeesTypeText"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="数量" prop="num"></el-table-column>
        <el-table-column label="单价" prop="price"></el-table-column>
        <el-table-column label="金额" prop="amount"></el-table-column>
        <el-table-column label="税率" prop="taxRateText"></el-table-column>
        <el-table-column label="缴税类型" prop="costInvoiceTypeText"></el-table-column>
        <el-table-column label="备注" prop="remark"></el-table-column>
      </el-table>
      <van-field type="text" v-model="projpcontractreviewupdateform.costTotalAmount" label="金额合计" colon readonly />
    </div>
    <!-- 变更之后 变更后成本明细 -->
    <div>
      <div class="table-title">变更后成本明细</div>
      <el-table border :data="afterCostList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="成本明细" prop="costFeesTypeText"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="数量" prop="num"></el-table-column>
        <el-table-column label="单价" prop="price"></el-table-column>
        <el-table-column label="金额" prop="amount"></el-table-column>
        <el-table-column label="税率" prop="taxRateText"></el-table-column>
        <el-table-column label="缴税类型" prop="costInvoiceTypeText"></el-table-column>
        <el-table-column label="备注" prop="remark"></el-table-column>
      </el-table>
      <van-field type="text" v-model="affterProjpcontractreviewupdateform.costTotalAmount" label="金额合计" colon readonly />
    </div>
    <!-- 变更之前  业绩切分-->
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
    <!-- 变更之后 业绩切分 -->
    <div>
      <div class="table-title">业绩切分</div>
      <el-table border :data="afterAchievementList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="切分部门" prop="segmentDeptText"></el-table-column>
        <el-table-column label="负责人" prop="leadUserText"></el-table-column>
        <el-table-column label="切分比例" prop="segmentP"></el-table-column>
        <el-table-column label="切分金额" prop="segmentAmount"></el-table-column>
        <el-table-column label="部门类型" prop="deptTypeDesc"></el-table-column>
      </el-table>
    </div>
    <!-- 变更前预计现金流 -->
    <div>
      <div class="table-title">变更前预计现金流量表（收/付款情况）</div>
      <el-table border :data="paymentCondition" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="收付类型" prop="prTypeText"></el-table-column>
        <el-table-column label="预计收/付款时间" prop="paymentDate"></el-table-column>
        <el-table-column label="采购合同号" prop="purchaseNo"></el-table-column>
        <el-table-column label="预计收/付款金额" prop="paymentAmount"></el-table-column>
        <el-table-column label="税率" prop="paymentRate"></el-table-column>
        <el-table-column label="对方单位" prop="opposingUnit"></el-table-column>
        <el-table-column label="我方单位" prop="ourUnit"></el-table-column>
        <el-table-column label="预计收/付款条件" prop="paymentCondition"></el-table-column>
        <el-table-column label="计入科目" prop="accountSubjectText"></el-table-column>
        <el-table-column label="验收报告名称" prop="reportName"></el-table-column>
        <el-table-column label="现金流量金额" prop="confirmAmount"></el-table-column>
        <el-table-column label="是否有验收报告" prop="hasReport"></el-table-column>
        <el-table-column label="预计验收报告时间" prop="reportDate"></el-table-column>
        <el-table-column label="款项名称" prop="paymentName"></el-table-column>
        <el-table-column label="资金占用时间" prop="occupyTime"></el-table-column>
        <el-table-column label="资金占用成本" prop="occupyAmount"></el-table-column>
        <el-table-column label="备注" prop="remark"></el-table-column>
      </el-table>
      <van-field type="text" v-model="projpcontractreviewupdateform.occupy" label="资金占用情况" colon readonly />
    </div>
    <!-- 变更后预计现金流 -->
    <div>
      <div class="table-title">变更后预计现金流量表（收/付款情况）</div>
      <el-table border :data="afterPaymentCondition" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="收付类型" prop="prTypeText"></el-table-column>
        <el-table-column label="预计收/付款时间" prop="paymentDate"></el-table-column>
        <el-table-column label="采购合同号" prop="purchaseNo"></el-table-column>
        <el-table-column label="预计收/付款金额" prop="paymentAmount"></el-table-column>
        <el-table-column label="税率" prop="paymentRate"></el-table-column>
        <el-table-column label="对方单位" prop="opposingUnit"></el-table-column>
        <el-table-column label="我方单位" prop="ourUnit"></el-table-column>
        <el-table-column label="预计收/付款条件" prop="paymentCondition"></el-table-column>
        <el-table-column label="计入科目" prop="accountSubjectText"></el-table-column>
        <el-table-column label="验收报告名称" prop="reportName"></el-table-column>
        <el-table-column label="现金流量金额" prop="confirmAmount"></el-table-column>
        <el-table-column label="是否有验收报告" prop="hasReport"></el-table-column>
        <el-table-column label="预计验收报告时间" prop="reportDate"></el-table-column>
        <el-table-column label="款项名称" prop="paymentName"></el-table-column>
        <el-table-column label="资金占用时间" prop="occupyTime"></el-table-column>
        <el-table-column label="资金占用成本" prop="occupyAmount"></el-table-column>
        <el-table-column label="备注" prop="remark"></el-table-column>
      </el-table>
      <van-field type="text" v-model="affterProjpcontractreviewupdateform.occupy" label="资金占用情况" colon readonly />
    </div>
    <!-- 变更前金额计算 -->
    <div class="title">变更前金额计算</div>
    <van-field type="text" v-model="projpcontractreviewupdateform.receiveTotalAmount" label="收入合计" colon readonly />
    <van-field type="text" label="商品收入" colon readonly />
    <van-field type="text" name="projectIncome" v-model="projpcontractreviewupdateform.projectIncome" label="工程收入" colon readonly />
    <van-field type="text" name="freeSftwareIncome" v-model="projpcontractreviewupdateform.freeSftwareIncome" label="自有软件收入" colon readonly />
    <van-field type="text" name="interNalCost" v-model="projpcontractreviewupdateform.interNalCost" label="内包成本" colon readonly />
    <van-field type="text" name="bidFeesCost" v-model="projpcontractreviewupdateform.bidFeesCost" label="中标服务费" colon readonly />
    <van-field type="text" name="projectCost" v-model="projpcontractreviewupdateform.projectCost" label="工程成本" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.rService" label="技术服务收入" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.purchasingCost" label="采购成本" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.subcontractCost" label="分包成本" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.costTotalAmount" label="成本合计" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.grossProfit" label="毛利润" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.pretaxGrossProfitRate" label="税前毛利润率%" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.aftertaxGrossProfitRate" label="税后毛利润率%" colon readonly />
    <van-field name="radio" label="是否有项目" v-model="projpcontractreviewupdateform.hasProject" readonly colon>
      <template #input>
        <div v-if="projpcontractreviewupdateform.hasProject === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field type="text" v-model="projpcontractreviewupdateform.projcetNo" label="项目号" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.netProfit" label="净利润" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.tax" name="tax" label="税金" colon readonly />
    <van-field type="text" style="display: none" v-model="projpcontractreviewupdateform.contractAmount" label="合同总金额" colon readonly />
    <van-field type="text" name="grossProfitMargin" v-model="projpcontractreviewupdateform.grossProfitMargin" label="毛利润率差值" colon readonly />
    <van-field type="text" name="netProfitMargin" v-model="projpcontractreviewupdateform.netProfitMargin" label="净利润率差值" colon readonly />
    <van-field type="text" name="netProfitRate" v-model="projpcontractreviewupdateform.netProfitRate" label="税后净利润率(%)" colon readonly />
    <!-- 变更后金额计算 -->
    <div class="title">变更后金额计算</div>
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.receiveTotalAmount" label="收入合计" colon readonly />
    <van-field type="text" label="商品收入" colon readonly />
    <van-field type="text" name="projectIncome" v-model="affterProjpcontractreviewupdateform.projectIncome" label="工程收入" colon readonly />
    <van-field type="text" name="freeSftwareIncome" v-model="affterProjpcontractreviewupdateform.freeSftwareIncome" label="自有软件收入" colon readonly />
    <van-field type="text" name="interNalCost" v-model="affterProjpcontractreviewupdateform.interNalCost" label="内包成本" colon readonly />
    <van-field type="text" name="bidFeesCost" v-model="affterProjpcontractreviewupdateform.bidFeesCost" label="中标服务费" colon readonly />
    <van-field type="text" name="projectCost" v-model="affterProjpcontractreviewupdateform.projectCost" label="工程成本" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.rService" label="技术服务收入" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.purchasingCost" label="采购成本" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.subcontractCost" label="分包成本" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.costTotalAmount" label="成本合计" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.grossProfit" label="毛利润" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.pretaxGrossProfitRate" label="税前毛利润率%" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.aftertaxGrossProfitRate" label="税后毛利润率%" colon readonly />
    <van-field name="radio" label="是否有项目" v-model="affterProjpcontractreviewupdateform.hasProject" readonly colon>
      <template #input>
        <div v-if="affterProjpcontractreviewupdateform.hasProject === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.projcetNo" label="项目号" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.netProfit" label="净利润" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.tax" label="税金" colon readonly />
    <van-field type="text" style="display: none" v-model="affterProjpcontractreviewupdateform.contractAmount" label="合同总金额" colon readonly />
    <van-field type="text" name="grossProfitMargin" v-model="affterProjpcontractreviewupdateform.grossProfitMargin" label="毛利润率差值" colon readonly />
    <van-field type="text" name="netProfitMargin" v-model="affterProjpcontractreviewupdateform.netProfitMargin" label="净利润率差值" colon readonly />
    <van-field type="text" name="netProfitRate" v-model="affterProjpcontractreviewupdateform.netProfitRate" label="税后净利润率(%)" colon readonly />

    <!-- 变更前其他信息 -->
    <div class="title">变更前其他信息</div>
    <van-field type="text" v-model="projpcontractreviewupdateform.linkman" label="客户联系人" colon readonly />
    <van-field type="text" v-model="projpcontractreviewupdateform.phone" label="联系人电话" colon readonly />
    <van-field name="radio" label="是否有销售合同文件" v-model="projpcontractreviewupdateform.hasContract" readonly colon>
      <template #input>
        <div v-if="projpcontractreviewupdateform.hasContract === '1'" style="margin: 0">是</div>
        <div v-else-if="projpcontractreviewupdateform.hasContract === '0'" style="margin: 0">否</div>
        <div v-else style="margin: 0">暂无</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否为最终客户" v-model="projpcontractreviewupdateform.isEndCust" readonly colon>
      <template #input>
        <div v-if="projpcontractreviewupdateform.isEndCust === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>

    <van-field name="radio" label="是否签订合同" colon v-model="projpcontractreviewupdateform.isContract" readonly>
      <template #input>
        <div v-if="projpcontractreviewupdateform.isContract === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否是涉税合同（包含混合销售，技术开发，自有软件类合同）" colon v-model="projpcontractreviewupdateform.isMixed" readonly>
      <template #input>
        <div v-if="projpcontractreviewupdateform.isMixed === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否提前下单" colon v-model="projpcontractreviewupdateform.hasAdvanceOrder" readonly>
      <template #input>
        <div v-if="projpcontractreviewupdateform.hasAdvanceOrder === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否提前发货" colon v-model="projpcontractreviewupdateform.hasAdvanceSend" readonly>
      <template #input>
        <div v-if="projpcontractreviewupdateform.hasAdvanceSend === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否合作项目" colon v-model="projpcontractreviewupdateform.hasCooperation" readonly>
      <template #input>
        <div v-if="projpcontractreviewupdateform.hasCooperation === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field type="text" v-model="projpcontractreviewupdateform.signDate" label="预计签订时间" colon readonly />
    <!-- 变更后其他信息 -->
    <div class="title">变更后其他信息</div>
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.linkman" label="客户联系人" colon readonly />
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.phone" label="联系人电话" colon readonly />
    <van-field name="radio" label="是否有销售合同文件" v-model="affterProjpcontractreviewupdateform.hasContract" readonly colon>
      <template #input>
        <div v-if="affterProjpcontractreviewupdateform.hasContract === '1'" style="margin: 0">是</div>
        <div v-else-if="affterProjpcontractreviewupdateform.hasContract === '0'" style="margin: 0">否</div>
        <div v-else style="margin: 0">暂无</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否为最终客户" v-model="affterProjpcontractreviewupdateform.isEndCust" readonly colon>
      <template #input>
        <div v-if="affterProjpcontractreviewupdateform.isEndCust === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>

    <van-field name="radio" label="是否签订合同" colon v-model="affterProjpcontractreviewupdateform.isContract" readonly>
      <template #input>
        <div v-if="affterProjpcontractreviewupdateform.isContract === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field
      name="radio"
      label="是否是涉税合同（包含混合销售，技术开发，自有软件类合同）"
      colon
      v-model="affterProjpcontractreviewupdateform.isMixed"
      readonly
    >
      <template #input>
        <div v-if="affterProjpcontractreviewupdateform.isMixed === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否提前下单" colon v-model="affterProjpcontractreviewupdateform.hasAdvanceOrder" readonly>
      <template #input>
        <div v-if="affterProjpcontractreviewupdateform.hasAdvanceOrder === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否提前发货" colon v-model="affterProjpcontractreviewupdateform.hasAdvanceSend" readonly>
      <template #input>
        <div v-if="affterProjpcontractreviewupdateform.hasAdvanceSend === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否合作项目" colon v-model="affterProjpcontractreviewupdateform.hasCooperation" readonly>
      <template #input>
        <div v-if="affterProjpcontractreviewupdateform.hasCooperation === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field type="text" v-model="affterProjpcontractreviewupdateform.signDate" label="预计签订时间" colon readonly />
    <!-- 附件列表 -->
    <div>
      <div class="table-title">销售合同文件上传</div>
      <van-tabs v-model="active">
        <van-tab title="变更前">
          <el-table border :data="contractFileList" style="width: 100%">
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
        </van-tab>
        <van-tab title="变更后">
          <el-table border :data="afterContractFileList" style="width: 100%">
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
        </van-tab>
      </van-tabs>
    </div>
    <!-- 项目评分模型 -->
    <div>
      <div class="table-title">项目评分模型</div>
      <van-tabs v-model="active2">
        <van-tab title="变更前">
          <el-table border :data="projectScoringFileList" style="width: 100%">
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
          <van-field left-icon="star" type="text" v-model="projpcontractreviewupdateform.score" label="评分" colon readonly />
        </van-tab>
        <van-tab title="变更后">
          <el-table border :data="afterProjectScoringFileList" style="width: 100%">
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
          <van-field left-icon="star" type="text" v-model="affterProjpcontractreviewupdateform.score" label="评分" colon readonly />
        </van-tab>
      </van-tabs>
    </div>
    <!-- 不签合同说明 -->
    <div>
      <div class="table-title">不签合同说明</div>
      <van-tabs v-model="active3">
        <van-tab title="变更前">
          <el-table border :data="noSignFileList" style="width: 100%">
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
        </van-tab>
        <van-tab title="变更后">
          <el-table border :data="afterNoSignFileList" style="width: 100%">
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
        </van-tab>
      </van-tabs>
    </div>
    <!-- 未签合同说明 -->
    <div>
      <div class="table-title">未签合同说明</div>
      <van-tabs v-model="active4">
        <van-tab title="变更前">
          <el-table border :data="explainFileList" style="width: 100%">
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
        </van-tab>
        <van-tab title="变更后">
          <el-table border :data="afterExplainFileList" style="width: 100%">
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
        </van-tab>
      </van-tabs>
    </div>
    <van-field v-model="projpcontractreviewupdateform.remark" rows="2" name="remark" autosize label="备注" type="textarea" readonly />
  </div>
</template>

<script>
import { projpcontractreviewupdateformApi } from '../../api/contract'
export default {
  name: 'index',
  data() {
    return {
      active: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      dataList: this.$route.query,
      fileList: [],
      fileIdList: [],
      files: [], // 循环列表
      incomeList: [], // 收入明细
      costList: [], // 支出明细
      achievementList: [], // 业绩切分
      paymentCondition: [], // 预计现金流
      contractFileList: [], // 销售合同附件
      projectScoringFileList: [], // 评分附件
      noSignFileList: [], // 不签合同说明附件列表
      explainFileList: [], // 未签合同说明附件列表
      afterExplainFileList: [],
      afterNoSignFileList: [],
      afterProjectScoringFileList: [],
      afterContractFileList: [],
      afterPaymentCondition: [],
      afterAchievementList: [],
      afterIncomeList: [],
      afterCostList: [],
      projpcontractreviewupdateform: [], // 变更之前
      affterProjpcontractreviewupdateform: [] // 变更之后
    }
  },
  created() {
    projpcontractreviewupdateformApi(this.dataList.dataId).then(res => {
      if (res.data) {
        const updateXin = res.data.updateType.split(',')
        let zhi = []
        updateXin.map(item => {
          if (item === '1') {
            zhi = zhi.concat('基本信息')
          } else if (item === '2') {
            zhi = zhi.concat('主导部门')
          } else if (item === '3') {
            zhi = zhi.concat('合同文本')
          } else if (item === '4') {
            zhi = zhi.concat('成本明细')
          } else if (item === '5') {
            zhi = zhi.concat('收入明细')
          } else if (item === '6') {
            zhi = zhi.concat('业绩切分')
          } else if (item === '7') {
            zhi = zhi.concat('预计现金流量表')
          }
        })
        res.data.titleZhi = zhi.toString()
        this.affterProjpcontractreviewupdateform = res.data.projpContractReviewHistoryVO
        this.projpcontractreviewupdateform = res.data
        this.achievementList = res.data.projpContractAchievementList // 业绩切分
        this.afterAchievementList = res.data.projpContractReviewHistoryVO.projpContractAchievementHistoryList
        this.paymentCondition = res.data.paymentCondition // 预计现金流量表
        this.afterPaymentCondition = res.data.projpContractReviewHistoryVO.projpContractPaymentHistoryList
        const resData = res.data.projpContractFeesList
        const afterResData = res.data.projpContractReviewHistoryVO.projpContractFeesHistoryList
        // 收入和支出数据
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
        }
        if (afterResData) {
          for (const i in afterResData) {
            if (afterResData[i].pRType === 'r') {
              this.afterIncomeList = this.afterIncomeList.concat(afterResData[i])
            } else if (afterResData[i].pRType === 'c') {
              this.afterCostList = this.afterCostList.concat(afterResData[i])
            } else {
              return {}
            }
          }
        } else {
        }
      }
    })
  },
  methods: {
    // 处理序号
    indexMethods(index) {
      return index + 1
    },
    // 下载调用方法
    handleClick(data) {
      console.log(data.url)
      this.downLoad(data)
    }
  }
}
</script>
