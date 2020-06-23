/** *@author XuJinTao *@date 2020/5/14 11:30 *@title index */
<template>
  <div class="app-title">
    <div class="title">合作协议信息</div>
    <van-field
      style="display: none;"
      name="id"
      v-model="projpcontractprotocol.id"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="company"
      v-model="projpcontractprotocol.company"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="custId"
      v-model="projpcontractprotocol.custId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="meetingUsers"
      v-model="projpcontractprotocol.meetingUsers"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="ownDeptId"
      v-model="projpcontractprotocol.ownDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reqDeptId"
      v-model="projpcontractprotocol.reqDeptId"
      type="text"
      readonly
    />
    <van-field
      style="display: none;"
      name="reqUserId"
      v-model="projpcontractprotocol.reqUserId"
      type="text"
      readonly
    />

    <van-field
      type="text"
      name="bizId"
      v-model="projpcontractprotocol.bizId"
      label="协议号"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractprotocol.bizId}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="name"
      v-model="projpcontractprotocol.name"
      label="协议名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractprotocol.name}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="reqUserName"
      v-model="projpcontractprotocol.reqUserName"
      label="申请人"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractprotocol.reqUserName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="reqDeptName"
      v-model="projpcontractprotocol.reqDeptName"
      label="申请人部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractprotocol.reqDeptName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="custName"
      v-model="projpcontractprotocol.custName"
      label="客户名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractprotocol.custName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="companyDesc"
      v-model="projpcontractprotocol.companyDesc"
      label="涉及公司"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractprotocol.companyDesc}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="hasSubName"
      v-model="projpcontractprotocol.hasSubName"
      label="是否有分包或第三方产品服务"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractprotocol.hasSubName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="ownDeptName"
      v-model="projpcontractprotocol.ownDeptName"
      label="主导部门"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractprotocol.ownDeptName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="pmUserId"
      v-model="projpcontractprotocol.pmUserId"
      label="项目经理"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractprotocol.pmUserId}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="aim"
      v-model="projpcontractprotocol.aim"
      label="合作目的"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractprotocol.aim}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="otherName"
      v-model="projpcontractprotocol.otherName"
      label="合作方名称"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractprotocol.otherName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="hasTemplateName"
      v-model="projpcontractprotocol.hasTemplateName"
      label="是否有模板"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractprotocol.hasTemplateName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="hasAmountName"
      v-model="projpcontractprotocol.hasAmountName"
      label="是否有金额"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractprotocol.hasAmountName}}</div>
      </template>
    </van-field>
    <van-field
      type="text"
      name="remark"
      v-model="projpcontractprotocol.remark"
      label="备注"
      colon
      readonly
    >
      <template #input>
        <div style="text-align: left;margin: 0;">{{projpcontractprotocol.remark}}</div>
      </template>
    </van-field>
    <div v-if="isFile">
      <div class="table-title">附件列表</div>
      <vxe-table border resizable highlight-hover-row :data="files">
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
import { projpcontractprotocolformApi } from '../../api/contract'

export default {
  name: 'index',
  data () {
    return {
      dataList: this.$route.query,
      fileList: [],
      isFile: false,
      files: [], // 循环列表
      projpcontractprotocol: [] // 合同协议信息
    }
  },
  created () {
    projpcontractprotocolformApi(this.dataList.dataId).then(res => {
      if (res.data) {
        // 判断bool条件 是否有金额
        if (res.data.hasAmount === '1') {
          res.data.hasAmountName = '是'
        } else {
          res.data.hasAmountName = '否'
        }
        // 是否分包
        if (res.data.hasSub === '1') {
          res.data.hasSubName = '是'
        } else {
          res.data.hasSubName = '否'
        }
        // 是否有模板
        if (res.data.hasTemplate === '1') {
          this.isFile = true
          res.data.hasTemplateName = '是'
        } else {
          this.isFile = false
          res.data.hasTemplateName = '否'
        }
        this.projpcontractprotocol = res.data
        this.files = res.data.fileList ? res.data.fileList : []
        this.fileList = this.files.map(item => {
          return JSON.stringify({
            fileName: item.fileName,
            url: item.url,
            fileSize: item.fileSize,
            fileId: item.fileId
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
