/** *@author XuJinTao *@date 2020/5/13 16:10 *@title index */
<template>
  <div class="app-title">
    <div class="title">项目变更信息</div>
    <van-field
      style="display: none;"
      name="id"
      v-model="custList.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="newPm"
      v-model="custList.newPm"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="newDeptId"
      v-model="custList.newDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="custList.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="oldPm"
      v-model="custList.oldPm"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="oldDeptId"
      v-model="custList.oldDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="status"
      v-model="custList.status"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="changeType"
      v-model="custList.changeType"
      type="text"
      readonly
    />

    <van-field
      type="text"
      label="项目编号"
      v-model="custList.projectNo"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{ custList.projectNo }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      label="项目名称"
      v-model="custList.projectName"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.projectName }}
        </div>
      </template>
    </van-field>
    <van-field
      type="text"
      label="合同编号"
      v-model="custList.contractNo"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{ custList.contractNo }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      label="变更类型"
      v-model="custList.changeTypeName"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.changeTypeName }}
        </div>
      </template>
    </van-field>
    <!-- 预算变更 -->
    <van-field
      v-if="isBudget"
      type="text"
      label="预计人员成本"
      v-model="custList.oldCPersion"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.oldCPersion }}
        </div>
      </template>
    </van-field>
    <van-field
      v-if="isBudget"
      type="text"
      label="预计报销性费用"
      v-model="custList.oldCreimbursement"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.oldCreimbursement }}
        </div>
      </template>
    </van-field>
    <van-field
      v-if="isBudget"
      type="text"
      label="变更后预计人员成本"
      v-model="custList.newCpersion"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.newCpersion }}
        </div>
      </template>
    </van-field>
    <van-field
      v-if="isBudget"
      type="text"
      label="变更后预计报销性费用"
      v-model="custList.newCreimbursement"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.newCreimbursement }}
        </div>
      </template>
    </van-field>
    <van-field
      v-if="isBudget"
      type="text"
      label="人员成本变更金额"
      v-model="projectNum"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{ projectNum }}</div>
      </template>
    </van-field>
    <van-field
      v-if="isBudget"
      type="text"
      label="报销性费用变更金额"
      v-model="creimbursementNum"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{ creimbursementNum }}</div>
      </template>
    </van-field>
    <van-field
      v-if="isBudget"
      type="text"
      label="预算变更原因"
      v-model="custList.changeBudget"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.changeBudget }}
        </div>
      </template>
    </van-field>
    <!-- PM变更 -->
    <van-field
      v-if="isPm"
      type="text"
      label="变更前项目经理"
      v-model="custList.oldPmName"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.oldPmName }}
        </div>
      </template>
    </van-field>
    <van-field
      v-if="isPm"
      type="text"
      label="变更后项目经理"
      v-model="custList.newPmName"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.newPmName }}
        </div>
      </template>
    </van-field>
    <van-field
      v-if="isPm"
      type="text"
      label="PM变更原因"
      v-model="custList.changePm"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.changePm }}
        </div>
      </template>
    </van-field>
    <!-- 项目归属变更 -->
    <van-field
      v-if="isAscription"
      type="text"
      label="原主导部门"
      v-model="custList.oldDeptName"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.oldDeptName }}
        </div>
      </template>
    </van-field>
    <van-field
      v-if="isAscription"
      type="text"
      label="变更后主导部门"
      v-model="custList.newDeptName"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.newDeptName }}
        </div>
      </template>
    </van-field>
    <van-field
      v-if="isAscription"
      type="text"
      label="主导部门变更原因"
      v-model="custList.changeDept"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.changeDept }}
        </div>
      </template>
    </van-field>
    <!-- 项目完成时间变更 -->
     <van-field
      v-if="isTime"
      type="text"
      label="原预计完成时间"
      v-model="custList.oldEndDate"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.oldEndDate }}
        </div>
      </template>
    </van-field>
     <van-field
      v-if="isTime"
      type="text"
      label="变更后完成时间"
      v-model="custList.newEndDate"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.newEndDate }}
        </div>
      </template>
    </van-field>
     <van-field
      v-if="isTime"
      type="text"
      label="延迟原因"
      v-model="custList.delay"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">
          {{ custList.delay }}
        </div>
      </template>
    </van-field>
  </div>
</template>

<script>
import { projpprojectupdateformApi } from '../../api/contract'
export default {
  name: 'index',
  data() {
    return {
      isBudget: false, // 预算变更字段
      isPm: false, // PM 变更字段
      isAscription: false, // 项目归属变更字段
      isTime: false, // 项目完成时间变更字段
      dataList: this.$route.query,
      projectNum: 0, // 人员成本变更金额
      creimbursementNum: 0, // 报销性费用变更金额
      custList: [] // 项目变更-预算变更
    }
  },
  created() {
    if (this.dataList.currFlowName === '项目变更-预算变更') {
      this.isBudget = true
    } else if (this.dataList.currFlowName === '项目变更-PM变更') {
      this.isPm = true
    } else if (this.dataList.currFlowName === '项目变更-项目归属变更') {
      this.isAscription = true
    } else if (this.dataList.currFlowName === '项目变更-项目完成时间变更') {
      this.isTime = true
    }
    projpprojectupdateformApi(this.dataList.dataId).then((res) => {
      if (res.data) {
        this.custList = res.data
        this.creimbursementNum =
          Number(res.data.newCreimbursement) -
          Number(res.data.oldCreimbursement)
        this.projectNum =
          Number(res.data.newCpersion) - Number(res.data.oldCPersion)
        this.creimbursementNum = this.creimbursementNum.toFixed(2)
        this.projectNum = this.projectNum.toFixed(2)
      } else {
        throw new '数据异常'()
      }
    })
  }
}
</script>
