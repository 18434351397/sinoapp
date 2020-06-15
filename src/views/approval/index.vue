<template>
  <div class="header-top">
    <van-tabs @change="change" :active="active" sticky color="#1989fa">
      <van-sticky offset-top="78">
        <van-search v-model="searchValue" placeholder="请输入搜索关键词">
          <!--              <van-button style="line-height: 30px;height: 30px;" type="info" slot="action" @click="onClick">搜索</van-button>-->
        </van-search>
        <div>
          排序：<van-button @click="sortFnc(active)" type="info" size="small">{{sortValue}}</van-button>
        </div>
      </van-sticky>
      <van-tab title="待我处理">
        <todolist ref="todolist" v-if="active === 0"></todolist>
      </van-tab>
      <van-tab title="我已办的">
        <donelist ref="donelist" v-if="active === 1"></donelist>
      </van-tab>
      <van-tab title="我发起的">
        <launchlist ref="launchlist" v-if="active === 2"></launchlist>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import todolist from './components/todoFlowList'
import donelist from './components/doneFlowList'
import launchlist from './components/launchList'
// import test from './components/test'
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  components: {
    todolist,
    donelist,
    launchlist
  },
  computed: {
    ...mapGetters([
      'userinfo',
      'active'
    ])
  },
  created () {
    if(this.active === 0) {
      this.sortValue = this.sort ? '正序' : '倒序'
    } else if (this.active === 1) {
      this.sortValue = this.sort2 ? '正序' : '倒序'
    } else if (this.active === 2) {
      this.sortValue = this.sort3 ? '正序' : '倒序'
    }
  },
  mounted () {
  },
  watch: {
    searchValue (old, newV) {
      this.ththrottle(this.handleSearch(), 1000)
      this.$store.dispatch('setsearchValue', this.searchValue)
    }
  },
  data () {
    return {
      searchValue: '',
      sort: false, // 待办默认属性
      sort2: true, // 已办默认属性
      sort3: true, // 发起默认属性
      sortValue: '', // 默认值
      current: 1,
      // active: 0,
      tabIndex: 0,
      id: JSON.parse(sessionStorage.getItem('userinfo')).id
    }
  },
  methods: {
    change (event) {
      this.$store.dispatch('setactive', event)
      this.tabIndex = event
      this.searchValue = ''
      if (event === 0) {
        this.sortValue = this.sort ? '正序' : '倒序'
        if (this.$refs.todolist) {
          this.$refs.todolist.searchType = this.tabIndex + 1 + ''
          // this.$refs.todolist.currentPage = 1
          // this.$refs.todolist.loadData()
        }
      }
      if (event === 1) {
        this.sortValue = this.sort2 ? '正序' : '倒序'
        if (this.$refs.donelist) {
          // this.$refs.donelist.searchType = this.tabIndex + 1 + ''
          this.$refs.donelist.searchType = '3'
          // this.$refs.launchlist.currentPage = 1
          // this.$refs.launchlist.loadData()
        }
      }
      if (event === 2) {
        this.sortValue = this.sort3 ? '正序' : '倒序'
        if (this.$refs.launchlist) {
          this.$refs.launchlist.searchType = this.tabIndex + 1
          // this.$refs.launchlist.currentPage = 1
          // this.$refs.launchlist.loadData()
        }
      }
    },
    // 排序
    sortFnc(event) {
      let sort
      if(event === 0) {
        this.sort = !this.sort
        this.sortValue = this.sort ? '正序' : '倒序'
        if(this.sortValue === '正序') {
          sort = true
        } else if (this.sortValue === '倒序') {
          sort = false
        }
        this.$refs.todolist.loadData(sort)
      } else if (event === 1) {
        this.sort2 = !this.sort2
        this.sortValue = this.sort2 ? '正序' : '倒序'
        if(this.sortValue === '正序') {
          sort = true
        } else if (this.sortValue === '倒序') {
          sort = false
        }
        this.$refs.donelist.loadData(sort)
      } else if (event === 2) {
        this.sort3 = !this.sort3
        this.sortValue = this.sort3 ? '正序' : '倒序'
        if(this.sortValue === '正序') {
          sort = true
        } else if (this.sortValue === '倒序') {
          sort = false
        }
        this.$refs.launchlist.loadData(sort)
      }
    },
    handleSearch () {
      // console.log(this.tabIndex)
      // if (this.tabIndex === 0) {
      //   console.log(this.searchValue)
      //   console.log('开始搜索待办了')
      //   const data = {
      //     asc: false,
      //     current: this.current,
      //     openSort: true,
      //     searchCount: true,
      //     size: 10,
      //     condition: {
      //       searchType: this.tabIndex ? this.tabIndex : '1',
      //       currUseerId: this.id,
      //       searchCondition: this.searchValue
      //     }
      //   }
      //   search(data).then(res => {
      //     if (res) {
      //       if (res.data) {
      //         res.data.records.forEach(item => {
      //           item.createdDate = item.createdDate.split('.')[0]
      //           item.lastModifiedDate = item.lastModifiedDate.split('.')[0]
      //         })
      //         this.$refs.todolist.dataList = res.data.records ? res.data.records : []
      //       }
      //     }
      //   }).catch(err => {
      //     console.log(err)
      //   })
      //   // this.$refs.todolist.loadData()
      // }
      // else if (this.tabIndex === 1) {
      //   console.log(this.searchValue)
      //   const data = {
      //     asc: false,
      //     current: this.current,
      //     openSort: true,
      //     searchCount: true,
      //     size: 10,
      //     condition: {
      //       searchType: '2',
      //       currUseerId: this.id,
      //       searchCondition: this.searchValue
      //     }
      //   }
      //   search(data).then(res => {
      //     if (res) {
      //       if (res.data) {
      //         res.data.records.forEach(item => {
      //           item.createdDate = item.createdDate.split('.')[0]
      //           item.lastModifiedDate = item.lastModifiedDate.split('.')[0]
      //         })
      //         this.$refs.todolist.dataList = res.data.records ? res.data.records : []
      //       }
      //     }
      //   }).catch(err => {
      //     console.log(err)
      //   })
      // }
      // if (this.tabIndex === 1) {
      //   console.log('开始搜索已办了')
      //   data.condition.searchType = this.tabIndex
      //   data.condition.searchCondition = this.searchValue
      //   // this.$refs.todolist.loadData()
      // }
    },
    onClick () {
      if (this.searchValue) {
        this.searchValue = ''
      }
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.ththrottle(this.handleScroll, 1000))
      this.searchValue = ''
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.ththrottle(this.handleScroll, 1000))
  }
}
</script>

<style scoped>
>>> .van-sticky--fixed {
  top: 34px;
}
</style>
<style lang="less">
.van-toast {
  background-color: rgba(210, 199, 199, 0.3);
  color: #000;
}
.van-toast__loading {
  color: #000;
}
</style>
<style lang="less">
.header-top {
 .van-tabs__content .van-sticky {
    display: flex;
    background: #fff;
    line-height: 54px;
  }
}
</style>