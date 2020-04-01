<template>
    <div>
      <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item to="/approval" replace icon="records">审批</van-tabbar-item>
        <van-tabbar-item to="/my" replace icon="friends-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onChange () {
      // console.log(this.active)
    }
  },
  mounted () {
    const currentPage = window.location.hash.split('/')[1]
    if (currentPage === 'approval') {
      this.active = 0
    } else {
      this.active = 1
    }
  }
}
</script>

<style scoped>
    .van-tabbar--fixed{
        z-index: 999
    }
</style>
