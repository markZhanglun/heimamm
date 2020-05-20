import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// 导入less
import '@/styles/base.less'
// 导入router
import router from './router'

// 引入element Ui
import '@/plugins/element.js'
import './util/request.js'



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
