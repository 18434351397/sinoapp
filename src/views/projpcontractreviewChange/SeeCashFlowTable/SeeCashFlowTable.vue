<template>
  <div>
    <div class="table-title">预计现金流量表（收/付款情况）</div>
    <vxe-table border resizable highlight-hover-row :data="paymentCondition" :cell-style="cellStyle">
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
      <!-- <vxe-table-column field="remark" width="100" title="备注"></vxe-table-column> -->
    </vxe-table>
    <van-field type="text" v-model="occupy" label="资金占用情况" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">
          {{ contractList.occupy ? (contractList.occupy >= 0 ? contractList.occupy : -contractList.occupy) : '0.00' }}
        </div>
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['paymentCondition', 'contractList'],
  data() {
    return {
      occupy: this.contractList.occupy ? (this.contractList.occupy >= 0 ? this.contractList.occupy : -this.contractList.occupy) : '0.00'
    }
  },
  methods: {
    cellStyle({ row }) {
      if (row.hasModify === '1') {
        return {
          backgroundColor: 'yellow'
        }
      }
    }
  }
}
</script>
