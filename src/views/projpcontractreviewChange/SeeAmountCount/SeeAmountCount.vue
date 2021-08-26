<template>
  <div>
    <div class="title title-content">金额计算</div>
    <van-field
      type="text"
      v-if="isCustPro"
      name="receiveTotalAmount"
      v-model="contractList.receiveTotalAmount"
      :class="oldContractList && contractList.receiveTotalAmount !== oldContractList.receiveTotalAmount ? 'app-sino-change-back' : ''"
      label="收入合计"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.receiveTotalAmount }}</div>
      </template>
    </van-field>
    <van-field type="text" style="display: none" v-if="isCustPro" name="custPro" v-model="contractList.custPro" readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.custPro }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.receiveTotalAmount"
      :class="oldContractList && contractList.receiveTotalAmount !== oldContractList.receiveTotalAmount ? 'app-sino-change-back' : ''"
      label="收入合计"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.receiveTotalAmount }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isCustPro"
      name="rGoods"
      v-model="contractList.rGoods"
      :class="oldContractList && contractList.rGoods !== oldContractList.rGoods ? 'app-sino-change-back' : ''"
      label="商品收入"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.rGoods }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.rGoods"
      label="商品收入"
      :class="oldContractList && contractList.rGoods !== oldContractList.rGoods ? 'app-sino-change-back' : ''"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.rGoods }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isCustPro"
      name="projectIncome"
      v-model="contractList.projectIncome"
      :class="oldContractList && contractList.projectIncome !== oldContractList.projectIncome ? 'app-sino-change-back' : ''"
      label="工程收入"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.projectIncome }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isCustPro"
      name="freeSftwareIncome"
      v-model="contractList.freeSftwareIncome"
      :class="oldContractList && contractList.freeSftwareIncome !== oldContractList.freeSftwareIncome ? 'app-sino-change-back' : ''"
      label="自有软件收入"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.freeSftwareIncome }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isCustPro"
      name="projectCost"
      v-model="contractList.projectCost"
      :class="oldContractList && contractList.projectCost !== oldContractList.projectCost ? 'app-sino-change-back' : ''"
      label="工程成本"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.projectCost }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isCustPro"
      name="interNalCost"
      v-model="contractList.interNalCost"
      :class="oldContractList && contractList.interNalCost !== oldContractList.interNalCost ? 'app-sino-change-back' : ''"
      label="内包成本"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.interNalCost }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isCustPro"
      name="bidFeesCost"
      v-model="contractList.bidFeesCost"
      :class="oldContractList && contractList.bidFeesCost !== oldContractList.bidFeesCost ? 'app-sino-change-back' : ''"
      label="中标服务费"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.bidFeesCost }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isCustPro"
      name="rService"
      v-model="contractList.rService"
      :class="oldContractList && contractList.rService !== oldContractList.rService ? 'app-sino-change-back' : ''"
      label="技术服务收入"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.rService }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.rService"
      :class="oldContractList && contractList.rService !== oldContractList.rService ? 'app-sino-change-back' : ''"
      label="技术服务收入"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.rService }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isCustPro"
      name="purchasingCost"
      v-model="contractList.purchasingCost"
      :class="oldContractList && contractList.purchasingCost !== oldContractList.purchasingCost ? 'app-sino-change-back' : ''"
      label="采购成本"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.purchasingCost }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.purchasingCost"
      :class="oldContractList && contractList.purchasingCost !== oldContractList.purchasingCost ? 'app-sino-change-back' : ''"
      label="采购成本"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.purchasingCost }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isCustPro"
      name="subcontractCost"
      v-model="contractList.subcontractCost"
      :class="oldContractList && contractList.subcontractCost !== oldContractList.subcontractCost ? 'app-sino-change-back' : ''"
      label="分包成本"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.subcontractCost }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.subcontractCost"
      :class="oldContractList && contractList.subcontractCost !== oldContractList.subcontractCost ? 'app-sino-change-back' : ''"
      label="分包成本"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.subcontractCost }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="costTotalAmount"
      v-if="isCustPro"
      v-model="contractList.costTotalAmount"
      :class="oldContractList && contractList.costTotalAmount !== oldContractList.costTotalAmount ? 'app-sino-change-back' : ''"
      label="成本合计"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.costTotalAmount }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.costTotalAmount"
      :class="oldContractList && contractList.costTotalAmount !== oldContractList.costTotalAmount ? 'app-sino-change-back' : ''"
      label="成本合计"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.costTotalAmount }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isCustPro"
      v-model="contractList.grossProfit"
      name="grossProfit"
      :class="oldContractList && contractList.grossProfit !== oldContractList.grossProfit ? 'app-sino-change-back' : ''"
      label="毛利润"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.grossProfit }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.grossProfit"
      :class="oldContractList && contractList.grossProfit !== oldContractList.grossProfit ? 'app-sino-change-back' : ''"
      label="毛利润"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.grossProfit }}</div>
      </template>
    </van-field>

    <van-field type="text" v-model="beGrossProfit" label="毛利润差值" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ beGrossProfit }}</div>
      </template>
    </van-field>

    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.pretaxGrossProfitRate"
      :class="oldContractList && contractList.pretaxGrossProfitRate !== oldContractList.pretaxGrossProfitRate ? 'app-sino-change-back' : ''"
      label="税前毛利润率%"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.pretaxGrossProfitRate }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.aftertaxGrossProfitRate"
      :class="oldContractList && contractList.aftertaxGrossProfitRate !== oldContractList.aftertaxGrossProfitRate ? 'app-sino-change-back' : ''"
      label="税后毛利润率%"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.aftertaxGrossProfitRate }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isCustPro"
      name="pretaxGrossProfitRate"
      v-model="contractList.pretaxGrossProfitRate"
      :class="oldContractList && contractList.pretaxGrossProfitRate !== oldContractList.pretaxGrossProfitRate ? 'app-sino-change-back' : ''"
      label="税前毛利润率%"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.pretaxGrossProfitRate }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isCustPro"
      name="aftertaxGrossProfitRate"
      v-model="contractList.aftertaxGrossProfitRate"
      :class="oldContractList && contractList.aftertaxGrossProfitRate !== oldContractList.aftertaxGrossProfitRate ? 'app-sino-change-back' : ''"
      label="税后毛利润率%"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.aftertaxGrossProfitRate }}</div>
      </template>
    </van-field>
    <van-field
      name="radio"
      label="是否有项目"
      v-model="contractList.hasProject"
      :class="oldContractList && contractList.hasProject !== oldContractList.hasProject ? 'app-sino-change-back' : ''"
      readonly
      colon
    >
      <template #input>
        <div v-if="contractList.hasProject === '1'" style="margin: 0">是</div>
        <div v-else style="margin: 0">否</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isCustPro"
      name="projcetNo"
      v-model="contractList.projcetNo"
      :class="oldContractList && contractList.projcetNo !== oldContractList.projcetNo ? 'app-sino-change-back' : ''"
      label="项目号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.projcetNo }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.projcetNo"
      :class="oldContractList && contractList.projcetNo !== oldContractList.projcetNo ? 'app-sino-change-back' : ''"
      label="项目号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.projcetNo }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="netProfit"
      v-if="isCustPro"
      v-model="contractList.netProfit"
      :class="oldContractList && contractList.netProfit !== oldContractList.netProfit ? 'app-sino-change-back' : ''"
      label="净利润"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.netProfit }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.netProfit"
      :class="oldContractList && contractList.netProfit !== oldContractList.netProfit ? 'app-sino-change-back' : ''"
      label="净利润"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.netProfit }}</div>
      </template>
    </van-field>

    <van-field type="text" v-model="beNetProfit" label="净利润差值" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ beNetProfit }}</div>
      </template>
    </van-field>

    <van-field class="tax" type="text" v-if="isCustPro && oldContractList" name="tax" v-model="contractList.tax" placeholder="请输入税金" label="税金" colon />
    <van-field
      type="text"
      v-if="!isCustPro || !oldContractList"
      v-model="contractList.tax"
      :class="oldContractList && contractList.tax !== oldContractList.tax ? 'app-sino-change-back' : ''"
      label="税金"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.tax }}</div>
      </template>
    </van-field>

    <van-field
      class="tax"
      type="text"
      v-if="isCustPro && oldContractList"
      name="adjustTax"
      v-model="contractList.adjustTax"
      placeholder="请输入税金调减"
      label="税金调减"
      colon
    />
    <van-field
      type="text"
      v-if="!isCustPro || !oldContractList"
      v-model="contractList.adjustTax"
      :class="oldContractList && contractList.adjustTax !== oldContractList.adjustTax ? 'app-sino-change-back' : ''"
      label="税金调减"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.adjustTax }}</div>
      </template>
    </van-field>

    <!-- <van-field
      type="text"
      style="display: none"
      v-if="isCustPro"
      name="contractAmount"
      :class="oldContractList && contractList.contractAmount !== oldContractList.contractAmount ? 'app-sino-change-back' : ''"
      v-model="contractList.contractAmount"
      label="合同总金额"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.contractAmount }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      style="display: none"
      v-if="!isCustPro"
      v-model="contractList.contractAmount"
      :class="oldContractList && contractList.contractAmount !== oldContractList.contractAmount ? 'app-sino-change-back' : ''"
      label="合同总金额"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.contractAmount }}</div>
      </template>
    </van-field> -->
    <van-field
      type="text"
      v-if="isCustPro"
      name="netProfitRate"
      :class="oldContractList && contractList.netProfitRate !== oldContractList.netProfitRate ? 'app-sino-change-back' : ''"
      v-model="contractList.netProfitRate"
      label="税后净利润率(%)"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ contractList.netProfitRate }}</div>
      </template>
    </van-field>
    <div class="taxes-btn" v-if="isCustPro && oldContractList">
      <van-button type="primary" @click="taxes($event, contractList.tax, contractList.adjustTax)">计&emsp;算</van-button>
    </div>
  </div>
</template>

<script>
import { formProjpprojectinfoformApi, proProjpprojectinfoApi } from '../../../api/contract'
import { Toast } from 'vant'

export default {
  name: 'index',
  props: ['contractList', 'oldContractList', 'isCustPro'],
  data() {
    return {
      beNetProfit: 0, // 净利润差值
      beGrossProfit: 0 // 毛利润差值
    }
  },
  created() {
    if (this.oldContractList) {
      this.beNetProfit = (Number(this.contractList.netProfit) - Number(this.oldContractList.netProfit)).toFixed(2)
      this.beGrossProfit = (Number(this.contractList.grossProfit) - Number(this.oldContractList.grossProfit)).toFixed(2)
    }
  },
  methods: {
    // 税金
    taxes(e, value, adjustTax) {
      e.preventDefault()
      const rate = this.contractList
      const oldRate = this.oldContractList
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

        // 净利润差值
        if (oldRate && oldRate.netProfit) {
          this.beNetProfit = (Number(rate.netProfit) - Number(oldRate.netProfit)).toFixed(2)
        }
      } else {
        Toast('税金不能为空')
      }
    }
  }
}
</script>
