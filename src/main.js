import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import { Select, Option, Table, TableColumn, Form, FormItem, Input, Tree, Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './utils/appback'
// import './mock/index'

Vue.directive('anchor', {
  inserted: function (el) {
    el.onclick = function () {
      document.documentElement.scrollTop = document.querySelector('.history-detail').offsetTop
    }
  }
})
Vue.use(Vant)
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
