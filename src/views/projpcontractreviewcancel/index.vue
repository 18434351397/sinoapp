/** *@author XuJinTao *@date 2020/5/8 9:11 *@title index */
<template>
  <div class="app-title">
    <div class="title">{{ title }}</div>
    <van-field style="display: none;" name="id" v-model="contractList.id" type="text" readonly />

    <van-field type="text" v-model="contractList.bizId" label="合同号" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.bizId}}</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否已投标备案" v-model="contractList.isRecord" readonly colon>
      <template #input>
        <div v-if="contractList.isRecord === '1'" style="margin: 0;">是</div>
        <div v-else style="margin: 0;">否</div>
      </template>
    </van-field>
    <van-field v-model="contractList.chanceId" type="text" label="商机编号" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.chanceId}}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.recordId" label="投标备案编号" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.recordId}}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.reqUserName" label="申请人" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.reqUserName}}</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否关联交易" v-model="contractList.isRelated" readonly colon>
      <template #input>
        <div v-if="contractList.isRelated === '1'" style="margin: 0;">是</div>
        <div v-else style="margin: 0;">否</div>
      </template>
    </van-field>
    <van-field v-model="contractList.contractTypeDesc" type="text" label="合同类别" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.contractTypeDesc}}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.leadOrgName" label="主导部门" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.leadOrgName}}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.projectName" label="项目名称" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.projectName}}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.companyText" label="签订公司" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.companyText}}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.customerName" label="客户名称" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.customerName}}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.saleManName" label="销售人员" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.saleManName}}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.salesManOrgName" label="销售人员部门" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.salesManOrgName}}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.grossProfit" label="毛利润合计" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.grossProfit}}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.tax" name="tax" label="税金" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.tax}}</div>
      </template>
    </van-field>

    <div>
      <div class="table-title">收入明细</div>
      <el-table border :data="incomeList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="收入类型" prop="feesTypeText"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="数量" prop="num"></el-table-column>
        <el-table-column label="单价" prop="price"></el-table-column>
        <el-table-column label="金额" prop="amount"></el-table-column>
        <el-table-column label="税率" prop="taxRateText"></el-table-column>
        <el-table-column label="缴费种类" prop="invoiceTypeText"></el-table-column>
        <el-table-column label="备注" prop="remark"></el-table-column>
      </el-table>
        <van-field
        type="text"
        name="rService"
        v-model="contractList.rService"
        label="技术服务收入"
        colon
        readonly
        >
        <template #input>
            <div style="text-align: left;margin: 0;">{{contractList.rService}}</div>
        </template>
        </van-field>
        <van-field
        type="text"
        name="rGoods"
        v-model="contractList.rGoods"
        label="商品收入"
        colon
        readonly
        >
        <template #input>
          <div style="text-align: left;margin: 0;">{{contractList.rGoods}}</div>
        </template>
        </van-field>
        <van-field
        type="text"
        name="contractAmount"
        v-model="contractList.contractAmount"
        label="合同总金额"
        colon
        readonly
        >
        <template #input>
            <div style="text-align: left;margin: 0;">{{contractList.contractAmount}}</div>
        </template>
        </van-field>
    </div>
    <div>
      <div class="table-title">成本明细</div>
      <el-table border :data="costList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="成本明细" prop="costFeesTypeText"></el-table-column>
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="金额" prop="amount"></el-table-column>
        <el-table-column label="税率" prop="taxRateText"></el-table-column>
        <el-table-column label="缴费种类" prop="costInvoiceTypeText"></el-table-column>
        <el-table-column label="备注" prop="remark"></el-table-column>
      </el-table>
    </div>
    <div>
      <div class="table-title">业绩切分</div>
      <el-table border :data="achievementList" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="切分部门" prop="segmentDeptText"></el-table-column>
        <el-table-column label="负责人" prop="leadUserText"></el-table-column>
        <el-table-column label="切分比例" prop="segmentP"></el-table-column>
      </el-table>
    </div>

    <div>
      <div class="table-title">预计现金流量表（收/付款情况）</div>
      <el-table border :data="paymentCondition" style="width: 100%">
        <el-table-column type="index" label="序号" width="50" :index="indexMethods"></el-table-column>
        <el-table-column label="收付类型" prop="prTypeText"></el-table-column>
        <el-table-column label="预计收/付款时间" prop="paymentDate"></el-table-column>
        <el-table-column label="预计收/付款金额" prop="paymentAmount"></el-table-column>
        <el-table-column label="预计收/付款条件" prop="paymentCondition"></el-table-column>
        <el-table-column label="计入科目" prop="accountSubjectText"></el-table-column>
        <el-table-column label="验收报告名称" prop="reportName"></el-table-column>
        <el-table-column label="现金流量金额" prop="confirmAmount"></el-table-column>
        <el-table-column label="是否有验收报告" prop="hasReport">
          <template slot-scope="scope">
            <div v-if="scope.row.hasReport === '1'">是</div>
            <div v-if="scope.row.hasReport === '0'">否</div>
          </template>
        </el-table-column>
        <el-table-column label="预计验收报告时间" prop="reportDate"></el-table-column>
        <el-table-column label="款项名称" prop="paymentName"></el-table-column>
        <el-table-column label="资金占用时间" prop="occupyTime"></el-table-column>
        <el-table-column label="资金占用成本" prop="occupyAmount"></el-table-column>
      </el-table>
      <van-field type="text" v-model="contractList.occupy" label="资金占用情况" colon readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{contractList.occupy}}</div>
        </template>
      </van-field>
    </div>

    <div class="title title-content">其他</div>
    <van-field type="text" v-model="contractList.linkman" label="客户联系人" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.linkman}}</div>
      </template>
    </van-field>
    <van-field type="text" v-model="contractList.phone" label="联系人电话" colon readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{contractList.phone}}</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否有销售合同文件" v-model="contractList.hasContract" readonly colon>
      <template #input>
        <div v-if="contractList.hasContract === '1'" style="margin: 0;">是</div>
        <div v-else-if="contractList.hasContract === '0'" style="margin: 0;">否</div>
        <div v-else style="margin: 0;">暂无</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否为最终客户" v-model="contractList.isEndCust" readonly colon>
      <template #input>
        <div v-if="contractList.isEndCust === '1'" style="margin: 0;">是</div>
        <div v-else style="margin: 0;">否</div>
      </template>
    </van-field>

    <van-field name="radio" label="是否签订合同" colon v-model="contractList.isContract" readonly>
      <template #input>
        <div v-if="contractList.isContract === '1'" style="margin: 0;">是</div>
        <div v-else style="margin: 0;">否</div>
      </template>
    </van-field>
    <van-field
      name="radio"
      label="是否混合销售合同"
      colon
      v-model="contractList.isMixed"
      readonly
    >
      <template #input>
        <div v-if="contractList.isMixed === '1'" style="margin: 0;">是</div>
        <div v-else style="margin: 0;">否</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否提前下单" colon v-model="contractList.hasAdvanceOrder" readonly>
      <template #input>
        <div v-if="contractList.hasAdvanceOrder === '1'" style="margin: 0;">是</div>
        <div v-else style="margin: 0;">否</div>
      </template>
    </van-field>
    <van-field name="radio" label="是否提前发货" colon v-model="contractList.hasAdvanceSend" readonly>
      <template #input>
        <div v-if="contractList.hasAdvanceSend === '1'" style="margin: 0;">是</div>
        <div v-else style="margin: 0;">否</div>
      </template>
    </van-field>
    <div>
      <div class="table-title">销售合同文件上传</div>
      <el-table border :data="contractFileList" style="width: 100%">
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
    <div>
      <div class="table-title">项目评分模型</div>
      <el-table border :data="projectScoringFileList" style="width: 100%">
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
      <van-field type="text" v-model="contractList.score" label="评分" colon readonly>
        <template #input>
          <div style="text-align: left;margin: 0;">{{contractList.score}}</div>
        </template>
      </van-field>
    </div>
    <div>
      <div class="table-title">不签合同说明</div>
      <el-table border :data="noSignFileList" style="width: 100%">
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
    <div>
      <div class="table-title">未签合同说明</div>
      <el-table border :data="explainFileList" style="width: 100%">
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
     <div>
      <div class="table-title">取消合同说明</div>
      <el-table border :data="cancelFileList" style="width: 100%">
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
import { projpcontractreviewList, custPro } from '../../api/customer'
import { projpcontractreviewcancelApi } from '../../api/contract'
export default {
  name: 'index',
  data () {
    return {
      value: null,
      showPicker: false,
      custProList: [],
      dataList: this.$route.query,
      title: '销售合同取消信息',
      contractList: [], // 整体信息
      incomeList: [], // 收入
      costList: [], // 成本
      achievementList: [], // 业绩
      paymentCondition: [], // 预计现金流量表
      contractFileList: [], // 销售合同上传
      projectScoringFileList: [], // 项目评分
      noSignFileList: [], // 不签名合同说明
      explainFileList: [], // 未签合同说明
      cancelFileList: [], // 取消合同说明
      fileConcat: [], // 整合所有的 file
      fileList: [] // 提交 file 处理 ,去除 null , 最后的结果
    }
  },
  created () {
    projpcontractreviewcancelApi(this.dataList.dataId).then(res => {
      if (res.data) {
        const resData = res.data.projpContractFeesList
        this.contractList = res.data // 合同信息
        this.achievementList = res.data.projpContractAchievementList // 业绩切分
        this.paymentCondition = res.data.paymentCondition // 预计现金流量表
        this.contractFileList = res.data.contractFileList
        this.projectScoringFileList = res.data.projectScoringFileList
        this.noSignFileList = res.data.noSignFileList
        this.explainFileList = res.data.explainFileList
        this.cancelFileList = res.data.cancelFileList
        this.value = res.data.custProDesc
        this.fileConcat = this.fileConcat.concat(
          res.data.contractFileList,
          res.data.projectScoringFileList,
          res.data.noSignFileList,
          res.data.explainFileList,
          res.data.cancelFileList
        )
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
        } else { }
      } else {
        throw new '数据异常'()
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
      console.log(data.url)
      this.downLoad(data)
    },
    onConfirm (value) {
      this.value = value.text
      this.contractList.custPro = value.custPro
      this.showPicker = false
    },
    // 税金
    taxes (e, value) {
      e.preventDefault()
      const rate = this.contractList
      // 税前毛利润率
      rate.pretaxGrossProfitRate = (
        ((Number(rate.contractAmount) - Number(rate.costTotalAmount)) /
          Number(rate.receiveTotalAmount)) *
        100
      ).toFixed(2)
      // 税后毛利润率                              // 收入                           // 成本                  // 税金             // 收入
      rate.aftertaxGrossProfitRate = (
        ((Number(rate.contractAmount) -
          Number(rate.costTotalAmount) -
          Number(value)) /
          Number(rate.receiveTotalAmount)) *
        100
      ).toFixed(2)
      // 毛利润                      // 收入                           // 成本                  // 税金
      rate.grossProfit = (
        Number(rate.contractAmount) -
        Number(rate.costTotalAmount) -
        Number(value)
      ).toFixed(2)
      // 净利润                     // 收入                           // 成本                  // 税金
      rate.netProfit = (
        Number(rate.contractAmount) -
        Number(rate.costTotalAmount) -
        Number(value)
      ).toFixed(2)
    }
  }
}
</script>
