/**
*@author XuJinTao
*@date 2020/5/11 16:45
*@title loading
*/
<template>
    <div :style="style">
      <img src="../../../assets/image/twodevelopment/noorder.png"/>
      <div>正在加载...</div>
    </div>
</template>

<script>
export default {
  name: 'Loading',
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
