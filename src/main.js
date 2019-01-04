// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import './theme/default.styl'
import VeeValidate from 'vee-validate'
import Truncate from 'lodash.truncate'
import SendBird from 'sendbird'

Vue.config.productionTip = false
// Helpers
// Global filters
Vue.filter('truncate', Truncate)
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })
Vue.use(Vuetify, {
  // theme: {
  //   primary: colors.indigo.base, // #E53935
  //   secondary: colors.indigo.lighten4, // #FFCDD2
  //   accent: colors.indigo.base // #3F51B5
  // },
  options: {
    themeVariations: ['primary', 'secondary', 'accent'],
    extra: {
      mainToolbar: {
        color: 'primary'
      },
      sideToolbar: {
      },
      sideNav: 'primary',
      mainNav: 'primary lighten-1',
      bodyBg: ''
    }
  }
})
// Bootstrap application components
// eslint-disable-next-line no-unused-vars
const sb = new SendBird({
  appId: '6B5CFCAD-FAA1-4A01-8F9B-5D7E2BE77A12'
})
sb.connect('test', 'd10e18f01438bbd0fd97851aebb8dc2c7ceea54f', function (user, error) {
  console.log('user', user)
  console.log('error', error)
})
window.sb = sb

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
