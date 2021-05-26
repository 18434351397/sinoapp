<template>
  <div class="header-top">
    <van-tabs @change="change" :active="active" swipeable sticky color="#1989fa">
      <van-sticky offset-top="78">
        <van-search v-model="searchValue" placeholder="请输入搜索关键词">
          <!--              <van-button style="line-height: 30px;height: 30px;" type="info" slot="action" @click="onClick">搜索</van-button>-->
        </van-search>
        <!-- <div>
          时间 <van-button class="sort" @click="sortFnc(active)" type="info" size="small">{{sortValue}}</van-button>
        </div> -->
        <el-select v-model="sortValue" @change="sortFnc($event, active)">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </van-sticky>
      <van-tab title="待我处理">
        <todolist ref="todolist" v-if="active === 0"></todolist>
      </van-tab>
      <van-tab title="我发起的">
        <launchlist ref="launchlist" v-if="active === 1"></launchlist>
      </van-tab>
      <van-tab title="我已办的">
        <donelist ref="donelist" v-if="active === 2"></donelist>
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
    ...mapGetters(['userinfo', 'active'])
  },
  created() {
    if (this.active === 0) {
      this.sortValue = this.sort ? true : false
    } else if (this.active === 1) {
      this.sortValue = this.sort2 ? true : false
    } else if (this.active === 2) {
      this.sortValue = this.sort3 ? true : false
    }
  },
  mounted() {},
  watch: {
    searchValue(old, newV) {
      // this.ththrottle(this.handleSearch(), 1000)
      this.$store.dispatch('setsearchValue', this.searchValue)
    }
  },
  data() {
    return {
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
    change(event) {
      this.$store.dispatch('setactive', event)
      this.tabIndex = event
      this.searchValue = ''
      if (event === 0) {
        this.sortValue = this.sort ? true : false
      }
      if (event === 1) {
        this.sortValue = this.sort2 ? true : false
      }
      if (event === 2) {
        this.sortValue = this.sort3 ? true : false
      }
    },
    // 排序
    sortFnc(item, event) {
      if (event === 0) {
        this.sortValue = item ? true : false
        this.$refs.todolist.loadData(item)
      } else if (event === 1) {
        this.sortValue = item ? true : false
        this.$refs.launchlist.loadData(item)
      } else if (event === 2) {
        this.sortValue = item ? true : false
        this.$refs.donelist.loadData(item)
      }
    },

    onClick() {
      if (this.searchValue) {
        this.searchValue = ''
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
