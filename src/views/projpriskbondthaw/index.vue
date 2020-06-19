/** *@author XuJinTao *@date 2020/5/14 10:10 *@title index */
<template>
  <div class="app-title">
    <div class="title">风险保证金解冻信息</div>
    <van-field
      style="display: none;"
      name="id"
      v-model="projpriskbondthawList.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="cThawAmount"
      v-model="projpriskbondthawList.cThawAmount"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="projpriskbondthawList.meetingUsers"
      type="text"
      readonly
    />

    <van-field
      type="text"
      name="contractNo"
      v-model="projpriskbondthawList.contractNo"
      label="合同号"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projpriskbondthawList.contractNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="contractName"
      v-model="projpriskbondthawList.contractName"
      label="合同名称"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projpriskbondthawList.contractName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="ownDeptName"
      v-model="projpriskbondthawList.ownDeptName"
      label="合同主导部门"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projpriskbondthawList.ownDeptName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="ownUserName"
      v-model="projpriskbondthawList.ownUserName"
      label="主导部门负责人"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projpriskbondthawList.ownUserName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="frozenAmount"
      v-model="projpriskbondthawList.frozenAmount"
      label="冻结金额"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projpriskbondthawList.frozenAmount}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="startFrozenTime"
      v-model="projpriskbondthawList.startFrozenTime"
      label="开始冻结时间"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projpriskbondthawList.startFrozenTime}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="riskTypeText"
      v-model="projpriskbondthawList.riskTypeText"
      label="风险类型"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projpriskbondthawList.riskTypeText}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="remark"
      v-model="projpriskbondthawList.remark"
      label="备注"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projpriskbondthawList.remark}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="thawAmount"
      v-model="projpriskbondthawList.thawAmount"
      label="本次解冻金额"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projpriskbondthawList.thawAmount}}</div>
      </template>
    </van-field>
    <van-field
      v-if="!hasThawTime"
      type="text"
      name="thawTime"
      v-model="projpriskbondthawList.thawTime"
      label="解冻时间"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projpriskbondthawList.thawTime}}</div>
      </template>
    </van-field>

    <van-field
      class="thawTime-field"
      v-if="hasThawTime"
      type="text"
      name="thawTime"
      @click="showPopFn()"
      v-model="projpriskbondthawList.thawTime"
      label="解冻时间"
      colon
      :rules="[{ required: true, message: '请选择解冻时间' }]"
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpriskbondthawList.thawTime}}</div>
      </template>
    </van-field>

    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
          <van-datetime-picker v-model="currentDate" type="date" @change="changeFn()" @confirm="confirmFn()" @cancel="cancelFn()" />
    </van-popup>
    <div>
      <div class="table-title">其他</div>
      <el-table border :data="files" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="附件名称" prop="fileName"></el-table-column>
        <el-table-column label="大小" width="80">
          <template slot-scope="scope">{{ (scope.row.fileSize / 1024).toFixed(2) + 'KB' }}</template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="50">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { projpriskbondthawList } from '../../api/contract'

export default {
  name: 'index',
  data () {
    return {
      currentDate: new Date(),
      changeDate: new Date(),
      show: false, // 用来显示弹出层
      hasThawTime: false,
      dataList: this.$route.query,
      fileList: [],
      files: [], // 循环列表
      projpriskbondthawList: [] // 解冻风险保证金
    }
  },
  created () {
    if (
      this.dataList.currFlowName === '解冻风险保证金' &&
      this.dataList.currFlowId === 'UnfreezeApprove' &&
      this.dataList.currTaskDefinitionName === '风控法规部信用管理专员' &&
      this.dataList.currTaskDefinitionKey === 'RiskRuleCreditCommissioner'
    ) {
      this.hasThawTime = true
    } else {}
    projpriskbondthawList(this.dataList.dataId).then(res => {
      if (res.resultCode === '200') {
        this.projpriskbondthawList = res.data
        this.files = res.data.fileList ? res.data.fileList : []
        this.fileList = this.files.map(item => {
          return JSON.stringify({
            fileName: item.fileName,
            url: item.url,
            fileSize: item.fileSize,
            fileId: item.fileId
          })
        })
      } else {
        console.log('数据异常')
      }
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    showPopFn (date) {
      this.show = true
    },
    showPopup () {
      this.show = true
    },
    changeFn () { // 值变化是触发
      this.changeDate = this.currentDate // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
    },
    confirmFn () { // 确定按钮
      this.projpriskbondthawList.thawTime = this.timeFormat(this.currentDate)
      this.show = false
    },
    cancelFn () {
      this.show = false
    },
    timeFormat (time) {
      const y = time.getFullYear()
      let m = time.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = time.getDate()
      d = d < 10 ? ('0' + d) : d
      return y + '-' + m + '-' + d
    },
    // 下载调用方法
    handleClick (data) {
      console.log(data.url)
      this.downLoad(data)
    },
    // 处理序号
    indexMethods (index) {
      return index + 1
    }
  }
}
</script>
<style lang="less">
.thawTime-field {
  .van-field__body {
    border-bottom: 1px solid #999091;
  }
}
</style>
