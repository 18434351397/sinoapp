<template>
  <div id="app">
    <router-view />
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
.van-field--error .van-field__control,
.van-field--error .van-field__control::placeholder {
  color: #969799;
}
.van-cell:not(:last-child)::after {
  border-bottom: none;
}
// 设置字体大小
div.app-title {
  div.title {
    background-color: #fff;
    font-size: 16px;
    padding: 10px 15px;
    position: relative;
  }
  div.title::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 6px;
    margin: auto 0;
    content: '';
    width: 4px;
    height: 12px;
    border-radius: 2px;
    background-color: #1989fa;
  }
  div.title-content {
    border-top: 1px solid #e8e4e4;
  }
  div.table-title {
    font-size: 16px;
    border-top: 1px solid #e8e4e4;
    padding: 10px 15px;
    text-align: left;
    background-color: #fff;
    position: relative;
  }
  div.table-title::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 6px;
    margin: auto 0;
    content: '';
    width: 4px;
    height: 12px;
    border-radius: 2px;
    background-color: #1989fa;
  }
  // 在可编辑中有下划线
  div.tax.van-cell:not(:last-child)::after {
    border-bottom: 1px solid #6c6c6c;
  }
  div.fileAmount.van-cell {
    border-bottom: 1px solid #6c6c6c;
  }
}
// 去除navbar的下划线
.van-hairline--bottom::after {
  border-width: 0;
}
.van-hairline--top-bottom::after {
  border-width: 0;
}
// 表格字体颜色调整
.cell {
  color: #000;
  font-weight: normal;
}

.van-toast {
  color: #000;
}
.van-toast__loading {
  color: #000;
}
// 详情文字换行处理
.van-field__control {
  div {
    word-break: break-all;
  }
}

// 到底了提示单独样式
div.van-toast {
  background-color: rgba(241, 239, 239, 0.8);
  i.van-toast__icon {
    font-size: 64px;
  }
}
// 详情右侧信息边距设置
.van-field__value {
  padding-left: 12px;
}
</style>
