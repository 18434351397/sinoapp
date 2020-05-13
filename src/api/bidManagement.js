import request from '@/utils/request'
const api = {
  projptenderletterList: '/app/form/projptenderletter/detail',
  projptenderpreqList: '/app/form/projptenderpreq/detail'
}
// 合同审评
export async function projptenderpreqList (data) {
  return request({
    url: api.projptenderpreqList + '/' + data,
    method: 'get'
  })
}
export async function projptenderletterList (data) {
  return request({
    url: api.projptenderletterList + '/' + data,
    method: 'get'
  })
}
