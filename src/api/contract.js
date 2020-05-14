import request from '@/utils/request'
const api = {
  projpriskbond: '/app/form/projpriskbond/detail', // 风险保证金
  projpcontractpurchaseform: '/app/form/projpcontractpurchaseform/detail', // 采购合同
  projpriskbondthaw: '/app/form/projpriskbondthaw/detail'
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
