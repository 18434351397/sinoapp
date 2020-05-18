import request from '@/utils/request'
const api = {
  projptenderletterList: '/app/form/projptenderletter/detail',
  projptenderpreqList: '/app/form/projptenderpreq/detail/pay',
  projptenderpreqpayList: '/app/form/projptenderpreq/detail'
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
//投标保函
export async function projptenderletterList (data) {
  return request({
    url: api.projptenderletterList + '/' + data,
    method: 'get'
  })
}
