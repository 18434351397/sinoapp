/** *@author CheYongJi *@date 2020/4/15 12:51 *@title index */
<template>
  <div style="height: 100%;" id="detailBox">
    <van-sticky>
      <NavBar />
    </van-sticky>
    <div style="background-color: #f8f8f8;">
      <van-dialog
        v-model="show"
        @confirm="confirmCounterSign"
        @close="closeDialog"
        title="会签"
        show-cancel-button
      >
        <div style="margin: 0;padding: 10px;height: 300px;overflow: scroll;">
          <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
          <el-tree
            accordion
            check-on-click-node
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
        <div class="detail-header-title">
          <van-field
            name="formTitle"
            class="process-title"
            v-model="flowList.formTitle"
            type="text"
            label=""
            readonly
          >
            <template #input>
              <div style="text-align: left;margin: 0;display: flex;font-size: 16px;">
                <div style="width: 14px;height: 14px; border-radius: 50%;background-color: #000;margin-top: 0.3em;"></div>
                <p style="width: 94%;margin-left: 6px;">{{ flowList.formTitle }}</p>
              </div>
            </template>
          </van-field>
          <van-field v-model="flowList.currFlowName" type="text" label="流程名称:" readonly>
            <template #input>
              <div style="text-align: left;margin: 0;">{{ flowList.currFlowName }}</div>
            </template>
          </van-field>
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
          <van-field v-model="flowList.statusDes" type="text" label="流程状态:" readonly>
            <template #input>
              <div style="text-align: left;margin: 0;">{{ flowList.statusDes }}</div>
            </template>
          </van-field>
          <van-field v-model="flowList.currTaskDefinitionName" type="text" label="当前节点:" readonly>
            <template #input>
              <div style="text-align: left;margin: 0;">{{ flowList.currTaskDefinitionName }}</div>
            </template>
          </van-field>
          <van-field v-model="flowList.currUserName" type="text" label="当前处理人:" readonly>
            <template #input>
              <div style="text-align: left;margin: 0;">{{ flowList.currUserName }}</div>
            </template>
          </van-field>
          <van-field v-model="flowList.userName" type="text" label="发起人:" readonly>
            <template #input>
              <div style="text-align: left;margin: 0;">{{ flowList.userName }}</div>
            </template>
          </van-field>
          <van-field v-model="flowList.createdDate" type="text" label="发起时间:" readonly>
            <template #input>
              <div style="text-align: left;margin: 0;">{{ flowList.createdDate }}</div>
            </template>
          </van-field>
        </div>
        <!--审批流程详情部分开始-->
        <router-view ref="detail" />
        <!--审批流程详情部分结束-->
        <div
          class="history-detail"
          v-bind:class="{
            historyDetail: isShowAgree && isApproval && isStatusDes,
            historyStatus: isShowAgree && isApproval && !isStatusDes,
            historyDetails: isShowAgree && !isApproval,
            historyButton: !isShowAgree
          }"
        >
          <div class="title">历史办理详情</div>
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
        <transition name="fade">
        <div class="approval" v-if="isShowAgree">
          <div v-if="isApproval" class="approval-select">
            <div
              style="border-top: 2px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;display: flex;align-items: center;"
            ><div style="width: 14px;height: 14px; border-radius: 50%;background-color: #1989fa;margin: 0 5px 0 0;"></div>
              <span style="margin: 0;">审批</span></div>
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
              class="message-textarea"
              v-model="message"
              @focus="changeFocus"
              rows="2"
              autosize
              label="办理意见"
              type="textarea"
              maxlength="2000"
              placeholder="请输入办理意见"
              show-word-limit
            />
            <el-select
              v-if="isStatusDes"
              class="region-select"
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
            <div class="submitBox">
              <van-button
                style="width: 30%"
                v-if="!isSBtn"
                round
                block
                type="info"
                native-type="submit"
              >提交</van-button>
              <van-button
                v-if="!isSBtn && isStatusDes"
                style="width: 30%"
                @click="counterSign"
                round
                block
                type="info"
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
          </div>
        </div>
        </transition>
        <footer class="footer"></footer>
      </van-form>
    </div>
    <van-toast id="van-toast" />
    <!-- 固钉 -->
    <div class="affix">
      <van-button v-if="isShow" @click="approvalFnc" class="affix-approval" type="default">审批</van-button>
      <i class="el-icon-download affix-anchor" v-if="isToEnd"  @click="inserted"></i>
    </div>
  </div>
