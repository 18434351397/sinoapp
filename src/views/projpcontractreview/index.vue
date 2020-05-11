/** *@author XuJinTao *@date 2020/5/8 9:11 *@title index */
<template>
  <div class="projpcontractre">
    <div class="title">{{ title }}</div>
    <van-field
      type="text"
      v-model="contractList.bizId"
      label="合同号"
      colon
      readonly
    />
    <van-field
      name="radio"
      colon
      label="是否已投标备案"
      v-model="contractList.isRecord"
    >
    </van-field>
    <van-field
      v-model="contractList.chanceId"
      type="text"
      label="商机编号"
      colon
      readonly
    />
    <van-field
      style="display: none;"
      name="commitType"
      v-model="contractList.commitType"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      v-if="isCustPro"
      name="occupy"
      v-model="contractList.occupy"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      v-if="isCustPro"
      name="hasReceiveUpdate"
      v-model="contractList.hasReceiveUpdate"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      v-if="!isCustProShow"
      name="cbxAchievementFlow"
      type="text"
      readonly
    />
    <van-field style="display: none;" name="cbxCashFlow" type="text" readonly />
    <van-field
      style="display: none;"
      name="cbxCostDetail"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      v-if="!isCustProShow"
      name="cbxIncomeDetail"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="contractList.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="id"
      v-model="contractList.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="hasUpdate"
      v-model="contractList.hasUpdate"
      type="text"
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.name"
      label="合同名称"
      colon
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.recordId"
      label="投标备案编号"
      colon
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.reqUserName"
      label="申请人"
      colon
      readonly
    />
    <van-field name="radio" label="是否关联交易"  
    v-model="contractList.isRelated === '0' ? '否': '是'"
    readonly 
    colon /> 
    <van-field
      v-model="contractList.contractTypeDesc"
      type="text"
      label="合同类别"
      colon
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.leadOrgName"
      label="主导部门"
      colon
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.projectName"
      label="项目名称"
      colon
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.companyText"
      label="签订公司"
      colon
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.projectNum"
      label="项目编号"
      colon
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.customerName"
      label="客户名称"
      colon
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.saleManName"
      label="销售人员"
      colon
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.salesManOrgName"
      label="销售人员部门"
      colon
      readonly
    />
    <van-field
      type="text"
      name="pmManagerName"
      v-model="contractList.pmManagerName"
      label="项目经理"
      colon
      readonly
    />
    <van-field
      type="text"
      name="operationStartTime"
      v-model="contractList.operationStartTime"
      label="运维开始时间"
      colon
      readonly
    />
    <van-field
      type="text"
      name="operationEndTime"
      v-model="contractList.operationEndTime"
      label="运维结束时间"
      colon
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.endCustName"
      label="最终客户"
      colon
      readonly
    />
    <div>
      <div class="table-title">
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
      <div class="table-title">
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
      <div class="table-title">
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
    <div class="title">金额计算</div>
    <van-field
      type="text"
      v-if="isCustPro"
      name="receiveTotalAmount"
      v-model="contractList.receiveTotalAmount"
      label="收入合计"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isCustPro"
      name="custPro"
      v-model="contractList.custPro"
      readonly
    />
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.receiveTotalAmount"
      label="收入合计"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isCustPro"
      name="rGoods"
      v-model="contractList.rGoods"
      label="商品收入"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.rGoods"
      label="商品收入"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isCustPro"
      name="projectIncome"
      v-model="contractList.projectIncome"
      label="工程收入"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isCustPro"
      name="freeSftwareIncome"
      v-model="contractList.freeSftwareIncome"
      label="自有软件收入"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isCustPro"
      name="projectCost"
      v-model="contractList.projectCost"
      label="工程成本"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isCustPro"
      name="interNalCost"
      v-model="contractList.interNalCost"
      label="内包成本"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isCustPro"
      name="bidFeesCost"
      v-model="contractList.bidFeesCost"
      label="中标服务费"
      colon
      readonly
    />

    <van-field
      type="text"
      v-if="isCustPro"
      name="rService"
      v-model="contractList.rService"
      label="技术服务收入"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.rService"
      label="技术服务收入"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isCustPro"
      name="purchasingCost"
      v-model="contractList.purchasingCost"
      label="采购成本"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.purchasingCost"
      label="采购成本"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isCustPro"
      name="subcontractCost"
      v-model="contractList.subcontractCost"
      label="分包成本"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.subcontractCost"
      label="分包成本"
      colon
      readonly
    />
    <van-field
      type="text"
      name="costTotalAmount"
      v-if="isCustPro"
      v-model="contractList.costTotalAmount"
      label="成本合计"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.costTotalAmount"
      label="成本合计"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isCustPro"
      v-model="contractList.grossProfit"
      name="grossProfit"
      label="毛利润"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.grossProfit"
      label="毛利润"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.pretaxGrossProfitRate"
      label="税前毛利润率%"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.aftertaxGrossProfitRate"
      label="税后毛利润率%"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isCustPro"
      name="pretaxGrossProfitRate"
      v-model="contractList.pretaxGrossProfitRate"
      label="税前毛利润率%"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isCustPro"
      name="aftertaxGrossProfitRate"
      v-model="contractList.aftertaxGrossProfitRate"
      label="税后毛利润率%"
      colon
      readonly
    />
    <van-field name="radio" label="是否有项目" 
    v-model="contractList.hasProject === '0'? '否': '是'" 
    readonly colon 
    /> 
    <van-field
      type="text"
      v-if="isCustPro"
      name="projcetNo"
      v-model="contractList.projcetNo"
      label="项目号"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.projcetNo"
      label="项目号"
      colon
      readonly
    />
    <van-field
      type="text"
      name="netProfit"
      v-if="isCustPro"
      v-model="contractList.netProfit"
      label="净利润"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.netProfit"
      label="净利润"
      colon
      readonly
    />
    <van-field
      class="tax"
      type="text"
      v-if="isCustPro"
      name="tax"
      v-model="contractList.tax"
      label="税金"
      colon
    />
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.tax"
      label="税金"
      placeholder="请输入税金"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isCustPro"
      name="contractAmount"
      v-model="contractList.contractAmount"
      label="合同总金额"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="!isCustPro"
      v-model="contractList.contractAmount"
      label="合同总金额"
      colon
      readonly
    />
    <van-field
      type="text"
      v-if="isCustPro"
      name="netProfitRate"
      v-model="contractList.netProfitRate"
      label="税后净利润率(%)"
      colon
      readonly
    />
    <div style="padding: 8px 36px 16px;
    background: #fff;" v-if="isCustPro">
      <van-button round block type="primary" >
        计算
      </van-button>
    </div>
    <div class="title">其他</div>
    <van-field
      type="text"
      v-model="contractList.linkman"
      label="客户联系人"
      colon
      readonly
    />
    <van-field
      type="text"
      v-model="contractList.phone"
      label="联系人电话"
      colon
      readonly
    />
    <van-field name="radio" label="是否有销售合同文件"  
    v-model="contractList.hasContract === '0'? '否': contractList.hasContract === '1' ? '是' : '暂无' " 
    readonly
    colon />
    <van-field name="radio" label="是否为最终客户"
     v-model="contractList.isEndCust === '0'? '否': '是'" 
    readonly
    colon />
      
    <van-field name="radio" label="是否签订合同"
     colon 
     v-model="contractList.isContract === '0'? '否': '是'" 
    readonly />
    <van-field
      name="radio"
      label="是否是涉税合同（包含混合销售，技术开发，自有软件类合同）"
      colon
     v-model="contractList.isMixed=== '0'? '否': '是'" 
    readonly
    />
    <van-field 
    name="radio" 
    label="是否提前下单" 
    colon 
    v-model="contractList.hasAdvanceOrder === '0'? '否': '是'" 
    readonly />
    <van-field 
    name="radio" 
    label="是否提前发货" 
    colon 
    v-model="contractList.hasAdvanceSend === '0'? '否': '是'" 
    readonly />
    <van-field
      v-if="isCustPro"
      readonly
      clickable
      right-icon="arrow-down"
      label="客户属性"
      colon
      :value="value"
      placeholder="请选择"
      :rules="[{ required: true, message: '客户属性是必选字段' }]"
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
    <van-field
      readonly
      v-if="isCustProShow"
      label="客户属性"
      colon
      v-model="contractList.custProDesc"
    />
    <van-field name="radio" 
    label="是否合作项目" 
    colon 
    v-model="contractList.hasCooperation === '0'? '否': '是'" 
    readonly
    >
    </van-field>
    <van-field  
      type="text"
      v-model="contractList.signDate"
      label="预计签订时间"
      colon
      readonly
    />
    <van-field
      v-model="contractList.remark"
      rows="2"
      name="remark"
      autosize
      label="备注"
      type="textarea"
      readonly
    />
    <div>
      <div class="table-title">
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
      <div class="table-title">
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
        label="评分"
        colon
        readonly
      />
    </div>
    <div>
      <div class="table-title">
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
      <div class="table-title">
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
import { projpcontractreviewList, custPro } from "../../api/customer";

