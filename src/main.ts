import Vue from 'vue';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import App from './App.vue';
import './assets/css/theme-colors.scss';
import './assets/css/styles.scss';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
