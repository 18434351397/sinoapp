/** *@author XuJinTao *@date 2020/5/18 9:01 *@title index */
<template>
  <div class="app-title">
    <div class="title">合同付款信息</div>
    <van-field style="display: none;" name="id" v-model="projppayreq.id" type="text" readonly />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="projppayreq.meetingUsers"
      type="text"
      readonly
    />

    <van-field
      type="text"
      name="contractNo"
      v-model="projppayreq.contractNo"
      label="合同号"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.contractNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="projectname"
      v-model="projppayreq.projectname"
      label="项目名称"
      colon
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.projectname}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="payTypeDesc"
      v-model="projppayreq.payTypeDesc"
      label="付款类型"
      colon
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.payTypeDesc}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="payAmount"
      v-model="projppayreq.payAmount"
      label="本次付款总金额"
      colon
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.payAmount}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="payMethodDesc"
      v-model="projppayreq.payMethodDesc"
      label="支出形式"
      colon
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.payMethodDesc}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="dueDate"
      v-if="isDueDate"
      v-model="projppayreq.dueDate"
      label="到期日"
      colon
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.dueDate}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="leadOrgName"
      v-model="projppayreq.leadOrgName"
      label="主导部门"
      colon
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.leadOrgName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="pmManagerName"
      v-model="projppayreq.pmManagerName"
      label="项目经理"
      colon
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.pmManagerName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="contractAmount"
      v-model="projpcontractpayment.contractAmount"
      label="合同金额"
      colon
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpayment.contractAmount}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="receiveAmount"
      v-model="projpcontractpayment.receiveAmount"
      label="合同已收款金额"
      colon
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpayment.receiveAmount}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="contractPayAmount"
      v-model="projpcontractpayment.contractPayAmount"
      label="合同已付款金额"
      colon
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpayment.contractPayAmount}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="companyq"
      v-model="projppayreq.companyq"
      label="现金流状态"
      colon
      readonly
     />
    <van-field
      type="text"
      name="purchaseNo"
      v-model="projppayreq.purchaseNo"
      label="采购合同号"
      colon
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.purchaseNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="supplierIdDesc"
      v-model="projppayreq.supplierIdDesc"
      label="供应商"
      colon
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.supplierIdDesc}}</div>
      </template>
    </van-field>
    <van-field type="text" name="bank" v-model="projppayreq.bank" label="开户银行" colon readonly >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.bank}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="accountInformention"
      v-model="projppayreq.accountInformention"
      label="对方账户信息"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.accountInformention}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="nexReceiveAmount"
      v-model="projppayreq.nexReceiveAmount"
      label="下一笔收款金额"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.nexReceiveAmount}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="nextReceiveTime"
      v-model="projppayreq.nextReceiveTime"
      label="下一笔收款时间"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.nextReceiveTime}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="nextReceivePeople"
      v-model="projppayreq.nextReceivePeople"
      label="收款负责人"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.nextReceivePeople}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="companyDesc"
      v-model="projppayreq.companyDesc"
      label="支出公司"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.companyDesc}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="reqUserName"
      v-model="projppayreq.reqUserName"
      label="申请人"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.reqUserName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="reqDeptName"
      v-model="projppayreq.reqDeptName"
      label="申请人部门"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.reqDeptName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="payMoneyTypeDesc"
      v-model="projppayreq.payMoneyTypeDesc"
      label="付款方式"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.payMoneyTypeDesc}}</div>
      </template>
    </van-field>
    <van-field type="text" name="remark" v-model="projppayreq.remark" label="备注" colon readonly >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projppayreq.remark}}</div>
      </template>
    </van-field>
    <div>
      <div class="table-title">付款明细</div>
      <el-table border :data="projpPayDetailList" style="width: 100%">
        <el-table-column label="付款条件" prop="paymentMattersText"></el-table-column>
        <el-table-column label="付款条件编号" prop="detailPayNoText"></el-table-column>
        <el-table-column label="应付款金额" prop="mustPayAmount"></el-table-column>
        <el-table-column label="已付款金额" prop="cPayAmount"></el-table-column>
        <el-table-column label="本次付款金额" prop="tPayAmount"></el-table-column>
        <el-table-column label="采购合同付款条件" prop="purchaseId"></el-table-column>
      </el-table>
    </div>
    <div>
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
  </div>
</template>

<script>
import { projppayreqApi, projpcontractpaymentApi, cashStatusApi } from '../../api/contract'
export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      fileList: [],
      fileIdList: [],
      isDueDate: false,
      files: [], // 循环列表
      projpPayDetailList: [], // 付款明细
      projpcontractpayment: [], // 金额数据
      projppayreq: []
    }
  },
  created () {
    projppayreqApi(this.dataList.dataId).then(res => {
      if (res.data) {
        // 合同付款金额
        projpcontractpaymentApi(res.data.contractNo).then(resp => {
          if (resp.data) {
            this.projpcontractpayment = resp.data
          } else { }
        })
        // 现金流状态
        cashStatusApi(this.dataList.dataId).then(resq => {
          if (resq.data) {
            console.log(resq.data)
            if (resq.data === '0') {
              res.data.companyq = '负现金流'
            } else if (resq.data === '1') {
              res.data.companyq = '正现金流'
            }
          } else { }
        })
        if (res.data.payMethodDesc === '其他' || res.data.payMethodDesc === '现金') {
          this.isDueDate = false
        } else {
          this.isDueDate = true
        }
        if (res.data.payMoneyType === '0') {
          res.data.payMoneyTypeDesc = '人民币'
        } else {
          res.data.payMoneyTypeDesc = '美元'
        }
        this.projppayreq = res.data
        console.log(this.projppayreq)
        this.projpPayDetailList = res.data.projpPayDetailList
        res.data.fileList.forEach(item => {
          this.fileIdList = this.fileIdList.concat(item.fileId)
        })
        this.files = res.data.fileList ? res.data.fileList : []
        this.fileList = this.files.map(item => {
          return JSON.stringify({
            fileName: item.fileName,
            url: item.url,
            fileSize: item.fileSize,
            fileId: item.fileId
          })
        })
      } else { }
    })
  },
  methods: {
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
