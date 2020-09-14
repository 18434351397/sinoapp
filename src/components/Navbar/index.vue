<template>
   <div style="box-sizing: border-box;">
     <van-nav-bar
       title="运营管理系统"
       left-text=""
       :left-arrow = 'leftBack'
       @click-left="onClickLeft"
     />
     <!-- <div class="handle"></div> -->
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
      const currentPage = window.location.hash.split('/')[1]
      if (currentPage === 'my' || currentPage === 'approval') {
        return null
      } else {
        this.$router.go(-1)
      }
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
  >>>.van-nav-bar__title{
    font-size: 18px;
  }
  /* .handle{
    width: 100%;
    height: 22px;
    background: #fff;
    position: fixed;
    top: 0;
    z-index: 999;
  } */
  >>>.van-nav-bar__arrow {
    font-size: 20px;
  }

</style>
<style lang="less">
div.van-nav-bar {
    padding-top: 1.5em;
  div.van-nav-bar__left{
    align-items: baseline;
    top: 38px;
    i.van-icon {
      font-size: 24px;
    }
  }
}

</style>
