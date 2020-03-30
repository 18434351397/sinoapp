<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
.van-field--error .van-field__control, .van-field--error .van-field__control::placeholder {
  color: #969799;
}
</style>
