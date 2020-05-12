import request from '@/utils/request'
import api from './api'

export async function customerList (data) {
  return request({
    url: api.customerList + '/' + data,
    method: 'get'
  })
}
export async function supplierList (data) {
  return request({
    url: api.supplierList + '/' + data,
    method: 'get'
  })
}
export async function List (data) {
  return request({
    url: data.url + '/' + data.data,
    method: 'get'
  })
}

// 合同审评
export async function projpcontractreviewList (data) {
  return request({
    url: api.projpcontractreviewList + '/' + data,
    method: 'get'
  })
}

// 客户属性

export async function custPro() {
  return request({
    url: api.custPro + '?subCodes=custPro-&_=1589012445450',
    method: 'get'
  })
}