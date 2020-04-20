/**
*@author CheYongJi
*@date 2020/4/15 14:06
*@title index
*/
<template>
    <div>
      <div style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;">供应商信息</div>
      <van-field
        name="username"
        v-model="custList.name"
        type="text"
        label="供应商名称:"
        readonly
      />
      <van-field
        style="display: none;"
        name="commitType"
        v-model="custList.commitType"
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
        name="id"
        v-model="custList.id"
        type="text"
        readonly
      />
      <van-field
        name="registeredCapital"
        v-model="custList.registeredCapital"
        type="text"
        label="注册资金(元):"
        readonly
      />
      <van-field
        name="operateScope"
        v-model="custList.operateScope"
        type="text"
        label="经营范围:"
        readonly
      />
      <van-field
        name="score"
        v-model="custList.score"
        type="text"
        label="评分:"
        readonly
      />
      <van-field
        name="lastDate"
        v-model="custList.lastDate"
        type="text"
        label="末次合作日期:"
        readonly
      />
      <van-field
        name="endDate"
        v-model="custList.endDate"
        type="text"
        label="供应商营业执照有效期:"
        readonly
      />
      <van-field
        name="applicantUser"
        v-model="custList.applicantUser"
        type="text"
        label="申请人:"
        readonly
      />
      <van-field
        name="contractNo"
        v-model="custList.contractNo"
        type="text"
        label="合同号:"
        readonly
      />
      <van-field
        name="contractProjectName"
        v-model="custList.contractProjectName"
        type="text"
        label="合作项目名称:"
        readonly
      />
      <van-field
        name="contractDept"
        v-model="custList.contractDept"
        type="text"
        label="项目主导部门:"
        readonly
      />
      <van-field
        name="capital"
        v-model="custList.capital"
        type="text"
        label="实收资本:"
        readonly
      />
      <van-field
        name="accountPeriod"
        v-model="custList.accountPeriod"
        type="text"
        label="账期:"
        readonly
      />
      <van-field
        name="remark"
        v-model="custList.remark"
        type="text"
        label="备注:"
        readonly
      />
      <van-field
        name="classificationDesc"
        v-model="custList.classificationDesc"
        type="text"
        label="分类:"
        readonly
      />
      <van-field
        name="contactPhone"
        v-model="custList.contactPhone"
        type="text"
        label="联系电话:"
        readonly
      />
      <van-field
        name="contactName"
        v-model="custList.contactName"
        type="text"
        label="联系人:"
        readonly
      />
      <van-field
        name="contactEmail"
        v-model="custList.contactEmail"
        type="text"
        label="联系邮箱:"
        readonly
      />
      <div>
        <div style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;">合作信息</div>
        <el-table
          :data="cooperativeList"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="合作产品">
                  <span>{{ props.row.product }}</span>
                </el-form-item>
                <el-form-item label="代理级别">
                  <span>{{ props.row.agentLevel }}</span>
                </el-form-item>
                <el-form-item label="采购合同金额">
                  <span>{{ props.row.contractAmount }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="合作产品"
            prop="product">
          </el-table-column>
          <el-table-column
            label="代理级别"
            prop="agentLevel">
          </el-table-column>
          <el-table-column
            label="采购合同金额"
            prop="contractAmount">
          </el-table-column>
        </el-table>
      </div>
      <div>
        <div style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;">资质详情</div>
        <el-table
          :data="qualificationsList"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="资质名称">
                  <span>{{ props.row.qualificaName }}</span>
                </el-form-item>
                <el-form-item label="代理类型">
                  <span>{{ props.row.agenttypeDesc }}</span>
                </el-form-item>
                <el-form-item label="代理产品">
                  <span>{{ props.row.agentgoods }}</span>
                </el-form-item>
                <el-form-item label="代理商级别">
                  <span>{{ props.row.agentlevelDesc }}</span>
                </el-form-item>
                <el-form-item label="联系人">
                  <span>{{ props.row.linkman }}</span>
                </el-form-item>
                <el-form-item label="电话">
                  <span>{{ props.row.phone }}</span>
                </el-form-item>
                <el-form-item label="邮箱">
                  <span>{{ props.row.email }}</span>
                </el-form-item>
                <el-form-item label="合作次数">
                  <span>{{ props.row.count }}</span>
                </el-form-item>
                <el-form-item label="账期">
                  <span>{{ props.row.cycle }}</span>
                </el-form-item>
                <el-form-item label="资质有效截止日期">
                  <span>{{ props.row.endDate }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="资质名称"
            prop="qualificaName">
          </el-table-column>
          <el-table-column
            label="代理类型"
            prop="agenttypeDesc">
          </el-table-column>
          <el-table-column
            label="代理商级别"
            prop="agentlevelDesc">
          </el-table-column>
        </el-table>
      </div>
      <div>
        <div style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;">附件列表</div>

      </div>
    </div>
</template>

<script>
import { supplierList } from '../../api/customer'

export default {
  name: 'bizcustinfoform',
  data () {
    return {
      custList: [],
      cooperativeList: [],
      qualificationsList: [],
      dataList: this.$route.query,
      tableData: [
        {
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }
      ]
    }
  },
  created () {
    supplierList(this.dataList.dataId).then(res => {
      this.custList = res.data
      this.qualificationsList = res.data.qualificationsList
      this.cooperativeList = res.data.cooperativeList
    })
  },
  methods: {
  }
}
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
