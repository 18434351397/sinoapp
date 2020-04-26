/**
*@author CheYongJi
*@date 2020/4/15 12:51
*@title index
*/
<template>
    <div style="height: 100%;">
      <van-sticky>
      <NavBar/>
      </van-sticky>
      <div style="background-color: #f8f8f8;">
        <van-dialog v-model="show" @confirm="confirmCounterSign" title="会签" show-cancel-button>
          <div style="margin: 0;padding: 10px;height: 300px;overflow: scroll;">
            <el-input
              placeholder="输入关键字进行过滤"
              v-model="filterText">
            </el-input>
            <el-tree
              accordion
              check-on-click-node
              check-strictly
              node-key="id"
              @check-change="handleCheckChange"
              @current-change="handleCurrentChange"
              show-checkbox
              style="margin: 0;"
              class="filter-tree"
              :data="treeList"
              :props="defaultProps"
              :filter-node-method="filterNode"
              ref="tree">
            </el-tree>
          </div>
        </van-dialog>
        <van-form id='editPwdForm' @submit="onSubmit">
          <van-field
            name="formTitle"
            v-model="flowList.formTitle"
            type="text"
            label="流程标题:"
            readonly
          />
          <van-field
            v-model="flowList.currFlowName"
            type="text"
            label="流程名称:"
            readonly
          />
          <van-field
            style="display: none;"
            name="objName"
            v-model="flowList.objName"
            type="text"
            readonly
          />
          <van-field
            style="display: none;"
            name="currTaskDefinitionKey"
            v-model="flowList.currTaskDefinitionKey"
            type="text"
            readonly
          />
          <van-field
            v-model="flowList.statusDes"
            type="text"
            label="流程状态:"
            readonly
          />
          <van-field
            v-model="flowList.currTaskDefinitionName"
            type="text"
            label="当前节点:"
            readonly
          />
          <van-field
            v-model="flowList.currUserName"
            type="text"
            label="当前处理人:"
            readonly
          />
          <van-field
            v-model="flowList.userName"
            type="text"
            label="发起人:"
            readonly
          />
          <van-field
            v-model="flowList.createdDate"
            type="text"
            label="发起时间:"
            readonly
          />
          <!--审批流程详情部分开始-->
          <router-view ref="detail" />
          <!--审批流程详情部分结束-->
          <div style="margin-bottom: 10px;">
            <div style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;">历史办理详情</div>
            <van-steps direction="vertical" :active="historyList.length-1" active-color="#409EFF">
              <van-step :key="index" v-for="(item, index) in historyList">
                <h3>【{{item.taskName}}】<span v-if="!item.porxy">{{item.userName + ':' + item.remark}}</span><span v-else>{{item.proxyUserName}}(待办)</span></h3>
                <span>{{item.createdDate}}</span>
              </van-step>
            </van-steps>
          </div>
          <div style="margin-bottom: 70px;">
            <div style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;">审批</div>
            <van-field name="radio" label="审批结果">
              <template #input>
                <van-radio-group @change="onchange" v-model="radio" direction="horizontal">
                  <van-radio name="1">同意</van-radio>
                  <van-radio name="2">不同意</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <van-field
              name="content"
              v-model="message"
              rows="2"
              autosize
              label="办理意见"
              type="textarea"
              maxlength="50"
              placeholder="请输入办理意见"
              show-word-limit
            />
            <el-select style="width: 100%;" @change="pullSelect" v-model="region" placeholder="请选择步骤" >
              <el-option :value="item" :label="item.text" :key="index" v-for="(item, index) in nextSelectOpts">{{item.text}}</el-option>
            </el-select>
          </div>
          <div class="submitBox">
            <van-button style="width: 30%" round block  type="info" native-type="submit">
              提交
            </van-button>
            <van-button style="width: 30%" @click="counterSign" round block type="default" native-type="button">
              会签
            </van-button>
            <van-button style="width: 30%" @click="back" round block type="default" native-type="button">
              取消
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
</template>

<script>
import { flowForm, flowFormUpdate, getOrgTree } from '../../api/flowfrom'
import NavBar from '@/components/Navbar'
import { Dialog } from 'vant'

