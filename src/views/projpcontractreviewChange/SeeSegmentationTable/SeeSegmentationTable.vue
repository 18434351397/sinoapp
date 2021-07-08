<template>
  <div>
    <div class="table-title">业绩切分</div>
    <vxe-table border resizable highlight-hover-row :data="achievementList" :cell-style="cellStyle">
      <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
      <vxe-table-column field="segmentDeptText" title="切分部门" width="21%"></vxe-table-column>
      <vxe-table-column field="leadUserText" title="负责人" width="17%"></vxe-table-column>
      <vxe-table-column field="segmentP" title="切分比例" width="21%"></vxe-table-column>
      <vxe-table-column field="segmentAmount" title="切分金额" width="21%"></vxe-table-column>
      <vxe-table-column field="deptTypeDesc" title="部门类型" width="21%"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['achievementList'],
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
