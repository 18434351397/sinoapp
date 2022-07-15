import request from '@/utils/request'
const api = {
  projptenderletterList: '/app/form/projptenderletter/detail',
  projptenderpreqList: '/app/form/projptenderpreq/detail/pay',
  projptenderpreqpayList: '/app/form/projptenderpreq/detail',
  projpcreditcertificateformList: '/app/form/projpcreditcertificateform/detail',
  projpcontractcaseList: '/app/form/projpcontractcaseform/detail', // 案例库
  projpchanceformList: '/app/form/projpchanceform/detail',
  caseBaseApprovalTask: '/app/form/projpcontractcaseform/updateTask', // 案例库 流程审批 特殊节点
}
// 投标保证金
export async function projptenderpreqList (data) {
  return request({
    url: api.projptenderpreqList + '/' + data,
    method: 'get'
  })
}
// 付业务往来款
export async function projptenderpreqpayList (data) {
  return request({
    url: api.projptenderpreqpayList + '/' + data,
    method: 'get'
  })
}
// 投标保函
export async function projptenderletterList (data) {
  return request({
    url: api.projptenderletterList + '/' + data,
    method: 'get'
  })
}
// 商机修订
export async function projpchanceformList (data) {
  return request({
    url: api.projpchanceformList + '/' + data,
    method: 'get'
  })
}

// 资信证明
export async function projpcreditcertificateformList (data) {
  return request({
    url: api.projpcreditcertificateformList + '/' + data,
    method: 'get'
  })
}

// 案例库详情
export async function projpcontractcaseList (data) {
  return request({
    url: api.projpcontractcaseList + '/' + data,
    method: 'get'
  })
}

// 案例库 流程 特殊 审批
export function caseBaseApprovalTaskApi(data) {
  return request({
    url: api.caseBaseApprovalTask,
    method: 'post',
    data
  })
}
