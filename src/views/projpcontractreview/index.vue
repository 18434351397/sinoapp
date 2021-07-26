/** *@author XuJinTao *@date 2020/5/8 9:11 *@title index */
<template>
  <div class="app-title">
    <div class="title">{{ title }}</div>
    <van-field type="text" v-model="contractList.bizId" label="销售合同编号" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.bizId }}</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否已投标备案" v-model="contractList.isRecord" readonly colon>
      <template #input>
        <div v-if="contractList.isRecord === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field v-model="contractList.chanceId" type="text" label="商机编号" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.chanceId }}</div>
      </template>
    </van-field>
    <van-field style="display: none" v-if="isCustPro" name="occupy" v-model="contractList.occupy" type="text" readonly />
    <van-field style="display: none" v-if="isCustPro" name="hasReceiveUpdate" v-model="contractList.hasReceiveUpdate" type="text" readonly />
    <van-field style="display: none" v-if="!isCustProShow" name="cbxAchievementFlow" type="text" readonly />
    <van-field style="display: none" name="cbxCashFlow" type="text" readonly />
    <van-field style="display: none" name="cbxCostDetail" type="text" readonly />
    <van-field style="display: none" v-if="!isCustProShow" name="cbxIncomeDetail" type="text" readonly />
    <van-field style="display: none" name="meetingUsers" v-model="contractList.meetingUsers" type="text" readonly />
    <van-field style="display: none" name="id" v-model="contractList.id" type="text" readonly />
    <van-field style="display: none" name="hasUpdate" v-model="contractList.hasUpdate" type="text" readonly />
    <van-field type="text" v-model="contractList.name" label="合同名称" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.name }}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.recordId" label="投标备案编号" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.recordId }}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.reqUserName" label="申请人" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.reqUserName }}</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否关联交易" v-model="contractList.isRelated" readonly colon>
      <template #input>
        <div v-if="contractList.isRelated === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field v-model="contractList.contractTypeDesc" type="text" label="合同类别" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.contractTypeDesc }}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.leadOrgName" label="主导部门" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.leadOrgName }}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.projectName" label="项目名称" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.projectName }}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.companyText" label="签订公司" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.companyText }}</div>
      </template>
    </van-field>
    <!-- <van-field type="text" v-model="contractList.projectNum" label="项目编号" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.projectNum }}</div>
      </template>
    </van-field> -->
    <van-field type="text" v-model="contractList.customerName" label="客户名称" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.customerName }}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.saleManName" label="销售人员" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.saleManName }}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.salesManOrgName" label="销售人员部门" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.salesManOrgName }}</div>
      </template>
    </van-field>
    <van-field type="text" name="pmManagerName" v-model="contractList.pmManagerName" label="项目经理" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.pmManagerName }}</div>
      </template>
    </van-field>
    <van-field type="text" name="operationStartTime" v-model="contractList.operationStartTime" label="运维开始时间" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.operationStartTime }}</div>
      </template>
    </van-field>
    <van-field type="text" name="operationEndTime" v-model="contractList.operationEndTime" label="运维结束时间" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.operationEndTime }}</div>
      </template>
    </van-field>
    <!-- <div v-if="contractList.isEndCust==='0'">
      <van-field type="text"  v-model="contractList.endCustName" label="最终客户" colon readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{contractList.endCustName}}</div>
        </template>
      </van-field>
    </div> -->
    <div>
      <div class="table-title">收入明细</div>
      <vxe-table border resizable highlight-hover-row :data="incomeList">
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="feesTypeText" title="收入类型" width="21%"></vxe-table-column>
        <vxe-table-column field="name" title="名称" width="21%"></vxe-table-column>
        <vxe-table-column field="num" title="数量" width="21%"></vxe-table-column>
        <vxe-table-column field="price" title="单价" width="21%"></vxe-table-column>
        <vxe-table-column field="amount" title="金额" width="21%"></vxe-table-column>
        <vxe-table-column field="taxRateText" title="税率" width="21%"></vxe-table-column>
        <vxe-table-column field="invoiceTypeText" title="缴费种类" width="21%"></vxe-table-column>
        <vxe-table-column field="remark" title="备注" width="21%"></vxe-table-column>
      </vxe-table>
    </div>

    <div>
      <div class="table-title">成本明细</div>
      <vxe-table border resizable highlight-hover-row :data="costList">
        <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
        <vxe-table-column field="costFeesTypeText" title="成本类型" width="21%"></vxe-table-column>
        <vxe-table-column field="name" title="名称" width="21%"></vxe-table-column>
        <vxe-table-column field="num" title="数量" width="21%"></vxe-table-column>
        <vxe-table-column field="price" title="单价" width="21%"></vxe-table-column>
        <vxe-table-column field="amount" title="金额" width="21%"></vxe-table-column>
        <vxe-table-column field="taxRateText" title="税率" width="21%"></vxe-table-column>
        <vxe-table-column field="costInvoiceTypeText" title="缴费种类" width="21%"></vxe-table-column>
        <vxe-table-column field="remark" title="备注" width="21%"></vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <div class="table-title">业绩切分</div>
      <vxe-table border resizable highlight-hover-row :data="achievementList">
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="segmentDeptText" title="切分部门" width="21%"></vxe-table-column>
        <vxe-table-column field="leadUserText" title="负责人" width="17%"></vxe-table-column>
        <vxe-table-column field="segmentP" title="切分比例" width="21%"></vxe-table-column>
        <vxe-table-column field="segmentAmount" title="切分金额" width="21%"></vxe-table-column>
        <vxe-table-column field="deptTypeDesc" title="部门类型" width="21%"></vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <div class="table-title">预计现金流量表（收/付款情况）</div>
      <vxe-table border resizable highlight-hover-row :data="paymentCondition">
        <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
        <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>
        <vxe-table-column field="onlyNum" width="160" title="唯一编号"></vxe-table-column>
        <vxe-table-column field="prTypeText" width="80" title="收付类型"></vxe-table-column>
        <vxe-table-column field="paymentDate" width="160" title="预计收/付款时间"></vxe-table-column>
        <vxe-table-column field="purchaseNo" width="100" title="采购合同号"></vxe-table-column>
        <vxe-table-column field="opposingUnit" width="100" title="对方单位"></vxe-table-column>
        <vxe-table-column field="ourUnit" width="100" title="我方单位"></vxe-table-column>
        <vxe-table-column field="paymentAmount" width="160" title="预计收/付款金额"></vxe-table-column>
        <vxe-table-column field="paymentRate" width="100" title="税率"></vxe-table-column>
        <vxe-table-column field="paymentCondition" width="200" title="预计收/付款条件"></vxe-table-column>
        <vxe-table-column field="accountSubjectText" width="100" title="计入科目"></vxe-table-column>
       <vxe-table-column field="reportName" width="160" title="验收报告名称"></vxe-table-column>
      <vxe-table-column field="hasReport" width="160" title="是否有验收报告">
        <template slot-scope="scope">
          <div v-if="scope.row.hasReport === '1'">是</div>
          <div v-if="scope.row.hasReport === '0'">否</div>
        </template>
      </vxe-table-column>
      <vxe-table-column field="reportDate" width="160" title="预计验收报告时间"></vxe-table-column>
      <vxe-table-column field="paymentName" width="100" title="款项名称"></vxe-table-column>
      <vxe-table-column field="confirmAmount" width="160" title="现金流量金额"></vxe-table-column>
      <vxe-table-column field="occupyTime" width="160" title="资金占用时间"></vxe-table-column>
      <vxe-table-column field="occupyAmount" width="160" title="资金占用成本"></vxe-table-column>
        <vxe-table-column field="remark" width="100" title="备注"></vxe-table-column>
      </vxe-table>
      <van-field type="text" v-model="occupy" label="资金占用情况" colon readonly>
        <template #input>
          <div style="text-align: left; margin: 0">
            {{ contractList.occupy ? (contractList.occupy >= 0 ? contractList.occupy : -contractList.occupy) : '0.00' }}
          </div>
        </template>
      </van-field>
    </div>

    <div class="title title-content">金额计算</div>
    <van-field type="text" v-if="isCustPro" name="receiveTotalAmount" v-model="contractList.receiveTotalAmount" label="收入合计" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.receiveTotalAmount }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isCustPro" style="display: none" name="custPro" v-model="contractList.custPro" readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.custPro }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="!isCustPro" v-model="contractList.receiveTotalAmount" label="收入合计" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.receiveTotalAmount }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isCustPro" name="rGoods" v-model="contractList.rGoods" label="商品收入" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.rGoods }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="!isCustPro" v-model="contractList.rGoods" label="商品收入" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.rGoods }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isCustPro" name="projectIncome" v-model="contractList.projectIncome" label="工程收入" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.projectIncome }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isCustPro" name="freeSftwareIncome" v-model="contractList.freeSftwareIncome" label="自有软件收入" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.freeSftwareIncome }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isCustPro" name="projectCost" v-model="contractList.projectCost" label="工程成本" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.projectCost }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isCustPro" name="interNalCost" v-model="contractList.interNalCost" label="内包成本" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.interNalCost }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isCustPro" name="bidFeesCost" v-model="contractList.bidFeesCost" label="中标服务费" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.bidFeesCost }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isCustPro" name="rService" v-model="contractList.rService" label="技术服务收入" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.rService }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="!isCustPro" v-model="contractList.rService" label="技术服务收入" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.rService }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isCustPro" name="purchasingCost" v-model="contractList.purchasingCost" label="采购成本" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.purchasingCost }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="!isCustPro" v-model="contractList.purchasingCost" label="采购成本" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.purchasingCost }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isCustPro" name="subcontractCost" v-model="contractList.subcontractCost" label="分包成本" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.subcontractCost }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="!isCustPro" v-model="contractList.subcontractCost" label="分包成本" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.subcontractCost }}</div>
      </template>
    </van-field>
    <van-field type="text" name="costTotalAmount" v-if="isCustPro" v-model="contractList.costTotalAmount" label="成本合计" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.costTotalAmount }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="!isCustPro" v-model="contractList.costTotalAmount" label="成本合计" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.costTotalAmount }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isCustPro" v-model="contractList.grossProfit" name="grossProfit" label="毛利润" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.grossProfit }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="!isCustPro" v-model="contractList.grossProfit" label="毛利润" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.grossProfit }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="!isCustPro" v-model="contractList.pretaxGrossProfitRate" label="税前毛利润率%" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.pretaxGrossProfitRate }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="!isCustPro" v-model="contractList.aftertaxGrossProfitRate" label="税后毛利润率%" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.aftertaxGrossProfitRate }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isCustPro" name="pretaxGrossProfitRate" v-model="contractList.pretaxGrossProfitRate" label="税前毛利润率%" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.pretaxGrossProfitRate }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isCustPro" name="aftertaxGrossProfitRate" v-model="contractList.aftertaxGrossProfitRate" label="税后毛利润率%" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.aftertaxGrossProfitRate }}</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否有项目" v-model="contractList.hasProject" readonly colon>
      <template #input>
        <div v-if="contractList.hasProject === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <!-- <van-field name="radio" v-if="isCustPro" class="tax" label="是否有项目">
  <template #input>
    <van-radio-group v-model="contractList.hasProject" direction="horizontal">
      <van-radio name="0">否</van-radio>
      <van-radio name="1">是</van-radio>
    </van-radio-group>
  </template>
    </van-field>-->
    <van-field type="text" v-if="isCustPro" name="projcetNo" v-model="contractList.projcetNo" label="项目号" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.projcetNo }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="!isCustPro" v-model="contractList.projcetNo" label="项目号" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.projcetNo }}</div>
      </template>
    </van-field>
    <van-field type="text" name="netProfit" v-if="isCustPro" v-model="contractList.netProfit" label="净利润" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.netProfit }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="!isCustPro" v-model="contractList.netProfit" label="净利润" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.netProfit }}</div>
      </template>
    </van-field>
    <van-field class="tax" type="text" v-if="isCustPro" name="tax" v-model="contractList.tax" placeholder="请输入税金" label="税金" colon />
    <van-field type="text" v-if="!isCustPro" v-model="contractList.tax" label="税金" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.tax }}</div>
      </template>
    </van-field>

    <van-field class="tax" type="text" v-if="isCustPro" name="adjustTax" v-model="contractList.adjustTax" placeholder="请输入税金调减" label="税金调减" colon />
    <van-field type="text" v-if="!isCustPro" v-model="contractList.adjustTax" label="税金调减" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.adjustTax }}</div>
      </template>
    </van-field>

    <van-field type="text" style="display: none" v-if="isCustPro" name="contractAmount" v-model="contractList.contractAmount" label="合同总金额" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.contractAmount }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="!isCustPro" style="display: none" v-model="contractList.contractAmount" label="合同总金额" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.contractAmount }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isCustPro" name="netProfitRate" v-model="contractList.netProfitRate" label="税后净利润率(%)" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.netProfitRate }}</div>
      </template>
    </van-field>
    <div class="taxes-btn" v-if="isCustPro">
      <van-button type="primary" @click="taxes($event, contractList.tax)">计&emsp;算</van-button>
    </div>
    <div class="title title-content">其他</div>
    <van-field type="text" v-model="contractList.linkman" label="客户联系人" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.linkman }}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.phone" label="联系人电话" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.phone }}</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否有销售合同文件" v-model="contractList.hasContract" readonly colon>
      <template #input>
        <div v-if="contractList.hasContract === '1'" style="margin: 0">是</div>
        <div v-else-if="contractList.hasContract === '0'" style="margin: 0">否</div>
        <div v-else style="margin: 0">暂无</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否为最终客户" v-model="contractList.isEndCust" readonly colon>
      <template #input>
        <div v-if="contractList.isEndCust === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>

    <van-field name="radio" label="是否签订合同" colon v-model="contractList.isContract" readonly>
      <template #input>
        <div v-if="contractList.isContract === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否是涉税合同（包含混合销售，技术开发，自有软件类合同）" colon v-model="contractList.isMixed" readonly>
      <template #input>
        <div v-if="contractList.isMixed === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否提前下单" colon v-model="contractList.hasAdvanceOrder" readonly>
      <template #input>
        <div v-if="contractList.hasAdvanceOrder === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否提前发货" colon v-model="contractList.hasAdvanceSend" readonly>
      <template #input>
        <div v-if="contractList.hasAdvanceSend === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field
      v-if="isCustPro"
      readonly
      clickable
      right-icon="arrow-down"
      label="客户属性"
      colon
      :value="value"
      placeholder="请选择"
      :rules="[{ required: hasRequired, message: '客户属性是必选字段' }]"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker show-toolbar :columns="custProList" @cancel="showPicker = false" @confirm="onConfirm" />
    </van-popup>
    <van-field readonly v-if="isCustProShow" label="客户属性" colon v-model="contractList.custProDesc">
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.custProDesc }}</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否合作项目" colon v-model="contractList.hasCooperation" readonly>
      <template #input>
        <div v-if="contractList.hasCooperation === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.expectedSignDate" label="预计签订时间" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.expectedSignDate }}</div>
      </template>
    </van-field>
    <van-field v-model="contractList.remark" rows="2" name="remark" autosize label="备注" type="textarea" readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.remark }}</div>
      </template>
    </van-field>
    <div>
      <div class="table-title">销售合同文件上传</div>
      <vxe-table border resizable highlight-hover-row :data="contractFileList">
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
      <div class="table-title">项目评分模型</div>
      <vxe-table border resizable highlight-hover-row :data="projectScoringFileList">
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
      <van-field type="text" v-model="contractList.score" label="评分" colon readonly>
        <template #input>
          <div style="text-align: left; margin: 0">{{ contractList.score }}</div>
        </template>
      </van-field>
    </div>
    <div>
      <div class="table-title">不签合同说明</div>
      <vxe-table border resizable highlight-hover-row :data="noSignFileList">
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
      <div class="table-title">未签合同说明</div>
      <vxe-table border resizable highlight-hover-row :data="explainFileList">
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
import { projpcontractreviewList, custPro } from '../../api/customer'
import { formProjpprojectinfoformApi, proProjpprojectinfoApi } from '../../api/contract'
import { Toast } from 'vant'

