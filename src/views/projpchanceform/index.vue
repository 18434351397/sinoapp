/**
*@author CheYongJi
*@date 2020/6/18 16:06
*@title index
*/
<template>
  <div class="app-title">
    <div class="title">商机基本信息</div>
    <van-field name="bizId" v-model="custList.bizId" type="text" label="商机编号:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.bizId}}</div>
      </template>
    </van-field>
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="custList.meetingUsers"
      type="text"
      readonly
    />
    <van-field style="display: none;" name="id" v-model="custList.id" type="text" readonly />
    <van-field name="custname" v-model="custList.custname" type="text" label="客户:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.custname}}</div>
      </template>
    </van-field>
    <van-field name="biztypeDesc" v-model="custList.biztypeDesc" type="text" label="业务类型:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.biztypeDesc}}</div>
      </template>
    </van-field>
    <van-field name="chancestageDesc" v-model="custList.chancestageDesc" type="text" label="商机阶段:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.chancestageDesc}}</div>
      </template>
    </van-field>
    <van-field name="username" v-model="custList.username" type="text" label="销售人员:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.username}}</div>
      </template>
    </van-field>
    <van-field
      name="userdeptname"
      v-model="custList.userdeptname"
      type="text"
      label="销售人员部门:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.userdeptname}}</div>
      </template>
    </van-field>
    <van-field
      name="orgname"
      v-model="custList.orgname"
      type="text"
      label="主导部门:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.orgname}}</div>
      </template>
    </van-field>
    <van-field name="userweight" v-model="custList.userweight" type="text" label="销售人员加权:" readonly>
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.userweight}}</div>
      </template>
    </van-field>
    <van-field
      name="create_date"
      v-model="custList.create_date"
      type="text"
      label="商机发现时间:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.create_date}}</div>
      </template>
    </van-field>
    <div class="title">项目相关信息</div>
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
      name="plantime"
      v-model="custList.plantime"
      type="text"
      label="预计投标时间:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.plantime}}</div>
      </template>
    </van-field>
    <van-field
      name="planamount"
      v-model="custList.planamount"
      type="text"
      label="预计合同总金额:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.planamount}}</div>
      </template>
    </van-field>
    <van-field
      name="actualamount"
      v-model="custList.actualamount"
      type="text"
      label="实际报价金额:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.actualamount}}</div>
      </template>
    </van-field>
    <van-field
      name="planreceivep"
      v-model="custList.planreceivep"
      type="text"
      label="预计收款比例:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.planreceivep}}</div>
      </template>
    </van-field>
    <van-field
      name="planreceivedate"
      v-model="custList.planreceivedate"
      type="text"
      label="预计收款时间:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.planreceivedate}}</div>
      </template>
    </van-field>
    <van-field
      name="plansigndate"
      v-model="custList.plansigndate"
      type="text"
      label="预计签约时间:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.plansigndate}}</div>
      </template>
    </van-field>
    <van-field
      name="plangrossprofit"
      v-model="custList.plangrossprofit"
      type="text"
      label="预计毛利:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.plangrossprofit}}</div>
      </template>
    </van-field>
    <van-field
      name="actualgrossprofit"
      v-model="custList.actualgrossprofit"
      type="text"
      label="实际报价毛利:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.actualgrossprofit}}</div>
      </template>
    </van-field>
    <van-field
      name="plangrossprofitp"
      v-model="custList.plangrossprofitp"
      type="text"
      label="预计毛利率:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.plangrossprofitp}}</div>
      </template>
    </van-field>
    <van-field
      name="weightgrossprofit"
      v-model="custList.weightgrossprofit"
      type="text"
      label="加权毛利:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.weightgrossprofit}}</div>
      </template>
    </van-field>
    <div>
      <div
        class="table-title"
      >客户拜访信息</div>
      <el-table border :data="custList.projpVisitList" style="width: 100%">
        <el-table-column label="被访人姓名" prop="linkmanName"></el-table-column>
        <el-table-column label="职务" prop="jobtitle"></el-table-column>
        <el-table-column label="拜访时间" prop="visitdate"></el-table-column>
        <el-table-column label="拜访结果" prop="visitresult"></el-table-column>
      </el-table>
    </div>
    <div class="title">中标确认信息</div>
    <van-field label="是否中标" v-model="custList.ishit" readonly colon>
      <template #input>
        <div v-if="custList.ishit === '1'" style="margin: 0;">是</div>
        <div v-if="custList.ishit === '0'" style="margin: 0;">否</div>
        <div v-else style="margin: 0;"></div>
      </template>
    </van-field>
    <van-field
      name="hiturl"
      v-model="custList.hiturl"
      type="text"
      label="中标公告地址:"
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{custList.hiturl}}</div>
      </template>
    </van-field>
  </div>
</template>

<script>
import { projpchanceformList } from '../../api/bidManagement'

export default {
  name: 'index',
  data () {
    return {
      custList: [],
      postmanageList: [],
      fileList: [],
      fileIdList: [],
      dataList: this.$route.query
    }
  },
  created () {
    projpchanceformList(this.dataList.dataId).then(res => {
      this.custList = res.data
      this.postmanageList = res.data.fileList
      this.fileList = res.data.fileList
      // this.fileList.forEach(item => {
      //   this.fileIdList = this.fileIdList.concat(item.fileId)
      // })
      // this.fileList = this.fileList.map(item => {
      //   return JSON.stringify({
      //     url: item.url,
      //     fileName: item.fileName,
      //     fileSize: item.fileSize,
      //     fileId: item.fileId
      //   })
      // })
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
</style>
