<template>
  <div class="app-title">
    <div class="title">采购合同评审信息</div>
    <van-field
      style="display: none;"
      name="bizId"
      v-model="projpcontractpurchaseList.bizId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="id"
      v-model="projpcontractpurchaseList.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="company"
      v-model="projpcontractpurchaseList.company"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="contractType"
      v-model="projpcontractpurchaseList.contractType"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="hasPno"
      v-model="projpcontractpurchaseList.hasPno"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="isSingle"
      v-model="projpcontractpurchaseList.isSingle"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="projpcontractpurchaseList.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="ownDeptId"
      v-model="projpcontractpurchaseList.ownDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="payType"
      v-model="projpcontractpurchaseList.payType"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="pmManager"
      v-model="projpcontractpurchaseList.pmManager"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="purchaseType"
      v-model="projpcontractpurchaseList.purchaseType"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="supplierId"
      v-model="projpcontractpurchaseList.supplierId"
      type="text"
      readonly
    />

    <van-field
      type="text"
      name="hasPnoName"
      label="是否已有采购合同/合作协议"
      v-model="projpcontractpurchaseList.hasPnoName"
      readonly
      colon
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.hasPnoName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="purchaseNo"
      v-model="projpcontractpurchaseList.purchaseNo"
      label="采购合同编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.purchaseNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="projectNo"
      v-model="projpcontractpurchaseList.projectNo"
      label="立项号/合同号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.projectNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="companyText"
      v-model="projpcontractpurchaseList.companyText"
      label="涉及公司"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.companyText}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="projectName"
      v-model="projpcontractpurchaseList.projectName"
      label="销售合同名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.projectName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="contractTypeName"
      v-model="projpcontractpurchaseList.contractTypeName"
      label="销售合同类型"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.contractTypeName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="contractAmount"
      v-model="projpcontractpurchaseList.contractAmount"
      label="销售合同金额"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.contractAmount}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="pmManagerName"
      v-model="projpcontractpurchaseList.pmManagerName"
      label="项目经理"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.pmManagerName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="isSingleName"
      label="是否单一来源采购"
      v-model="projpcontractpurchaseList.isSingleName"
      readonly
      colon
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.isSingleName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="supplierName"
      v-model="projpcontractpurchaseList.supplierName"
      label="乙方名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.supplierName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="purchaseAmount"
      v-model="projpcontractpurchaseList.purchaseAmount"
      label="采购金额"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.purchaseAmount}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="payTypeName"
      v-model="projpcontractpurchaseList.payTypeName"
      label="支付方式"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.payTypeName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="purchaseTypeName"
      v-model="projpcontractpurchaseList.purchaseTypeName"
      label="采购类型"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.purchaseTypeName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="dataType"
      v-model="projpcontractpurchaseList.dataType"
      label="账期类型"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.dataType}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      v-if="isShow"
      name="singleExplain"
      v-model="projpcontractpurchaseList.singleExplain"
      label="单一来源说明"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.singleExplain}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="startCondition"
      v-model="projpcontractpurchaseList.startCondition"
      label="质保期起始条件"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.startCondition}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="ownDeptIdName"
      v-model="projpcontractpurchaseList.ownDeptIdName"
      label="主导部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractpurchaseList.ownDeptIdName}}</div>
      </template>
    </van-field>
    <div>
      <div class="table-title">采购明细</div>
      <vxe-table border resizable highlight-hover-row :data="goodsList" >
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="costTypeName" title="成本类型" width="21%"></vxe-table-column>
        <vxe-table-column field="name" title="产品名称" width="21%"></vxe-table-column>
        <vxe-table-column field="model" title="规格型号" width="21%"></vxe-table-column>
        <vxe-table-column field="brandName" title="品牌" width="25%"></vxe-table-column>
        <vxe-table-column field="price" title="产品单价" width="21%"></vxe-table-column>
        <vxe-table-column field="num" title="产品数量" width="21%"></vxe-table-column>
        <vxe-table-column field="invoiceTypeName" title="发票类型" width="21%"></vxe-table-column>
        <vxe-table-column field="invoiceTaxName" title="税率" width="17%"></vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <div class="table-title">付款条件</div>
      <vxe-table border resizable highlight-hover-row :data="payforList" >
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="receiveDate" title="预计付款时间" width="25%"></vxe-table-column>
        <vxe-table-column field="content" title="预计付款条件" width="20%"></vxe-table-column>
        <vxe-table-column field="receiveAmount" title="付款金额" width="21%"></vxe-table-column>
        <vxe-table-column field="remark" title="备注" width="19%"></vxe-table-column>
      </vxe-table>
    </div>
    <div>
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
      <van-field
        v-if="isCover"
        name="isCover"
        clickable
        right-icon="arrow-down"
        label="存在相同采购号数据，是否覆盖"
        colon
        :value="value"
        placeholder="请选择"
        :rules="[{ required: true, message: '存在相同采购号数据，是否覆盖是必选字段' }]"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="custProList"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import { projpcontractpurchaseformList, selectPurchaseNoApi } from '../../api/contract'

export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      fileList: [],
      value: null,
      isCover: false,
      isShow: false,
      showPicker: false,
      custProList:[{text:'覆盖',value:'1'}, {text:'不覆盖',value:'2'}],
      files: [], // 循环附件
      goodsList: [], // 采购
      payforList: [], // 付款
      fileIdList: [], // 附件编号
      projpcontractpurchaseList: [] // 采购合同
    }
  },
  created () {
    // 调用采购详情接口
    projpcontractpurchaseformList(this.dataList.dataId).then(res => {
      if (res.data) {
        // 判断bool值类型
        if (res.data.hasPno === '1') {
          res.data.hasPnoName = '是'
        } else {
          res.data.hasPnoName = '否'
        }
        if (res.data.isSingle === '1') {
          this.isShow = true
          res.data.isSingleName = '是'
        } else {
          this.isShow = false
          res.data.isSingleName = '否'
        }
        this.projpcontractpurchaseList = res.data
        this.goodsList = res.data.goodsList
        this.payforList = res.data.payforList
        this.files = res.data.fileList ? res.data.fileList : []
        // 传输附件id字段
        res.data.fileList.map(item => {
          this.fileIdList = this.fileIdList.concat(item.fileId)
        })
        this.fileList = res.data.fileList.map(item => {
          return JSON.stringify({
            fileName: item.fileName,
            url: item.url,
            fileSize: item.fileSize,
            fileId: item.fileId
          })
        })
      } else {
        throw new '数据异常'()
      }
       // 判断是否是总办
      if(this.dataList.currTaskDefinitionKey ==='ManagerOffice' &&  this.dataList.currFlowId==='PurchaseApprove') {
        if(res.data.purchaseNo) {
          selectPurchaseNoApi(res.data.purchaseNo).then(res => {
              if (res.data === 'true') {
                this.isCover = true
              } else {
                this.isCover = false
              }
          })
        } else {
          this.isCover = false
          res.data.isCover = '0'
          this.projpcontractpurchaseList = res.data
        }
      }
    })
  },
  methods: {
    onConfirm (value) {
      this.value = value.text
      this.projpcontractpurchaseList.isCover = value.value
      this.showPicker = false
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
