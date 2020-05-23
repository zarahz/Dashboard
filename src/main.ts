import Vue from 'vue';
import Vuex from 'vuex';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import './assets/css/theme-colors.scss';
import './assets/css/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store';

import App from './App.vue';

library.add(faFilter);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
