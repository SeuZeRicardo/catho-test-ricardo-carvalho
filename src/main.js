import Vue from 'vue'
import App from './App.vue'

import Icon from 'vue-awesome/icons/'

Vue.config.productionTip = false

Vue.component('icon', Icon)

new Vue({
  render: h => h(App)
}).$mount('#app')
