import Vue from 'vue';
import Vuex from 'vuex';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import App from './App.vue';
import './assets/css/theme-colors.scss';
import './assets/css/styles.scss';
import store from './store';

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
