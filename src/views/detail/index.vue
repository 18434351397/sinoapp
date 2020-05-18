/** *@author CheYongJi *@date 2020/4/15 12:51 *@title index */
<template>
  <div style="height: 100%;">
    <van-sticky>
      <NavBar />
    </van-sticky>
    <div style="background-color: #f8f8f8;">
      <van-dialog v-model="show" @confirm="confirmCounterSign" title="会签" show-cancel-button>
        <div style="margin: 0;padding: 10px;height: 300px;overflow: scroll;">
          <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
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
            ref="tree"
          ></el-tree>
        </div>
      </van-dialog>
      <van-form id="editPwdForm" @submit="onSubmit">
        <van-field
          name="formTitle"
          v-model="flowList.formTitle"
          type="text"
          label="流程标题:"
          readonly
        />
        <van-field v-model="flowList.currFlowName" type="text" label="流程名称:" readonly />
        <van-field
          style="display: none;"
          name="commitType"
          v-model="commitType"
          type="text"
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
        <van-field v-model="flowList.statusDes" type="text" label="流程状态:" readonly />
        <van-field v-model="flowList.currTaskDefinitionName" type="text" label="当前节点:" readonly />
        <van-field v-model="flowList.currUserName" type="text" label="当前处理人:" readonly />
        <van-field v-model="flowList.userName" type="text" label="发起人:" readonly />
        <van-field v-model="flowList.createdDate" type="text" label="发起时间:" readonly />
        <!--审批流程详情部分开始-->
        <router-view ref="detail" />
        <!--审批流程详情部分结束-->
        <div style="margin-bottom: 10px;">
          <div
            style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;"
          >历史办理详情</div>
          <van-steps direction="vertical" :active="historyList.length - 1" active-color="#409EFF">
            <van-step :key="index" v-for="(item, index) in historyList">
              <h5>
                【{{ item.taskName }}】
                <div v-if="!item.porxy">
                  {{ item.userName }}
                  <p>{{ item.remark }}</p>
                </div>
                <span v-else>{{ item.proxyUserName }}(待办)</span>
              </h5>
              <span>{{ item.createdDate }}</span>
            </van-step>
          </van-steps>
        </div>
        <div style="margin-bottom: 70px;">
          <div
            style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;"
          >审批</div>
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
          <el-select
            style="width: 100%;"
            @change="pullSelect"
            v-model="region.id"
            placeholder="请选择步骤"
          >
            <el-option
              :value="item.id"
              :label="item.text"
              :key="index"
              v-for="(item, index) in nextSelectOpts"
            ></el-option>
          </el-select>
        </div>
        <div class="submitBox">
          <van-button style="width: 30%" round block type="info" native-type="submit">提交</van-button>
          <van-button
            style="width: 30%"
            @click="counterSign"
            round
            block
            type="default"
            native-type="submit"
          >会签</van-button>
          <van-button
            style="width: 30%"
            @click="back"
            round
            block
            type="default"
            native-type="button"
          >取消</van-button>
        </div>
      </van-form>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>
<script>
import { flowForm, flowFormUpdate, getOrgTree } from '../../api/flowfrom'
import NavBar from '@/components/Navbar'
import { Dialog, Toast } from 'vant'

