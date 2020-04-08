<template>
  <div class="overview">
    <h1>Overview!</h1>
    <draggable
      :list="list"
      class="list-group"
      ghost-class="ghost"
      @start="dragging = true"
      @end="dragging = false"
    >
      <div
        v-for="element in list"
        :key="element.id"
        class="table-tiles list-group-item"
      >
        <AppContainer :name="element.name" />
      </div>
    </draggable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import draggable from 'vuedraggable';
import AppContainer from './AppContainer.vue';

@Component({
  components: {
    AppContainer,
    draggable,
  },
})
export default class Overview extends Vue {
    list= [
      { name: 1, id: 0 },
      { name: 2, id: 1 },
      { name: 3, id: 2 },
      { name: 4, id: 3 },
      { name: 5, id: 4 },
      { name: 6, id: 5 },
      { name: 7, id: 6 },
      { name: 8, id: 7 },
      { name: 9, id: 8 },
      { name: 10, id: 9 },
    ];

    dragging= false;

    amount = 10;
}
</script>

<style scoped lang="scss">
.overview {
  text-align: center;
}

.table-tiles {
    display: inline-block;
    padding: 20px;
}
</style>
