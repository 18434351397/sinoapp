/** *@author XuJinTao *@date 2020/5/8 9:11 *@title index */
<template>
  <div class="app-title">
    <div class="app-sino-check-sales">
      <div class="table-title">变更内容</div>
      <el-checkbox-group v-model="checkedCities">
        <el-checkbox v-for="item in updateType" :label="item.id" :key="item.id" disabled>{{ item.name }}</el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="title">{{ title }}</div>

    <!-- 基本信息 -->
    <van-tabs
      v-model="active"
      color="#1989faa6"
      v-if="checkedCities.indexOf('1') !== -1 || checkedCities.indexOf('2') !== -1 || checkedCities.indexOf('8') !== -1"
    >
      <van-tab title="变更后">
        <seeBasicCard :oldContractList="oldContractList" :contractList="contractList" :isCustPro="isCustPro" :isCustProShow="isCustProShow" />
      </van-tab>
      <van-tab title="变更前">
        <seeBasicCard :contractList="oldContractList" :isCustPro="isCustPro" :isCustProShow="isCustProShow" />
      </van-tab>
    </van-tabs>

    <!-- 收入明细 -->
    <van-tabs v-model="active2" color="#1989faa6" v-if="checkedCities.indexOf('5') !== -1">
      <van-tab title="变更后">
        <seeIncomeTable :incomeList="incomeList" />
      </van-tab>
      <van-tab title="变更前">
        <seeIncomeTable :incomeList="oldIncomeList" />
      </van-tab>
    </van-tabs>

    <!-- 成本明细 -->
    <van-tabs v-model="active3" color="#1989faa6" v-if="checkedCities.indexOf('4') !== -1">
      <van-tab title="变更后">
        <seeCostTable :costList="costList" />
      </van-tab>
      <van-tab title="变更前">
        <seeCostTable :costList="oldCostList" />
      </van-tab>
    </van-tabs>

    <!-- 业绩切分 -->
    <van-tabs v-model="active4" color="#1989faa6" v-if="checkedCities.indexOf('6') !== -1">
      <van-tab title="变更后">
        <seeSegmentationTable :achievementList="achievementList" />
      </van-tab>
      <van-tab title="变更前">
        <seeSegmentationTable :achievementList="oldAchievementList" />
      </van-tab>
    </van-tabs>

    <!-- 预计现金流 -->
    <van-tabs v-model="active5" color="#1989faa6" v-if="checkedCities.indexOf('7') !== -1">
      <van-tab title="变更后">
        <seeCashFlowTable :paymentCondition="paymentCondition" :contractList="contractList" />
      </van-tab>
      <van-tab title="变更前">
        <seeCashFlowTable :paymentCondition="oldPaymentCondition" :contractList="oldContractList" />
      </van-tab>
    </van-tabs>

    <!-- 金额计算 -->
    <van-tabs
      v-model="active6"
      color="#1989faa6"
      v-if="checkedCities.indexOf('5') !== -1 || checkedCities.indexOf('4') !== -1 || checkedCities.indexOf('7') !== -1"
    >
      <van-tab title="变更后">
        <seeAmountCount :oldContractList="oldContractList" :contractList="contractList" :isCustPro="isCustPro" />
      </van-tab>
      <van-tab title="变更前">
        <seeAmountCount :contractList="oldContractList" :isCustPro="isCustPro" />
      </van-tab>
    </van-tabs>

    <!-- 其他 -->
    <van-tabs v-model="active7" color="#1989faa6">
      <van-tab title="变更后">
        <seeOhter
          :hasRequired="hasRequired"
          :oldContractList="oldContractList"
          :contractList="contractList"
          :isCustPro="isCustPro"
          :isCustProShow="isCustProShow"
          :custProList="custProList"
        />
      </van-tab>
      <van-tab title="变更前">
        <seeOhter :contractList="oldContractList" :isCustPro="isCustPro" />
      </van-tab>
    </van-tabs>

    <!-- 附件 -->
    <van-tabs v-model="active8" color="#1989faa6" v-if="checkedCities.indexOf('3') !== -1">
      <van-tab title="变更后">
        <seeSalseFile
          :contractList="contractList"
          :contractFileList="contractFileList"
          :projectScoringFileList="projectScoringFileList"
          :noSignFileList="noSignFileList"
          :explainFileList="explainFileList"
        />
      </van-tab>
      <van-tab title="变更前">
        <seeSalseFile
          :contractList="contractList"
          :contractFileList="oldContractFileList"
          :projectScoringFileList="oldProjectScoringFileList"
          :noSignFileList="oldNoSignFileList"
          :explainFileList="oldExplainFileList"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { projpcontractreviewupdateformApi, custPro } from '../../api/customer'
