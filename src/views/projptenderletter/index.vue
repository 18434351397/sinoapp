/**
*@author CheYongJi
*@date 2020/5/13 15:23
*@title index
*/
<template>
  <div class="app-title">
    <div class="title">投标保函信息</div>
    <van-field
      name="ownDeptId"
      style="display: none;"
      v-model="custList.ownDeptId"
      type="text"
      readonly
    />
    <van-field
      name="reqdeptid"
      style="display: none;"
      v-model="custList.reqdeptid"
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
      name="paytype"
      style="display: none;"
      v-model="custList.paytype"
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
      name="status"
      style="display: none;"
      v-model="custList.status"
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
      name="recordid"
      v-model="custList.recordid"
      type="text"
      label="备案编号:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.recordid}}</div>
      </template>
    </van-field>
    <van-field
      name="requserName"
      v-model="custList.requserName"
      type="text"
      label="申请人:"
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{custList.requserName}}</div>
      </template>
    </van-field>
    <van-field
      name="reqdeptName"
      v-model="custList.reqdeptName"
      type="text"
      label="申请人部门:"
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{custList.reqdeptName}}</div>
      </template>
    </van-field>
    <van-field
      name="amount"
      v-model="custList.amount"
      type="text"
      label="保函金额(元):"
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{custList.amount}}</div>
      </template>
    </van-field>
    <van-field
      name="salesManName"
      v-model="custList.salesManName"
      type="text"
      label="销售:"
      readonly
    >
     <template #input>
        <div style="text-align: left;margin: 0;">{{custList.salesManName}}</div>
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
      name="paydate"
      v-model="custList.paydate"
      type="text"
      label="支出日期:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.paydate}}</div>
      </template>
    </van-field>
    <van-field
      name="payeename"
      v-model="custList.payeename"
      type="text"
      label="收款方开户名称:"
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
      label="收款方开户行:"
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
      label="收款方账号:"
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
      name="opendate"
      v-model="custList.opendate"
      type="text"
      label="开标日期:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.opendate}}</div>
      </template>
    </van-field>
    <van-field
      name="lastdate"
      v-model="custList.lastdate"
      type="text"
      label="开具保函最迟日期:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.lastdate}}</div>
      </template>
    </van-field>
    <van-field
      name="keepdate"
      v-model="custList.keepdate"
      type="text"
      label="保函有效期(天):"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.keepdate}}</div>
      </template>
    </van-field>
    <van-field
      name="projectno"
      v-model="custList.projectno"
      type="text"
      label="保函计入项目号:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.projectno}}</div>
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
      name="isJoin"
      v-model="custList.isJoin"
      type="text"
      label="是否加盟事业部:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.isJoin}}</div>
      </template>
    </van-field>
    <van-field
      name="ownDeptName"
      v-model="custList.ownDeptName"
      type="text"
      label="主导部门:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.ownDeptName}}</div>
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
    <div>
      <div class="table-title">附件列表</div>
      <vxe-table border resizable highlight-hover-row :data="projptenderList">
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
  </div>
</template>

<script>
import { projptenderletterList } from '../../api/bidManagement'
// import { downLoad } from '../../api/flowfrom'

export default {
  name: 'bizcustinfoform',
  data () {
    return {
      fileList: [],
      projptenderList: [],
      custList: [],
      cooperativeList: [],
      fileIdList: [],
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
    projptenderletterList(this.dataList.dataId).then(res => {
      if (res.data) {
        this.custList = res.data
        this.custList.amountWords = this.intToChinese(this.custList.amount)
        this.custList.opendate = this.custList.opendate ? this.custList.opendate.split(' ')[0] : ''
        this.custList.returndate = this.custList.returndate ? this.custList.returndate.split(' ')[0] : ''
        this.custList.lastdate = this.custList.lastdate ? this.custList.lastdate.split(' ')[0] : ''
        this.custList.paydate = this.custList.paydate ? this.custList.paydate.split(' ')[0] : ''
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
