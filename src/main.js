import Vue from 'vue'
import App from './App.vue'
import '/src/css/style.css'
import '/src/css/reset.css'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')