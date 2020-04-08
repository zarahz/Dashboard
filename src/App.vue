<template>
  <div id="app">
    <div class="row end-sm">
      <div>
        <label for="theme"> Dark Mode </label>
        <input
          id="theme"
          v-model="darkMode"
          type="checkbox"
          class="theme-switch"
          @change="toggleDarkMode()"
        >
        <button>Google Login</button>
      </div>
    </div>
    <div class="row">
      <Overview class="table-structure col-xs-8" />
      <Calendar class="col-xs-4" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Overview from './components/Overview.vue';
import Calendar from './components/Calendar.vue';
import Authentication from './components/Authentication.vue';

type Theme = 'light' | 'dark'

const htmlElement = document.documentElement;
const theme: Theme = localStorage.getItem('theme') as Theme ?? 'light';
htmlElement.setAttribute('theme', theme);

@Component({
  components: {
    Overview,
    Calendar,
    Authentication,
  },
})
export default class App extends Vue {
  darkMode = theme === 'dark';

  toggleDarkMode() {
    if (this.darkMode) {
      localStorage.setItem('theme', 'dark');
      htmlElement.setAttribute('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
      htmlElement.setAttribute('theme', 'light');
    }
  }
}
</script>

<style lang="scss">
.table-structure {
  display: table;
}
</style>
