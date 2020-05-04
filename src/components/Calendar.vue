<template>
  <div>
    <h1>A Calendar!</h1>
    <div v-if="user">
      <span>
        Cal Events can be fetched!
      </span>
    </div>
    <div v-else>
      <span>
        log in to see your calendar events
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Calendar extends Vue {
  get user() {
    return this.$store.state.user;
  }
}
</script>

<style lang="scss" scoped>

</style>
