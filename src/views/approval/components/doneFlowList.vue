<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="todoListBox" v-show="dataList.length">
      <div class="titleBox" :key="index" v-for="(item, index) in dataList" @click="toDetail(item)">
        <div class="titleBox_content">
          <div class="titleBox_content_title" style>{{item.formTitle}}</div>
          <div :style="{color: changeColor(item.status)}" style="width: 80px;text-align: right;">{{item.statusDes}}</div>
        </div>
        <div class="flowMessage">
          <div class="flowMessage_box">
            流程名称:
            <span>{{item.currFlowName}}</span>
          </div>
          <div class="flowMessage_box" style="padding: 10px 0 0;">
            当前节点:
            <span>{{item.currTaskDefinitionName}}</span>
          </div>
          <div class="flowMessage_box" style="padding: 10px 0 0;margin-right: 20px;">
            当前办理人:
            <span>{{item.currUserName}}</span>
          </div>
          <div class="flowMessage_box" style="padding: 10px 0 0;margin-bottom:10px;">
            发起人:
            <span>{{item.userName}}</span>
          </div>
        </div>
        <div class="timeBox">
          <div>
            <span>{{item.createdDate.split('.')[0]}}</span>
          </div>
          <div>
            <span>{{item.lastModifiedDate.split('.')[0]}}</span>
          </div>
        </div>
      </div>
      <!-- <div style="text-align: center;padding: 10px 0;" v-if="loading">
        <van-loading color="#1989fa" size="24px"></van-loading>
      </div> -->
    </div>
    <div style="height: 100%;" v-show="!dataList.length && loading">
      <Loading />
    </div>
    <div style="height: 100%;" v-show="!dataList.length && !loading">
      <NoData />
    </div>
</van-pull-refresh>
</template>

<script>
import NoData from './NoDataShow'
import Loading from './loading'
import { search } from '../../../api/flowfrom'
import { mapGetters } from 'vuex'
import { Toast } from 'vant'
import * as noMoreHei from '../../../assets/image/noMoreHei.png'
export default {
  name: 'doneFlowList',
  components: {
    NoData,
    Loading
  },
  created () {
    this.loadData()
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  },
  watch: {
    searchValue: function (old, newV) {
      this.currentPage = 1
      if (old !== newV) {
        this.loadData()
      }
    }
  },
  mounted () {
    this.tabScroll()
  },
  data () {
    return {
      loading: false,
      totalPage: 1,
      isLoading:false,
      currentPage: 1,
      searchType: '2',
      searchCondition1: '',
      dataList: [],
      id: JSON.parse(sessionStorage.getItem('userinfo')).id
    }
  },
  computed: {
    ...mapGetters(['searchValue']),
    noMore () {
      return this.current >= this.totalPage
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    // 下拉刷新
    onRefresh() {
      this.currentPage = 1
      this.isLoading= true
      this.loadData()
    },
    tabScroll () {
      window.addEventListener('scroll', this.handleScroll)
    },
    loadData (sort) {
      const data = {
        current: this.currentPage,
        asc: false,
        openSort: true,
        searchCount: true,
        size: 10,
        condition: {
          asc: sort,
          searchType: this.searchType,
          currUseerId: this.id,
          searchCondition: this.searchValue ? this.searchValue : ''
        }
      }
      if (sort === false) {
        data.condition.asc = sort.toString()
        data.current = 1
      } else if (sort === true) {
        data.condition.asc = 'true'
        data.current = 1
      } else {
        data.condition.asc = 'false'
      }
      this.loading = true
      search(data).then(res => {
        this.loading = false
        this.isLoading = false
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
            // this.dataList = res.data.records ? res.data.records : []
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
      // 判断是否是第一次加载
      if (scrollTop !== 0) {
        // 是否滚动到底部的判断
        if (Math.ceil((scrollTop + windowHeight)) >= scrollHeight) {
          if (this.currentPage <= this.totalPage) {
            this.loadData()
          } else {
            Toast({
              message: '我是有底线的',
              icon: noMoreHei,
              duration: 2000
            })
          }
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
    },
    toDetail (data) {
      this.$store.dispatch('setsearchValue', '')
      data.searchType = this.searchType
      data.onlyId = 'Done'
      const path = data.url.split('/')[3]
      if (data.url.includes('pay')) {
        if (data.url === '/app/form/projptenderpreq/cashier/pay/page' || data.url === '/app/form/projptenderpreq/busiAnalysisManager/pay/page' || data.url === '/app/form/projptenderpreq/detail/pay/page') { // 处理付业务往来款路由一样的问题
          this.$router.push({
            name: 'projptenderpreqpay',
            query: data
          }).catch(err => {
            console.log(err)
          })
        } else { // 处理合同付款地址与付业务往来款里都有pay字段
          this.$router.push({
            name: 'projppayreq',
            query: data
          }).catch(err => {
            console.log(err)
          })
        }
      } else if (data.url.includes('bizfeesreimbursementform')) {
        if (data.url === '/app/form/bizfeesreimbursementform/detailFinancia/page' || data.url === '/app/form/bizfeesreimbursementform/edit/page' || data.url === '/app/form/bizfeesreimbursementform/detail/page' || data.url === '/app/form/bizfeesreimbursementform/cashier/page') { // 处理报销发起和分摊费用路由一样的问题
          this.$router.push({
            name: 'bizfeesreimbursementform',
            query: data
          }).catch(err => {
            console.log(err)
          })
        } else { // 处理都有报销发起和分摊费用都有bizfeesreimbursementform字段
          this.$router.push({
            name: 'sharebizfeesreimbursementform',
            query: data
          }).catch(err => {
            console.log(err)
          })
        }
      } else if (data.url === '/app/form/projpcontractreview/cancel/detail/page') {  // 销售合同取消
        this.$router.push({
            name: 'projpcontractreviewcancel',
            query: data
          }).catch(err => {
            console.log(err)
          })
      }
      // else if (data.currFlowId === 'SupplierApprove') {
      //   Toast.fail({
      //     message: '该流程暂不支持手机端查看，请登录PC端进行操作',
      //     closeOnClick: true,
      //     closeOnClickOverlay: true,
      //     duration: 10000
      //   })
      // }
      else if (path) {
        this.$router.push({
          name: path,
          query: data
        }).catch(err => {
          console.log(err)
        })
      }
    }
  },
  beforeDestroy () {
    this.currentPage = 1
    window.removeEventListener('scroll', this.handleScroll)
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
  padding: 1em 1em 6em;
  box-sizing: border-box;
}

.titleBox {
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  margin: 0 0 10px;
  border: 1px solid rgb(25, 137, 250);
  .titleBox_content {
    display: flex;
    justify-content: space-between;
    .titleBox_content_title {
      width: 78%;
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
