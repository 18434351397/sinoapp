<template>
    <div>
      <van-tabbar style="height: 60px; padding: 0px 0 8px;" safe-area-inset-bottom v-model="active" @change="onChange">
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
      active: 0,
      path: this.$route.path
    }
  },
  methods: {
    onChange () {
      console.log(this.$route.path)
      if (this.path === '/my') {
        window.removeEventListener('scroll', this.ththrottle(this.handleScroll, 1000), true)
      }
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
    >>>.van-tabbar-item__icon {
      position: relative;
      margin-bottom: 5px;
      font-size: 30px;
    }
</style>