import seeBasicCard from './SeeBasicCard/SeeBasicCard.vue'
import seeIncomeTable from './SeeIncomeTable/SeeIncomeTable.vue'
import seeCostTable from './SeeCostTable/SeeCostTable.vue'
import seeSegmentationTable from './SeeSegmentationTable/SeeSegmentationTable.vue'
import seeCashFlowTable from './SeeCashFlowTable/SeeCashFlowTable.vue'
import seeAmountCount from './SeeAmountCount/SeeAmountCount.vue'
import seeOhter from './SeeOhter/SeeOhter.vue'
import seeSalseFile from './SeeSalseFile/SeeSalseFile.vue'

import './projpcontractreviewChange.css'

export default {
  name: 'index',
  components: {
    seeBasicCard,
    seeIncomeTable,
    seeCostTable,
    seeSegmentationTable,
    seeCashFlowTable,
    seeAmountCount,
    seeOhter,
    seeSalseFile
  },
  data() {
    return {
      active: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      active5: 0,
      active6: 0,
      active7: 0,
      active8: 0,
      isCustPro: false, // 默认不显示客户选择属性 -- 部门
      isCustProShow: false, // 默认不显示--经理
      hasRequired: true, // 客户属性是否必填
      value: null,
      custProList: [],
      dataList: this.$route.query,
      title: '销售合同评审信息',
      contractList: [], // 整体信息
      oldContractList: [], // 变更前 整体信息
      incomeList: [], // 收入
      oldIncomeList: [], // 收入
      costList: [], // 成本
      oldCostList: [], // 成本
      achievementList: [], // 业绩
      oldAchievementList: [], // 业绩
      paymentCondition: [], // 预计现金流量表
      oldPaymentCondition: [], // 预计现金流量表
      contractFileList: [], // 销售合同上传
      projectScoringFileList: [], // 项目评分
      noSignFileList: [], // 不签名合同说明
      explainFileList: [], // 未签合同说明
      oldContractFileList: [], // 销售合同上传
      oldProjectScoringFileList: [], // 项目评分
      oldNoSignFileList: [], // 不签名合同说明
      oldExplainFileList: [], // 未签合同说明
      fileConcat: [], // 整合所有的 file
      fileList: [], // 提交 file 处理 ,去除 null , 最后的结果
      updateType: [
        { id: '1', name: '基本信息' },
        { id: '2', name: '主导部门' },
        { id: '3', name: '合同文本' },
        { id: '4', name: '成本明细' },
        { id: '5', name: '收入明细' },
        { id: '6', name: '业绩切分' },
        { id: '7', name: '预计现金流' },
        { id: '8', name: '项目经理' }
      ],
      checkedCities: []
    }
  },

  created() {
    // 判断当前节点是否是会签中的节点
    if (
      this.dataList.currTaskDefinitionKey === 'BusiAnalysis' &&
      this.dataList.statusDes === '会签中' &&
      (this.dataList.currFlowName === '合同评审审批' || this.dataList.currFlowId === 'ContractModifyApprove')
    ) {
      this.hasRequired = false
    }

    projpcontractreviewupdateformApi(this.dataList.dataId).then(res => {
      if (res.data) {
        const resData = res.data.projpContractFeesList // 成本明细和收入明细
        const oldResData = res.data.projpContractReviewHistoryVO.projpContractFeesHistoryList
        this.contractList = res.data // 合同信息
        this.oldContractList = res.data.projpContractReviewHistoryVO
        this.achievementList = res.data.projpContractAchievementList // 业绩切分
        this.oldAchievementList = res.data.projpContractReviewHistoryVO.projpContractAchievementHistoryList // 业绩切分
        this.paymentCondition = res.data.paymentCondition // 预计现金流量表
        this.oldPaymentCondition = res.data.projpContractReviewHistoryVO.projpContractPaymentHistoryList // 预计现金流量表
        this.contractFileList = res.data.contractFileList
        this.projectScoringFileList = res.data.projectScoringFileList
        this.noSignFileList = res.data.noSignFileList
        this.explainFileList = res.data.explainFileList

        this.oldContractFileList = res.data.projpContractReviewHistoryVO.contractFileList
        this.oldProjectScoringFileList = res.data.projpContractReviewHistoryVO.projectScoringFileList
        this.oldNoSignFileList = res.data.projpContractReviewHistoryVO.noSignFileList
        this.oldExplainFileList = res.data.projpContractReviewHistoryVO.explainFileList

        this.value = res.data.custProDesc
        this.checkedCities = res.data.updateType.split(',')

        this.fileConcat = this.fileConcat.concat(res.data.contractFileList, res.data.projectScoringFileList, res.data.noSignFileList, res.data.explainFileList)
        for (const file of this.fileConcat) {
          if (file) {
            this.fileList = this.fileList.concat(
              JSON.stringify({
                fileName: file.fileName,
                url: file.url,
                fileSize: file.fileSize,
                fileId: file.fileId
              })
            )
          } else {
          }
        }
        if (resData) {
          for (const i in resData) {
            if (resData[i].pRType === 'r') {
              this.incomeList = this.incomeList.concat(resData[i])
            } else if (resData[i].pRType === 'c') {
              this.costList = this.costList.concat(resData[i])
            } else {
              return {}
            }
          }
        }
        if (oldResData) {
          for (const i in oldResData) {
            if (oldResData[i].pRType === 'r') {
              this.oldIncomeList = this.incomeList.concat(oldResData[i])
            } else if (oldResData[i].pRType === 'c') {
              this.oldCostList = this.costList.concat(oldResData[i])
            } else {
              return {}
            }
          }
        }
      } else {
        throw new '数据异常'()
      }
    })
    // 特殊处理
    const user = this.dataList
    if (
      user.currTaskDefinitionName === '运营管理部' &&
      user.currTaskDefinitionKey === 'BusiAnalysis' &&
      (user.currFlowId === 'ContrReviewApprove' || user.currFlowId === 'ContractModifyApprove')
    ) {
      this.isCustPro = true
      custPro().then(res => {
        this.custProList = res.data.custPro.map(item => {
          return {
            custPro: item.attribute,
            code: item.code,
            coded: item.coded,
            createBy: item.createBy,
            deleted: item.deleted,
            dictionarySubjecName: item.dictionarySubjecName,
            dictionarySubjectId: item.dictionarySubjectId,
            id: item.id,
            invalid: item.invalid,
            lastModifiedBy: item.lastModifiedBy,
            lastModifiedDate: item.lastModifiedDate,
            text: item.nameChs,
            nameEng: item.nameEng,
            rank: item.rank,
            serialNo: item.serialNo,
            upState: item.upState
          }
        })
      })
    } else if (
      user.currTaskDefinitionName === '运营管理部经理' &&
      user.currTaskDefinitionKey === 'BusiAnalysisManager' &&
      user.currFlowId === 'ContrReviewApprove'
    ) {
      this.isCustProShow = true
    } else {
      return {}
    }
  },
  methods: {
    // 处理序号
    indexMethods(index) {
      return index + 1
    }
  }
}
</script>

<style lang="less">
.taxes-btn {
  padding: 16px;
  background: #fff;
  button.van-button {
    width: 20%;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    background: #1989fa;
    // box-shadow: 0px 0px 2px 1px #1989faa6;
    border: none;
  }
}
</style>
