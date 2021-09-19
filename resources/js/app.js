require('./bootstrap');

import Vue from 'vue';
import router from './router';
import App from './App.vue';

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');