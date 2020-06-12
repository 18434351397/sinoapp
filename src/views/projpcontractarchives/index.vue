<template>
  <div class="app-title">
    <div class="title">合同存档信息</div>
    <van-field
      type="text"
      style="display: none"
      name="archivesType"
      v-model="projpcontractarchives.archivesType"
      colon
      readonly
    />
    <van-field
      type="text"
      style="display: none"
      name="cbxReport"
      v-model="projpcontractarchives.cbxReport"
      colon
      readonly
    />
    <van-field
      type="text"
      style="display: none"
      name="id"
      v-model="projpcontractarchives.id"
      colon
      readonly
    />
    <van-field
      type="text"
      style="display: none"
      name="meetingUsers"
      v-model="projpcontractarchives.meetingUsers"
      colon
      readonly
    />
    <van-field
      type="text"
      style="display: none"
      name="operationEndTime"
      v-model="projpcontractarchives.operationEndTime"
      colon
      readonly
    />
    <van-field
      type="text"
      style="display: none"
      name="operationStartTime"
      v-model="projpcontractarchives.operationStartTime"
      colon
      readonly
    />
    <van-field
      type="text"
      style="display: none"
      name="purchaseNo"
      v-model="projpcontractarchives.purchaseNo"
      colon
      readonly
    />
    <van-field
      type="text"
      style="display: none"
      name="receiveCanComit"
      v-model="projpcontractarchives.receiveCanComit"
      colon
      readonly
    />
    <van-field
      type="text"
      style="display: none"
      name="requestNo"
      v-model="projpcontractarchives.requestNo"
      colon
      readonly
    />

    <van-field
      type="text"
      name="contractNo"
      v-model="projpcontractarchives.contractNo"
      label="合同编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractarchives.contractNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isProcure"
      name="purchaseNo"
      v-model="projpcontractarchives.purchaseNo"
      label="采购合同编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractarchives.purchaseNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="archivesTypeText"
      v-model="projpcontractarchives.archivesTypeText"
      label="存档类型"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractarchives.archivesTypeText}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-model="projpcontractarchives.hasOriginalName"
      label="是否原件"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractarchives.hasOriginalName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="ownDeptName"
      v-model="projpcontractarchives.ownDeptName"
      label="所属部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractarchives.ownDeptName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-model="projpcontractarchives.hasContractName"
      label="是否签订合同"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractarchives.hasContractName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="archivesAttribute2"
      v-model="projpcontractarchives.archivesAttributeName"
      label="存档属性"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractarchives.archivesAttributeName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isSale"
      name="oldId"
      v-model="projpcontractarchives.oldId"
      label="原存档编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractarchives.oldId}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isSale"
      name="actualSignDate"
      v-model="projpcontractarchives.actualSignDate"
      label="实际签订时间"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractarchives.actualSignDate}}</div>
      </template>
    </van-field>
    <div v-if="isCheck" id="table-tr">
      <div class="table-title">验收报告相关信息</div>
      <el-table border :data="selectReportByRequestNo" :row-class-name="tableRowClassName" style="width: 100%" @row-click="handleClickTable">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="收付类型" prop="prTypeText"></el-table-column>
        <el-table-column label="预计收款时间" prop="paymentDate"></el-table-column>
        <el-table-column label="预计收款金额" prop="notInvoicedAmount"></el-table-column>
        <el-table-column label="预计收款条件" prop="paymentCondition"></el-table-column>
        <el-table-column label="计入科目" prop="accountSubjectText"></el-table-column>
        <el-table-column label="预计验收报告名称" prop="reportName"></el-table-column>
        <el-table-column label="实际验收报告名称" prop="rReportName"></el-table-column>
        <el-table-column label="是否有验收报告" prop="hasReportText"></el-table-column>
        <el-table-column label="预计验收报告时间" prop="reportDate"></el-table-column>
        <el-table-column label="确认业绩时间" prop="rReportDate"></el-table-column>
        <el-table-column label="款项名称" prop="paymentName"></el-table-column>
        <el-table-column fixed="right" width="50">
          <template slot-scope="scope">
            <div>
              <el-button @click.native.stop="handleClickTable(scope.row)" type="text" size="small">查看</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-if="isTable">
      <div class="table-title">预计现金流量表（收/付款情况）</div>
      <el-table border :data="paymentArchivesList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="收付类型" prop="prTypeText"></el-table-column>
        <el-table-column label="预计收/付款时间" prop="paymentDate"></el-table-column>
        <el-table-column label="采购合同号" prop="purchaseNo"></el-table-column>
        <el-table-column label="对方单位" prop="opposingUnit"></el-table-column>
        <el-table-column label="我方单位" prop="ourUnit"></el-table-column>
        <el-table-column label="预计收/付款金额" prop="paymentAmount"></el-table-column>
        <el-table-column label="税率" prop="paymentRateText"></el-table-column>
        <el-table-column label="预计收/付款条件" prop="paymentCondition"></el-table-column>
        <el-table-column label="计入科目" prop="accountSubjectText"></el-table-column>
        <el-table-column label="验收报告名称" prop="reportName"></el-table-column>
        <el-table-column label="是否有验收报告" prop="hasReportText"></el-table-column>
        <el-table-column label="预计验收报告时间" prop="reportDate"></el-table-column>
        <el-table-column label="款项名称" prop="paymentName"></el-table-column>
      </el-table>
    </div>
    <div v-if="isTable">
      <div class="table-title">附件列表</div>
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
    <!-- 弹出框 -->
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column
          property="date"
          label="日期"
          width="150"
        ></el-table-column>
        <el-table-column
          property="name"
          label="姓名"
          width="200"
        ></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { projpcontractarchivesApi, selectReportByRequestNoApi } from '../../api/contract'
