import Vue from 'vue'
import App from './App.vue'
import './styles/app.scss';

import env from './env'
import router from './router'
import store from './store'

Vue.config.productionTip = false
window.env = env;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
