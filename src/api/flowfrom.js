import request from '@/utils/request'
import api from './api'

export function getTodoList (data) {
  return request({
    url: api.todoListUrl,
    method: 'put',
    data
  })
}
