import request from '@/utils/request'
const api = {
  projptenderpreqList: '/app/form/projptenderpreqList/detail', // 销售合同
  projpriskbond: '/app/form/projpriskbond/detail' // 风险保证金
}

// 投标保证金
export async function projptenderpreqList (data) {
  return request({
    url: api.projptenderpreqList + '/' + data,
    method: 'get'
  })
}
// 风险保证金
export async function projpriskbondList (data) {
  return request({
    url: api.projpriskbond + '/' + data,
    method: 'get'
  })
}