export default {
  name: 'index',
  data() {
    return {
      isCustPro: false, // 默认不显示客户选择属性 -- 部门
      isCustProShow: false, // 默认不显示--经理
      hasRequired: true, // 客户属性是否必填
      value: null,
      showPicker: false,
      custProList: [],
      dataList: this.$route.query,
      title: '销售合同评审信息',
      contractList: [], // 整体信息
      incomeList: [], // 收入
      costList: [], // 成本
      achievementList: [], // 业绩
      paymentCondition: [], // 预计现金流量表
      contractFileList: [], // 销售合同上传
      projectScoringFileList: [], // 项目评分
      noSignFileList: [], // 不签名合同说明
      explainFileList: [], // 未签合同说明
      fileConcat: [], // 整合所有的 file
      fileList: [], // 提交 file 处理 ,去除 null , 最后的结果
      occupy: '0.00'
    }
  },
  created() {
    // 判断当前节点是否是会签中的节点
    if (this.dataList.currTaskDefinitionKey === 'BusiAnalysis' && this.dataList.statusDes === '会签中' && this.dataList.currFlowName === '合同评审审批') {
      this.hasRequired = false
    }

    projpcontractreviewList(this.dataList.dataId).then(res => {
      if (res.data) {
        const resData = res.data.projpContractFeesList
        this.contractList = res.data // 合同信息
        this.occupy = res.data.occupy ? (res.data.occupy >= 0 ? res.data.occupy : -res.data.occupy) : '0.00'
        this.achievementList = res.data.projpContractAchievementList // 业绩切分
        this.paymentCondition = res.data.paymentCondition // 预计现金流量表
        this.contractFileList = res.data.contractFileList
        this.projectScoringFileList = res.data.projectScoringFileList
        this.noSignFileList = res.data.noSignFileList
        this.explainFileList = res.data.explainFileList
        this.value = res.data.custProDesc
        this.fileConcat = this.fileConcat.concat(res.data.contractFileList, res.data.projectScoringFileList, res.data.noSignFileList, res.data.explainFileList)
        for (const file of this.fileConcat) {
          if (file) {
            this.fileList = this.fileList.concat(
              JSON.stringify({
                fileName: file.fileName,
                url: file.url,
                fileSize: file.fileSize,
                fileId: file.fileId
              })
            )
          } else {
          }
        }
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
      } else {
        throw new '数据异常'()
      }
    })
    // 特殊处理
    const user = this.dataList
    if (user.currTaskDefinitionName === '运营管理部' && user.currTaskDefinitionKey === 'BusiAnalysis' && user.currFlowId === 'ContrReviewApprove') {
      this.isCustPro = true
      custPro().then(res => {
        this.custProList = res.data.custPro.map(item => {
          return {
            custPro: item.attribute,
            code: item.code,
            coded: item.coded,
            createBy: item.createBy,
            deleted: item.deleted,
            dictionarySubjecName: item.dictionarySubjecName,
            dictionarySubjectId: item.dictionarySubjectId,
            id: item.id,
            invalid: item.invalid,
            lastModifiedBy: item.lastModifiedBy,
            lastModifiedDate: item.lastModifiedDate,
            text: item.nameChs,
            nameEng: item.nameEng,
            rank: item.rank,
            serialNo: item.serialNo,
            upState: item.upState
          }
        })
      })
    } else if (
      user.currTaskDefinitionName === '运营管理部经理' &&
      user.currTaskDefinitionKey === 'BusiAnalysisManager' &&
      user.currFlowId === 'ContrReviewApprove'
    ) {
      this.isCustProShow = true
    } else {
      return {}
    }
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
    },
    onConfirm(value) {
      this.value = value.text
      this.contractList.custPro = value.custPro
      this.showPicker = false
    },

    // 税金
    taxes(e, value, adjustTax) {
      e.preventDefault()
      const rate = this.contractList
      if (value) {
        const num = [0, '0', '0.0', '0.00', ' ']
        // 税前
        const preGrossProfit = Number(rate.contractAmount) - Number(rate.costTotalAmount) - Number(rate.occupy)
        rate.pretaxGrossProfitRate =
          num.indexOf(rate.contractAmount) === -1 && rate.contractAmount ? ((Number(preGrossProfit) / Number(rate.contractAmount)) * 100).toFixed(2) : '0.00'

        // 毛利润
        rate.grossProfit = (Number(rate.contractAmount) - Number(rate.costTotalAmount) - Number(value) - -Number(rate.occupy) - Number(adjustTax)).toFixed(2)

        // 税后 毛利润
        rate.aftertaxGrossProfitRate =
          num.indexOf(rate.contractAmount) === -1 && rate.contractAmount ? ((rate.grossProfit / rate.contractAmount) * 100).toFixed(2) : '0.00'

        // 净利润
        if (rate.projectNo) {
          formProjpprojectinfoformApi(rate.projcetNo).then(response => {
            if (response.data) {
              const status = response.data ? response.data.status : ''
              if (status === '2' || response.data === null) {
                proProjpprojectinfoApi(rate.projcetNo).then(res => {
                  if (res.data.remark === '200' && res.resultCode === '200') {
                    rate.netProfit = 0 - (Number(res.data.cPersion) + Number(res.data.creimbursement))
                  } else {
                    throw new `${res.data.remark}`()
                  }
                })
              } else {
                rate.netProfit = 0 - (Number(response.cPersion) + Number(response.creimbursement))
              }
            } else {
              throw new '数据异常'()
            }
          })
        } else {
          rate.netProfit = rate.grossProfit
        }
      } else {
        Toast('税金不能为空')
      }
    }
  }
}
</script>
<style lang="less">
.taxes-btn {
  padding: 16px;
  background: #fff;
  button.van-button {
    width: 20%;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    background: #1989fa;
    // box-shadow: 0px 0px 2px 1px #1989faa6;
    border: none;
  }
}
</style>