export default {
  name: "index",
  data() {
    return {
      isCustPro: false, // 默认不显示客户选择属性 -- 部门
      isCustProShow: false, // 默认不显示--经理
      value: null,
      showPicker: false,
      custProList: [],
      dataList: this.$route.query,
      title: "合同评审信息表编辑",
      contractList: [],
      incomeList: [], // 收入
      costList: [], // 成本
      achievementList: [], // 业绩
      contractFileList: [], // 销售合同上传
      projectScoringFileList: [], // 项目评分
      noSignFileList: [], // 不签名合同说明
      explainFileList: [], // 未签合同说明
      fileConcat: [], // 整合所有的 file
      fileList: [] // 提交 file 处理 ,去除 null , 最后的结果
    };
  },
  created() {
    projpcontractreviewList(this.dataList.dataId).then(res => {
      if (res.data) {
        const resData = res.data.projpContractFeesList;
        this.contractList = res.data; // 合同信息
        this.achievementList = res.data.projpContractAchievementList; // 业绩切分
        this.contractFileList = res.data.contractFileList;
        this.projectScoringFileList = res.data.projectScoringFileList;
        this.noSignFileList = res.data.noSignFileList;
        this.explainFileList = res.data.explainFileList;
        this.value = res.data.custProDesc;
        this.fileConcat = this.fileConcat.concat(
          res.data.contractFileList,
          res.data.projectScoringFileList,
          res.data.noSignFileList,
          res.data.explainFileList
        );
        for (const file of this.fileConcat) {
          if (file) {
            this.fileList = this.fileList.concat(
              JSON.stringify({
                fileName: file.fileName,
                url: file.url,
                fileSize: file.fileSize,
                fileId: file.fileId
              })
            );
          } else {
            return file;
          }
        }
        if (resData) {
          for (const i in resData) {
            if (resData[i].pRType === "r") {
              this.incomeList = this.incomeList.concat(resData[i]);
            } else if (resData[i].pRType === "c") {
              this.costList = this.costList.concat(resData[i]);
            } else {
              return {};
            }
          }
        } else {
          return {};
        }
      } else {
        throw new "数据异常"();
      }
    });
    // 特殊处理
    let user = this.dataList;
    if (
      user.currTaskDefinitionName === "运营管理部" &&
      user.currUserName === "李月平" &&
      user.currTaskDefinitionKey === "BusiAnalysis"
    ) {
      this.isCustPro = true;
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
          };
        });
      });
    } else if (
      user.currTaskDefinitionName === "运营管理部经理" &&
      user.currTaskDefinitionKey === "BusiAnalysisManager"
    ) {
      this.isCustProShow = true;
    } else {
      return;
    }
  },
  methods: {
    // 处理序号
    indexMethods(index) {
      return index + 1;
    },
    // 下载调用方法
    handleClick(data) {
      console.log(data.url);
      this.downLoad(data);
    },
    onConfirm(value) {
      this.value = value.text;
      this.contractList.custPro = value.custPro;
      this.showPicker = false;
    }
  }
};
</script>

<style lang="less">
div.projpcontractre {
  background-color: #f8f8f8;
  div.title {
  font-size: 14px;
  padding: 10px 15px;
  }
  div.table-title {
  font-size: 14px;
  border-top: 1px dashed #f8f8f8;
  padding: 10px 15px;
  text-align: left;
  background-color: #fff;
  }
}
</style>
<style lang="less">
div.projpcontractre {
  div.tax.van-cell:not(:last-child)::after {
    border-bottom: 1px solid #6c6c6c;
  }
  .van-cell:not(:last-child)::after {
    border-bottom: none;
  }
}
</style>