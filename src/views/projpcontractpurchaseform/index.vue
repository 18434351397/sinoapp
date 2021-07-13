<template>
  <div class="app-title">
    <div class="title">采购合同评审信息</div>
    <van-field
      style="display: none;"
      name="bizId"
      v-model="projpcontractpurchaseList.bizId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="id"
      v-model="projpcontractpurchaseList.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="company"
      v-model="projpcontractpurchaseList.company"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reviewCompany"
      v-model="projpcontractpurchaseList.company"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="contractType"
      v-model="projpcontractpurchaseList.contractType"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="hasPno"
      v-model="projpcontractpurchaseList.hasPno"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="isSingle"
      v-model="projpcontractpurchaseList.isSingle"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="projpcontractpurchaseList.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="ownDeptId"
      v-model="projpcontractpurchaseList.ownDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="payType"
      v-model="projpcontractpurchaseList.payType"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="pmManager"
      v-model="projpcontractpurchaseList.pmManager"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="purchaseType"
      v-model="projpcontractpurchaseList.purchaseType"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="supplierId"
      v-model="projpcontractpurchaseList.supplierId"
      type="text"
      readonly
    />
    <van-field
      type="text"
      name="purchaseNo"
      v-model="projpcontractpurchaseList.purchaseNo"
      label="采购合同编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.purchaseNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="projectNo"
      v-model="projpcontractpurchaseList.projectNo"
      label="立项号/合同号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.projectNo ? '立项号' : '合同号'}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="isHaveAgreement"
      label="是否有框架协议"
      v-model="projpcontractpurchaseList.isHaveAgreement"
      readonly
      colon
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.isHaveAgreement === '0' ? '否' : '是'}}</div>
      </template>
    </van-field>

    <van-field
      type="text"
      v-if="projpcontractpurchaseList.isHaveAgreement === '1'"
      name="agreementNo"
      label="协议编号"
      v-model="projpcontractpurchaseList.agreementNo"
      readonly
      colon
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.agreementNo}}</div>
      </template>
    </van-field>

    <van-field
      type="text"
      name="companyText"
      v-model="projpcontractpurchaseList.companyText"
      label="涉及公司"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.companyText}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="pmManagerName"
      v-model="projpcontractpurchaseList.pmManagerName"
      label="项目经理"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.pmManagerName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="isSingleName"
      label="是否单一来源采购"
      v-model="projpcontractpurchaseList.isSingleName"
      readonly
      colon
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.isSingleName}}</div>
      </template>
    </van-field>

    <van-field
      type="text"
      v-if="projpcontractpurchaseList.isSingle === '1'"
      name="singelReasonDesc"
      v-model="projpcontractpurchaseList.singelReasonDesc"
      label="单一来源原因"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.singelReasonDesc}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="supplierName"
      v-model="projpcontractpurchaseList.supplierName"
      label="供应商名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.supplierName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="payTypeName"
      v-model="projpcontractpurchaseList.payTypeName"
      label="支付方式"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.payTypeName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="purchaseTypeName"
      v-model="projpcontractpurchaseList.purchaseTypeName"
      label="采购类型"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.purchaseTypeName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="startCondition"
      v-model="projpcontractpurchaseList.startCondition"
      label="质保期起始条件"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.startCondition}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="conditioNum"
      v-model="projpcontractpurchaseList.conditioNum"
      label="质保期(月)"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.conditioNum}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="ownDeptIdName"
      v-model="projpcontractpurchaseList.ownDeptIdName"
      label="主导部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.ownDeptIdName}}</div>
      </template>
    </van-field>

    <van-field
      type="text"
      name="purchaseAmount"
      v-model="projpcontractpurchaseList.purchaseAmount"
      label="采购金额"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.purchaseAmount}}</div>
      </template>
    </van-field>


    <van-field
      type="text"
      name="contractPay"
      v-if="!projpcontractpurchaseList.projectNo"
      v-model="projpcontractpurchaseList.contractPay"
      label="合同付款条件"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.contractPay}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="remark"
      v-model="projpcontractpurchaseList.remark"
      label="说明"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.remark}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="projpcontractpurchaseList.remarkChange && projpcontractpurchaseList.changePurchaseId"
      name="remarkChange"
      v-model="projpcontractpurchaseList.remarkChange"
      label="变更说明"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.remarkChange}}</div>
      </template>
    </van-field>
    <!--风控法规部的所有信息-->
    <!--<van-field
      type="text"
      v-if="dataList.onlyId === 'Done'
       && projpcontractpurchaseList.projectNo === ''
       && dataList.currTaskDefinitionName === '风控法规部'"
      name="isPreOrderDesc"
      v-model="projpcontractpurchaseList.isPreOrderDesc"
      label="未签合同提前下单承诺"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.isPreOrderDesc}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="projpcontractpurchaseList.projectNo === ''
       && dataList.currTaskDefinitionName === '风控法规部'
       && projpcontractpurchaseList.isPreOrderDesc === '冻结现金流'
       && dataList.onlyId === 'Done'
