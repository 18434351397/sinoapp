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
.van-cell:not(:last-child)::after{
  border-bottom: none;
}
// 设置字体大小
div.app-title {
  div.title {
    background-color: #fff;
    font-size: 16px;
    padding: 10px 15px;
  }
  div.table-title {
    font-size: 16px;
    border-top: 1px dashed #f8f8f8;
    padding: 10px 15px;
    text-align: left;
    background-color: #fff;
  }
  // 在可编辑中有下划线
  div.tax.van-cell:not(:last-child)::after {
    border-bottom: 1px solid #6c6c6c;
  }
}
</style>
