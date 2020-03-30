<template>
   <div>
     <van-nav-bar
       title="运营管理系统"
       left-text=""
       :left-arrow = 'leftBack'
       @click-left="onClickLeft"
     />
   </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      leftBack: true,
      path: window.location.hash.split('/')[1]
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  mounted () {
    const currentPage = window.location.hash.split('/')[1]
    this.leftBack = !(currentPage === 'approval' || currentPage === 'my')
  },
  watch: {
    $route (to, from) {
      this.leftBack = !(to.path.split('/')[1] === 'my' || to.path.split('/')[1] === 'approval')
    }
  }
}
</script>

<style scoped>
  .van-nav-bar .van-icon {
    color: #161616;
  }
</style>