"
      name="cashMoney"
      v-model="projpcontractpurchaseList.cashMoney"
      label="冻结现金流金额"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.cashMoney}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="dataList.onlyId === 'Done'
       && projpcontractpurchaseList.projectNo === ''
       && dataList.currTaskDefinitionName === '风控法规部'"
      v-model="isPrePayMoreDesc"
      label="是否预付超30%"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{isPrePayMoreDesc}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="projpcontractpurchaseList.projectNo === ''
       && dataList.currTaskDefinitionName === '风控法规部'
       && projpcontractpurchaseList.prePayMore === '1'
       && dataList.onlyId === 'Done'
"
      v-model="projpcontractpurchaseList.prePayMoreNum"
      label="预付超30%金额"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.cashMoney}}</div>
      </template>
    </van-field>

    <van-field
      type="text"
      v-if="dataList.onlyId === 'Done'
       && projpcontractpurchaseList.projectNo === ''
       && dataList.currTaskDefinitionName === '风控法规部'"
      v-model="isHaveRebatesDesc"
      label="是否有保证金"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{isHaveRebatesDesc}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="projpcontractpurchaseList.projectNo === ''
       && dataList.currTaskDefinitionName === '风控法规部'
       && projpcontractpurchaseList.isHaveRebates === '1'
       && dataList.onlyId === 'Done'
"
      v-model="projpcontractpurchaseList.marginMoney"
      label="保证金冻结方式"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.marginMoney}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="projpcontractpurchaseList.projectNo === ''
       && dataList.currTaskDefinitionName === '风控法规部'
       && projpcontractpurchaseList.isHaveRebates === '1'
       && dataList.onlyId === 'Done'
"
      v-model="projpcontractpurchaseList.numRebates"
      label="保证金金额"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.numRebates}}</div>
      </template>
    </van-field>

    <van-field
      type="text"
      v-if="dataList.onlyId === 'Done'
       && projpcontractpurchaseList.projectNo === ''
       && dataList.currTaskDefinitionName === '风控法规部'"
      v-model="isHaveGuaranteesDesc"
      label="是否有担保"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{isHaveGuaranteesDesc}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="projpcontractpurchaseList.projectNo === ''
       && dataList.currTaskDefinitionName === '风控法规部'
       && projpcontractpurchaseList.isHaveGuarantees === '1'
       && dataList.onlyId === 'Done'
