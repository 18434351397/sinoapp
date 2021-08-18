<template>
  <div class="app-title">
    <div class="title">合同存档信息</div>
    <van-field type="text" style="display: none" name="archivesType" v-model="projpcontractarchives.archivesType" colon readonly />
    <van-field type="text" style="display: none" name="cbxReport" v-model="projpcontractarchives.cbxReport" colon readonly />
    <van-field type="text" style="display: none" name="id" v-model="projpcontractarchives.id" colon readonly />
    <van-field type="text" style="display: none" name="meetingUsers" v-model="projpcontractarchives.meetingUsers" colon readonly />
    <van-field type="text" style="display: none" name="operationEndTime" v-model="projpcontractarchives.operationEndTime" colon readonly />
    <van-field type="text" style="display: none" name="operationStartTime" v-model="projpcontractarchives.operationStartTime" colon readonly />
    <van-field type="text" style="display: none" name="purchaseNo" v-model="projpcontractarchives.purchaseNo" colon readonly />
    <van-field type="text" style="display: none" name="receiveCanComit" v-model="projpcontractarchives.receiveCanComit" colon readonly />
    <van-field type="text" style="display: none" name="requestNo" v-model="projpcontractarchives.requestNo" colon readonly />

    <van-field type="text" name="contractNo" v-model="projpcontractarchives.contractNo" label="合同编号" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ projpcontractarchives.contractNo }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isProcure" name="purchaseNo" v-model="projpcontractarchives.purchaseNo" label="采购合同编号" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ projpcontractarchives.purchaseNo }}</div>
      </template>
    </van-field>
    <van-field type="text" name="archivesTypeText" v-model="projpcontractarchives.archivesTypeText" label="存档类型" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ projpcontractarchives.archivesTypeText }}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="projpcontractarchives.hasOriginalName" label="是否原件" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ projpcontractarchives.hasOriginalName }}</div>
      </template>
    </van-field>
    <van-field type="text" name="ownDeptName" v-model="projpcontractarchives.ownDeptName" label="所属部门" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ projpcontractarchives.ownDeptName }}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="projpcontractarchives.hasContractName" label="是否签订合同" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ projpcontractarchives.hasContractName }}</div>
      </template>
    </van-field>
    <van-field type="text" name="archivesAttribute2" v-model="projpcontractarchives.archivesAttributeName" label="存档属性" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ projpcontractarchives.archivesAttributeName }}</div>
      </template>
    </van-field>
    <!-- 销售和采购 -->
    <van-field type="text" v-if="isSale ? true : isProcure ? true : false" name="isPriceAndTaxSeparated" label="文本是否价税分离签订" colon readonly>
      <template #input>
        <van-radio-group disabled v-model="projpcontractarchives.isPriceAndTaxSeparated" direction="horizontal" style="margin-left: 4px">
          <van-radio name="1">是</van-radio>
          <van-radio name="0">否</van-radio>
        </van-radio-group>
      </template>
    </van-field>

    <!-- 是否价税分离 -->
    <div v-if="projpcontractarchives.archivesType === '1' || projpcontractarchives.archivesType === '2'">
      <!-- 合同总金额 -->
      <div
        v-if="
          this.dataList.currFlowName === '合同存档-销售、采购合同' && this.dataList.currTaskDefinitionName === '库管' && this.dataList.statusDes === '审核中'
        "
      >
        <van-field
          class="fileAmount"
          type="text"
          name="contractTotalAmount"
          v-model="projpcontractarchives.contractTotalAmount"
          placeholder="请输入合同总金额"
          label="合同总金额"
          colon
        />
      </div>
      <div v-else>
        <van-field type="text" v-model="projpcontractarchives.contractTotalAmount" name="contractTotalAmount" label="合同总金额" colon readonly>
          <template #input>
            <div style="text-align: left; margin: 0">{{ projpcontractarchives.contractTotalAmount }}</div>
          </template>
        </van-field>
      </div>

      <div v-if="projpcontractarchives.isPriceAndTaxSeparated === '1'">
        <div
          v-if="
            this.dataList.currFlowName === '合同存档-销售、采购合同' && this.dataList.currTaskDefinitionName === '库管' && this.dataList.statusDes === '审核中'
          "
        >
          <van-field
            class="fileAmount"
            type="text"
            name="noTaxAmount"
            v-model="projpcontractarchives.noTaxAmount"
            placeholder="请输入未税金额"
            label="未税金额"
            colon
          />
          <van-field class="fileAmount" type="text" name="taxAmount" v-model="projpcontractarchives.taxAmount" placeholder="请输入税额" label="税额" colon />
        </div>
        <div v-else>
          <div>
            <van-field type="text" v-model="projpcontractarchives.noTaxAmount" name="noTaxAmount" label="未税金额" colon readonly>
              <template #input>
                <div style="text-align: left; margin: 0">{{ projpcontractarchives.noTaxAmount }}</div>
              </template>
            </van-field>
            <van-field type="text" v-model="projpcontractarchives.taxAmount" name="taxAmount" label="税额" colon readonly>
              <template #input>
                <div style="text-align: left; margin: 0">{{ projpcontractarchives.taxAmount }}</div>
              </template>
            </van-field>
          </div>
        </div>
      </div>
    </div>

    <!-- 销售合同 -->
    <van-field type="text" v-if="isSale" name="oldId" v-model="projpcontractarchives.oldId" label="原存档编号" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ projpcontractarchives.oldId }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isSale" name="contractContents" v-model="projpcontractarchives.contractContents" label="合同内容" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ projpcontractarchives.contractContents }}</div>
      </template>
    </van-field>
    <van-field type="text" v-if="isSale" name="actualSignDate" v-model="projpcontractarchives.actualSignDate" label="实际签订时间" colon readonly>
      <template #input>
        <div style="text-align: left; margin: 0">{{ projpcontractarchives.actualSignDate }}</div>
      </template>
    </van-field>
    <!-- 采购合同 -->
    <van-field
      type="text"
      v-if="isProcure"
      name="purchaseAcctualSignDate"
      v-model="projpcontractarchives.purchaseAcctualSignDate"
      label="实际签订时间"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ projpcontractarchives.purchaseAcctualSignDate }}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isProcure"
      name="purchaseContractName"
      v-model="projpcontractarchives.purchaseContractName"
      label="采购合同名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left; margin: 0">{{ projpcontractarchives.purchaseContractName }}</div>
      </template>
    </van-field>

    <div v-if="isCheck" id="table-tr">
      <div class="table-title">验收报告相关信息</div>
      <vxe-table border resizable highlight-hover-row :row-class-name="tableRowClassName" @cell-click="handleClickTable" :data="selectReportByRequestNo">
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="prTypeText" title="收付类型" width="21%"></vxe-table-column>
        <vxe-table-column field="paymentDate" title="预计收款时间" width="25%"></vxe-table-column>
        <vxe-table-column field="notInvoicedAmount" title="预计收款金额" width="21%"></vxe-table-column>
        <vxe-table-column field="paymentCondition" title="预计收款条件" width="30%"></vxe-table-column>
        <vxe-table-column field="accountSubjectText" title="计入科目" width="21%"></vxe-table-column>
        <vxe-table-column field="reportName" title="预计验收报告名称" width="20%"></vxe-table-column>
        <vxe-table-column field="rReportName" title="实际验收报告名称" width="20%"></vxe-table-column>
        <vxe-table-column field="hasReportText" title="是否有验收报告" width="21%"></vxe-table-column>
        <vxe-table-column field="reportDate" title="预计验收报告时间" width="25%"></vxe-table-column>
        <vxe-table-column field="rReportDate" title="确认业绩时间" width="25%"></vxe-table-column>
        <vxe-table-column field="paymentName" title="款项名称" width="25%"></vxe-table-column>
        <vxe-table-column fixed="right" width="15%">
          <template slot-scope="scope">
            <div>
              <el-button @click.native.stop="handleClickTable(scope)" type="text" size="small">查看</el-button>
            </div>
          </template>
        </vxe-table-column>
      </vxe-table>
    </div>
    <div v-if="isTable">
      <div class="table-title">预计现金流量表（收/付款情况）</div>
      <vxe-table border resizable highlight-hover-row :data="paymentArchivesList">
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="prTypeText" title="收付类型" width="21%"></vxe-table-column>
        <vxe-table-column field="paymentDate" title="预计收/付款时间" width="25%"></vxe-table-column>
        <vxe-table-column field="purchaseNo" title="采购合同号" width="25%"></vxe-table-column>
        <vxe-table-column field="opposingUnit" title="对方单位" width="25%"></vxe-table-column>
        <vxe-table-column field="ourUnit" title="我方单位" width="25%"></vxe-table-column>
        <vxe-table-column field="paymentAmount" width="100" title="预计收/付款金额"></vxe-table-column>
        <vxe-table-column field="paymentRateText" width="100" title="税率"></vxe-table-column>
        <vxe-table-column field="paymentCondition" width="200" title="预计收/付款条件"></vxe-table-column>
        <vxe-table-column field="accountSubjectText" width="100" title="计入科目"></vxe-table-column>
        <vxe-table-column field="reportName" width="100" title="验收报告名称"></vxe-table-column>
        <vxe-table-column field="hasReportText" width="100" title="是否有验收报告"></vxe-table-column>
        <vxe-table-column field="reportDate" width="100" title="预计验收报告时间"></vxe-table-column>
        <vxe-table-column field="paymentName" width="100" title="款项名称"></vxe-table-column>
      </vxe-table>
    </div>
    <div v-if="isTable">
      <div class="table-title">附件列表</div>
      <vxe-table border resizable highlight-hover-row :data="files">
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="fileName" title="附件名称" width="50%"></vxe-table-column>
        <vxe-table-column title="大小" width="20%">
          <template slot-scope="scope">{{ (scope.row.fileSize / 1024).toFixed(2) + 'KB' }}</template>
        </vxe-table-column>
        <vxe-table-column title="操作" width="15%">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
          </template>
        </vxe-table-column>
      </vxe-table>
    </div>
    <!-- 表格数据弹出框 -->
    <el-dialog title="验收报告记录" class="dialog-report" :visible.sync="dialogTableVisible">
      <vxe-table border resizable highlight-hover-row :data="gridData">
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="attName" title="验收报告名称" width="21%"></vxe-table-column>
        <vxe-table-column field="percent" title="确认业绩比例" width="21%"></vxe-table-column>
        <vxe-table-column field="reportSigningDate" title="验收实际签订时间" width="21%"></vxe-table-column>
        <vxe-table-column field="aRReportDate" title="验收实际收到日期" width="21%"></vxe-table-column>
        <vxe-table-column field="reportReceivedDate" title="确认业绩时间" width="21%"></vxe-table-column>
        <vxe-table-column field="remark" title="状态" width="17%"></vxe-table-column>
        <vxe-table-column fixed="right" width="15%">
          <template slot-scope="scope">
            <div v-if="scope.row.remark === '' ? false : true">
              <el-button @click.native.stop="handleClickFile(scope.row)" v-if="!fileBtn" type="text" size="small">查看</el-button>
              <el-button @click.native.stop="handleEditFile(scope.row)" v-if="fileBtn" type="text" size="small">修改</el-button>
            </div>
          </template>
        </vxe-table-column>
      </vxe-table>
      <div slot="footer" class="dialog-footer close-btn">
        <el-button type="primary" @click="dialogTableVisible = false" size="small">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 普通附件弹出框 -->
    <el-dialog title="查看附件" class="dialog-report" :visible.sync="dialogFileVisible">
      <van-field type="text" name="reportName" v-model="selectAttname.reportName" label="验收报告名称" colon readonly>
        <template #input>
          <div style="text-align: left; margin: 0">{{ selectAttname.reportName }}</div>
        </template>
      </van-field>
      <van-field type="text" name="percent" v-model="selectAttname.percent" label="确认业绩比例" colon readonly>
        <template #input>
          <div style="text-align: left; margin: 0">{{ selectAttname.percent }}</div>
        </template>
      </van-field>
      <van-field type="text" name="reportSigningDate" v-model="selectAttname.reportSigningDate" label="验收实际签订日期" colon readonly>
        <template #input>
          <div style="text-align: left; margin: 0">{{ selectAttname.reportSigningDate }}</div>
        </template>
      </van-field>
      <van-field type="text" name="aRReportDate" v-model="selectAttname.aRReportDate" label="验收实际收到日期" colon readonly>
        <template #input>
          <div style="text-align: left; margin: 0">{{ selectAttname.aRReportDate }}</div>
        </template>
      </van-field>
      <div class="table-title">附件列表</div>
      <vxe-table border resizable highlight-hover-row :data="selectAttnameFile">
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="fileName" title="附件名称" width="50%"></vxe-table-column>
        <vxe-table-column title="大小" width="20%">
          <template slot-scope="scope">{{ (scope.row.fileSize / 1024).toFixed(2) + 'KB' }}</template>
        </vxe-table-column>
        <vxe-table-column title="操作" width="15%">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
          </template>
        </vxe-table-column>
      </vxe-table>
      <div slot="footer" class="dialog-footer close-btn">
        <el-button type="primary" @click="dialogFileVisible = false" size="small">关 闭</el-button>
      </div>
    </el-dialog>
    <!-- 运管附件的弹窗 -->
    <el-dialog title="查看附件" class="dialog-report edit-dialog" :visible.sync="dialogFileEdit">
      <van-form @submit="onSubmitEdit">
        <van-field
          type="text"
          name="reportName"
          v-model="selectAttname.reportName"
          label="验收报告名称"
          :rules="[{ required: true, message: '请填写验收报告名称' }]"
          colon
        />
        <van-field
          type="text"
          name="percent"
          v-model="selectAttname.percent"
          label="确认业绩比例"
          colon
          :rules="[{ required: true, message: '请填写确认业绩比例' }]"
        />
        <van-field name="reportSigningDate" @click="showPopFn('report')" v-model="selectAttname.reportSigningDate" label="验收实际签订日期" colon>
          <template #input>
            <div style="text-align: left; margin: 0">{{ selectAttname.reportSigningDate }}</div>
          </template>
        </van-field>
        <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
          <van-datetime-picker v-model="currentDate" type="date" @change="changeFn()" @confirm="confirmFn()" @cancel="cancelFn()" />
        </van-popup>
        <van-field name="aRReportDate" @click="showPopFn('aRReport')" v-model="selectAttname.aRReportDate" label="验收实际收到日期" colon>
          <template #input>
            <div style="text-align: left; margin: 0">{{ selectAttname.aRReportDate }}</div>
          </template>
        </van-field>
        <van-field
          name="rReportDate"
          @click="showPopFn('rReportDate')"
          v-model="selectAttname.rReportDate"
          label="确认业绩时间"
          colon
          :rules="[{ required: true, message: '请选择确认业绩时间' }]"
        >
          <template #input>
            <div style="text-align: left; margin: 0">{{ selectAttname.rReportDate }}</div>
          </template>
        </van-field>
      </van-form>
      <div class="table-title">附件列表</div>
      <vxe-table border resizable highlight-hover-row :data="selectAttnameFile">
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="fileName" title="附件名称" width="50%"></vxe-table-column>
        <vxe-table-column title="大小" width="20%">
          <template slot-scope="scope">{{ (scope.row.fileSize / 1024).toFixed(2) + 'KB' }}</template>
        </vxe-table-column>
        <vxe-table-column title="操作" width="15%">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
          </template>
        </vxe-table-column>
      </vxe-table>
      <div slot="footer" class="dialog-footer close-btn">
        <el-button type="primary" @click="onSubmitEdit(selectAttname, 'ok')" size="small">同 意</el-button>
        <el-button type="info" @click="onSubmitEdit(selectAttname, 'noOk')" size="small">不同意</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { projpcontractarchivesApi, selectReportByRequestNoApi, passedAndFormApi, selectAttnameApi, updateAttachApi } from '../../api/contract'
