import Vue from 'vue'
import App from './App.vue'

// 样式重置
import './styles/reset.less'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