</template>
<script>
import { flowForm, flowFormUpdate, getOrgTree } from '../../api/flowfrom'
import NavBar from '@/components/Navbar'
import { mapGetters } from 'vuex'
import { Dialog, Toast } from 'vant'

export default {
  name: 'index',
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(['active'])
  },
  data () {
    return {
      commitType: '',
      signData: {}, // 会签数据
      signIds: [], // 会签id
      signText: '', // 会签人员名称
      isApproval: false, // 是否显示审批功能
      isStatusDes: true, // 当前流程是否是会签
      isToEnd: true, // 一键到底
      isShow: true, // 是否展示审批按钮
      isShowAgree: false, // 判断当前是否是待办流程
      treeList: [],
      isSBtn: false, // 废弃和会签按钮
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
      data: [],
      map: new Map(), // 初始化下拉框数据 - 回退
      mapData: [], // 最终填充的数据
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      scroll: '',
      hasProcessByBusiAnalysis: false,
      backSelectOpts: [],
      loading: true
    }
  },
  created () {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    if (this.dataList.statusDes === '会签中') {
      this.isStatusDes = false
    }
    if (
      this.dataList.currTaskDefinitionName === '受理退回' &&
      this.dataList.currUserName === this.dataList.userName
    ) {
      // 判断当前节点是受理退回并且当前处理人=== 当前发起人
      // 废弃功能
      this.isSBtn = true
    }
    this.message = this.radio === '1' ? '同意' : '不同意'
    const url = '/' + this.dataList.searchType + '/' + this.dataList.id
    // 判断是否显示底部功能
    if (this.active === 0) {
      this.isShow = true
    } else {
      this.isShow = false
    }
    flowForm(url).then((res) => {
      if (this.isShow) {
        let us = sessionStorage.getItem('userinfo')
        us = JSON.parse(us)
        if (res.data.status === '3') {
          // 会签中
          if (
            res.data.meetingUserIds.indexOf(us.id) < 0 &&
            res.data.proxyUserIds.indexOf(us.id) < 0
          ) {
            Dialog.alert({
              message: `当前任务等待【${res.data.currUserName}】会签中，您无法处理该任务！`
            }).then(() => {
              // on close
              this.$router.push('/approval')
            })
          } else {}
        } else {
          if (res.data.currUseerId !== us.id && res.data.proxyUserIds.indexOf(us.id) < 0) {
            Dialog.alert({
              message: `当前任务已流转至【${res.data.currUserName}】处理，您无法处理该任务！`
            }).then(() => {
              // on close
              this.$router.push('/approval')
            })
          } else {}
        }
      }
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
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 一键到底
    inserted () {
      if (this.active === 0) {
        document.querySelector('.history-detail').className = 'history-detail historyDetail'
        document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' })
      } else {
        document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' })
      }
    },
    // 检测ios获取焦点时
    changeFocus() {
      let u = navigator.userAgent;
      let isIOS =!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if(isIOS) {
        document.documentElement.scrollTop = document.documentElement.scrollHeight
        document.body.scrollTop = document.body.scrollHeight
      }
    },
    // 滚动检测
    handleScroll () {
      if (this.active === 0) {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop
        const offsetY = document.querySelector('.history-detail').offsetTop
        const top = this.scroll - offsetY
        if (top >= -720) {
          // 到一定位置之后
          this.isShow = false
          this.isShowAgree = true
          this.isApproval = true
          this.isToEnd = false
        } else {
          this.isShow = true
          this.isApproval = false
          this.isShowAgree = false
          this.isToEnd = true
        }
      } else {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop
        const offsetY = document.querySelector('.history-detail').offsetTop
        const top = this.scroll - offsetY
        if (top >= -600) {
          this.isShow = false
          this.isToEnd = false
        } else {
          this.isShow = false
          this.isToEnd = true
        }
      }
    },
    // 显示审批
    approvalFnc () {
      this.isApproval = !this.isApproval
      this.isShowAgree = !this.isShowAgree
    },
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
          ;(parent.children || (parent.children = [])).push(item)
        } else {
          // 如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
          val.push(item)
        }
      })
      return val
    },

    onSubmit (values) {
      this.signData = values
      if (values.commitType === 'meeting') {
        this.signData = values
        console.log('会签')
      } else {
        this.isSubmit(values)
        console.log('提交')
      }
    },
    // 点击提交按钮要进行的操作
    isSubmit (values) {
      if (this.flowList.status === '3' && this.flowList.statusDes === '会签中') {
        values.content = values.content + ' >>>>' + '【下一步】'
      } else {
        values.meetingUsers = this.signIds.toString()
        delete values.radio
        delete values.undefined
        values.submitTask = this.region.id ? this.region.id : '【下一步】'
        if (values.meetingUsers) {
          values.content = values.content + ' >>>>【发起会签】' + this.signText
          this.message = values.content
        } else if (values.commitType === 'terminate') {
          values.content =  this.message
        } else {
          if (values.submitTask !== '【下一步】') {
            values.content =
              values.content +
              ' >>>>' +
              document.querySelector('.el-select').children[0].children[0].value
          } else {
            values.content = values.content + ' >>>>' + '【下一步】'
          }
        }
      }
      // 接口调用
      // this.url = this.url.slice(0, -11) + 'updateVOs'

      // 调用接口判断方法
      this.specialFun(values)
      values.file = this.$refs.detail.fileList ? this.$refs.detail.fileList : []
      values.fileIdList = this.$refs.detail.fileIdList
        ? this.$refs.detail.fileIdList
        : []
      // 判断是否是印章保管登记
      if (
        this.dataList.currFlowId === 'SealKeepApprove' ||
        this.dataList.currFlowId === 'PurchaseApprove'
      ) {
        values.fileIdList = this.$refs.detail.fileIdList
          ? this.$refs.detail.fileIdList
          : []
      } else {
      }

      // 判断是否是总经理办公室节点
      if (this.dataList.currTaskDefinitionKey === 'ManagerOffice' &&
         this.dataList.currFlowId === 'PurchaseApprove'
      ) {
        if (this.$refs.detail.isCover === false) {
          values.isCover = '0'
          values.isGeneratorPno = 'true'
        } else {
          if (values.isCover === '覆盖') {
            values.isGeneratorPno = 'false'
            values.isCover = '1'
          } else {
            values.isGeneratorPno = 'false'
            values.isCover = '2'
          }
        }
      } else {
      }

      // 判断是否是项目结项
      if (
        this.dataList.currFlowId === 'ProjectEndApprove' &&
        this.dataList.currFlowName === '项目结项'
      ) {
        values.attachIds = this.$refs.detail.fileIdList
          ? this.$refs.detail.fileIdList
          : []
        values.personData = this.$refs.detail.personData
          ? this.$refs.detail.personData
          : []
        values.supplierData = this.$refs.detail.supplierData
          ? this.$refs.detail.supplierData
          : []
      } else {
      }
      // 判断是否是项目立项流程
      if (this.dataList.currFlowId === 'CommonApprove') {
        values.stageData = this.$refs.detail.projpprojectstageinfo
      } else {
      }
      // 判断是否是开收据
      if (
        this.dataList.currFlowId === 'ReceiptApprove' &&
        this.dataList.currFlowName === '收据'
      ) {
        values.invoiceDetail = this.$refs.detail.invoiceDetail
      } else {
      }
      // 判断是否是开发票
      if (this.dataList.currFlowId === 'BillApprove' &&
        this.dataList.currFlowName === '开发票') {
        values.invoiceDetail = this.$refs.detail.invoiceDetail
      }
      // 判断是否是采购合同流程
      if (this.dataList.currFlowId === 'PurchaseApprove') {
        values.payforList = this.$refs.detail.payforList
          ? this.$refs.detail.payforList
          : []
        values.goodsList = this.$refs.detail.goodsList
          ? this.$refs.detail.goodsList
          : []
      } else {
      }
      // 判断印章管理员
      if (
        this.dataList.currFlowId === 'SealKeepApprove' &&
        this.dataList.currUserName === '白建平' &&
        this.dataList.currTaskDefinitionKey === 'SealManager' &&
        this.dataList.currTaskDefinitionName === '印章管理员'
      ) {
        values.sealTypes = this.$refs.detail.sealTypes
          ? this.$refs.detail.sealTypes
          : []
      } else {
      }
      if (values.file.length <= 0) {
        delete values.file
      } else {
      }
      const data = {
        url: this.url,
        data: values
      }
      // 费用会计--报销发起--记字号处理
      if (
        this.dataList.currFlowId === 'ReimbursementApprove' &&
        this.dataList.currUserName === '刘玉丽' &&
        this.dataList.currTaskDefinitionKey === 'Accountant' &&
        this.dataList.currTaskDefinitionName === '费用会计'
      ) {
        if (!this.$refs.detail.isCou) {
          this.$toast('输入记字有误，请重新输入！')
          return
        }
      }
      // 商机变更--处理
      if (
        this.dataList.currFlowId === 'DeptGradApprove'
      ) {
        delete values.fileList
        delete values.fileIdList
        values.projpVisitList = this.$refs.detail.custList.projpVisitList
      }
      console.log(data)
      this.submit(data)
    },
    // 全屏遮罩加载方法
    openFullScreen2 () {
      Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: false,
        message: '正在提交'
      })
    },
    // 提交方法-->调接口进行提交
    submit (values) {
      Dialog.confirm({
        message: '你确定要提交吗？'
      })
        .then(() => {
          this.openFullScreen2()
          // 提交时，展示加载效果，防止接口响应过慢，用户重复点击提交按钮
          flowFormUpdate(values).then((res) => {
            if (res.resultCode === '200') {
              Toast.clear()
              Toast.loading({
                duration: 1000,
                loadingType: 'spinner',
                type: 'success',
                forbidClick: true,
                message: '提交成功',
                onClose: () => {
                  this.$router.push('/approval')
                }
              })
            } else if (res.resultCode === '409') {
              Toast.fail(res.bizResultMessage)
              this.url = this.submitUrl
            } else {
              Toast.fail(res.resultMessage)
              this.url = this.submitUrl
            }
          })
        })
        .catch(() => {
          this.commitType = ''
          this.url = this.submitUrl
        })
    },
    specialFun (values) {
      const user = this.dataList
      if (this.dataList.currTaskDefinitionKey === 'ManagerOffice' &&
       this.dataList.currFlowId === 'PurchaseApprove') {
        this.url = '/app/form/projpcontractpurchaseform/updateByOffice'
      } else if (
        user.currTaskDefinitionName === '运营管理部' &&
        user.currTaskDefinitionKey === 'BusiAnalysis' &&
        user.currFlowId === 'ContrReviewApprove'
      ) {
        this.url = this.url.slice(0, 29) + '/busiAnalysisApproval'
      } else if (user.currTaskDefinitionName === '运营管理部经理' &&
        user.currTaskDefinitionKey === 'BusiAnalysisManager' &&
        user.currFlowId === 'ContrReviewApprove' &&
        user.statusDes === '会签中') {
        console.log('会签中')
        this.url = this.url.slice(0, 29) + '/mobileUpdate'
      } else if (
        user.currTaskDefinitionName === '运营管理部经理' &&
        user.currTaskDefinitionKey === 'BusiAnalysisManager' &&
        user.currFlowId === 'ContrReviewApprove' &&
        user.statusDes !== '会签中'
      ) {
        console.log('不会签')
        this.url = this.url.slice(0, 29) + '/busiAnalysisManagerApproval'
      } else if (
        this.dataList.currFlowId === 'SealKeepApprove' &&
        this.dataList.currUserName === '白建平' &&
        this.dataList.currTaskDefinitionKey === 'SealManager' &&
        this.dataList.currTaskDefinitionName === '印章管理员'
      ) {
        this.url = this.url.slice(0, -10) + '/update' // 白建平并且是印章保管流程
      } else if (
        this.dataList.currTaskDefinitionName === '受理退回' &&
        this.dataList.currUserName === this.dataList.userName
      ) {
        // 判断当前节点是受理退回并且当前处理人=== 当前发起人
        this.url = this.url.slice(0, -10) + '/update'
      } else if (
        user.currTaskDefinitionKey === 'BusiAnalysisManager' &&
        user.currFlowId === 'FinanceApprove' &&
        user.currFlowName === '履约保证金'
      ) {
        this.url = this.url.slice(0, -12) + '/update' // 履约保证金
      } else if (
        user.currTaskDefinitionKey === 'BusiAnalysisManager' &&
        user.currFlowId === 'FinanceApprove'
      ) {
        // 投标保证金
        this.url = this.url.split('b')[0] + 'update/busiAnalysisManager'
      } else if (
        this.dataList.currFlowId === 'CommonApprove' &&
        this.dataList.currTaskDefinitionName === '受理退回' &&
        this.dataList.currUserName === this.dataList.userName
      ) {
        this.url = this.url.slice(0, -10) + '/updateProject' // 项目立项 特殊处理-->判断当前节点是受理退回并且当前处理人=== 当前发起人
      } else if (
        this.dataList.currFlowId === 'CommonApprove' &&
        this.dataList.currFlowName === '项目立项'
      ) {
        this.url = this.url.slice(0, -10) + '/updateProject' // 项目立项接口
      } else if (
        this.dataList.currFlowId === 'CommonApprove' &&
        (this.dataList.currFlowName === '项目变更-预算变更' ||
          this.dataList.currFlowName === '项目变更-PM变更' ||
          this.dataList.currFlowName === '项目变更-项目完成时间变更')
      ) {
        this.url = this.url.slice(0, -12) + '/updateForm' // 项目变更接口
      } else if (
        this.dataList.currFlowId === 'ProjectEndApprove' &&
        this.dataList.currFlowName === '项目结项'
      ) {
        this.url = this.url.slice(0, -12) + '/updateEndForm' // 项目结项接口
      } else if (
        this.dataList.currFlowId === 'ChangeApprove' &&
        this.dataList.currFlowName === '项目变更-项目归属变更'
      ) {
        this.url = this.url.slice(0, -12) + '/updateForm' // 项目变更-项目归属变更接口
      } else if (
        this.dataList.currFlowId === 'ContractFileApprove' &&
        this.dataList.currTaskDefinitionKey !== 'DepotManager' &&
        this.dataList.currTaskDefinitionName !== '库管'
      ) {
        this.url = this.url.slice(0, -10) + '/busi/comit/task' // 合同存档
      } else if (
        this.dataList.currFlowId === 'PaymentApprove' &&
        this.dataList.currFlowName === '付款申请'
      ) {
        this.url = this.url.slice(0, -12) + '/comit/task' // 合同付款接口
      } else if (
        this.dataList.currFlowId === 'TransferApprove' &&
        this.dataList.currFlowName === '内部收益划转' &&
        this.dataList.currTaskDefinitionKey === 'BusiAnalysis'
      ) {
        this.url = this.url.slice(0, -22) + '/mobileUpdate' // 内部收益划转在运管节 点特殊处理
      } else if (
        this.dataList.currFlowId === 'CustApprove' &&
        this.dataList.currFlowName === '分摊费用'
      ) {
        this.url = this.url.slice(0, -16) + '/update/task' // 费用分摊
      } else if (
        this.dataList.currFlowName === '解冻风险保证金' &&
        this.dataList.currFlowId === 'UnfreezeApprove' &&
        this.dataList.currTaskDefinitionName === '风控法规部信用管理专员' &&
        this.dataList.currTaskDefinitionKey === 'RiskRuleCreditCommissioner'
      ) {
        this.url = this.url.slice(0, -16) + '/comit/task/commmanage'
      } else if (
        this.dataList.currFlowName === '解冻风险保证金' &&
        this.dataList.currFlowId === 'UnfreezeApprove' &&
        this.dataList.currTaskDefinitionKey !== 'RiskRuleCreditCommissioner'
      ) {
        this.url = this.url.slice(0, -12) + '/comit/task'
      } else if (
        // 销售合同取消
        this.dataList.currFlowName === '合同取消' &&
        this.dataList.currFlowId === 'JusticeApprove'
      ) {
        this.url = this.url.slice(0, -12) + '/comit/task'
      } else {
        // 投标保证金接口的特殊处理
        if (this.url.includes('cashier')) {
          // 投标保证金的最后一个审批人的特殊处理
          if (this.url.includes('pay')) {
            this.url = this.url.slice(0, -17) + '/mobileUpdate'
          } else {
            this.url = this.url.slice(0, -12) + 'mobileUpdate'
          }
        } else if (this.url.includes('fundmanagercheck')) {
          // 投标保函的最后一个审批人的特殊处理
          this.url = this.url.slice(0, -22) + '/mobileUpdate'
        } else if (this.url.includes('pay')) {
          // 付业务往来款的最后一个审批人的特殊处理
          this.url = this.url.slice(0, -16) + '/mobileUpdate'
        } else if (this.url === '/app/form/bizfeesreimbursementform/detailFinancia/page') { // 财务资金特殊处理
          this.url = this.url.slice(0, -20) + '/mobileUpdate'
        } else if (this.url === '/app/form/projpcontractreview/acceptUpload/page') { // 合同受理上传文本特殊处理
          this.url = this.url.slice(0, -18) + '/mobileUpdate'
        } else {
          // 公共提交接口
          this.url = this.url.slice(0, -12) + '/mobileUpdate'
          // 供应商接口
          // this.url = this.url.slice(0, -12) + 'updateVOs'
          // 销售合同接口  投标备案接口 报销发起  特殊  财务资金
          // this.url = this.url.slice(0, -12) + '/update/task'
          // 投标报价接口 印信使用接口  分子公司接口  风险保证金 解冻风险保证金
          // 合同存档提交接口 合同付款接口  中标服务费
          // this.url = this.url.slice(0, -12) + '/comit/task'
          // 投标保证金接口 投标保函接口 印章保管流程接口 采购合同接口
          // 履约保函 履约保证金 发文管理 印章销毁 个人借款接口 内部收益划转接口
          // 开发票/收据  内部收益划转  特殊收益划转 客户管理
          // this.url = this.url.slice(0, -12) + '/update'
          // this.url = this.url.slice(0, -12) + '/updateVO' // 合作协议接口
        }
      }
    },
    onchange () {
      this.message = this.radio === '1' ? '同意' : '不同意'
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
                  // data.historyList[i].userIds = 'back_' + data.historyList[i].taskDefinitionKey + '_' + data.historyList[i].createdBy
                  // data.historyList[i].text = '【退回】' + data.historyList[i].taskName + '-' + data.historyList[i].userName
                  // // 初始化加载的数据 进行数据的去重处理
                  // if (!this.map.has(data.historyList[i].createdBy) && data.historyList[i].userIds) {
                  //   this.map.set(data.historyList[i].createdBy, data.historyList[i]) // 为了判断是否唯一
                  //   this.mapData.push(data.historyList[i]) // 最终展示的数据
                  // }
                  // this.backSelectOpts = this.mapData
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
      this.region.id = this.nextSelectOpts[0].id ? this.nextSelectOpts[0].id : ''
    },
    handleContent (data) {},
    // 下拉框选择值发生变化时，调用方法
    pullSelect (data) {
      if (this.region.id.includes('back')) {
        this.commitType = 'return'
      } else {
        this.commitType = ''
      }
    },
    // 会签弹框显示
    counterSign () {
      this.show = true
      if (this.show) {
        this.commitType = 'meeting'
      }
    },
    // 关闭弹窗
    closeDialog () {
      this.commitType = ''
    },
    // 会签方法提交
    confirmCounterSign () {
      // 人员名字
      const signData = this.$refs.tree.getCheckedNodes()
      const signDataId = this.$refs.tree.getCheckedNodes()
      const newSign = []
      const newSignId = []
      this.recursion(signData, newSign) // 姓名
      this.recursionId(signDataId, newSignId) // Id

      this.isSubmit(this.signData)
    },
    // 递归获取数据信息
    recursion (signData, newSign = []) {
      if (Array.isArray(signData) && signData.length > 0) {
        signData.forEach((item) => {
          if (item.issub) {
            // 对名字进行去重处理
            if (newSign.indexOf(item.label) === -1) {
              newSign = newSign.concat(item.label)
            }
          }
          if (item.children) {
            this.recursion(item.children, newSign)
          } else {}
        })
      }
      this.signText = newSign.toString()
      this.message = newSign.toString()
    },
    // 递归id
    recursionId (signDataId, newSignId = []) {
      if (Array.isArray(signDataId) && signDataId.length > 0) {
        signDataId.forEach((item) => {
          if (item.issub) {
            // 对id进行去重处理
            if (newSignId.indexOf(item.id) === -1) {
              newSignId = newSignId.concat(item.id)
            } else {}
          } else {}
          if (item.children) {
            this.recursionId(item.children, newSignId)
          } else {}
        })
      }
      this.signIds = newSignId
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    handleCheckChange (data, checked, indeterminate) {},
    handleCurrentChange (data, node) {},
    back () {
      this.$router.go(-1)
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
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
  padding: 16px 0 20px;
  background: #fff;
}
>>>.van-field__value {
  padding-left: 0;
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
// 办理意见样式
.message-textarea .van-field__control {
  border: 1px solid #1989fa;
  border-radius: 5px;
  padding: 0 4px;
}
.region-select {
  width: 100%;
  input.el-input__inner {
    border: 1px solid #1989fa;
  }
}
div.public-title {
  .van-cell:not(:last-child)::after {
    border-bottom: none;
  }
}
.approval {
  position: fixed;
  bottom: -6px;
  width: 100%;
  z-index: 999;
  border-top: 2px solid rgba(25, 137, 250, 0.5);
  .approval-select {
    padding-bottom: 86px;
    width: 100%;
  }
}
.detail-header-title {
  position: relative;
  border-bottom: 3px solid rgba(25, 137, 250, 0.5);
  .process-title {
    font-weight: bold;
  }
}
.van-step__circle {
  width: 15px;
  height: 15px;
}
.van-hairline:last-child .van-step__circle-container {
  font-size: 18px;
}
// 历史办理详情样式
.historyDetail {
  padding-bottom: 295px;
}
.historyDetails {
  padding-bottom: 16px;
}
.historyStatus {
  padding-bottom: 260px;
}
div.history-detail {
  background: #fff;
  border-top: 3px solid rgba(25, 137, 250, 0.5);
  .title {
    border-top: 1px dashed #f8f8f8;
    padding: 10px 15px;
    text-align: left;
    background-color: #fff;
    position: relative;
  }
  .title::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 6px;
    margin: auto 0;
    content: "";
    width: 4px;
    height: 12px;
    border-radius: 2px;
    background-color: #1989fa;
  }
}
.historyButton {
  padding-bottom: 16px;
}
.loading-layer {
  visibility: hidden;
  // line-height: 0px !important;
  // height: 0 !important;
}
// 固钉样式
div.affix {
  color: #fff;
  .affix-approval {
    background: rgba(25, 137, 250, 0.65);
    z-index: 999;
    display: block;
    position: fixed;
    right: 5%;
    bottom: 18em;
    cursor: pointer;
    color: #fff;
    width: 60px;
    height: 60px;
    box-shadow: 0px 0px 5px 1px #1989faa6;
    border-radius: 50%;
  }
  .affix-anchor {
    z-index: 999;
    display: block;
    position: fixed;
    right: 5%;
    bottom: 7.5em;
    cursor: pointer;
    width: 60px;
    height: 60px;
    text-align: center;
    border-radius: 50%;
    background: rgba(25, 137, 250, 0.65);
    box-shadow: 0px 0px 5px 1px #1989faa6;
    border: 1px solid #f5f5f5;
    line-height: 60px;
    font-size: 24px;
  }
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
</style>
