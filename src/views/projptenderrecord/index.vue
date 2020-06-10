/**
*@author CheYongJi
*@date 2020/5/7 9:13
*@title index
*/
<template>
  <div class="app-title">
    <div class="title">投标备案信息</div>
    <van-field
      name="bizId"
      v-model="custList.bizId"
      type="text"
      label="备案编号:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.bizId}}</div>
      </template>
    </van-field>
    <van-field
      name="company"
      style="display: none;"
      v-model="custList.company"
      type="text"
      readonly
    />
    <van-field
      name="bidType"
      style="display: none;"
      v-model="custList.bidType"
      type="text"
      readonly
    />
    <van-field
      name="exeType"
      style="display: none;"
      v-model="custList.exeType"
      type="text"
      readonly
    />
    <van-field
      name="status"
      style="display: none;"
      v-model="custList.status"
      type="text"
      readonly
    />
    <van-field
      name="hasCommit"
      style="display: none;"
      v-model="custList.hasCommit"
      type="text"
      readonly
    />
    <van-field
      name="salesMan"
      style="display: none;"
      v-model="custList.salesMan"
      type="text"
      readonly
    />
    <van-field
      name="salesManOrg"
      style="display: none;"
      v-model="custList.salesManOrg"
      type="text"
      readonly
    />
    <van-field
      name="ownDeptId"
      style="display: none;"
      v-model="custList.ownDeptId"
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
      style="display: none;"
      name="cbxCostDetail"
      type="text"
      readonly
    />
    <van-field
      name="projectName"
      v-model="custList.projectName"
      type="text"
      label="项目名称:"
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{custList.projectName}}</div>
      </template>
</van-field>
    <van-field
      name="tenderCompany"
      v-model="custList.tenderCompany"
      type="text"
      label="招标公司:"
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{custList.tenderCompany}}</div>
      </template>
</van-field>
    <van-field
      name="custName"
      v-model="custList.custName"
      type="text"
      label="客户名称:"
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{custList.custName}}</div>
      </template>
</van-field>
    <van-field label="是否有招标编号:" name="hasBidNo" v-model="custList.hasBidNo">
      <template #input>
        <div v-if="custList.hasBidNo === '1'" style="margin: 0;">是</div>
        <div v-if="custList.hasBidNo === '0'" style="margin: 0;">否</div>
      </template>
    </van-field>
    <van-field
      name="bidNo"
      v-model="custList.bidNo"
      type="text"
      label="招标编号:"
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{custList.bidNo}}</div>
      </template>
</van-field>
    <van-field
      name="companyText"
      v-model="custList.companyText"
      type="text"
      label="投标公司:"
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{custList.companyText}}</div>
      </template>
</van-field>
    <van-field
      name="exeTypeText"
      v-model="custList.exeTypeText"
      type="text"
      label="项目执行方式:"
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{custList.exeTypeText}}</div>
      </template>
</van-field>
    <van-field
      name="bidTime"
      v-model="custList.bidTime"
      type="text"
      label="投标时间:"
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{custList.bidTime}}</div>
      </template>
</van-field>
    <van-field
      name="bidTypeText"
      v-model="custList.bidTypeText"
      type="text"
      label="投标类型:"
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{custList.bidTypeText}}</div>
      </template>
</van-field>
    <van-field
      name="salesManName"
      v-model="custList.salesManName"
      type="text"
      label="销售人:"
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{custList.salesManName}}</div>
      </template>
</van-field>
    <van-field
      name="salesManOrgName"
      v-model="custList.salesManOrgName"
      type="text"
      label="销售人员二级部门:"
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{custList.salesManOrgName}}</div>
      </template>
</van-field>
    <van-field
      name="leadOrgName"
      v-model="custList.leadOrgName"
      type="text"
      label="主导部门:"
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{custList.leadOrgName}}</div>
      </template>
</van-field>
    <van-field label="是否有投标保证金:" name="hasBond" v-model="custList.hasBond">
      <template #input >
        <div v-if="custList.hasBond === '1'" style="margin: 0;">是</div>
        <div v-else style="margin: 0;">否</div>
      </template>
    </van-field>
    <van-field
      name="remark"
      v-model="custList.remark"
      type="text"
      label="备注:"
      readonly
    >
<template #input>
        <div style="text-align: left;margin: 0;">{{custList.remark}}</div>
      </template>
</van-field>
    <div>
      <div class="table-title">保证金收付情况</div>
      <el-table
        border
        :data="situation"
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50"
          :index="indexMethods">
        </el-table-column>
        <el-table-column
          label="预计收款日期">
          <template slot-scope="scope">
            {{scope.row.receivDate.split(' ')[0]}}
          </template>
        </el-table-column>
        <el-table-column
          label="预计付款时间">
          <template slot-scope="scope">
            {{scope.row.paytime.split(' ')[0]}}
          </template>
        </el-table-column>
        <el-table-column
          label="对方单位"
          prop="payer">
        </el-table-column>
        <el-table-column
          label="保证金金额"
          prop="bailamount">
        </el-table-column>
        <el-table-column
          label="保证金类型"
          prop="bondTypeDesc">
        </el-table-column>
        <el-table-column
          label="是否是投标保函"
          prop="isTenderLetter">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { List } from '../../api/customer'
// import { downLoad } from '../../api/flowfrom'

export default {
  name: 'bizcustinfoform',
  data () {
    return {
      fileList: [],
      attachmentVOList: [],
      custList: [],
      cooperativeList: [],
      situation: [],
      situationList: [],
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
    const data = {
      data: this.dataList.dataId,
      url: '/app/form/projptenderrecord/detail'
    }
    List(data).then(res => {
      if (res.data) {
        this.custList = res.data
        this.custList.status = this.custList.status ? this.custList.status : ''
        this.situation = res.data.situation ? res.data.situation : []
        this.custList.bidTime = this.custList.bidTime ? this.custList.bidTime.split(' ')[0] : ''
        this.situationList = res.data.situation ? res.data.situation : []
        this.fileList = res.data.attachmentVOList ? res.data.attachmentVOList : []
        this.fileList = this.fileList.map(item => {
          return JSON.stringify({
            url: item.atturl,
            fileName: item.attname,
            filePath: item.attdir,
            fileSize: item.attsize,
            fileId: item.id,
            bizid: item.bizid
          })
        })
        if (res.data.situation) {
          this.situationList = this.situationList.map(item => {
            return {
              url: item.atturl,
              fileName: item.attname,
              filePath: item.attdir,
              fileSize: item.attsize,
              fileId: item.id,
              bizid: item.bizid
            }
          })
        }
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
