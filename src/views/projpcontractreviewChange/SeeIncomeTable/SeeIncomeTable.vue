<template>
  <div>
    <div class="table-title">收入明细</div>
    <vxe-table border resizable highlight-hover-row :data="incomeList" :cell-style="cellStyle">
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
</template>

<script>
export default {
  name: 'index',
  props: ['incomeList'],
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
