<template>
  <div class="app-title">
    <div class="title">项目立项信息</div>
    <van-field
      style="display: none;"
      name="status"
      v-model="projpprojectinfoform.status"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reqUserId"
      v-model="projpprojectinfoform.reqUserId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reqDeptId"
      v-model="projpprojectinfoform.reqDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="ownDeptId"
      v-model="projpprojectinfoform.ownDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="id"
      v-model="projpprojectinfoform.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="projpprojectinfoform.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="hasAttachment"
      v-model="projpprojectinfoform.hasAttachment"
      type="text"
      readonly
    />

    <van-field
      type="text"
      name="projectNo"
      v-model="projpprojectinfoform.projectNo"
      label="项目编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpprojectinfoform.projectNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="projectTypeName"
      v-model="projpprojectinfoform.projectTypeName"
      label="项目类型"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projpprojectinfoform.projectTypeName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="projectName"
      v-model="projpprojectinfoform.projectName"
      label="项目名称"
      colon
      readonly
    >
    <template #input>
        <div style="text-align: left;margin: 0;">{{projpprojectinfoform.projectName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="reqUserName"
      v-model="projpprojectinfoform.reqUserName"
      label="项目申请人"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpprojectinfoform.reqUserName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="reqDeptName"
      v-model="projpprojectinfoform.reqDeptName"
      label="项目申请部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpprojectinfoform.reqDeptName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="pmUserName"
      v-model="projpprojectinfoform.pmUserName"
      label="项目经理"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpprojectinfoform.pmUserName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="ownDeptName"
      v-model="projpprojectinfoform.ownDeptName"
      label="主导部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpprojectinfoform.ownDeptName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="radio"
      v-model="projpprojectinfoform.isContract"
      label="是否签订合同"
      colon
      readonly
    >
      <template #input>
        <div v-if="projpprojectinfoform.isContract === '1'" style="margin: 0;">是</div>
        <div v-else style="margin: 0;">否</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="contractNo"
      v-model="projpprojectinfoform.contractNo"
      label="合同编号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpprojectinfoform.contractNo}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="cPersion"
      v-model="projpprojectinfoform.cPersion"
      label="预计人员成本(元)"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpprojectinfoform.cPersion}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="creimbursement"
      v-model="projpprojectinfoform.creimbursement"
      label="预计报销性费用(元)"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpprojectinfoform.creimbursement}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="startDate"
      v-model="projpprojectinfoform.startDate"
      label="预计开始时间"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpprojectinfoform.startDate}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="endDate"
      v-model="projpprojectinfoform.endDate"
      label="预计结束时间"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpprojectinfoform.endDate}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="projectExplain"
      v-model="projpprojectinfoform.projectExplain"
      label="项目情况描述"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpprojectinfoform.projectExplain}}</div>
      </template>
    </van-field>
    <div>
      <div class="table-title">项目阶段划分</div>
      <vxe-table border resizable highlight-hover-row :data="projpprojectstageinfo" >
        <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
        <vxe-table-column field="stageName" title="阶段名称" width="21%"></vxe-table-column>
        <vxe-table-column field="stageStartDate" title="阶段开始时间" width="25%"></vxe-table-column>
        <vxe-table-column field="stageEndDate" title="阶段结束时间" width="25%"></vxe-table-column>
        <vxe-table-column field="stageDayCount" title="本阶段需要的人天" width="21%"></vxe-table-column>
        <vxe-table-column field="stageDayRatio" title="与总人天数占比" width="21%"></vxe-table-column>
        <vxe-table-column field="remark" title="备注" width="17%"></vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <div class="table-title">附件列表</div>
       <vxe-table border resizable highlight-hover-row :data="files">
       <vxe-table-column type="seq" title="序号" width="15%"></vxe-table-column>
       <vxe-table-column field="attname" title="附件名称" width="50%"></vxe-table-column>
       <vxe-table-column title="大小" width="20%">
         <template slot-scope="scope">{{ (scope.row.attsize / 1024).toFixed(2) + 'KB' }}</template>
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
import { projpprojectinfoformApi, projpprojectstageinfoApi, attachmentApi } from '../../api/contract.js'
export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      fileList: [],
      fileIdList: [],
      files: [], // 循环列表
      projpprojectstageinfo: [], // 项目进度列表
      projpprojectinfoform: [] // 项目立项
    }
  },
  created () {
    // 项目立项列表
    projpprojectinfoformApi(this.dataList.dataId).then(res => {
      if (res.data) {
        this.projpprojectinfoform = res.data
      } else {
        throw new '数据异常'()
      }
    })
    // 项目进展列表
    projpprojectstageinfoApi(this.dataList.dataId).then(res => {
      if (res.data) {
        this.projpprojectstageinfo = res.data
      } else {
        throw new '数据异常'()
      }
    })
    // 项目附件列表
    attachmentApi(this.dataList.dataId).then(res => {
      if (res.data) {
        this.files = res.data ? res.data : []
        // 传输附件id字段
        res.data.map(item => {
          this.fileIdList = this.fileIdList.concat(item.id)
        })
        this.fileList = this.files.map(item => {
          return JSON.stringify({
            attdir: item.attdir,
            attname: item.attname,
            attsize: item.attsize,
            atturl: item.atturl,
            bizid: item.bizid,
            biztable: item.biztable,
            createdDate: item.createdDate,
            id: item.id,
            userId: item.userId,
            userName: item.userName
          })
        })
      } else {
        throw new '数据异常'()
      }
    })
  },
  methods: {
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