import { Toast } from 'vant'
export default {
  name: 'index',
  data () {
    return {
      isSale: false, // 销售合同
      isCheck: false, // 验收报告
      isTable: false, // 销售合同 // 采购合同 // 合作协议
      isProcure: false, // 采购合同
      dialogTableVisible: false, // 弹出框
      dataList: this.$route.query,
      fileList: [],
      files: [], // 循环列表
      selectReportByRequestNo: [], // 验收报告相关信息
      paymentArchivesList: [], // 现金流
      projpcontractarchives: [],
      gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
    }
  },
  created () {
    // 判断当前节点
    if(
        this.dataList.currFlowId === 'ContractFileApprove' &&
        this.dataList.currFlowName === '合同存档' &&
        this.dataList.currTaskDefinitionKey === 'BusiAnalysis' &&
        this.dataList.currTaskDefinitionName === '运营管理部'
    ) {
      console.log('11')
    } else {}
    projpcontractarchivesApi(this.dataList.dataId).then(res => {
      // 验收报告相关信息
      selectReportByRequestNoApi(res.data.contractNo + '/' + res.data.requestNo).then(res => {
        if (res.data) {
          this.selectReportByRequestNo = res.data.paymentList
        } else {
          Toast.fail({ duration: 1500, message: '数据异常，请刷新' })
        }
      })
      if (res.data) {
        this.projpcontractarchives = res.data
        this.paymentArchivesList = res.data.paymentArchivesList
        this.files = res.data.fileList ? res.data.fileList : []
        this.fileList = this.files.map(item => {
          return JSON.stringify({
            fileName: item.fileName,
            url: item.url,
            fileSize: item.fileSize,
            fileId: item.fileId
          })
        })
        // 是否签订合同
        if (this.projpcontractarchives.hasContract === '1') {
          this.projpcontractarchives.hasContractName = '是'
        } else {
          this.projpcontractarchives.hasContractName = '否'
        }
        // 是否原件
        if (this.projpcontractarchives.hasOriginal === '1') {
          this.projpcontractarchives.hasOriginalName = '是'
        } else {
          this.projpcontractarchives.hasOriginalName = '否'
        }
        // 判断存档类型
        if (this.projpcontractarchives.archivesAttribute === '1' && this.projpcontractarchives.archivesType === '4') { // 验收报告
          this.projpcontractarchives.archivesAttributeName = '补充存档'
          this.isCheck = true
        } else if (this.projpcontractarchives.archivesAttribute === '2' && this.projpcontractarchives.archivesType === '1') { // 销售合同
          this.isSale = true
          this.isTable = true
          this.projpcontractarchives.archivesAttributeName = '覆盖存档'
        } else if (this.projpcontractarchives.archivesAttribute === '1' && this.projpcontractarchives.archivesType === '2') { // 采购合同
          this.isProcure = true
          this.isTable = true
          this.projpcontractarchives.archivesAttributeName = '补充存档'
        } else {
          this.isTable = true
          this.projpcontractarchives.archivesAttributeName = '补充存档'
        }
      } else {
        Toast.fail({ duration: 1500, message: '数据异常，请刷新' })
      }
    })
  },
  methods: {
    tableRowClassName ({row, rowIndex}) {
        if (row.hasModify === '1') {
          return 'acceptance'
        } else {
          return 'isAcceptance'
        }
    },
    handleClick (data) {
      console.log(data.url)
      this.downLoad(data)
    },
    handleClickTable (table) {
      this.dialogTableVisible = true
      console.log(table)
    },
    // 处理序号
    indexMethods (index) {
      return index + 1
    }
  }
}
</script>
<style lang="less">
#table-tr {
.el-table .acceptance {
  background: yellow;
}
.el-table .isAcceptance {
  background: white;
}
.el-table__body tr.hover-row>td {
    background: yellow;
}
}
</style>
