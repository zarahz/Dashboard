<template>
  <div>
    <h1>{{ name }}!</h1>
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Container extends Vue {
  @Prop({ default: 'Example' })
  name!: string;
}
</script>

<style lang="sass">

</style>
