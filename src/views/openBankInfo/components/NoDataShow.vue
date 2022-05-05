/**
*@author CheYongJi
*@date 2020/4/1 10:22
*@title NoDataShow
*/
<template>
    <div :style="style">
      <img src="../../../assets/image/twodevelopment/noorder.png"/>
      <div>您没有相关流程</div>
    </div>
</template>

<script>
export default {
  name: 'NoDataShow',
  data () {
    return {
      style: {
        width: '100%',
        height: 'calc(' + window.screen.height + 'px' + ' - 194px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }
    }
  }
}
</script>

<style scoped>

</style>
