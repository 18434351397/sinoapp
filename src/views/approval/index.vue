<template>
    <div>
        <van-tabs @change="change" :active="active" sticky color="#1989fa">
          <van-sticky offset-top="78">
            <van-search
              v-model="searchValue"
              placeholder="请输入搜索关键词"
              bind:search="onSearch"
            >
              <!--              <van-button style="line-height: 30px;height: 30px;" type="info" slot="action" @click="onClick">搜索</van-button>-->
            </van-search>
          </van-sticky>
            <van-tab title="待我处理"><todolist ref="todolist" v-if="tabIndex === 0"></todolist></van-tab>
            <van-tab title="我已办的"><donelist ref="donelist" v-if="tabIndex === 1"></donelist></van-tab>
            <van-tab title="我发起的"><launchlist ref="launchlist" v-if="tabIndex === 2"></launchlist></van-tab>
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
      'userinfo'
    ])
  },
  created () {},
  watch: {
    searchValue (old, newV) {
      this.ththrottle(this.handleSearch(), 1000)
      this.$store.dispatch('setsearchValue', this.searchValue)
    }
  },
  data () {
    return {
      searchValue: '',
      current: 1,
      active: 0,
      tabIndex: 0,
      id: JSON.parse(sessionStorage.getItem('userinfo')).id
    }
  },
  methods: {
    change (event) {
      this.tabIndex = event
      this.searchValue = ''
      if (event === 0) {
        if (this.$refs.todolist) {
          console.log(this.tabIndex + 1 + '')
          this.$refs.todolist.searchType = this.tabIndex + 1 + ''
          // this.$refs.todolist.currentPage = 1
          // this.$refs.todolist.loadData()
        }
      }
      if (event === 1) {
        console.log('切换到已办了')
        if (this.$refs.donelist) {
          // this.$refs.donelist.searchType = this.tabIndex + 1 + ''
          this.$refs.donelist.searchType = '3'
          // this.$refs.launchlist.currentPage = 1
          // this.$refs.launchlist.loadData()
        }
      }
      if (event === 2) {
        console.log(this.$refs.launchlist)
        if (this.$refs.launchlist) {
          this.$refs.launchlist.searchType = this.tabIndex + 1
          // this.$refs.launchlist.currentPage = 1
          // this.$refs.launchlist.loadData()
        }
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
  }
}
</script>

<style scoped>
  >>>.van-sticky--fixed{
    top:34px;
  }
</style>
