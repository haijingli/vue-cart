import Vue from 'vue'
// import App from './App.vue'
import App from './RouterApp.vue';
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false;
//修改Vue原型，创建一个新的Vue，专门做事件派发，消息传递
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
