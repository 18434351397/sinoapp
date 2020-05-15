import request from '@/utils/request'
const api = {
  projpriskbond: '/app/form/projpriskbond/detail', // 风险保证金
  projpcontractpurchaseform: '/app/form/projpcontractpurchaseform/detail', // 采购合同
  projpriskbondthaw: '/app/form/projpriskbondthaw/detail', // 解冻风险保证金
  projpcontractprotocolform: '/app/form/projpcontractprotocolform/detail', // 合作协议
  projpprojectinfoform: '/app/form/projpprojectinfoform/detail', // 项目立项
  projpprojectstageinfo: 'app/pro/projpprojectstageinfo/all/list', // 项目立项 --- 阶段列表
  attachment: '/app/admin/attachment/biz/list', // 项目立项 --- 附件
  bizperformdenoteform: '/app/form/bizperformdenoteform/detail' // 履约保函
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
