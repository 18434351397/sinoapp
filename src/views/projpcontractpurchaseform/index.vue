<template>
  <div class="projpcontractpurchase">
    <div class="title">合同管理-采购合同评审表单信息详情</div>
    <van-field
      style="display: none;"
      name="id"
      v-model="projpcontractpurchaseList.id"
      type="text"
      readonly
    />
  </div>
</template>

<script>
import { projpcontractpurchaseformList } from '../../api/contract'

export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      fileList: [],
      files: [], // 循环列表
      projpcontractpurchaseList: [] // 风险保证金
    }
  },
  created () {
    projpcontractpurchaseformList(this.dataList.dataId).then(res => {
      if (res.data) {
        this.projpcontractpurchaseList = res.data
      } else {
        throw new '数据异常'()
      }
    })
  }
}
</script>

<style lang="less">
div.projpcontractpurchase {
  background-color: #f8f8f8;
  div.title {
    font-size: 14px;
    padding: 10px 15px;
  }
  div.table-title {
    font-size: 14px;
    border-top: 1px dashed #f8f8f8;
    padding: 10px 15px;
    text-align: left;
    background-color: #fff;
  }
}
div.projpcontractpurchase {
  div.tax.van-cell:not(:last-child)::after {
    border-bottom: 1px solid #6c6c6c;
  }
  .van-cell:not(:last-child)::after {
    border-bottom: none;
  }
}
</style>
