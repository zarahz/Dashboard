import Vue from 'vue';
import Vuex from 'vuex';
import Cookie from 'js-cookie';

Vue.use(Vuex);

const cookie = Cookie.get('session');
let user = null;
if (cookie) {
  user = JSON.parse(atob(cookie)).user;
}

const store = new Vuex.Store({
  state: {
    user,
  },
  mutations: {
    logout(state) {
      state.user = null;
      Cookie.remove('session', { domain: '.dashboard.zara' });
      Cookie.remove('session.sig', { domain: '.dashboard.zara' });
    },
  },
});

export default store;
