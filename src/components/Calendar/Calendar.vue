<template>
  <div>
    <div
      v-if="user"
      class="row"
    >
      <h1>
        <font-awesome-icon
          icon="filter"
          @click="toggleCalendarOptions"
        />
      </h1>
      <div class="col-md">
        <EventList :events="upcomingEvents" />
      </div>

      <div
        v-show="showCalendars"
        class="col-md-5"
      >
        <CalendarOptions
          :loading="loading"
          @calendarChecked="fetchCalendarEvents"
          @calendarUnchecked="removeCalendarEvents"
        />
      </div>
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
import axios from 'axios';
import EventList from './EventList.vue';
import CalendarOptions from './CalendarOptions.vue';

import { Calendar, CalEvent } from '../../interfaces/calendar';


@Component({
  components: {
    EventList,
    CalendarOptions,
  },
})
export default class CalendarComponent extends Vue {
  upcomingEvents: CalEvent[] = [];

  calendars: Calendar[] = [];

  showCalendars = false;

  loading = false;

  get user() {
    return this.$store.state.user;
  }

  mounted() {
    if (this.user) {
      this.fetchPrimaryCalEvents();
    }
  }

  toggleCalendarOptions() {
    this.showCalendars = !this.showCalendars;
  }

  async fetchPrimaryCalEvents() {
    this.loading = true;
    const { data: events } = await axios.get<CalEvent[]>('http://api.dashboard.zara/google/primary-calendar-events', {
      withCredentials: true,
    });
    this.upcomingEvents = events;
    this.loading = false;
  }

  async fetchCalendarEvents(id: string) {
    this.loading = true;
    const { data: events } = await axios.get<CalEvent[]>(`http://api.dashboard.zara/google/calendar-events/${id}`, {
      withCredentials: true,
    });
    this.upcomingEvents.push(...events);
    this.loading = false;
  }

  removeCalendarEvents(id: string) {
    console.log(`removing ${id}`);
    this.upcomingEvents = this.upcomingEvents.filter((event) => event.organizer.email !== id);
  }
}
</script>

<style lang="scss" scoped>

</style>
