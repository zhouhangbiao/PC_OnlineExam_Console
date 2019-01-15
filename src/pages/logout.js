import Vue from 'vue';
import LoginOut from '../components/Logout.vue';

/**
 * 退出登录
 */
new Vue({
  el: '#vue_app',
  render: h => h(LoginOut)
});