export default {
  name: 'index',
  components: {
    NavBar
  },
  data () {
    return {
      treeList: [],
      show: false,
      region: {},
      flowList: [],
      url: '',
      dataList: this.$route.query,
      historyList: [],
      radio: '1',
      message: '',
      nextSelectOpts: [],
      filterText: '',
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '车永基'
            }, {
              id: 10,
              label: '田冬慧'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created () {
    this.message = this.radio === '1' ? '同意' : '不同意'
    const url = '/' + this.dataList.searchType + '/' + this.dataList.id
    flowForm(url).then(res => {
      if (res) {
        this.flowList = res.data
        this.url = res.data.url
        this.historyList = res.data.historyList
        this.handleNextSelectOpts(res.data)
        this.flowList.createdDate = this.flowList.createdDate.split('.')[0]
      }
    })
    getOrgTree().then(res => {
      if (res) {
        this.treeList = res.data ? res.data : []
      }
      // this.treeList = this.toTree(res.data)
    })
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    },
    show (val) {
      if (!val) {
        this.$refs.tree.setCheckedKeys([])
      }
    }
  },
  methods: {
    // 处理树的数据
    toTree (data) {
      // 删除 所有 children,以防止多次调用
      data.forEach(function (item) {
        delete item.children
      })
      // 将数据存储为 以 id 为 KEY 的 map 索引数据列
      var map = {}
      data.forEach(function (item) {
        map[item.id] = item
      })
      var val = []
      data.forEach(function (item) {
        item.label = item.text
        // 以当前遍历项，的pid,去map对象中找到索引的id
        var parent = map[item.parent]
        // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
        if (parent) {
          (parent.children || (parent.children = [])).push(item)
        } else {
          // 如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
          val.push(item)
        }
      })
      return val
    },
    // 点击提交按钮要进行的操作
    onSubmit (values) {
      delete values.radio
      delete values.undefined
      if (this.region === true) {
        values.submitTask = this.region.text
        values.content = values.content + ' >>>>' + this.region.text
      } else {
        values.content = values.content + ' >>>>' + '【下一步】'
        values.submitTask = '【下一步】'
      }
      this.url = this.url.slice(0, -11) + '/app/form/bizsupplierinfoform/update'
      values.file = this.$refs.detail.fileList
      const data = {
        url: this.url,
        data: values
      }
      console.log(data)
      this.submit(data)
    },
    // 提交方法-->调接口进行提交
    submit (values) {
      Dialog.confirm({
        message: '你确定要提交吗？'
      }).then(() => {
        flowFormUpdate(values).then(res => {
          if (res.resultCode === '200') {
            this.$router.push('/approval')
          }
        })
      }).catch(() => {
      })
    },
    onchange () {
      this.message = this.radio === '1' ? '同意' : '不同意'
      // if (this.radio === '1') {
      //   this.message = '同意'
      // } else {
      //   this.message = '不同意'
      // }
    },
    handleNextSelectOpts (data) {
      data.nextTaskList.forEach(item => {
        if (data.nextTaskList.length === 1 || !data.nextTaskIsBranch || data.nextTaskIsBranch === false) {
          const arr = {
            id: 'next__' + item.userId,
            text: ('【下一步】' + item.nextTaskName + '-' + item.nextUserName)
          }
          this.nextSelectOpts.push(arr)
        } else if (item.userId !== 'emptyuser') {
          const arr = {
            id: 'next_' + item.nextTaskDefinitionKey + '_' + item.userId,
            text: ('【下一步】' + item.nextTaskName + '-' + item.nextUserName)
          }
          this.nextSelectOpts.push(arr)
        }
      })
      if (this.nextSelectOpts.length > 0 || this.flowList.currTaskDefinitionKey === 'Todo') {

      } else {
        var item = {
          id: '',
          text: '【下一步】'
        }
        if (data.nextTaskList.length > 0) {
          for (var i = 0; i < data.nextTaskList.length; i++) {
            if (i === data.nextTaskList.length - 1 || data.nextTaskList[i].nextTaskDefinitionKey === 'CauseGroup') {
              item = {
                id: 'next_' + data.nextTaskList[i].nextTaskDefinitionKey + '_' + data.nextTaskList[i].userId,
                text: ('【下一步】' + data.nextTaskList[i].nextTaskName + '-' + data.nextTaskList[i].nextUserName)
              }
              break
            }
          }
        }
        this.nextSelectOpts.push(item)
      }
    },
    handleContent (data) {
    },
    pullSelect (data) {
      console.log(this.region)
    },
    counterSign () {
      this.show = true
      console.log('huiqian')
    },
    confirmCounterSign () {
      console.log(this.$refs.tree.getCheckedKeys())
      console.log(this.$refs.tree.getCheckedNodes())
      console.log('会签提交')
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    handleCheckChange (data, checked, indeterminate) {
      console.log(checked)
    },
    handleCurrentChange (data, node) {
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .submitBox {
    z-index: 999;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    background: #fff;
  }
  .van-radio-group--horizontal {
    margin: 0;
  }
  .el-tree-node__content {
    margin: 0;
  }
  >>> .el-tree-node__label {
    margin: 0;
  }
  >>> .el-tree-node__content>.el-tree-node__expand-icon {
    margin: 0;
  }
  >>> .el-tree-node__content>label.el-checkbox {
    margin: 0 8px 0;
  }
</style>
