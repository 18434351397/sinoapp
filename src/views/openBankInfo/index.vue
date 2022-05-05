<template>
  <div class="header-top">
  <!-- // 开放银行 -->
    <div  v-if="isOpenBank==='1'">
       <van-sticky offset-top="0">
         <div class="title_option" >
           <div >
        <van-search v-model="searchValue" placeholder="请输入搜索关键词">
        </van-search>
        </div>
        <div style="width:40vw">
        <el-select v-model="sortValue" @change="sortFnc($event)" >
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
        </div>
        </div>
      </van-sticky>
       <launchlist ref="launchlist" v-if="ishowWhitchPage === '0'"></launchlist>
       <div v-if="ishowWhitchPage === '0'">000000</div>
        <todolist ref="todolist" v-if="ishowWhitchPage === '1'"></todolist>
       <div v-if="ishowWhitchPage === '1'">1111111</div>
       <div v-if="ishowWhitchPage === '2'">2222222</div>
        <donelist ref="donelist" v-if="ishowWhitchPage === '2'"></donelist>

    </div>
    <!-- // 开放银行 -->
  </div>
</template>

<script>
import todolist from './components/todoFlowList'
import donelist from './components/doneFlowList'
import launchlist from './components/launchList'
import { Login, getInfo } from '../../api/user'
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  components: {
    todolist,
    donelist,
    launchlist
  },
  computed: {
    ...mapGetters(['userinfo', 'active']),
    isOpenBank() {
      return this.isOpenBankMark
    },

    ishowWhitchPage: {
      get() {
        return this.ishowWhitchPageMark
      },
      set(v) {}
    }
  },
  created() {
    this.isOpenBankMark = this.$route.query.isOpenBankMark
    this.ishowWhitchPageMark = this.$route.query.ishowWhitchPageMark
    this.$store.commit('SET_OPENBANINFO', {
      isOpenBankMark: this.isOpenBankMark,
      ishowWhitchPageMark: this.ishowWhitchPageMark
    })
    this.onOpenBankLogin()
  },
  watch: {
    searchValue(old, newV) {
      this.$store.dispatch('setsearchValue', this.searchValue)
    }
  },
  data() {
    return {
      isOpenBankMark: '1', // 1是
      ishowWhitchPageMark: '0',
      searchValue: '',
      sort: true, // 待办默认属性
      sort2: false, // 已办默认属性
      sort3: false, // 发起默认属性
      sortValue: true, // 默认值
      current: 1,
      options: [
        {
          value: true,
          label: '时间正序排列'
        },
        {
          value: false,
          label: '时间倒序排列'
        }
      ],
      // active: 0,
      tabIndex: 0,
      id: JSON.parse(sessionStorage.getItem('userinfo')).id
    }
  },
  methods: {
    // 开放银行
    onOpenBankLogin () {
      const data = {
        // userAccount: this.userAccount,
        // password: this.password,
        userAccount: 'liyufeng',
        password: '15532575793*v',
        clientType: 'mobile'
      }
      Login(data).then(res => {
        if (res.resultCode === '200') {
          this.ishowWhitchPage = '1'
          localStorage.setItem('userAccount', data.userAccount)
          this.onGetUserInfo()
        } else {
          this.$toast(res.bizResultMessage)
        }
      }).catch(err => {
        console.log(err)
        this.$toast('(╥﹏╥) 我走丢了，请稍后再试！')
      })
    },
    onGetUserInfo () {
      getInfo().then(res => {
        if (res.resultCode === '200') {
          this.ishowWhitchPage = '1'
          this.$store.commit('SET_USERINFO', res)
          if (this.ishowWhitchPageMark === '0') {
            this.$nextTick(() => {
              this.$refs.launchlist.loadData()
            })
          } else if (this.ishowWhitchPageMark === '1') {
            this.$nextTick(() => {
              console.log('this.$refs.todolist1111', this.$refs.todolist)
              this.$refs.todolist.loadData()
              this.$refs.todolist.onGetUerId()
            })
          } else {
            this.$nextTick(() => {
              this.$refs.donelist.loadData()
            })
          }
        } else {
          this.$toast(res.bizResultMessage)
        }
      }).catch(err => {
        console.log(err)
        this.$toast('(╥﹏╥) 我走丢了，请稍后再试！')
      })
    },

    // 排序
    sortFnc(item) {
      console.log(111, item, 2222, event)
      if (this.ishowWhitchPageMark === '0') {
        this.sortValue = !!item
        this.$refs.launchlist.loadData(item)
      } else if (this.ishowWhitchPageMark === '1') {
        this.sortValue = !!item
        this.$refs.todolist.loadData(item)
      } else if (this.ishowWhitchPageMark === '2') {
        this.sortValue = !!item
        this.$refs.donelist.loadData(item)
      }
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.ththrottle(this.handleScroll, 1000))
      this.searchValue = ''
    }
  },
  destroyed() {
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
.title_option{
  background-color: #fff;
  // height: 56px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.van-toast {
  background-color: rgba(241, 239, 239, 0.8);
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
    .el-select {
      margin-left: 0;
      padding-right: 12px;
      .el-input {
        input {
          width: 10em;
        }
      }
    }
  }
  .el-input__inner {
    height: 36px;
    line-height: 36px;
  }
}
div .sort {
  background: rgba(25, 137, 250, 0.65);
  box-shadow: 0px 0px 3px 1px #1989faa6;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
}
.el-select-dropdown {
  margin: 0;
}
.el-popper {
  margin-top: 0 !important;
}
</style>
