<template>
  <div class="left-align">
    <h1>Filter Calendar</h1>
    <div
      v-for="(option, index) in calendars"
      :key="option.id+'input'"
      class="row"
    >
      <input
        :id="option.id"
        :disabled="loading"
        type="checkbox"
        @change="toggleChecked(option.id, index)"
      >
      <label :for="option.id">{{ option.summary }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import axios from 'axios';

import { Calendar } from '../../interfaces/calendar';


@Component
export default class CalendarOptions extends Vue {
  @Prop({ required: true })
    public loading!: boolean

    calendars: Calendar[] = [];

    showCalendars = false;

    checkedCalendarIds: string[] = [];


    mounted() {
      this.fetchCalendars();
    }

    async fetchCalendars() {
      const { data: calendars } = await axios.get<Calendar[]>('http://api.dashboard.zara/google/calendars', {
        withCredentials: true,
      });
      this.calendars = calendars;// .map((calendar) => ({ ...calendar, checked: false }));
    }

    toggleChecked(id: string, index: number) {
      this.calendars[index].checked = !this.calendars[index].checked;
      if (this.calendars[index].checked) {
        this.checkedCalendarIds.push(id);
        this.$emit('calendarChecked', id);
      } else {
        this.checkedCalendarIds = this.checkedCalendarIds.filter((checkedId) => checkedId !== id);
        this.$emit('calendarUnchecked', id);
      }
    }
}
</script>

<style lang="scss" scoped>
  .left-align {
    text-align: initial;
  }

    .loader {
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #3498db; /* Blue */
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
</style>
