<template>
  <div class="row">
    <div class="col-xs-8">
      <h1>{{ (user) ? 'Welcome Back '+user.firstName + '!' : 'Dashboard' }}</h1>
    </div>
    <div class="col-xs-4">
      <div class="row">
        <div class="col-xs-6">
          <label for="theme">Dark Mode</label>
          <input
            id="theme"
            v-model="darkMode"
            type="checkbox"
            class="theme-switch"
            @change="toggleDarkMode()"
          >
        </div>
        <div class="col-xs-6">
          <button
            v-if="user"
            @click="logout()"
          >
            Logout
          </button>
          <button
            v-else
            @click="login()"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

type Theme = 'light' | 'dark';

const htmlElement = document.documentElement;
const theme: Theme = (localStorage.getItem('theme') as Theme) ?? 'light';
htmlElement.setAttribute('theme', theme);

@Component
export default class Header extends Vue {
    darkMode = theme === 'dark';

    get user() {
      return this.$store.state.user;
    }

    toggleDarkMode() {
      if (this.darkMode) {
        localStorage.setItem('theme', 'dark');
        htmlElement.setAttribute('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
        htmlElement.setAttribute('theme', 'light');
      }
    }

    login() {
      window.location.href = 'http://api.dashboard.zara/google/login';
    }

    logout() {
      this.$store.commit('logout');
    }
}
</script>

<style lang="scss" scoped>

</style>
