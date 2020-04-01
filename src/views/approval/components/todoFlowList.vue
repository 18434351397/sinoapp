<template>
  <div>
    <div class="todoListBox" v-if="dataList.length" >
      <div class="titleBox" :key="index" v-for="(item, index) in dataList">
        <div class="titleBox_content">
          <div class="titleBox_content_title" style="">{{item.formTitle}}</div>
          <div>审批中</div>
        </div>
        <div class="flowMessage">
          <div class="flowMessage_box">流程标题: <span>{{item.currFlowName}}</span></div>
          <div class="flowMessage_box" style="padding: 10px 0 0;">当前节点: <span>报销发起</span></div>
          <div class="flowMessage_box" style="padding: 10px 0 0;margin-right: 20px;">当前办理人: <span>陈景硕</span></div>
          <div class="flowMessage_box" style="padding: 10px 0 0;margin-bottom:10px;">发起人: <span>报销发起</span></div>
        </div>
        <div class="timeBox">
          <div><span>2020-02-28 02:07:13</span></div>
          <div><span>2020-02-28 02:07:13</span></div>
        </div>
      </div>
    </div>
    <div style="height: 100%;" v-else>
      <NoData/>
    </div>
  </div>
</template>

<script>
import NoData from './NoDataShow'
import { getTodoList } from '../../../api/flowfrom'

export default {
  name: 'todoFlowList',
  components: {
    NoData
  },
  created () {
    const data = {
      asc: false,
      current: 1,
      openSort: true,
      searchCount: true,
      size: 10,
      condition: {
        searchType: '1',
        currUseerId: this.id
      }
    }
    getTodoList(data).then(res => {
      if (res) {
        if (res.data) {
          this.dataList = res.data.records ? res.data.records : []
        }
      }
    })
  },
  data () {
    return {
      dataList: [
        {
          id: 1
        }
      ],
      id: JSON.parse(sessionStorage.getItem('userinfo')).id
    }
  },
  methods: {
    loadData () {
    }
  }
}
</script>

<style scoped lang="less">
  div {
    margin: 0;
  }

  .todoListBox {
    height: auto;
    background: #f8f8f8;
    margin-bottom: 50px;
    padding: 10px;
    box-sizing: border-box;
  }

  .titleBox {
    background: #fff;
    border-radius: 5px;
    padding: 10px;

    .titleBox_content {
      display: flex;
      justify-content: space-between;
      .titleBox_content_title{
        width: 80%;
        font-size: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .flowMessage {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #999;
    font-size: 14px;

    .flowMessage_box {
      padding: 10px 0 0;
      margin-right: 20px;
    }
  }

  .timeBox {
    display: flex;
    justify-content: space-between;
    padding: 5px 0 0;
    color: #666;
    font-size: 12px;
  }
</style>