export default {
  name: 'index',
  components: {
    NavBar
  },
  data () {
    return {
      commitType: '',
      treeList: [],
      show: false,
      region: {
        id: ''
      },
      flowList: [],
      url: '',
      submitUrl: '',
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
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '车永基'
                },
                {
                  id: 10,
                  label: '田冬慧'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      hasProcessByBusiAnalysis: false,
      backSelectOpts: []
    }
  },
  created () {
    this.message = this.radio === '1' ? '同意' : '不同意'
    const url = '/' + this.dataList.searchType + '/' + this.dataList.id
    flowForm(url).then((res) => {
      if (res) {
        this.flowList = res.data
        this.url = res.data.url
        this.submitUrl = res.data.url
        this.historyList = res.data.historyList
        this.handleNextSelectOpts(res.data)
        this.handleBackSelectOpts(res.data)
        this.flowList.createdDate = this.flowList.createdDate.split('.')[0]
      }
    })
    getOrgTree().then((res) => {
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
          ; (parent.children || (parent.children = [])).push(item)
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
      values.submitTask = this.region.id ? this.region.id : '【下一步】'
      if (values.submitTask !== '【下一步】') {
        values.content =
          values.content +
          ' >>>>' +
          document.querySelector('.el-select').children[0].children[0].value
      } else {
        values.content = values.content + ' >>>>' + '【下一步】'
      }
      // 接口调用
      // this.url = this.url.slice(0, -11) + 'updateVOs'

      // 调用接口判断方法
      this.specialFun(values)
      values.file = this.$refs.detail.fileList ? this.$refs.detail.fileList : []
      values.fileIdList = this.$refs.detail.fileIdList ? this.$refs.detail.fileIdList : []
      // 判断是否是印章保管登记
      if (this.dataList.currFlowId === 'SealKeepApprove' || this.dataList.currFlowId === 'PurchaseApprove') {
        values.fileIdList = this.$refs.detail.fileIdList ? this.$refs.detail.fileIdList : []
      } else { }
      // 判断是否是项目立项流程
      if (this.dataList.currFlowId === 'CommonApprove') {
        values.stageData = this.$refs.detail.projpprojectstageinfo
      } else { }
      // 判断是否是采购合同流程
      if (this.dataList.currFlowId === 'PurchaseApprove') {
        values.payforList = this.$refs.detail.payforList ? this.$refs.detail.payforList : []
        values.goodsList = this.$refs.detail.goodsList ? this.$refs.detail.goodsList : []
      } else { }
      // 判断印章管理员
      if (this.dataList.currFlowId === 'SealKeepApprove' &&
        this.dataList.currUserName === '白建平' &&
        this.dataList.currTaskDefinitionKey === 'SealManager' &&
        this.dataList.currTaskDefinitionName === '印章管理员') {
        values.sealTypes = this.$refs.detail.sealTypes ? this.$refs.detail.sealTypes : []
      } else { }
      if (values.file.length <= 0) {
        delete values.file
      } else { }
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
      })
        .then(() => {
          flowFormUpdate(values).then((res) => {
            if (res.resultCode === '200') {
              Toast.loading({
                duration: 1000,
                loadingType: 'spinner',
                type: 'success',
                forbidClick: true,
                message: res.resultMessage,
                onClose: () => {
                  this.$router.push('/approval')
                }
              })
            } else {
              Toast.fail(res.resultMessage)
              this.url = this.submitUrl
            }
          })
        })
        .catch(() => {
          this.url = this.submitUrl
        })
    },
    specialFun (values) {
      const user = this.dataList
      if (
        user.currTaskDefinitionName === '运营管理部' &&
        user.currUserName === '李月平' &&
        user.currTaskDefinitionKey === 'BusiAnalysis' &&
        user.currFlowId === 'ContrReviewApprove'
      ) {
        this.url = this.url.slice(0, 29) + '/busiAnalysisApproval'
      } else if (
        user.currTaskDefinitionName === '运营管理部经理' &&
        user.currTaskDefinitionKey === 'BusiAnalysisManager' &&
        user.currFlowId === 'ContrReviewApprove'
      ) {
        this.url = this.url.slice(0, 29) + '/busiAnalysisManagerApproval'
      } else if (this.dataList.currFlowId === 'SealKeepApprove' &&
        this.dataList.currUserName === '白建平' &&
        this.dataList.currTaskDefinitionKey === 'SealManager' &&
        this.dataList.currTaskDefinitionName === '印章管理员') {
        this.url = this.url.slice(0, -10) + '/update' // 白建平并且是印章保管流程
      } else if (this.dataList.currTaskDefinitionName === '受理退回' &&
        (this.dataList.currUserName === this.dataList.userName)) { // 判断当前节点是受理退回并且当前处理人=== 当前发起人
        this.url = this.url.slice(0, -10) + '/update'
      } else if (
        user.currTaskDefinitionKey === 'BusiAnalysisManager' &&
        user.currFlowId === 'FinanceApprove'
      ) {
        this.url = this.url.split('b')[0] + 'update/busiAnalysisManager'
        console.log(this.url)
      } else if (this.dataList.currFlowId === 'CommonApprove' &&
        this.dataList.currTaskDefinitionName === '受理退回' &&
        (this.dataList.currUserName === this.dataList.userName)) {
        this.url = this.url.slice(0, -10) + '/updateProject' // 项目立项 特殊处理-->判断当前节点是受理退回并且当前处理人=== 当前发起人
      } else if (this.dataList.currFlowId === 'CommonApprove') {
        this.url = this.url.slice(0, -10) + '/updateProject' // 项目立项接口
      } else if (this.dataList.currFlowId === 'ContractFileApprove' &&
        this.dataList.currTaskDefinitionKey !== 'DepotManager' &&
        this.dataList.currTaskDefinitionName !== '库管') {
        this.url = this.url.slice(0, -10) + '/busi/comit/task' // 合同存档
      } else {
        // 投标保证金接口的特殊处理
        if (this.url.includes('cashier')) { // 投标保证金的最后一个审批人的特殊处理
          if (this.url.includes('pay')) {
            this.url = this.url.slice(0, -17) + '/update'
          } else {
            this.url = this.url.slice(0, -12) + 'update'
          }
        } else if (this.url.includes('fundmanagercheck')) { // 投标保函的最后一个审批人的特殊处理
          this.url = this.url.slice(0, -22) + '/update'
        } else if (this.url.includes('pay')) { // 付业务往来款的最后一个审批人的特殊处理
          this.url = this.url.slice(0, -16) + '/update'
        } else {
          // this.url = this.url.slice(0, -12) + 'updateVOs' // 供应商接口
          // this.url = this.url.slice(0, -12) + '/update/task' // 销售合同接口  投标备案接口
          // 投标报价接口 印信使用接口  分子公司接口  风险保证金 解冻风险保证金 合同存档提交接口
          // this.url = this.url.slice(0, -12) + '/comit/task'
          // 投标保证金接口 投标保函接口   印章保管流程接口 采购合同接口  履约保函 发文管理 印章销毁 个人借款接口 内部收益划转接口
          this.url = this.url.slice(0, -12) + '/update'
          // this.url = this.url.slice(0, -12) + '/updateVO' // 合作协议接口
        }
      }
    },
    onchange () {
      this.message = this.radio === '1' ? '同意' : '不同意'
      // if (this.radio === '1') {
      //   this.message = '同意'
      // } else {
      //   this.message = '不同意'
      // }
    },
    //  处理下一步节点的方法
    handleNextSelectOpts (data) {
      data.nextTaskList.forEach((item) => {
        if (
          data.nextTaskList.length === 1 ||
          !data.nextTaskIsBranch ||
          data.nextTaskIsBranch === 'false'
        ) {
          const arr = {
            id: 'next__' + item.userId,
            text: '【下一步】' + item.nextTaskName + '-' + item.nextUserName
          }
          this.nextSelectOpts.push(arr)
        } else if (item.userId !== 'emptyuser') {
          const arr = {
            id: 'next_' + item.nextTaskDefinitionKey + '_' + item.userId,
            text: '【下一步】' + item.nextTaskName + '-' + item.nextUserName
          }
          this.nextSelectOpts.push(arr)
        }
      })
      if (
        this.nextSelectOpts.length > 0 ||
        this.flowList.currTaskDefinitionKey === 'Todo'
      ) {
      } else {
        var item = {
          id: '',
          text: '【下一步】'
        }
        if (data.nextTaskList.length > 0) {
          for (var i = 0; i < data.nextTaskList.length; i++) {
            if (
              i === data.nextTaskList.length - 1 ||
              data.nextTaskList[i].nextTaskDefinitionKey === 'CauseGroup'
            ) {
              item = {
                id:
                  'next_' +
                  data.nextTaskList[i].nextTaskDefinitionKey +
                  '_' +
                  data.nextTaskList[i].userId,
                text:
                  '【下一步】' +
                  data.nextTaskList[i].nextTaskName +
                  '-' +
                  data.nextTaskList[i].nextUserName
              }
              break
            }
          }
        }
        this.nextSelectOpts.push(item)
      }
    },
    handleBackSelectOpts (data) {
      if (
        data.currTaskDefinitionKey !== 'AcceptBack' &&
        data.currTaskDefinitionKey !== 'Todo'
      ) {
        for (var i = 0; i < data.historyList.length; i++) {
          if (
            data.historyList[i].status !== 3 &&
            data.historyList[i].status !== -1 &&
            data.historyList[i].taskDefinitionKey !== 'AcceptBack'
          ) {
            // 回退列表中只展现同一流程实例的历史审批，避免主、子流程间退回异常的问题
            if (
              data.processInstanceId ===
              data.historyList[i].processInstanceId ||
              data.historyList[i].taskDefinitionKey === 'Accept'
            ) {
              if (
                data.historyList[i].taskDefinitionKey !==
                data.currTaskDefinitionKey
              ) {
                // 判断是否是合同存档 同时节点是不是库管 不能退回
                if (
                  data.currFlowId === 'ContractFileApprove' &&
                  data.currTaskDefinitionKey === 'DepotManager'
                ) {
                  continue
                } else {
                  // 非会签、回退办理人，展示到回退列表中
                  var item = {
                    id:
                      'back_' +
                      data.historyList[i].taskDefinitionKey +
                      '_' +
                      data.historyList[i].createdBy,
                    text:
                      '【退回】' +
                      data.historyList[i].taskName +
                      '-' +
                      data.historyList[i].userName
                  }
                  this.backSelectOpts.push(item)
                  this.backSelectOpts = Array.from(new Set(this.backSelectOpts))
                }
              } else {
                // 如果历史审批中出现当前节点则说明目前处于退回后提交，则后续审批意见是在当前节点之后，不能展示在退回列表中
                break
              }
            }
            //
            if (data.historyList[i].taskDefinitionKey === 'BusiAnalysis') {
              this.hasProcessByBusiAnalysis = true
            }
          } else if (data.historyList[i].status === -1) {
            // 回显暂存数据
            // $('#flowContent').val(data.historyList[i].remark);
          }
        }
      } else {
      }
      this.nextSelectOpts = this.nextSelectOpts.concat(this.backSelectOpts)
    },
    handleContent (data) { },
    // 下拉框选择值发生变化时，调用方法
    pullSelect (data) {
      if (this.region.id.includes('back')) {
        this.commitType = 'return'
      } else {
        this.commitType = ''
      }
    },
    // 会签弹框显示
    counterSign (data) {
      this.show = true
      if (this.show) {
        this.commitType = 'meeting'
      }
    },
    // 会签方法提交
    confirmCounterSign () {
      console.log(this.$refs.tree.getCheckedKeys())
      console.log(this.$refs.tree.getCheckedNodes())
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    handleCheckChange (data, checked, indeterminate) {
      console.log(checked)
    },
    handleCurrentChange (data, node) { },
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

>>> .el-tree-node__content > .el-tree-node__expand-icon {
  margin: 0;
}

>>> .el-tree-node__content > label.el-checkbox {
  margin: 0 8px 0;
}
</style>
<style lang="less">
div.public-title {
  .van-cell:not(:last-child)::after {
    border-bottom: none;
  }
}
</style>
