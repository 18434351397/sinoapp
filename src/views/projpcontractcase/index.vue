/**
*@author CheYongJi
*@date 2020/5/14 15:58
*@title projpcreditificateform
*/
<template>
  <div class="app-title">
    <div class="title" style="border-top: 1px dashed #f8f8f8;padding: 10px 15px;text-align: left;background-color: #fff;">案例库信息</div>
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
      name="reqUserName"
      v-model="custList.reqUserName"
      type="text"
      label="申请人:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.reqUserName}}</div>
      </template>
    </van-field>
    <van-field
      name="reqDeptName"
      v-model="custList.reqDeptName"
      type="text"
      label="申请人部门:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.reqDeptName}}</div>
      </template>
    </van-field>
    <van-field
      name="reqDate"
      v-model="custList.reqDate"
      type="text"
      label="申请时间:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.reqDate}}</div>
      </template>
    </van-field>
    <van-field
      name="caseToDesc"
      v-model="custList.caseToDesc"
      type="text"
      label="案例用途:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.caseToDesc}}</div>
      </template>
    </van-field>
    <van-field
      name="recordId"
      v-model="custList.recordId"
      type="text"
      label="项目备案号:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.recordId}}</div>
      </template>
    </van-field>
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
      name="custName"
      v-model="custList.custName"
      label="客户名称:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.custName}}</div>
      </template>
    </van-field>
    <van-field
      name="watermark"
      v-model="custList.watermark"
      type="text"
      label="水印内容:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.watermark}}</div>
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
      name="isDownloadEArchive"
      v-model="custList.isDownloadEArchive"
      type="text"
      label="是否下载电子版附件:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.isDownloadEArchive === '1' ? '是' : '否'}}</div>
      </template>
    </van-field>
    <van-field
      name="isTheOriginalOut"
      v-model="custList.isTheOriginalOut"
      type="text"
      label="是否借出原件:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.isTheOriginalOut === '1' ? '是' : '否'}}</div>
      </template>
    </van-field>
    <van-field
      v-if="custList.isTheOriginalOut === '1'"
      name="outDate"
      v-model="custList.outDate"
      type="text"
      label="借出日期:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.outDate}}</div>
      </template>
    </van-field>
    <van-field
      v-if="custList.isTheOriginalOut === '1'"
      name="returnDate"
      v-model="custList.returnDate"
      type="text"
      label="返还日期:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.returnDate}}</div>
      </template>
    </van-field>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker v-model="currentDate" type="date" @change="changeFn()" @confirm="confirmFn()" @cancel="cancelFn()" />
    </van-popup>

    <van-field
      clickable
      :value="value"
      placeholder="点击选择时间"
      @click="showPopFn('aRReport')"
      v-if="dataList.currTaskDefinitionKey === 'Archivist' && dataList.status === '1'"
      name="actualReturnDate"
      :rules="[{required: true, message: '实际返还日期不能为空！' }]"
      v-model="custList.actualReturnDate"
      label="实际返还日期:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.actualReturnDate}}</div>
      </template>
    </van-field>
    <div>
      <div class="table-title">合同信息列表</div>
      <vxe-table border resizable highlight-hover-row :data="projpContractReviewVOList">
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="id" title="合同编号" width="50%"></vxe-table-column>
        <vxe-table-column field="name" title="合同名称" width="50%"></vxe-table-column>
      </vxe-table>
    </div>

    <div>
      <div class="table-title">附件列表</div>
      <vxe-table border resizable highlight-hover-row :data="attachmentVOList">
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="contractId" title="合同编号" width="50%"></vxe-table-column>
        <vxe-table-column field="contractName" title="合同名称" width="50%"></vxe-table-column>
        <vxe-table-column field="attname" title="附件名称" width="50%"></vxe-table-column>
        <vxe-table-column title="大小" width="20%">
          <template slot-scope="scope">{{ (scope.row.attsize / 1024).toFixed(2) + 'KB' }}</template>
        </vxe-table-column>
        <vxe-table-column v-if="dataList.currTaskDefinitionKey === 'AcceptDownload'" title="操作" width="15%">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
          </template>
        </vxe-table-column>
      </vxe-table>
    </div>
  </div>
</template>

<script>
  import { projpcontractcaseList } from '../../api/bidManagement'

  export default {
    name: 'bizcustinfoform',
    data () {
      return {
        value: '',
        currentDate: new Date(),
        changeDate: new Date(),
        show: false, // 用来显示弹出层
        fileIdList: [],
        fileList: [],
        attachmentVOList: [],
        projpContractReviewVOList: [],
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
      projpcontractcaseList(this.dataList.dataId).then(res => {
        if (res.data) {
          this.custList = res.data
          this.custList.bidTime = this.custList.bidTime ? this.custList.bidTime.split(' ')[0] : ''
          this.attachmentVOList = res.data.contractMap.attachmentVOList ? res.data.contractMap.attachmentVOList : []
          this.projpContractReviewVOList = res.data.contractMap.projpContractReviewVOList ? res.data.contractMap.projpContractReviewVOList : []
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
      showPopFn (date) {
        this.value = date
        this.show = true
      },
      showPopup () {
        this.show = true
      },
      changeFn () { // 值变化是触发
        this.changeDate = this.currentDate // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
      },
      confirmFn () { // 确定按钮
        if (this.value === 'report') {
          this.selectAttname.reportSigningDate = this.timeFormat(this.currentDate)
        } else if (this.value === 'aRReport') {
          this.custList.actualReturnDate = this.timeFormat(this.currentDate)
        } else if (this.value === 'rReportDate') {
          this.selectAttname.rReportDate = this.timeFormat(this.currentDate)
        }
        this.show = false
      },
      cancelFn () {
        this.show = false
      },
      timeFormat (time) {
        const y = time.getFullYear()
        let m = time.getMonth() + 1
        m = m < 10 ? '0' + m : m
        let d = time.getDate()
        d = d < 10 ? ('0' + d) : d
        return y + '-' + m + '-' + d
      },

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
