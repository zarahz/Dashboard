<template>
  <div id="app">
    <Header />
    <div class="row center-xs">
      <Overview class="table-structure col-xs-7" />
      <Calendar class="col-xs-5" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import Overview from './components/Overview.vue';
import Calendar from './components/Calendar/Calendar.vue';

@Component({
  components: {
    Overview,
    Calendar,
    Header,
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss">
  .table-structure {
    display: table;
  }
</style>
