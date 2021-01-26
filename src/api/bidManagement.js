import request from '@/utils/request'
const api = {
  projptenderletterList: '/app/form/projptenderletter/detail',
  projptenderpreqList: '/app/form/projptenderpreq/detail/pay',
  projptenderpreqpayList: '/app/form/projptenderpreq/detail',
  projpcreditcertificateformList: '/app/form/projpcreditcertificateform/detail',
  projpchanceformList: '/app/form/projpchanceform/detail'
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
