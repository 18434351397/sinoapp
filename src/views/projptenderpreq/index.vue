/**
*@author CheYongJi
*@date 2020/5/12 15:50
*@title index
*/
<template>
  <div>
    <div style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;">投标保证金信息</div>
    <van-field
      name="recordno"
      v-model="custList.recordno"
      type="text"
      label="备案编号:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.recordno}}</div>
      </template>
    </van-field>
    <van-field
      name="status"
      style="display: none;"
      v-model="custList.status"
      type="text"
      readonly
    />
    <van-field
      name="exeuserid"
      style="display: none;"
      v-model="custList.exeuserid"
      type="text"
      readonly
    />
    <van-field
      name="paytime"
      style="display: none;"
      v-model="custList.paytime"
      type="text"
      readonly
    />
    <van-field
      name="leadOrg"
      style="display: none;"
      v-model="custList.leadOrg"
      type="text"
      readonly
    />
    <van-field
      name="paycompany"
      style="display: none;"
      v-model="custList.paycompany"
      type="text"
      readonly
    />
    <van-field
      name="paymentId"
      style="display: none;"
      v-model="custList.paymentId"
      type="text"
      readonly
    />
    <van-field
      name="paymentIdName"
      style="display: none;"
      v-model="custList.paymentIdName"
      type="text"
      readonly
    />
    <van-field
      name="reqtype"
      style="display: none;"
      v-model="custList.reqtype"
      type="text"
      readonly
    />
    <van-field
      name="deptid"
      style="display: none;"
      v-model="custList.deptid"
      type="text"
      readonly
    />
    <van-field
      name="reqPaytime"
      style="display: none;"
      v-model="custList.reqPaytime"
      type="text"
      readonly
    />
    <van-field
      name="contractNo"
      style="display: none;"
      v-model="custList.contractNo"
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
      name="paytype"
      v-model="custList.paytype"
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
      name="exeuserName"
      v-model="custList.exeuserName"
      type="text"
      label="经办人:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.exeuserName}}</div>
      </template>
    </van-field>
    <van-field
      name="deptName"
      v-model="custList.deptName"
      type="text"
      label="经办人部门:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.deptName}}</div>
      </template>
    </van-field>
    <van-field
      name="reqdate"
      v-model="custList.reqdate"
      type="text"
      label="申请日期:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.reqdate}}</div>
      </template>
    </van-field>
    <van-field
      name="tenderdate"
      v-model="custList.tenderdate"
      type="text"
      label="投标日期:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.tenderdate}}</div>
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
    <van-field
      name="paytimeid"
      v-model="custList.paytimeid"
      type="text"
      label="保证金付款时间:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.paytimeid}}</div>
      </template>
    </van-field>
    <van-field
      name="reqPaytimeId"
      v-model="custList.reqPaytimeId"
      type="text"
      label="保证金类型/对方单位:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.reqPaytimeId}}</div>
      </template>
    </van-field>
    <van-field
      name="reqtypeName"
      v-model="custList.reqtypeName"
      type="text"
      label="申请性质:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.reqtypeName}}</div>
      </template>
    </van-field>
    <van-field
      name="amount"
      v-model="custList.amount"
      type="text"
      label="金额(元):"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.amount}}</div>
      </template>
    </van-field>
    <van-field
      name="paycompanyName"
      v-model="custList.paycompanyName"
      type="text"
      label="支出公司:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.paycompanyName}}</div>
      </template>
    </van-field>
    <van-field
      name="paytypeName"
      v-model="custList.paytypeName"
      type="text"
      label="支出形式:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.paytypeName}}</div>
      </template>
    </van-field>
    <van-field
      name="projectname"
      v-model="custList.projectname"
      type="text"
      label="项目名称:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.projectname}}</div>
      </template>
    </van-field>
    <van-field
      name="payeename"
      v-model="custList.payeename"
      type="text"
      label="开户名称:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.payeename}}</div>
      </template>
    </van-field>
    <van-field
      name="payeebank"
      v-model="custList.payeebank"
      type="text"
      label="开户银行:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.payeebank}}</div>
      </template>
    </van-field>
    <van-field
      name="payeeaccount"
      v-model="custList.payeeaccount"
      type="text"
      label="账号:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.payeeaccount}}</div>
      </template>
    </van-field>
    <van-field
      name="returndate"
      v-model="custList.returndate"
      type="text"
      label="退回日期:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.returndate}}</div>
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
    <van-field
      name="amountWords"
      v-model="custList.amountWords"
      type="text"
      label="金额大写:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.amountWords}}</div>
      </template>
    </van-field>
    <div>
      <div style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;">附件列表</div>
      <el-table
        border
        :data="projptenderList"
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50"
          :index="indexMethods">
        </el-table-column>
        <el-table-column
          label="附件名称"
          prop="fileName">
        </el-table-column>
        <el-table-column
          label="大小"
          width="80">
          <template slot-scope="scope">
            {{(scope.row.fileSize/1024).toFixed(2) + 'KB'}}
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="50">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { projptenderpreqList } from '../../api/bidManagement'
// import { downLoad } from '../../api/flowfrom'

export default {
  name: 'bizcustinfoform',
  data () {
    return {
      fileIdList: [],
      fileList: [],
      projptenderList: [],
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
    projptenderpreqList(this.dataList.dataId).then(res => {
      if (res.data) {
        this.custList = res.data
        this.custList.amountWords = this.intToChinese(this.custList.amount)
        this.custList.reqdate = this.custList.reqdate ? this.custList.reqdate.split(' ')[0] : ''
        this.custList.tenderdate = this.custList.tenderdate ? this.custList.tenderdate.split(' ')[0] : ''
        this.situation = res.data.situation ? res.data.situation : []
        this.projptenderList = res.data.fileList ? res.data.fileList : []
        this.fileList = res.data.fileList ? res.data.fileList : []
        this.fileList.forEach(item => {
          this.fileIdList = this.fileIdList.concat(item.fileId)
        })
        this.fileList = this.fileList.map(item => {
          return JSON.stringify({
            url: item.url,
            fileName: item.fileName,
            fileSize: item.fileSize,
            fileId: item.fileId
          })
        })
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
