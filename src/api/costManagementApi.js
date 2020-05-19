import request from '@/utils/request'
const api = {
  projptenderletterList: '/app/form/projptenderletter/detail',
  bizfeesloanformList: '/app/form/bizfeesloanform/detail', // 个人借款
  bizfeesreimbursementformList: '/app/form/bizfeesreimbursementform/detail', // 报销发起
  selectByUserIdLoanList: '/app/biz/bizfeesloan/selectByUserIdLoan', // 报销发起
  projpinvoicereq: '/app/form/projpinvoicereq/detail', // 开发票/收据
  bizfeestransferform: '/app/form/bizfeestransferform/detail', // 内部收益划转
  bizfeesreimbursementform: '/app/form/bizfeesreimbursementform/detail', // 分摊报销
  bizfeesspecialtransferform: '/app/form/bizfeesspecialtransferform/detail' // 特殊收益划转
}
// 报销发起
export async function bizfeesreimbursementformList (data) {
  return request({
    url: api.bizfeesreimbursementformList + '/' + data,
    method: 'get'
  })
}
// 报销发起---清借款列表数据接口
export async function selectByUserIdLoanList (data) {
  return request({
    url: api.selectByUserIdLoanList + '/' + data,
    method: 'get'
  })
}
// 个人借款
export async function bizfeesloanformList (data) {
  return request({
    url: api.bizfeesloanformList + '/' + data,
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

// 开发票/收据
export async function projpinvoicereqApi (data) {
  return request({
    url: api.projpinvoicereq + '/' + data,
    method: 'get'
  })
}

// 内部收益划转
export async function bizfeestransferformApi (data) {
  return request({
    url: api.bizfeestransferform + '/' + data,
    method: 'get'
  })
}

// 分摊报销
export async function bizfeesreimbursementformApi (data) {
  return request({
    url: api.bizfeesreimbursementform + '/' + data,
    method: 'get'
  })
}
// 特殊收益划转
export async function bizfeesspecialtransferformApi (data) {
  return request({
    url: api.bizfeesspecialtransferform + '/' + data,
    method: 'get'
  })
}
