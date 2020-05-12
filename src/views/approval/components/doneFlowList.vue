<template>
    <div>
            <div class="todoListBox" v-show="dataList.length">
              <div class="titleBox" :key="index" v-for="(item, index) in dataList">
                <div class="titleBox_content">
                  <div class="titleBox_content_title" style="">{{item.formTitle}}</div>
                  <div>{{item.statusDes}}</div>
                </div>
                <div class="flowMessage">
                  <div class="flowMessage_box">流程标题: <span>{{item.currFlowName}}</span></div>
                  <div class="flowMessage_box" style="padding: 10px 0 0;">当前节点: <span>{{item.currTaskDefinitionName}}</span></div>
                  <div class="flowMessage_box" style="padding: 10px 0 0;margin-right: 20px;">当前办理人: <span>{{item.currUserName}}</span></div>
                  <div class="flowMessage_box" style="padding: 10px 0 0;margin-bottom:10px;">发起人: <span>{{item.userName}}</span></div>
                </div>
                <div class="timeBox">
                  <div><span>{{item.createdDate.split('.')[0]}}</span></div>
                  <div><span>{{item.lastModifiedDate.split('.')[0]}}</span></div>
                </div>
              </div>
              <div style="text-align: center;padding: 10px 0;" v-if="loading">
                <van-loading color="#1989fa" size="24px"></van-loading>
              </div>
            </div>
        <div style="height: 100%;" v-show="!dataList.length && loading">
          <Loading/>
        </div>
        <div style="height: 100%;" v-show="!dataList.length && !loading">
          <NoData/>
        </div>
    </div>
</template>

<script>
import NoData from './NoDataShow'
import Loading from './loading'
import { getTodoList } from '../../../api/flowfrom'
export default {
  name: 'doneFlowList',
  components: {
    NoData,
    Loading
  },
  created () {
    this.loadData()
    window.addEventListener('scroll', this.ththrottle(this.handleScroll, 1000))
  },
  data () {
    return {
      loading: false,
      totalPage: null,
      currentPage: 1,
      searchType: '2',
      dataList: [],
      id: JSON.parse(sessionStorage.getItem('userinfo')).id
    }
  },
  computed: {
    noMore () {
      return this.current >= this.totalPage
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    loadData () {
      const data = {
        current: this.currentPage,
        asc: false,
        openSort: true,
        searchCount: true,
        size: 10,
        condition: {
          searchType: this.searchType,
          currUseerId: this.id
        }
      }
      this.loading = true
      getTodoList(data).then(res => {
        this.loading = false
        if (res) {
          if (res.data) {
            if (res.data.current === '1') {
              this.dataList = res.data.records ? res.data.records : []
              this.totalPage = res.data.pages
              this.currentPage = res.data.current
            } else {
              this.dataList = [
                ...this.dataList,
                ...res.data.records ? res.data.records : []
              ]
            }
            this.totalPage = res.data.pages
            this.current = res.data.current
            this.dataList = res.data.records ? res.data.records : []
            this.dataList.forEach(item => {
              item.createdDate = item.createdDate.split('.')[0]
              item.lastModifiedDate = item.lastModifiedDate.split('.')[0]
            })
            ++this.currentPage
          }
        }
      })
    },
    handleScroll: function () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 是否滚动到底部的判断
      if (Math.ceil(scrollTop + windowHeight) >= scrollHeight) {
        if (this.currentPage < this.totalPage) {
          this.loadData()
        }
      }
    },
    load () {
      this.current += 1
      this.loading = true
      setTimeout(() => {
        this.loadData()
        this.loading = false
      }, 2000)
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.ththrottle(this.handleScroll, 1000))
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
    margin: 0 0 10px;

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
