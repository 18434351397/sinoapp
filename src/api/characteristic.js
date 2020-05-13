import request from '@/utils/request'
const api = {
  sealapproveformList: '/app/form/sealapproveform/detail', // 印信使用审批
  sealpreservationformList: '/app/form/sealpreservationform/detail', // 印章保管
  bizcompanychangeformList: '/app/form/bizcompanychangeform/detail' // 分子公司注册变更
}

// 印信使用审批
export async function sealapproveformList (data) {
  return request({
    url: api.sealapproveformList + '/' + data,
    method: 'get'
  })
}

// 印章保管登记
export async function sealpreservationformList (data) {
  return request({
    url: api.sealpreservationformList + '/' + data,
    method: 'get'
  })
}

// 分子公司注册变更
export async function bizcompanychangeformList (data) {
  return request({
    url: api.bizcompanychangeformList + '/' + data,
    method: 'get'
  })
}
