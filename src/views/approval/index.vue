<template>
    <div>
      <van-tabs active="0" sticky color="#1989fa">
        <van-search
          v-model="searchValue"
          placeholder="请输入搜索关键词"
          show-action
          use-action-slot
          bind:search="onSearch"
          bind:cancel="onCancel"
        >
          <van-button style="line-height: 30px;height: 30px;" type="info" slot="action" @click="onClick">搜索</van-button>
        </van-search>
        <van-tab title="待我处理"><todolist /></van-tab>
        <van-tab title="我已办的"><donelist /></van-tab>
        <van-tab title="我发起的"><launchlist /></van-tab>
      </van-tabs>
    </div>
</template>

<script>
import todolist from './components/todoFlowList'
import donelist from './components/doneFlowList'
import launchlist from './components/launchList'
// import test from './components/test'
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  components: {
    todolist,
    donelist,
    launchlist
  },
  computed: {
    ...mapGetters([
      'userinfo'
    ])
  },
  created () {},
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
    onClick () {
      if (this.searchValue) {
        this.searchValue = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