"
      v-model="projpcontractpurchaseList.remarkGuarantees"
      label="担保说明"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.remarkGuarantees}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="dataList.onlyId === 'Done'
       && projpcontractpurchaseList.projectNo === ''
       && dataList.currTaskDefinitionName === '风控法规部'"
      v-model="isRiskBasedDesc"
      label="是否存在厂商审计风险"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{isRiskBasedDesc}}</div>
      </template>
    </van-field>-->

    <van-field
      v-if="!projpcontractpurchaseList.projectNo
      && dataList.currTaskDefinitionName === '风控法规部'"
      name="isCheckQuality"
      right-icon="arrow-down"
      :value="value"
      style="display: none"
    />
    <van-field
      v-if="!projpcontractpurchaseList.projectNo
      && dataList.currTaskDefinitionName === '风控法规部'
      && dataList.onlyId !== 'Done'
      "
      clickable
      right-icon="arrow-down"
      label="是否需复核质保差"
      colon
      :value="value === '1' ? '是' : value === '0' ? '否' : ''"
      placeholder="请选择"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="isCheckQuality"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>

    <van-field
      v-if="!projpcontractpurchaseList.projectNo
      && dataList.currTaskDefinitionName === '风控法规部'"
      name="isPreOrder"
      right-icon="arrow-down"
      :value="isPreOrder"
      style="display: none"
    />

    <van-field
      v-if="!projpcontractpurchaseList.projectNo
      && dataList.currTaskDefinitionName === '风控法规部' && dataList.onlyId !== 'Done'"

      clickable
      right-icon="arrow-down"
      label="未签合同提前下单承诺"
      colon
      :value="isPreOrderDesc"
      placeholder="请选择"
      @click="showIsPreOrder = true"
    />
    <van-popup v-model="showIsPreOrder" round position="bottom">
      <van-picker
        show-toolbar
        :columns="custProList"
        @cancel="showIsPreOrder = false"
        @confirm="isPreOrderFnc"
      />
    </van-popup>

    <van-field
      v-if="!projpcontractpurchaseList.projectNo
      && dataList.currTaskDefinitionName === '风控法规部'
      && isPreOrderDesc === '冻结现金流' && dataList.onlyId !== 'Done'
      "
      v-model="cashMoney"
      name="cashMoney"
      label="冻结现金流金额"
      colon
      placeholder="请输入"
    />

    <van-field
      v-if="dataList.currTaskDefinitionName === '风控法规部'"
      name="prePayMore"
      right-icon="arrow-down"
      label="是否预付超30%"
      :value="isPrePayMore"
      style="display: none"
    />

    <van-field
      v-if="dataList.currTaskDefinitionName === '风控法规部' && dataList.onlyId !== 'Done'"
      clickable
      right-icon="arrow-down"
      label="是否预付超30%"
      colon
      :value="isPrePayMoreDesc"
      placeholder="请选择"
      @click="showIsPrePayMore = true"
      :rules="[{ required: true, message: '是否预付超30%是必选字段' }]"
    />
    <van-popup v-model="showIsPrePayMore" round position="bottom">
      <van-picker
        show-toolbar
        :columns="isCheckQuality"
        @cancel="showIsPrePayMore = false"
        @confirm="isPrePayMoreFnc"
      />
    </van-popup>

    <van-field
      v-if="dataList.currTaskDefinitionName === '风控法规部' && isPrePayMore === '1' && dataList.onlyId !== 'Done'"
      v-model="prePayMoreNum"
      name="prePayMoreNum"
      label="预付超30%金额"
      colon
      placeholder="请输入"
      :rules="[{ required: true, message: '预付超30%金额是必选字段' }]"
    />

    <van-field
      v-if="!projpcontractpurchaseList.projectNo
      && dataList.currTaskDefinitionName === '风控法规部'"
      name="isHaveRebates"
      right-icon="arrow-down"
      label="是否有保证金"
      :value="isHaveRebates"
      style="display: none"
    />

    <van-field
      v-if="!projpcontractpurchaseList.projectNo
      && dataList.currTaskDefinitionName === '风控法规部' && dataList.onlyId !== 'Done'"
      clickable
      right-icon="arrow-down"
      label="是否有保证金"
      colon
      :value="isHaveRebatesDesc"
      placeholder="请选择"
      @click="showHaveRebates = true"
    />
    <van-popup v-model="showHaveRebates" round position="bottom">
      <van-picker
        show-toolbar
        :columns="isCheckQuality"
        @cancel="showHaveRebates = false"
        @confirm="isHaveRebatesFnc"
      />
    </van-popup>

    <van-field
      v-if="!projpcontractpurchaseList.projectNo
      && dataList.currTaskDefinitionName === '风控法规部'
      && isHaveRebatesDesc === '是' && dataList.onlyId !== 'Done'
      "
      name="marginMoney"
      clickable
      right-icon="arrow-down"
      label="保证金冻结方式"
      colon
      :value="isMarginMoneyDesc"
      placeholder="请选择"
      @click="showMarginMoney = true"
    />
    <van-popup v-model="showMarginMoney" round position="bottom">
      <van-picker
        show-toolbar
        :columns="marginMoneyList"
        @cancel="showMarginMoney = false"
        @confirm="isMarginMoneyFnc"
      />
    </van-popup>

    <van-field
      v-if="
      !projpcontractpurchaseList.projectNo &&
      dataList.currTaskDefinitionName === '风控法规部' && isHaveRebatesDesc === '是' && dataList.onlyId !== 'Done'"
      v-model="numRebates"
      name="numRebates"
      label="保证金金额"
      colon
      placeholder="请输入"
    />

    <van-field
      v-if="!projpcontractpurchaseList.projectNo
      && dataList.currTaskDefinitionName === '风控法规部'"
      name="isHaveGuarantees"
      :value="isHaveGuarantees"
      style="display: none"
    />


    <van-field
      v-if="!projpcontractpurchaseList.projectNo
      && dataList.currTaskDefinitionName === '风控法规部' && dataList.onlyId !== 'Done'"
      clickable
      right-icon="arrow-down"
      label="是否有担保"
      colon
      :value="isHaveGuaranteesDesc"
      placeholder="请选择"
      @click="showHaveGuarantees = true"
    />
    <van-popup v-model="showHaveGuarantees" round position="bottom">
      <van-picker
        show-toolbar
        :columns="isCheckQuality"
        @cancel="showHaveGuarantees = false"
        @confirm="isHaveGuaranteesFnc"
      />
    </van-popup>

    <van-field
      v-if="
      !projpcontractpurchaseList.projectNo &&
      dataList.currTaskDefinitionName === '风控法规部' && isHaveGuaranteesDesc === '是' && dataList.onlyId !== 'Done'"
      v-model="remarkGuarantees"
      name="remarkGuarantees"
      label="担保说明"
      colon
      placeholder="请输入"
    />

    <van-field
      v-if="!projpcontractpurchaseList.projectNo
      && dataList.currTaskDefinitionName === '风控法规部'"
      name="isRiskBased"
      :value="isRiskBased"
      style="display: none"
    />

    <van-field
      v-if="!projpcontractpurchaseList.projectNo
      && dataList.currTaskDefinitionName === '风控法规部' && dataList.onlyId !== 'Done'"
      clickable
      right-icon="arrow-down"
      label="是否存在厂商审计风险"
      colon
      :value="isRiskBasedDesc"
      placeholder="请选择"
      @click="showRiskBased = true"
    />
    <van-popup v-model="showRiskBased" round position="bottom">
      <van-picker
        show-toolbar
        :columns="isCheckQuality"
        @cancel="showRiskBased = false"
        @confirm="isRiskBasedFnc"
      />
    </van-popup>
    <div v-if="projpcontractpurchaseList.projectNo === ''">
      <div class="table-title">销售合同信息</div>
      <vxe-table border resizable highlight-hover-row :data="projpcontractpurchaseList.reviewVOS">
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="id" title="销售合同编号" width="21%"></vxe-table-column>
        <vxe-table-column field="name" title="销售合同名称" width="21%"></vxe-table-column>
        <vxe-table-column field="contractTypeDesc" title="销售合同类型" width="21%"></vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <div class="table-title">采购明细</div>
      <vxe-table border resizable highlight-hover-row :data="goodsList">
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column v-if="!projpcontractpurchaseList.projectNo" field="goodsContractNo" title="销售合同编号" width="21%"></vxe-table-column>
        <vxe-table-column field="costTypeName" title="成本类型" width="21%"></vxe-table-column>
        <vxe-table-column field="name" title="产品名称" width="21%"></vxe-table-column>
        <vxe-table-column field="brandName" title="品牌" width="25%"></vxe-table-column>
        <vxe-table-column field="price" title="金额" width="21%"></vxe-table-column>
        <vxe-table-column field="invoiceTypeName" title="发票类型" width="21%"></vxe-table-column>
        <vxe-table-column field="invoiceTaxName" title="税率" width="17%"></vxe-table-column>
        <vxe-table-column field="remark" title="备注" width="17%"></vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <div class="table-title">付款条件</div>
      <vxe-table border resizable highlight-hover-row :data="payforList" >
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column v-if="!projpcontractpurchaseList.projectNo" field="contractReviewId" title="销售合同编号" width="21%"></vxe-table-column>
        <vxe-table-column field="receiveDate" title="预计付款时间" width="25%"></vxe-table-column>
        <vxe-table-column field="content" title="预计付款条件" width="20%"></vxe-table-column>
        <vxe-table-column field="receiveAmount" title="付款金额" width="21%"></vxe-table-column>
        <vxe-table-column field="remark" title="备注" width="19%"></vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <div class="table-title">附件列表</div>
      <vxe-table border resizable highlight-hover-row :data="files">
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
import { projpcontractpurchaseformList, selectPurchaseNoApi } from '../../api/contract'
import { custPro } from '../../api/customer'

