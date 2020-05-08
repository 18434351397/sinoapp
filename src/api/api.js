const api = {
  loginUrl: '/admin/login/ajax',
  loginOutUrl: '/logout?clientType=pc',
  getInfoUrl: '/app/admin/user/getUserAll',
  smsSendUrl: '/sms/send',
  editPasswordUrl: '/app/admin/user/changePswd',
  checkOldPwd: '/app/admin/user/checkOldPwd',
  getUserInfoUrl: '/app/admin/user/detail',
  todoListUrl: '/app/flo/flowform/list',
  searchUrl: '/app/flo/flowform/mobileList',
  flowFormUrl: '/app/flo/flowform/detail',
  customerList: '/app/form/bizcustinfoform/detail',
  supplierList: '/app/form/bizsupplierinfoform/detail',
  projptenderrecordList: '/app/form/projptenderrecord/detail',
  orgTree: '/app/admin/user/mobileOrgUserTree',
  downLoadUrl: '/app/file/download',
  projpcontractreviewList: '/app/form/projpcontractreview/detail'
}

export default api
