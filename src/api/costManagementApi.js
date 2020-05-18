import request from '@/utils/request'
const api = {
  projptenderletterList: '/app/form/projptenderletter/detail',
  bizfeesloanformList: '/app/form/bizfeesloanform/detail', // 个人借款
  bizfeesreimbursementformList: '/app/form/bizfeesreimbursementform/detail', // 报销发起
  selectByUserIdLoanList: '/app/biz/bizfeesloan/selectByUserIdLoan' // 报销发起
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