export default {
  name: 'index',
  data () {
    return {
      isCheckQuality: [{id: '1', text: '是'},{id: '0', text: '否'}],
      dataList: this.$route.query,
      fileList: [],
      cashMoney: '',
      prePayMoreNum: '',
      isHaveRebates: '',
      isHaveRebatesDesc: '',
      isMarginMoney: '',
      isMarginMoneyDesc: '',
      numRebates: '',
      isHaveGuarantees: '',
      isHaveGuaranteesDesc: '',
      remarkGuarantees: '',
      isRiskBased: '',
      isRiskBasedDesc: '',
      changePurchaseId: '',
      value: null,
      isCover: false,
      isShow: false,
      showPicker: false,
      showIsPreOrder: false,
      showIsPrePayMore: false,
      showHaveRebates: false,
      showMarginMoney: false,
      showHaveGuarantees: false,
      showRiskBased: false,
      isPrePayMore: '',
      isPrePayMoreDesc: '',
      isPreOrder: '',
      isPreOrderDesc: '',
      custProList:[],
      marginMoneyList:[],
      files: [], // 循环附件
      hasNew: [], // 新旧附件
      isSeal: [], // 是否盖章
      goodsList: [], // 采购
      payforList: [], // 付款
      fileIdList: [], // 附件编号
      projpcontractpurchaseList: [] // 采购合同
    }
  },
  created () {
    custPro().then(res => {
      if (res.data) {
       res.data.PRE_ORDER.forEach((item) => {
         this.custProList.push({
           text: item.nameChs,
           id: item.attribute
         })
       })
        res.data.MARGIN_MONEY.forEach((item) => {
         this.marginMoneyList.push({
           text: item.nameChs,
           id: item.attribute
         })
       })

      }

    })
    // 调用采购详情接口
    projpcontractpurchaseformList(this.dataList.dataId).then(res => {
      if (res.data) {
        // 判断bool值类型
        if (res.data.hasPno === '1') {
          res.data.hasPnoName = '是'
        } else {
          res.data.hasPnoName = '否'
        }
        if (res.data.isSingle === '1') {
          this.isShow = true
          res.data.isSingleName = '是'
        } else {
          this.isShow = false
          res.data.isSingleName = '否'
        }

        this.value = res.data.isCheckQuality
        this.isPreOrderDesc = res.data.isPreOrderDesc
        this.cashMoney = res.data.cashMoney
        this.isPrePayMore = res.data.prePayMore
        this.isPrePayMoreDesc = res.data.prePayMore === '1' ? '是' : res.data.prePayMore === '0' ? '否' : ''
        this.prePayMoreNum = res.data.prePayMoreNum
        this.isHaveRebates = res.data.isHaveRebates
        this.isHaveRebatesDesc = res.data.isHaveRebates === '1' ? '是' : res.data.isHaveRebates === '0' ? '否' : ''
        this.isMarginMoneyDesc = res.data.marginMoney
        this.numRebates = res.data.numRebates
        this.isHaveGuarantees = res.data.isHaveGuarantees
        this.isHaveGuaranteesDesc = res.data.isHaveGuarantees === '1' ? '是' : res.data.isHaveGuarantees === '0' ? '否' : ''
        this.remarkGuarantees = res.data.remarkGuarantees
        this.isRiskBased = res.data.isRiskBased
        this.isRiskBasedDesc = res.data.isRiskBased === '1' ? '是' : res.data.isRiskBased === '0' ? '否' : ''
        this.changePurchaseId = res.data.changePurchaseId ? res.data.changePurchaseId : ''

        this.hasNew = res.data.fileList.filter((item) => (item.isNew === '0' ? item : null))
        if (this.hasNew.length > 0) {
          this.isSeal = this.hasNew.map((item) => item.isSeal)
        }

        this.projpcontractpurchaseList = res.data
        this.goodsList = res.data.goodsList.filter(
          (item) => {
            if (item.goodsContractNo) item.contractNo = item.goodsContractNo
            item.invoiceTaxName = item.invoiceTax + '%'
            return item
          }
        )
        this.payforList = res.data.payforList.filter((item) => {
          item.paymentCondition = item.content
          item.paymentAmount = item.receiveAmount
          item.paymentDate = item.receiveDate
          item.contractNo = item.contractReviewId
          return item
        })
        this.files = res.data.fileList ? res.data.fileList : []
        // 传输附件id字段
        res.data.fileList.map(item => {
          this.fileIdList = this.fileIdList.concat(item.fileId)
        })
        this.fileList = res.data.fileList.map(item => {
          return JSON.stringify({
            fileName: item.fileName,
            url: item.url,
            fileSize: item.fileSize,
            fileId: item.fileId,
            isNew: item.isNew,
            isSeal: item.isSeal
          })
        })
      } else {
        throw new '数据异常'()
      }
      // 判断是否是总办
      if (this.dataList.currTaskDefinitionKey === 'ManagerOffice' && this.dataList.currFlowId === 'PurchaseApprove') {
        if (res.data.purchaseNo) {
          selectPurchaseNoApi(res.data.purchaseNo).then(res => {
            if (res.data === 'true') {
              this.isCover = true
            } else {
              this.isCover = false
            }
          })
        } else {
          this.isCover = false
          res.data.isCover = '0'
          this.projpcontractpurchaseList = res.data
        }
      }
    })
  },
  methods: {
    onConfirm (value) {
      console.log(value)
      this.value = value.id
      this.projpcontractpurchaseList.isCover = value.id
      this.showPicker = false
    },
    isPreOrderFnc (value) {
      this.isPreOrder = value.id
      this.isPreOrderDesc = value.text
      this.showIsPreOrder = false
    },
    isPrePayMoreFnc (value) {
      this.isPrePayMore = value.id
      this.isPrePayMoreDesc = value.text
      this.showIsPrePayMore = false
    },
    isHaveRebatesFnc (value) {
      this.isHaveRebates = value.id
      this.isHaveRebatesDesc = value.text
      this.showHaveRebates = false
    },
    isMarginMoneyFnc (value) {
      this.isMarginMoney = value.id
      this.isMarginMoneyDesc = value.text
      this.showMarginMoney = false
    },
    isHaveGuaranteesFnc (value) {
      this.isHaveGuarantees = value.id
      this.isHaveGuaranteesDesc = value.text
      this.showHaveGuarantees = false
    },
    isRiskBasedFnc (value) {
      this.isRiskBased = value.id
      this.isRiskBasedDesc = value.text
      this.showRiskBased = false
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
