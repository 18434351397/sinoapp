<template>
    <div>
      <div v-if="dataList.length">我已办的</div>
      <div style="height: 100%;" v-else><NoData /></div>
    </div>
</template>

<script>
import NoData from './NoDataShow'
export default {
  name: 'doneFlowList',
  components: {
    NoData
  },
  data () {
    return {
      dataList: []
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
