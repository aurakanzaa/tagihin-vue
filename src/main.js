// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'

<<<<<<< HEAD
import VueTabs from 'vue-nav-tabs';
import 'vue-nav-tabs/themes/vue-tabs.css';
Vue.use(VueTabs);
=======
>>>>>>> 3808f1a767db841b53d2e04fb5adaff22eec5fe1

Vue.use(VueOnsen);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



