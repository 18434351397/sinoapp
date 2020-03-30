import Mock from 'mockjs'
const data = {
  id: '@guid',
  name: '@cname'
}

Mock.mock('/sms/send', 'post', data)

export default Mock
