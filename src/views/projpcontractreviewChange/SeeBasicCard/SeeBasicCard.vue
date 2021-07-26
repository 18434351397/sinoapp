<template>
  <div>
    <div class="title">{{ title }}</div>
    <van-field type="text" v-model="bizId" label="销售合同编号" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ bizId }}</div>
      </template>
    </van-field>
    <van-field
      name="radio"
      label="是否已投标备案"
      v-model="contractList.isRecord"
      :class="oldContractList && contractList.isRecord !== oldContractList.isRecord ? 'app-sino-change-back' : ''"
      readonly
      colon
    >
      <template #input>
        <div v-if="contractList.isRecord === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field
      v-model="contractList.chanceId"
      :class="oldContractList && contractList.chanceId !== oldContractList.chanceId ? 'app-sino-change-back' : ''"
      type="text"
      label="商机编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.chanceId }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-model="contractList.name"
      label="合同名称"
      :class="oldContractList && contractList.name !== oldContractList.name ? 'app-sino-change-back' : ''"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.name }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-model="contractList.recordId"
      label="投标备案编号"
      :class="oldContractList && contractList.recordId !== oldContractList.recordId ? 'app-sino-change-back' : ''"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.recordId }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-model="contractList.reqUserName"
      :class="oldContractList && contractList.reqUserName !== oldContractList.reqUserName ? 'app-sino-change-back' : ''"
      label="申请人"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.reqUserName }}</div>
      </template>
    </van-field>
    <van-field
      name="radio"
      label="是否关联交易"
      :class="oldContractList && contractList.isRelated !== oldContractList.isRelated ? 'app-sino-change-back' : ''"
      v-model="contractList.isRelated"
      readonly
      colon
    >
      <template #input>
        <div v-if="contractList.isRelated === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field
      v-model="contractList.contractTypeDesc"
      :class="oldContractList && contractList.contractTypeDesc !== oldContractList.contractTypeDesc ? 'app-sino-change-back' : ''"
      type="text"
      label="合同类别"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.contractTypeDesc }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-model="contractList.leadOrgName"
      :class="oldContractList && contractList.leadOrgName !== oldContractList.leadOrgName ? 'app-sino-change-back' : ''"
      label="主导部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.leadOrgName }}</div>
      </template>
    </van-field>

    <van-field
      type="text"
      v-model="hasChangeCashAchievement"
      :class="oldContractList && contractList.hasChangeCashAchievement !== oldContractList.hasChangeCashAchievement ? 'app-sino-change-back' : ''"
      label="是否调整年初到变更期间现金流和业绩"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ hasChangeCashAchievement }}</div>
      </template>
    </van-field>


    <van-field
      type="text"
      v-model="contractList.projectName"
      :class="oldContractList && contractList.projectName !== oldContractList.projectName ? 'app-sino-change-back' : ''"
      label="项目名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.projectName }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-model="contractList.companyText"
      :class="oldContractList && contractList.companyText !== oldContractList.companyText ? 'app-sino-change-back' : ''"
      label="签订公司"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.companyText }}</div>
      </template>
    </van-field>
    <!-- <van-field
      type="text"
      v-model="contractList.projectNum"
      :class="oldContractList && contractList.projectNum !== oldContractList.projectNum ? 'app-sino-change-back' : ''"
      label="项目编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.projectNum }}</div>
      </template>
    </van-field> -->
    <van-field
      type="text"
      v-model="contractList.customerName"
      :class="oldContractList && contractList.customerName !== oldContractList.customerName ? 'app-sino-change-back' : ''"
      label="客户名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.customerName }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-model="contractList.saleManName"
      :class="oldContractList && contractList.saleManName !== oldContractList.saleManName ? 'app-sino-change-back' : ''"
      label="销售人员"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.saleManName }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-model="contractList.salesManOrgName"
      :class="oldContractList && contractList.salesManOrgName !== oldContractList.salesManOrgName ? 'app-sino-change-back' : ''"
      label="销售人员部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.salesManOrgName }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="pmManagerName"
      v-model="contractList.pmManagerName"
      :class="oldContractList && contractList.pmManagerName !== oldContractList.pmManagerName ? 'app-sino-change-back' : ''"
      label="项目经理"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.pmManagerName }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="operationStartTime"
      v-model="contractList.operationStartTime"
      :class="oldContractList && contractList.operationStartTime !== oldContractList.operationStartTime ? 'app-sino-change-back' : ''"
      label="运维开始时间"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.operationStartTime }}</div>
      </template>
    </van-field>

    <van-field
      type="text"
      name="operationEndTime"
      v-model="contractList.operationEndTime"
      :class="oldContractList && contractList.operationEndTime !== oldContractList.operationEndTime ? 'app-sino-change-back' : ''"
      label="运维结束时间"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.operationEndTime }}</div>
      </template>
    </van-field>
    <van-field
      name="radio"
      label="是否为最终客户"
      v-model="contractList.isEndCust"
      :class="oldContractList && contractList.isEndCust !== oldContractList.isEndCust ? 'app-sino-change-back' : ''"
      readonly
      colon
    >
      <template #input>
        <div v-if="contractList.isEndCust === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <div v-if="contractList && contractList.isEndCust !== '1'">
      <van-field
        type="text"
        v-model="contractList.endCustName"
        :class="oldContractList && contractList.endCustName !== oldContractList.endCustName ? 'app-sino-change-back' : ''"
        label="最终客户"
        colon
        readonly
      >
        <template #input>
          <div style="text-align: left; margin: 0">{{ contractList.endCustName }}</div>
        </template>
      </van-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['contractList', 'oldContractList', 'isCustPro', 'bizId', 'isCustProShow'],
  data() {
    return {
      dataList: this.$route.query,
      hasChangeCashAchievement: this.contractList.hasChangeCashAchievement === '0' ? '否' : '是',
      title: '销售合同变更评审信息'
    }
  }
}
</script>
