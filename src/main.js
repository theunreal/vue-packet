// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import vueSails from 'vue-sails'
import sailsIOClient from 'sails.io.js'
import socketIOClient from 'socket.io-client'

Vue.config.productionTip = false

const io = sailsIOClient(socketIOClient)
// Additional Sails.io.js configuration
io.sails.url = 'http://localhost:1337'
io.sails.environment = process.env.NODE_ENV || 'development'

Vue.use(VueResource)
Vue.use(vueSails, io)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
