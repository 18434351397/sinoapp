import request from '@/utils/request'
const api = {
  formProjpprojectinfoform: '/app/form/projpprojectinfoform/select/projectNo', // 销售合同 查询项目号
  proProjpprojectinfo: '/app/pro/projpprojectinfo/projpProjectDetail', // 销售合同 当立项流程未已完成时则查询项目业务数据
  projpriskbond: '/app/form/projpriskbond/detail', // 风险保证金
  projpcontractpurchaseform: '/app/form/projpcontractpurchaseform/detail', // 采购合同
  selectPurchaseNo: '/app/form/projpcontractpurchaseform/selectPurchaseNo', // 采购合同 - 判断是否已有采购合同号
  projpriskbondthaw: '/app/form/projpriskbondthaw/detail', // 解冻风险保证金
  projpcontractprotocolform: '/app/form/projpcontractprotocolform/detail', // 合作协议
  projpprojectinfoform: '/app/form/projpprojectinfoform/detail', // 项目立项
  projpprojectstageinfo: '/app/pro/projpprojectstageinfo/all/list', // 项目立项 --- 阶段列表
  attachment: '/app/admin/attachment/biz/list', // 项目立项 --- 附件 || 项目文档列表
  projpprojectupdateform: '/app/form/projpprojectupdateform/detail', // 项目变更 --- 预算变更
  getOtherInfo: '/app/form/projpprojectinfoform/getOtherInfo', // 项目人员打分 和 供应商打分
  projpprojectendform: '/app/form/projpprojectendform/detail', // 项目结算
  bizperformdenoteform: '/app/form/bizperformdenoteform/detail', // 履约保函
  projpcontractarchives: '/app/form/projpcontractarchives/detail', // 合同存档
  selectReportByRequestNo: '/app/pro/projpcontractreview/selectReportByRequestNo', // 验收报告相关信息
  passedAndForm: '/app/pro/projpcontractreportattachment/form/list/passedAndForm', // 验收报告记录
  selectAttname: '/app/pro/projpcontractreportattachment/form/selectAttname', // 验收报告附件
  updateAttach: '/app/pro/projpcontractreportattachment/form/updateAttach', // 验收报告附件审核
  projppayreq: '/app/form/projppayreq/detail', // 合同付款
  projpcontractpayment: '/app/pro/projpcontractpayment/contract', // 合同付款金额
  cashStatus: '/app/form/projppayreq/contract/cash/status/', // 现金流状态
  bizperformbondform: '/app/form/bizperformbondform/detail', // 履约保证金
  projpbidservicefee: '/app/form/projpbidservicefee/detail', // 中标服务费
  projpcontractreviewcancel: '/app/form/projpcontractreview/cancel/detail', // 合同取消
  projpcontractreviewupdateform: '/app/form/projpcontractreviewupdateform/detail' // 销售合同变更
}

// 销售合同 查询项目号
export async function formProjpprojectinfoformApi(id) {
  return request({
    url: api.formProjpprojectinfoform + '/' + id,
    method: 'get'
  })
}
// 销售合同 当立项流程未已完成时则查询项目业务数据
export async function proProjpprojectinfoApi(id) {
  return request({
    url: api.proProjpprojectinfo + '/' + id,
    method: 'get'
  })
}

// 风险保证金
export async function projpriskbondList(data) {
  return request({
    url: api.projpriskbond + '/' + data,
    method: 'get'
  })
}

// 采购合同
export async function projpcontractpurchaseformList(data) {
  return request({
    url: api.projpcontractpurchaseform + '/' + data,
    method: 'get'
  })
}
//  采购合同 - 判断是否已有采购合同号
export async function selectPurchaseNoApi(data) {
  return request({
    url: api.selectPurchaseNo + '/' + data,
    method: 'get'
  })
}

// 风险保证金解冻
export async function projpriskbondthawList(data) {
  return request({
    url: api.projpriskbondthaw + '/' + data,
    method: 'get'
  })
}

// 合作协议
export async function projpcontractprotocolformApi(data) {
  return request({
    url: api.projpcontractprotocolform + '/' + data,
    method: 'get'
  })
}

// 项目立项
export async function projpprojectinfoformApi(data) {
  return request({
    url: api.projpprojectinfoform + '/' + data,
    method: 'get'
  })
}

// 项目立项 --- 阶段列表
export async function projpprojectstageinfoApi(data) {
  return request({
    url: api.projpprojectstageinfo + '/?projectKey=' + data,
    method: 'get'
  })
}

// 项目立项 --- 阶段列表
export async function attachmentApi(data) {
  return request({
    url: api.attachment + '?bizId=' + data,
    method: 'get'
  })
}

// 履约保函
export async function bizperformdenoteformApi(data) {
  return request({
    url: api.bizperformdenoteform + '/' + data,
    method: 'get'
  })
}
// 合同存档
export async function projpcontractarchivesApi(data) {
  return request({
    url: api.projpcontractarchives + '/' + data,
    method: 'get'
  })
}
// 验收报告相关信息
export async function selectReportByRequestNoApi(data) {
  return request({
    url: api.selectReportByRequestNo + '/' + data,
    method: 'get'
  })
}
// 合同付款
export async function projppayreqApi(data) {
  return request({
    url: api.projppayreq + '/' + data,
    method: 'get'
  })
}
// 合同付款金额
export async function projpcontractpaymentApi(data) {
  return request({
    url: api.projpcontractpayment + '/' + data,
    method: 'get'
  })
}
// 现金流状态
export async function cashStatusApi(data) {
  return request({
    url: api.cashStatus + '/' + data,
    method: 'get'
  })
}

// 履约保证金
export async function bizperformbondformApi(data) {
  return request({
    url: api.bizperformbondform + '/' + data,
    method: 'get'
  })
}
// 中标服务费
export async function projpbidservicefeeApi(data) {
  return request({
    url: api.projpbidservicefee + '/' + data,
    method: 'get'
  })
}

// 销售合同变更
export async function projpcontractreviewupdateformApi(data) {
  return request({
    url: api.projpcontractreviewupdateform + '/' + data,
    method: 'get'
  })
}

// 项目变更 --- 预算变更
export async function projpprojectupdateformApi(data) {
  return request({
    url: api.projpprojectupdateform + '/' + data,
    method: 'get'
  })
}

// 项目结项
export async function projpprojectendformApi(data) {
  return request({
    url: api.projpprojectendform + '/' + data,
    method: 'get'
  })
}
export async function getOtherInfoApi(projectNo, contractNo) {
  return request({
    url: api.getOtherInfo + '?projectNo=' + projectNo + '&contractNo=' + contractNo,
    method: 'get'
  })
}
// 验收报告列表记录
export async function passedAndFormApi(data) {
  return request({
    url: api.passedAndForm,
    method: 'put',
    data
  })
}
// 验收报告附件
export async function selectAttnameApi(data) {
  return request({
    url: api.selectAttname + '/' + data,
    method: 'get'
  })
}

// 验收报告附件审核
export async function updateAttachApi(data) {
  return request({
    url: api.updateAttach,
    method: 'POST',
    data
  })
}

// 销售合同取消
export async function projpcontractreviewcancelApi(data) {
  return request({
    url: api.projpcontractreviewcancel + '/' + data,
    method: 'get'
  })
}
