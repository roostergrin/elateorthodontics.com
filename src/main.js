// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './base/app'
import router from './router'
import store from './shared/store'

/* eslint-disable */
import { vendors } from './vendors/vendors'
import { fonts } from './vendors/fonts'
/* eslint-enable */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store: store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
