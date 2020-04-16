/**
*@author CheYongJi
*@date 2020/4/15 14:06
*@title index
*/
<template>
    <div>
      <div style="padding: 10px 15px;text-align: left;background-color: #fff;">客户申请信息</div>
      <van-field
        v-model="custList.name"
        type="text"
        label="客户名称:"
        readonly
      />
      <van-field
        v-model="custList.industryDesc"
        type="text"
        label="行业分类:"
        readonly
      />
      <van-field
        v-model="custList.areaDesc"
        type="text"
        label="客户区域:"
        readonly
      />
      <van-field
        v-model="custList.custnatureDesc"
        type="text"
        label="客户性质:"
        readonly
      />
      <van-field
        v-model="custList.remark"
        type="text"
        label="备注:"
        readonly
      />
    </div>
</template>

<script>
import { customerList } from '../../api/customer'

export default {
  name: 'bizcustinfoform',
  data () {
    return {
      custList: [],
      dataList: this.$route.query
    }
  },
  created () {
    customerList(this.dataList.dataId).then(res => {
      this.custList = res.data
      console.log(res)
    })
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
