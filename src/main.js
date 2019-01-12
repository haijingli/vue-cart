import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
//修改Vue原型，创建一个新的Vue，专门做事件派发，消息传递
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
