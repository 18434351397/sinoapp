import request from '@/utils/request'
const api = {
  projpriskbond: '/app/form/projpriskbond/detail', // 风险保证金
  projpcontractpurchaseform: '/app/form/projpcontractpurchaseform/detail', // 采购合同
  projpriskbondthaw: '/app/form/projpriskbondthaw/detail', // 解冻风险保证金
  projpcontractprotocolform: '/app/form/projpcontractprotocolform/detail', // 合作协议
  projpprojectinfoform: '/app/form/projpprojectinfoform/detail', // 项目立项
  projpprojectstageinfo: 'app/pro/projpprojectstageinfo/all/list', // 项目立项 --- 阶段列表
  attachment: '/app/admin/attachment/biz/list', // 项目立项 --- 附件
  bizperformdenoteform: '/app/form/bizperformdenoteform/detail', // 履约保函
  projpcontractarchives: '/app/form/projpcontractarchives/detail', // 合同存档
  selectReportByRequestNo: '/app/pro/projpcontractreview/selectReportByRequestNo', // 验收报告相关信息
  projppayreq: '/app/form/projppayreq/detail', // 合同付款
  projpcontractpayment: '/app/pro/projpcontractpayment/contract', // 合同付款金额
  cashStatus: '/app/form/projppayreq/contract/cash/status/', // 现金流状态
  bizperformbondform: '/app/form/bizperformbondform/detail' // 履约保证金
}

// 风险保证金
export async function projpriskbondList (data) {
  return request({
    url: api.projpriskbondList + '/' + data,
    method: 'get'
  })
}

// 采购合同
export async function projpcontractpurchaseformList (data) {
  return request({
    url: api.projpcontractpurchaseform + '/' + data,
    method: 'get'
  })
}

// 风险保证金解冻
export async function projpriskbondthawList (data) {
  return request({
    url: api.projpriskbondthaw + '/' + data,
    method: 'get'
  })
}

// 合作协议
export async function projpcontractprotocolformApi (data) {
  return request({
    url: api.projpcontractprotocolform + '/' + data,
    method: 'get'
  })
}

// 项目立项
export async function projpprojectinfoformApi (data) {
  return request({
    url: api.projpprojectinfoform + '/' + data,
    method: 'get'
  })
}

// 项目立项 --- 阶段列表
export async function projpprojectstageinfoApi (data) {
  return request({
    url: api.projpprojectstageinfo + '/?projectKey=' + data,
    method: 'get'
  })
}

// 项目立项 --- 阶段列表
export async function attachmentApi (data) {
  return request({
    url: api.attachment + '/?bizId=' + data,
    method: 'get'
  })
}

// 履约保函
export async function bizperformdenoteformApi (data) {
  return request({
    url: api.bizperformdenoteform + '/' + data,
    method: 'get'
  })
}
// 合同存档
export async function projpcontractarchivesApi (data) {
  return request({
    url: api.projpcontractarchives + '/' + data,
    method: 'get'
  })
}
// 验收报告相关信息
export async function selectReportByRequestNoApi (data) {
  return request({
    url: api.selectReportByRequestNo + '/' + data,
    method: 'get'
  })
}
// 合同付款
export async function projppayreqApi (data) {
  return request({
    url: api.projppayreq + '/' + data,
    method: 'get'
  })
}
// 合同付款金额
export async function projpcontractpaymentApi (data) {
  return request({
    url: api.projpcontractpayment + '/' + data,
    method: 'get'
  })
}
// 现金流状态
export async function cashStatusApi (data) {
  return request({
    url: api.cashStatus + '/' + data,
    method: 'get'
  })
}

// 履约保证金
export async function bizperformbondformApi (data) {
  return request({
    url: api.bizperformbondform + '/' + data,
    method: 'get'
  })
}