import { Toast, Dialog } from 'vant'
export default {
  name: 'index',
  data() {
    return {
      currentDate: new Date(),
      changeDate: new Date(),
      show: false, // 用来显示弹出层
      tableList: [], // 暂存数据
      value: '', // 判断日期
      isSale: false, // 销售合同
      isCheck: false, // 验收报告
      isTable: false, // 销售合同 // 采购合同 // 合作协议
      isProcure: false, // 采购合同
      dialogTableVisible: false, // 弹出框
      dialogFileVisible: false, // 查看附件
      dialogFileEdit: false, // 修改
      selectAttname: [], // 附件列表信息
      selectAttnameFile: [], // 附件列表数据
      dataList: this.$route.query,
      fileBtn: false,
      fileList: [],
      files: [], // 循环列表
      selectReportByRequestNo: [], // 验收报告相关信息
      paymentArchivesList: [], // 现金流
      projpcontractarchives: [],
      gridData: []
    }
  },
  created() {
    // 判断当前节点
    if (
      this.dataList.currFlowId === 'ContractFileApprove' &&
      this.dataList.currFlowName === '合同存档' &&
      this.dataList.currTaskDefinitionKey === 'BusiAnalysis' &&
      this.dataList.currTaskDefinitionName === '运营管理部' &&
      this.dataList.formTitle.indexOf('验收报告') !== -1
    ) {
      this.fileBtn = true
    } else {
    }
    projpcontractarchivesApi(this.dataList.dataId).then(res => {
      if (this.dataList.currFlowName === '合同存档' && this.dataList.formTitle.indexOf('验收报告') !== -1) {
        // 验收报告相关信息
        selectReportByRequestNoApi(res.data.contractNo + '/' + res.data.requestNo).then(res => {
          if (res.data) {
            this.selectReportByRequestNo = res.data.paymentList
          } else {
            Toast.fail({ duration: 1500, message: '数据异常，请刷新' })
          }
        })
      } else {
        selectReportByRequestNoApi(res.data.contractNo + '/' + this.dataList.dataId).then(res => {
          if (res.data) {
            this.selectReportByRequestNo = res.data.paymentList
          } else {
            Toast.fail({ duration: 1500, message: '数据异常，请刷新' })
          }
        })
      }
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
        if (res.data.hasContract === '1') {
          res.data.hasContractName = '是'
        } else {
          res.data.hasContractName = '否'
        }
        // 是否原件
        if (res.data.hasOriginal === '1') {
          res.data.hasOriginalName = '是'
        } else {
          res.data.hasOriginalName = '否'
        }
        console.log(res.data)
        if (res.data.archivesAttribute === '1') {
          res.data.archivesAttributeName = '补充存档'
        } else {
          res.data.archivesAttributeName = '覆盖存档'
        }
        // 判断存档类型
        if (res.data.archivesType === '4') {
          // 验收报告
          this.isCheck = true
        } else if (res.data.archivesType === '1') {
          // 销售合同
          this.isSale = true
          this.isTable = true
        } else if (res.data.archivesType === '2') {
          // 采购合同
          this.isProcure = true
          this.isTable = true
          res.data.archivesAttributeName = '补充存档'
        } else {
          this.isTable = true
          res.data.archivesAttributeName = '补充存档'
        }
      } else {
        Toast.fail({ duration: 1500, message: '数据异常，请刷新' })
      }
    })
  },
  mounted() {
    this.timeFormat(new Date())
  },
  methods: {
    showPopFn(date) {
      this.value = date
      this.show = true
    },
    showPopup() {
      this.show = true
    },
    changeFn() {
      // 值变化是触发
      this.changeDate = this.currentDate // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
    },
    confirmFn() {
      // 确定按钮
      if (this.value === 'report') {
        this.selectAttname.reportSigningDate = this.timeFormat(this.currentDate)
      } else if (this.value === 'aRReport') {
        this.selectAttname.aRReportDate = this.timeFormat(this.currentDate)
      } else if (this.value === 'rReportDate') {
        this.selectAttname.rReportDate = this.timeFormat(this.currentDate)
      }
      this.show = false
    },
    cancelFn() {
      this.show = false
    },
    timeFormat(time) {
      const y = time.getFullYear()
      let m = time.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = time.getDate()
      d = d < 10 ? '0' + d : d
      return y + '-' + m + '-' + d
    },
    tableRowClassName({ row, rowIndex }) {
      if (row.hasModify === '1') {
        return 'acceptance'
      } else {
        return 'isAcceptance'
      }
    },
    handleClick(data) {
      console.log(data.url)
      this.downLoad(data)
    },
    // 修改提交
    onSubmitEdit(data, value) {
      let audit = ''
      if (value === 'ok') {
        audit = 'agree'
      } else {
        audit = 'disAgree'
      }
      const fileList = data.fileList.map(item => {
        return JSON.stringify({
          fileName: item.fileName,
          url: item.url,
          fileSize: item.fileSize,
          fileId: item.fileId
        })
      })
      const option = {
        aRReportDate: data.aRReportDate,
        audit: audit,
        fileIdList: data.fileIdList,
        file: fileList,
        id: data.id,
        paymentCondition: data.paymentCondition,
        percent: data.percent,
        rReportDate: data.rReportDate,
        reportName: data.reportName,
        reportSigningDate: data.reportSigningDate,
        requestNo: data.requestNo
      }
      Dialog.confirm({
        message: '确定要提交吗？'
      })
        .then(() => {
          // on confirm
          updateAttachApi(option).then(res => {
            if (res.resultCode === '200') {
              Toast.success('请求成功')
              this.dialogFileEdit = false
              setTimeout(() => {
                this.handleClickTable(this.tableList)
              }, 500)
            } else {
              Toast.fail(res.resultMessage)
            }
          })
        })
        .catch(() => {
          // on cancel
        })
    },
    // 修改附件信息
    handleEditFile(file) {
      this.dialogFileEdit = true
      selectAttnameApi(file.id).then(res => {
        this.selectAttname = res.data
        if (!res.data.rReportDate) {
          const time = new Date()
          const y = time.getFullYear()
          let m = time.getMonth() + 1
          m = m < 10 ? '0' + m : m
          let d = time.getDate()
          d = d < 10 ? '0' + d : d
          const date = y + '-' + m + '-' + d
          this.selectAttname.rReportDate = date
        } else {
        }
        this.selectAttnameFile = res.data.fileList
      })
    },
    // 附件
    handleClickFile(file) {
      this.dialogFileVisible = true
      selectAttnameApi(file.id).then(res => {
        this.selectAttname = res.data
        this.selectAttnameFile = res.data.fileList
      })
    },
    // 表格
    handleClickTable(table) {
      this.tableList = table.row
      this.dialogTableVisible = true
      const data = {
        asc: false,
        current: 1,
        openSort: true,
        searchCount: true,
        size: 30,
        condition: {
          cpId: this.tableList.id,
          requestNo: res.data.requestNo
        }
      }
      passedAndFormApi(data).then(res => {
        if (res.data) {
          this.gridData = res.data.records
        }
      })
    },
    // 处理序号
    indexMethods(index) {
      return index + 1
    }
  }
}
</script>
<style lang="less">
#table-tr {
  .vxe-table .acceptance {
    background: yellow;
  }
  .vxe-table .isAcceptance {
    background: white;
  }
  // .el-table__body tr.hover-row>td {
  //     background: yellow;
  // }
}
.dialog-report {
  .el-dialog {
    margin-top: 0 !important;
    height: 100%;
    width: 100%;
    margin: 0;
  }
  .el-dialog__body {
    padding: 0;
  }
}
.el-dialog__footer {
  padding: 0;
}
.close-btn {
  position: fixed;
  bottom: 0;
  padding: 10px 20px 28px;
  right: 0;
}
.edit-dialog {
  .van-cell:not(:last-child)::after {
    border-bottom: 1px solid #ebedf0;
  }
}
.van-toast,
.van-dialog,
.van-popup--bottom {
  z-index: 9999 !important;
}
div.van-overlay {
  z-index: 9000 !important;
}
</style>
