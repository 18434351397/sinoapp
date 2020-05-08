/**
*@author XuJinTao
*@date 2020/5/8 9:11
*@title index
*/
<template>
  <div style="background-color: #f8f8f8;">
    <div style="padding: 10px 15px;text-align: center;">{{ title }}</div>
    <van-field
      type="text"
      v-model="contractList.bizId"
      label="合同号:"
      readonly
    />
    <van-field name="radio" label="是否已投标备案:">
      <template #input>
        <van-radio-group v-model="contractList.isRecord" direction="horizontal">
          <van-radio name="0" disabled>否</van-radio>
          <van-radio name="1" disabled>是</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field
      v-model="contractList.chanceId"
      type="text"
      label="商机编号:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.name"
      label="合同名称:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.recordId"
      label="投标备案编号:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.reqUserName"
      label="申请人:"
      readonly
    />
    <van-field name="radio" label="是否关联交易:">
      <template #input>
        <van-radio-group
          v-model="contractList.isRelated"
          direction="horizontal"
        >
          <van-radio name="0" disabled>否</van-radio>
          <van-radio name="1" disabled>是</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field
      v-model="contractList.contractTypeDesc"
      type="text"
      label="合同类别:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.leadOrgName"
      label="主导部门:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.projectName"
      label="项目名称:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.companyText"
      label="签订公司:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.projectNum"
      label="项目编号:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.customerName"
      label="客户名称:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.saleManName"
      label="销售人员:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.salesManOrgName"
      label="销售人员部门:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.pmManagerName"
      label="项目经理:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.operationStartTime"
      label="运维开始时间:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.operationEndTime"
      label="运维结束时间:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.endCustName"
      label="最终客户:"
      readonly
    />
    <div>
      <div
        style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;"
      >
        收入明细
      </div>
      <el-table border :data="incomeList" style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50"
          :index="indexMethods"
        >
        </el-table-column>
        <el-table-column label="收入类型" prop="feesTypeText">
        </el-table-column>
        <el-table-column label="名称" prop="name"> </el-table-column>
        <el-table-column label="数量" prop="num"> </el-table-column>
        <el-table-column label="单价" prop="price"> </el-table-column>
        <el-table-column label="金额" prop="amount"> </el-table-column>
        <el-table-column label="税率" prop="taxRateText"> </el-table-column>
        <el-table-column label="缴税类型" prop="invoiceTypeText">
        </el-table-column>
        <el-table-column label="备注" prop="remark"> </el-table-column>
      </el-table>
    </div>

    <div>
      <div
        style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;"
      >
        成本明细
      </div>
      <el-table border :data="costList" style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50"
          :index="indexMethods"
        >
        </el-table-column>
        <el-table-column label="成本明细" prop="costFeesTypeText">
        </el-table-column>
        <el-table-column label="名称" prop="name"> </el-table-column>
        <el-table-column label="数量" prop="num"> </el-table-column>
        <el-table-column label="单价" prop="price"> </el-table-column>
        <el-table-column label="金额" prop="amount"> </el-table-column>
        <el-table-column label="税率" prop="taxRateText"> </el-table-column>
        <el-table-column label="缴税类型" prop="costInvoiceTypeText">
        </el-table-column>
        <el-table-column label="备注" prop="remark"> </el-table-column>
      </el-table>
    </div>
    <div>
      <div
        style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;"
      >
        业绩切分
      </div>
      <el-table border :data="achievementList" style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50"
          :index="indexMethods"
        >
        </el-table-column>
        <el-table-column label="切分部门" prop="segmentDeptText">
        </el-table-column>
        <el-table-column label="负责人" prop="leadUserText"> </el-table-column>
        <el-table-column label="切分比例" prop="segmentP"> </el-table-column>
        <el-table-column label="切分金额" prop="segmentAmount">
        </el-table-column>
        <el-table-column label="部门类型" prop="deptTypeDesc">
        </el-table-column>
      </el-table>
    </div>
    <div style="padding: 10px 15px;text-align: center;">金额明细</div>
    <van-field
      type="text"
      v-model="contractList.purchasingCost"
      label="采购成本:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.subcontractCost"
      label="分包成本:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.costTotalAmount"
      label="成本合计:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.receiveTotalAmount"
      label="收入合计:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.rService"
      label="技术服务收入:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.rGoods"
      label="商品收入:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.grossProfit"
      label="毛利润:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.rGoods"
      label="税前毛利润率%:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.rGoods"
      label="税后毛利润率%:"
      readonly
    />
    <van-field name="radio" label="是否有项目:">
      <template #input>
        <van-radio-group
          v-model="contractList.hasProject"
          direction="horizontal"
        >
          <van-radio name="0" disabled>否</van-radio>
          <van-radio name="1" disabled>是</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field
      type="text"
      v-model="contractList.projcetNo"
      label="项目号:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.netProfit"
      label="净利润:"
      readonly
    />
    <van-field type="text" v-model="contractList.tax" label="税金:" readonly />
    <van-field
      type="text"
      v-model="contractList.contractAmount"
      label="合同总金额:"
      readonly
    />
    <div style="padding: 10px 15px;text-align: center;">其他</div>
    <van-field
      type="text"
      v-model="contractList.linkman"
      label="客户联系人:"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.phone"
      label="联系人电话:"
      readonly
    />
    <van-field name="radio" label="是否有销售合同文件:">
      <template #input>
        <van-radio-group
          v-model="contractList.hasContract"
          direction="horizontal"
        >
          <van-radio name="0" disabled>否</van-radio>
          <van-radio name="1" disabled>是</van-radio>
          <van-radio name="2" disabled>暂无</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field name="radio" label="是否为最终客户:">
      <template #input>
        <van-radio-group
          v-model="contractList.isEndCust"
          direction="horizontal"
        >
          <van-radio name="0" disabled>否</van-radio>
          <van-radio name="1" disabled>是</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field name="radio" label="是否签订合同:">
      <template #input>
        <van-radio-group
          v-model="contractList.isContract"
          direction="horizontal"
        >
          <van-radio name="0" disabled>否</van-radio>
          <van-radio name="1" disabled>是</van-radio>
        </van-radio-group>
      </template>
    </van-field>

    <van-field
      name="radio"
      label="是否是涉税合同（包含混合销售，技术开发，自有软件类合同）:"
    >
      <template #input>
        <van-radio-group v-model="contractList.isMixed" direction="horizontal">
          <van-radio name="0" disabled>否</van-radio>
          <van-radio name="1" disabled>是</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field name="radio" label="是否提前下单:">
      <template #input>
        <van-radio-group
          v-model="contractList.hasAdvanceOrder"
          direction="horizontal"
        >
          <van-radio name="0" disabled>否</van-radio>
          <van-radio name="1" disabled>是</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field name="radio" label="是否提前发货:">
      <template #input>
        <van-radio-group
          v-model="contractList.hasAdvanceSend"
          direction="horizontal"
        >
          <van-radio name="0" disabled>否</van-radio>
          <van-radio name="1" disabled>是</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field name="radio" label="是否合作项目:">
      <template #input>
        <van-radio-group
          v-model="contractList.hasCooperation"
          direction="horizontal"
        >
          <van-radio name="0" disabled>否</van-radio>
          <van-radio name="1" disabled>是</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field
      type="text"
      v-model="contractList.signDate"
      label="预计签订时间:"
      readonly
    />
    <van-field
      v-model="contractList.remark"
      rows="2"
      autosize
      label="备注"
      type="textarea"
      readonly
    />
    <div>
      <div
        style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;"
      >
        销售合同文件上传
      </div>
      <el-table border :data="contractFileList" style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50"
          :index="indexMethods"
        >
        </el-table-column>
        <el-table-column label="附件名称" prop="fileName"> </el-table-column>
        <el-table-column label="大小" width="80">
          <template slot-scope="scope">
            {{ (scope.row.fileSize / 1024).toFixed(2) + "KB" }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="50">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >下载</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <div
        style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;"
      >
        项目评分模型
      </div>
      <el-table border :data="projectScoringFileList" style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50"
          :index="indexMethods"
        >
        </el-table-column>
        <el-table-column label="附件名称" prop="fileName"> </el-table-column>
        <el-table-column label="大小" width="80">
          <template slot-scope="scope">
            {{ (scope.row.fileSize / 1024).toFixed(2) + "KB" }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="50">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >下载</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <van-field
        left-icon="star"
        type="text"
        v-model="contractList.score"
        label="评分:"
        readonly
      />
    </div>
    <div>
      <div
        style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;"
      >
        不签合同说明
      </div>
      <el-table border :data="noSignFileList" style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50"
          :index="indexMethods"
        >
        </el-table-column>
        <el-table-column label="附件名称" prop="fileName"> </el-table-column>
        <el-table-column label="大小" width="80">
          <template slot-scope="scope">
            {{ (scope.row.fileSize / 1024).toFixed(2) + "KB" }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="50">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >下载</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <div
        style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;"
      >
        未签合同说明
      </div>
      <el-table border :data="explainFileList" style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50"
          :index="indexMethods"
        >
        </el-table-column>
        <el-table-column label="附件名称" prop="fileName"> </el-table-column>
        <el-table-column label="大小" width="80">
          <template slot-scope="scope">
            {{ (scope.row.fileSize / 1024).toFixed(2) + "KB" }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="50">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >下载</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { projpcontractreviewList } from '../../api/customer'

export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      title: '合同评审信息表编辑',
      contractList: [],
      incomeList: [], // 收入
      costList: [], // 成本
      achievementList: [], // 业绩
      contractFileList: [], // 销售合同上传
      projectScoringFileList: [], // 项目评分
      noSignFileList: [], // 不签名合同说明
      explainFileList: [] // 未签合同说明
    }
  },
  created () {
    projpcontractreviewList(this.dataList.dataId).then(res => {
      if (res.data) {
        const resData = res.data.projpContractFeesList
        this.contractList = res.data // 合同信息
        this.achievementList = res.data.projpContractAchievementList // 业绩切分
        this.contractFileList = res.data.contractFileList
        this.projectScoringFileList = res.data.projectScoringFileList
        this.noSignFileList = res.data.noSignFileList
        this.explainFileList = res.data.explainFileList
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
        } else {
          return {}
        }
      } else {
        console.log('数据异常')
      }
    })
  },
  methods: {
    // 处理序号
    indexMethods (index) {
      return index + 1
    },
    // 下载调用方法
    handleClick (data) {
      this.downLoad(data)
    }
  }
}
</script>
