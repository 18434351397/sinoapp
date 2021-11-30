// 合同路由文件
const contractRouter = [
  // 加路由，更换此处路径
  {
    path: '/projpcontractreview',
    component: () => import('../views/projpcontractreview'), // 销售合同
    name: 'projpcontractreview'
  },
  {
    path: '/projpcontractreviewChange',
    component: () => import('../views/projpcontractreviewChange'), // 销售合同
    name: 'projpcontractreviewupdateform'
  },
  {
    path: '/projpcontractreviewcancel',
    component: () => import('../views/projpcontractreviewcancel'), // 取消合同
    name: 'projpcontractreviewcancel'
  },
  {
    path: '/projpriskbond',
    component: () => import('../views/projpriskbond'), // 风险保证金
    name: 'projpriskbond'
  },
  {
    path: '/projpcontractpurchaseform',
    component: () => import('../views/projpcontractpurchaseform'), // 采购合同
    name: 'projpcontractpurchaseform'
  },
  {
    path: '/projpriskbondthaw',
    component: () => import('../views/projpriskbondthaw'), // 风险保证金解冻
    name: 'projpriskbondthaw'
  },
  {
    path: '/projpcontractprotocolform',
    component: () => import('../views/projpcontractprotocolform'), // 合同协议
    name: 'projpcontractprotocolform'
  },
  {
    path: '/projpprojectinfoform',
    component: () => import('../views/projpprojectinfoform'), // 项目立项
    name: 'projpprojectinfoform'
  },
  {
    path: '/bizperformdenoteform',
    component: () => import('../views/bizperformdenoteform'), // 履约保函
    name: 'bizperformdenoteform'
  },
  {
    path: '/projpcontractarchives',
    component: () => import('../views/projpcontractarchives'), // 合同存档
    name: 'projpcontractarchives'
  },
  {
    path: '/projppayreq',
    component: () => import('../views/projppayreq'), // 合同付款
    name: 'projppayreq'
  },
  {
    path: '/bizperformbondform',
    component: () => import('../views/bizperformbondform'), // 履约保证金
    name: 'bizperformbondform'
  },
  {
    path: '/projpbidservicefee',
    component: () => import('../views/projpbidservicefee'), // 中标服务费
    name: 'projpbidservicefee'
  },
  // {
  //   path: '/projpcontractreviewupdateform',
  //   component: () => import('../views/projpcontractreviewupdateform'), // 合同评审变更审批
  //   name: 'projpcontractreviewupdateform'
  // },
  {
    path: '/projpprojectupdateform',
    component: () => import('../views/projpprojectupdateform'), // 项目变更-预算变更
    name: 'projpprojectupdateform'
  },
  {
    path: '/projpprojectendform',
    component: () => import('../views/projpprojectendform'), // 项目结算
    name: 'projpprojectendform'
  }
]

// 导出router，方便在index里引用
export default contractRouter
