import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Select, Option, Table, TableColumn, Form, FormItem, Input, Tree, Button, Dialog } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './utils/appback'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
// import './mock/index'

Vue.use(VXETable)
Vue.use(Vant)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Tree)
  .use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
