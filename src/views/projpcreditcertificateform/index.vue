/**
*@author CheYongJi
*@date 2020/5/14 15:58
*@title projpcreditificateform
*/
<template>
  <div class="app-title">
    <div class="title" style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;">资信证明信息</div>
    <van-field
      style="display: none;"
      name="id"
      v-model="custList.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="ownDeptId"
      v-model="custList.ownDeptId"
      type="text"
      readonly
    />
    <!--基本信息开始-->
    <van-field
      name="recordRecordNo"
      v-model="custList.recordNo"
      type="text"
      label="备案编号:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.recordNo}}</div>
      </template>
    </van-field>
    <van-field
      name="recordProjectName"
      v-model="custList.recordProjectName"
      type="text"
      label="项目名称:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.recordProjectName}}</div>
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
      name="projectNo"
      v-model="custList.projectNo"
      type="text"
      label="项目编号:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.projectNo}}</div>
      </template>
    </van-field>
    <van-field
      name="projectName"
      v-model="custList.projectName"
      type="text"
      label="计入项目名称:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.projectName}}</div>
      </template>
    </van-field>
    <van-field
      name="ownDeptName"
      v-model="custList.ownDeptName"
      label="费用归属部门名称:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.ownDeptName}}</div>
      </template>
    </van-field>
    <van-field
      name="ownDeptNum"
      v-model="custList.ownDeptNum"
      type="text"
      label="费用归属部门编号:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.ownDeptNum}}</div>
      </template>
    </van-field>
    <van-field
      name="openTitle"
      v-model="custList.openTitle"
      type="text"
      label="开具抬头:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.openTitle}}</div>
      </template>
    </van-field>
    <van-field
      name="openCompanyStr"
      v-model="custList.openCompanyStr"
      type="text"
      label="开具公司:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.openCompanyStr}}</div>
      </template>
    </van-field>
    <van-field
      name="openTypeStr"
      v-model="custList.openTypeStr"
      type="text"
      label="开具类型:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.openTypeStr}}</div>
      </template>
    </van-field>
    <van-field
      name="lastOpenTime"
      v-model="custList.lastOpenTime"
      type="text"
      label="最晚办出时间:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.lastOpenTime}}</div>
      </template>
    </van-field>
    <van-field
      name="bankNameStr"
      v-model="custList.bankNameStr"
      type="text"
      label="银行名称:"
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{custList.bankNameStr}}</div>
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
import { projpcreditcertificateformList } from '../../api/bidManagement'

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
    projpcreditcertificateformList(this.dataList.dataId).then(res => {
      if (res.data) {
        this.custList = res.data
        this.custList.bidTime = this.custList.bidTime ? this.custList.bidTime.split(' ')[0] : ''
        this.projptenderList = res.data.creditFileList ? res.data.creditFileList : []
        this.fileList = res.data.creditFileList ? res.data.creditFileList : []
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
